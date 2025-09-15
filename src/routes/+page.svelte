<script lang="ts">
  import Navbar from '$lib/components/Navbar.svelte';
  import Footer from '$lib/components/Footer.svelte';
  import PhoneMock from '$lib/components/PhoneMock.svelte';
  import { inView } from '$lib/actions/inView';

  let activePhone = 'hero';

  const features = [
    {
      id: 'home',
      title: 'Home Reviews',
      desc:
        'Capture origin, roast, brew settings, and tasting notes to build your palate.',
      icon: 'book-outline',
      phoneKey: 'home'
    },
    {
      id: 'cafe',
      title: 'Cafe Reviews',
      desc: 'Log your cafe visits, foam art, and atmosphere to track your favorites.',
      icon: 'cafe-outline',
      phoneKey: 'cafe'
    },
    {
      id: 'community',
      title: 'Community',
      desc: 'Join a global network of enthusiasts to share tips and discoveries.',
      icon: 'people-outline',
      phoneKey: 'community'
    },
    {
      id: 'explore',
      title: 'Explore & Learn',
      desc: 'Dive into brewing methods, recipes, and trends to level up.',
      icon: 'bookmarks-outline',
      phoneKey: 'explore'
    },
    {
      id: 'pantry',
      title: 'Your Pantry',
      desc: 'Organize beans, gear, grinders, and brewers in one place.',
      icon: 'cube-outline',
      phoneKey: 'pantry'
    }
  ] as const;

  function setActive(key: string) {
    activePhone = key;
  }
</script>

<Navbar />

<!-- Hero -->
<section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 md:pt-24" id="hero">
  <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
    <div use:inView={{ onEnter: () => setActive('hero') }}>
      <h1 class="text-4xl md:text-6xl font-bold text-khaki">Elevate every cup.</h1>
      <p class="mt-6 text-khaki/85 text-base md:text-lg max-w-2xl font-normal">
        Beanheads is the ultimate app for coffee enthusiasts who want to perfect their craft, discover amazing spots, and connect with fellow coffee lovers worldwide. Whether you're brewing at home or exploring cafes, we give you the tools and knowledge to elevate every cup.
      </p>
      <div class="mt-8 flex flex-wrap gap-4">
        <a href="#download" class="inline-flex items-center rounded-md bg-racinggreen text-khaki px-6 py-3 font-semibold hover:opacity-90 transition-opacity">
          Sign up for the Beta
        </a>
      </div>
    </div>
    <div class="hidden lg:block">
      <div class="fixed-phone">
        <PhoneMock active={activePhone} />
      </div>
    </div>
  </div>
</section>

<!-- About / Features -->
<section id="about" class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-20 md:mt-28">
  <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
    <div class="space-y-16">
      {#each features as feat}
        <div
          id={feat.id}
          use:inView={{ onEnter: () => setActive(feat.phoneKey) }}
          class="scroll-mt-28"
        >
          <div class="flex items-start gap-4">
            <div class="h-12 w-12 rounded-lg bg-racinggreen/90 flex items-center justify-center shrink-0">
              <ion-icon name={feat.icon} class="text-khaki text-2xl"></ion-icon>
            </div>
            <div>
              <h2 class="text-2xl md:text-3xl font-semibold text-khaki">{feat.title}</h2>
              <p class="mt-3 text-khaki/85 max-w-prose font-normal">{feat.desc}</p>

              <!-- Placeholder imagery block -->
              <div class="mt-6 placeholder-tile h-48 md:h-56">
                Placeholder image for {feat.title}
              </div>
            </div>
          </div>
        </div>
      {/each}
    </div>

    <div class="hidden lg:block"></div>
  </div>
</section>

<!-- Download CTA -->
<section id="download" class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-24 md:mt-32">
  <div class="rounded-2xl border border-khaki/15 bg-blackbean/30 p-8 md:p-12 text-center">
    <h3 class="text-3xl md:text-4xl font-bold text-khaki">Start your coffee journey today.</h3>
    <p class="mt-4 text-khaki/85 font-normal max-w-2xl mx-auto">Join the Beanheads beta to get early access to features and help shape the future of coffee.</p>
    <div class="mt-8 flex items-center justify-center gap-4">
      <a href="#" class="inline-flex items-center rounded-md bg-racinggreen text-khaki px-6 py-3 font-semibold hover:opacity-90 transition-opacity">
        Sign up for the Beta
      </a>
    </div>
  </div>
  </section>

<Footer />

<style>
  :global(.scroll-mt-28) {
    scroll-margin-top: 7rem;
  }
  :global(.fixed-phone) {
    position: fixed;
    top: 6rem; /* matches top-24 */
    right: max(1rem, calc((100vw - 1280px) / 2 + 2rem)); /* align with container right + padding */
    z-index: 40;
  }
</style>
