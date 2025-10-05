// Minimal Markdown -> HTML renderer for headings, lists, checkboxes, links, emphasis, and code.
// Designed to avoid external deps. Not a full spec implementation.

function escapeHtml(input: string): string {
  return input
    .replaceAll(/&/g, '&amp;')
    .replaceAll(/</g, '&lt;')
    .replaceAll(/>/g, '&gt;')
    .replaceAll(/"/g, '&quot;')
    .replaceAll(/'/g, '&#39;');
}

function renderInline(text: string): string {
  // Escape first to neutralize HTML, then reintroduce allowed tags via replacements.
  let out = escapeHtml(text);

  // Code spans
  out = out.replace(/`([^`]+)`/g, (_, code: string) => `<code>${code}</code>`);

  // Bold **text**
  out = out.replace(/\*\*([^*]+)\*\*/g, (_, bold: string) => `<strong>${bold}</strong>`);

  // Italic _text_
  out = out.replace(/_([^_]+)_/g, (_, em: string) => `<em>${em}</em>`);

  // Links [text](url)
  out = out.replace(/\[([^\]]+)\]\(([^)]+)\)/g, (_m, txt: string, href: string) => {
    const safeHref = href.startsWith('http://') || href.startsWith('https://') || href.startsWith('/') ? href : '#';
    return `<a href="${safeHref}" target="_blank" rel="noopener">${escapeHtml(txt)}</a>`;
  });

  return out;
}

export function markdownToHtml(md: string): string {
  // Remove HTML comments entirely (including multi-line)
  const withoutComments = md.replace(/<!--([\s\S]*?)-->/g, '');
  const lines = withoutComments.replace(/\r\n?/g, '\n').split('\n');
  const html: string[] = [];

  let inUl = false;
  let inOl = false;
  let inCode = false;
  let codeLang = '';

  const closeLists = () => {
    if (inUl) html.push('</ul>');
    if (inOl) html.push('</ol>');
    inUl = inOl = false;
  };

  for (let raw of lines) {
    const line = raw.trimEnd();

    // Fenced code blocks
    const fence = line.match(/^```(.*)$/);
    if (fence) {
      if (inCode) {
        html.push('</code></pre>');
        inCode = false;
        codeLang = '';
      } else {
        closeLists();
        codeLang = fence[1]?.trim() || '';
        const cls = codeLang ? ` class="language-${escapeHtml(codeLang)}"` : '';
        html.push(`<pre><code${cls}>`);
        inCode = true;
      }
      continue;
    }

    if (inCode) {
      html.push(escapeHtml(line));
      continue;
    }

    // Blank line closes lists implicitly
    if (/^\s*$/.test(line)) {
      closeLists();
      html.push('');
      continue;
    }

    // Headings # .. ######
    const h = line.match(/^(#{1,6})\s+(.+)$/);
    if (h) {
      closeLists();
      const level = h[1].length;
      html.push(`<h${level}>${renderInline(h[2].trim())}</h${level}>`);
      continue;
    }

    // Horizontal rule
    if (/^-{3,}$/.test(line)) {
      closeLists();
      html.push('<hr />');
      continue;
    }

    // Ordered list: 1. text
    const ol = line.match(/^(\d+)\.\s+(.*)$/);
    if (ol) {
      if (!inOl) {
        closeLists();
        inOl = true;
        html.push('<ol>');
      }
      html.push(`<li>${renderInline(ol[2])}</li>`);
      continue;
    }

    // Unordered list / checklist: - [ ] text or - text
    const ul = line.match(/^(?:[-*+])\s+(.*)$/);
    if (ul) {
      if (!inUl) {
        closeLists();
        inUl = true;
        html.push('<ul>');
      }
      const item = ul[1];
      const task = item.match(/^\[( |x|X)\]\s+(.*)$/);
      if (task) {
        const checked = task[1].toLowerCase() === 'x' ? ' checked' : '';
        html.push(`<li class="task"><input type="checkbox" disabled${checked} /> ${renderInline(task[2])}</li>`);
      } else {
        html.push(`<li>${renderInline(item)}</li>`);
      }
      continue;
    }

    // Paragraph
    closeLists();
    html.push(`<p>${renderInline(line)}</p>`);
  }

  // Close any open blocks
  if (inCode) html.push('</code></pre>');
  closeLists();

  return html.join('\n');
}
