<script lang="ts">
  export let active: string;

  function svgPlaceholder(label: string, bg = '#080F0F', fg = '#C3B091') {
    const w = 1170; // 9 * 130
    const h = 2535; // 19.5 * 130
    const svg = `<?xml version='1.0' encoding='UTF-8'?>
<svg xmlns='http://www.w3.org/2000/svg' width='${w}' height='${h}' viewBox='0 0 ${w} ${h}'>
  <defs>
    <linearGradient id='g' x1='0' y1='0' x2='1' y2='1'>
      <stop offset='0%' stop-color='${bg}' stop-opacity='1'/>
      <stop offset='100%' stop-color='#004225' stop-opacity='0.6'/>
    </linearGradient>
  </defs>
  <rect width='100%' height='100%' fill='url(#g)'/>
  <g fill='${fg}' text-anchor='middle'>
    <text x='50%' y='48%' font-family='Inter, system-ui, sans-serif' font-size='80' opacity='0.9'>Beanheads</text>
    <text x='50%' y='55%' font-family='Inter, system-ui, sans-serif' font-size='56' opacity='0.9'>${label}</text>
  </g>
</svg>`;
    return `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;
  }

  const screens: Record<string, { src: string; alt: string }> = {
    hero: { src: svgPlaceholder('Home'), alt: 'Beanheads Home' },
    home: { src: svgPlaceholder('Home Reviews'), alt: 'Home Reviews screen' },
    cafe: { src: svgPlaceholder('Cafe Reviews'), alt: 'Cafe Reviews screen' },
    community: { src: svgPlaceholder('Community'), alt: 'Community screen' },
    explore: { src: svgPlaceholder('Explore & Learn'), alt: 'Explore & Learn screen' },
    pantry: { src: svgPlaceholder('Your Pantry'), alt: 'Pantry screen' }
  };
</script>

<div class="w-full max-w-[320px] mx-auto">
  <!-- iPhone-like frame (iPhone 17 style) -->
  <div class="relative rounded-[42px] border border-khaki/40 bg-night shadow-[0_20px_60px_rgba(0,0,0,0.6)] p-2">
    <!-- Dynamic Island -->
    <div class="absolute left-1/2 -translate-x-1/2 top-3 h-6 w-32 rounded-full bg-blackbean/90 border border-khaki/10"></div>

    <!-- Screen -->
    <div class="rounded-[36px] overflow-hidden bg-blackbean aspect-[9/19.5]">
      <img class="w-full h-full object-cover" src={screens[active]?.src ?? screens.hero.src} alt={screens[active]?.alt ?? 'Beanheads screen'} />
    </div>

    <!-- Side buttons (decorative) -->
    <div class="absolute left-0 top-24 w-0.5 h-16 bg-khaki/30 rounded-r"></div>
    <div class="absolute right-0 top-20 w-0.5 h-10 bg-khaki/30 rounded-l"></div>
    <div class="absolute right-0 top-36 w-0.5 h-16 bg-khaki/30 rounded-l"></div>
  </div>
</div>
