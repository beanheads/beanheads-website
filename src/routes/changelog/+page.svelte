<script lang="ts">
  import Navbar from '$lib/components/Navbar.svelte'
  import Footer from '$lib/components/Footer.svelte'
  import { markdownToHtml } from '$lib/utils/markdown'

  // Import the repository changelog as raw text via Vite
  // The path ascends from this file (src/routes/changelog/+page.svelte) to project root
  // where CHANGELOG.md resides.
  // @ts-ignore - Vite's ?raw loader returns string
  import raw from '../../../CHANGELOG.md?raw'

  const html = markdownToHtml((raw as unknown) as string)
</script>

<style>
  :global(.prose h1) {
    font-size: 1.875rem;
    line-height: 2.25rem;
    margin-top: 1.25rem;
    margin-bottom: 0.75rem;
    color: #080f0f;
  }
  :global(.prose h2) {
    font-size: 1.5rem;
    line-height: 2rem;
    margin-top: 1.25rem;
    margin-bottom: 0.5rem;
    color: #080f0f;
  }
  :global(.prose h3) {
    font-size: 1.25rem;
    line-height: 1.75rem;
    margin-top: 1rem;
    margin-bottom: 0.5rem;
    color: #080f0f;
  }
  :global(.prose p) {
    margin: 0.5rem 0;
  }
  :global(.prose ul),
  :global(.prose ol) {
    margin: 0.5rem 1.25rem;
    padding-left: 1rem;
  }
  /* Ensure list markers are visible */
  :global(.prose ul) {
    list-style: disc;
  }
  :global(.prose ol) {
    list-style: decimal;
  }
  :global(.prose li.task) {
    list-style: none;
  }
  :global(.prose code) {
    background: #fffff0;
    color: #080f0f;
    padding: 0.1rem 0.3rem;
    border-radius: 0.25rem;
    border: 1px solid rgba(61, 12, 2, 0.1);
    font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,
      'Liberation Mono', 'Courier New', monospace;
    font-size: 0.95em;
  }
  :global(.prose pre) {
    background: #080f0f;
    color: #fffff0;
    padding: 0.75rem;
    border-radius: 0.5rem;
    overflow: auto;
  }
  :global(.prose a) {
    color: #6f4e37;
    text-decoration: underline;
  }
  :global(.prose a:hover) {
    color: #3d0c02;
  }
  :global(.prose hr) {
    border: none;
    border-top: 1px solid rgba(61, 12, 2, 0.1);
    margin: 1rem 0;
  }
</style>

<Navbar />

<section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 md:pt-24">
  <div
    class="rounded-2xl border border-blackbean/10 bg-white p-6 md:p-8 shadow-sm">
    <h1 class="text-3xl md:text-4xl font-bold text-khaki mb-6">Changelog</h1>
    <div class="prose max-w-none text-night/90" data-testid="changelog">
      {@html html}
    </div>
  </div>
</section>

<Footer />
