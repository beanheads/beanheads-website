<script lang="ts">
  export let active: string;

  const titleMap: Record<string, string> = {
    hero: 'Home',
    home: 'Home Reviews',
    cafe: 'Cafe Reviews',
    community: 'Community',
    explore: 'Explore & Learn',
    pantry: 'Your Pantry'
  };
</script>

<div class="w-full max-w-[320px] mx-auto">
  <div class="relative rounded-[36px] border border-khaki/50 bg-night overflow-hidden shadow-[0_0_0_8px_rgba(195,176,145,0.12)]">
    <!-- Notch -->
    <div class="absolute left-1/2 -translate-x-1/2 top-2 h-6 w-28 rounded-full bg-blackbean/60"></div>

    <!-- Header -->
    <div class="pt-8 px-4 pb-3 border-b border-khaki/20 flex items-center justify-between">
      <div class="text-khaki/80 text-xs">9:41</div>
      <div class="flex gap-2 text-khaki/70 text-lg">
        <ion-icon name="wifi-outline"></ion-icon>
        <ion-icon name="battery-half-outline"></ion-icon>
      </div>
    </div>

    <!-- App Bar -->
    <div class="px-4 py-3 border-b border-khaki/20 flex items-center gap-2">
      <div class="h-8 w-8 rounded-md bg-racinggreen/80 flex items-center justify-center">
        <ion-icon name="cafe-outline" class="text-khaki"></ion-icon>
      </div>
      <div class="text-khaki font-semibold">{titleMap[active] ?? 'Beanheads'}</div>
    </div>

    <!-- Screen Content -->
    <div class="p-4 space-y-3 min-h-[520px]">
      {#if active === 'hero'}
        <div class="placeholder-tile h-40">Home feed placeholder</div>
        <div class="grid grid-cols-2 gap-3">
          <div class="placeholder-tile h-24">Brew card</div>
          <div class="placeholder-tile h-24">Tasting note</div>
          <div class="placeholder-tile h-24 col-span-2">Recent reviews</div>
        </div>
      {:else if active === 'home'}
        <div class="placeholder-tile h-24 flex gap-2 p-3">
          <ion-icon name="document-text-outline" class="text-khaki text-2xl"></ion-icon>
          <div>Record origin, roast, brew, notes</div>
        </div>
        <div class="placeholder-tile h-40">Review form mock</div>
        <div class="placeholder-tile h-28">Coffee bag + notes</div>
      {:else if active === 'cafe'}
        <div class="placeholder-tile h-40">Cafe visit log</div>
        <div class="grid grid-cols-3 gap-3">
          <div class="placeholder-tile h-20">Latte art</div>
          <div class="placeholder-tile h-20">Espresso</div>
          <div class="placeholder-tile h-20">Atmosphere</div>
        </div>
      {:else if active === 'community'}
        <div class="placeholder-tile h-16 flex items-center gap-2 p-3">
          <ion-icon name="people-outline" class="text-khaki text-2xl"></ion-icon>
          <div>Global coffee chat</div>
        </div>
        <div class="space-y-3">
          <div class="placeholder-tile h-24">Thread: Pour-over tips</div>
          <div class="placeholder-tile h-24">Thread: Gear talk</div>
          <div class="placeholder-tile h-24">Thread: Roasting</div>
        </div>
      {:else if active === 'explore'}
        <div class="placeholder-tile h-28">Brewing methods</div>
        <div class="placeholder-tile h-28">Recipes</div>
        <div class="placeholder-tile h-28">Trends</div>
      {:else if active === 'pantry'}
        <div class="grid grid-cols-2 gap-3">
          <div class="placeholder-tile h-24">Beans</div>
          <div class="placeholder-tile h-24">Grinder</div>
          <div class="placeholder-tile h-24">Brewer</div>
          <div class="placeholder-tile h-24">Scale</div>
        </div>
        <div class="placeholder-tile h-24">Pantry list</div>
      {/if}
    </div>
  </div>
</div>

