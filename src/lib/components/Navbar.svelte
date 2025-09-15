<script lang="ts">
  const links = [
    { href: '#about', label: 'About' },
    { href: '#download', label: 'Download' }
  ];
</script>

<nav class="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/70 bg-white/90 border-b border-blackbean/10">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
    <a href="#" class="flex items-center gap-2">
      <div class="h-9 w-9 rounded-md bg-blackbean flex items-center justify-center">
        <ion-icon name="cafe-outline" class="text-khaki text-xl"></ion-icon>
      </div>
      <span class="text-night font-bold text-lg">Beanheads</span>
    </a>
    <div class="hidden md:flex items-center gap-8">
      {#each links as link}
        <a class="text-night/80 hover:text-night transition-colors" href={link.href}>{link.label}</a>
      {/each}
      <a href="#download" class="inline-flex items-center rounded-md bg-blackbean text-khaki px-4 py-2 font-semibold hover:opacity-90 transition-opacity">Get the App</a>
    </div>
  </div>
</nav>
