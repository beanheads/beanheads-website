<script lang="ts">
  import { base } from '$app/paths';
  const links = [
    { href: `${base}/#about`, label: 'About' },
    { href: `${base}/changelog`, label: 'Changelog' },
  ]
</script>

<nav
  class="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/70
  bg-white/90 border-b border-blackbean/10">
  <div
    class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center
    justify-between">
    <a href={`${base}/`} class="flex items-center gap-3">
      <img
        src={`${base}/assets/beanheads_logo.png`}
        alt="Beanheads"
        class="h-9 w-9 rounded-md" />
    </a>
    <div class="hidden md:flex items-center gap-8">
      {#each links as link}
        <a
          class="text-night/80 hover:text-night transition-colors"
          href={link.href}>
          {link.label}
        </a>
      {/each}
      <a
        href={`${base}/#download`}
        class="inline-flex items-center rounded-md bg-blackbean text-ivory px-4
        py-2 font-semibold hover:opacity-90 transition-opacity">
        Get the App
      </a>
    </div>
  </div>
</nav>
