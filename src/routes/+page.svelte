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

<!-- Experience (Hero + Features with bounded sticky phone) -->
<section id="experience" class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 md:pt-24">
  <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start lg:items-stretch">
    <div>
      <!-- Hero copy -->
      <div id="hero" use:inView={{ onEnter: () => setActive('hero') }}>
        <img src="/assets/beanheads_wordmark.png" alt="Beanheads" class="h-12 md:h-14 w-auto mb-6" />
        <h1 class="text-4xl md:text-6xl font-bold text-night">Elevate every cup.</h1>
        <p class="mt-6 text-night/85 text-base md:text-lg max-w-2xl font-normal">
          Beanheads is the ultimate app for coffee enthusiasts who want to perfect their craft, discover amazing spots, and connect with fellow coffee lovers worldwide. Whether you're brewing at home or exploring cafes, we give you the tools and knowledge to elevate every cup.
        </p>
        <div class="mt-8 flex flex-wrap gap-4">
          <a href="#download" class="inline-flex items-center rounded-md bg-blackbean text-ivory px-6 py-3 font-semibold hover:opacity-90 transition-opacity">
            Sign up for the Beta
          </a>
        </div>
      </div>

      <!-- Features -->
      <div id="about" class="space-y-20 mt-20 md:mt-28">
        {#each features as feat}
          <div
            id={feat.id}
            use:inView={{ threshold: 0.65, onEnter: () => setActive(feat.phoneKey) }}
            class="scroll-mt-28 rounded-2xl border border-blackbean/10 bg-white p-6 md:p-8 shadow-sm"
          >
            <div class="flex items-start gap-6">
              <div class="h-14 w-14 rounded-xl bg-blackbean flex items-center justify-center shrink-0">
                <ion-icon name={feat.icon} class="text-khaki text-3xl"></ion-icon>
              </div>
              <div>
                <h2 class="text-3xl md:text-4xl font-semibold text-night">{feat.title}</h2>
                <p class="mt-4 text-night/85 max-w-prose text-lg">{feat.desc}</p>
              </div>
            </div>
          </div>
        {/each}
      </div>
    </div>

    <!-- Bounded sticky phone -->
    <div class="hidden lg:block lg:pl-8 self-stretch">
      <div class="sticky top-24">
        <PhoneMock active={activePhone} />
      </div>
    </div>
  </div>
</section>

<!-- Download CTA -->
<section id="download" class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-24 md:mt-32">
  <div class="rounded-2xl border border-blackbean/10 bg-white p-8 md:p-12 text-center">
    <h3 class="text-3xl md:text-4xl font-bold text-night">Start your coffee journey today.</h3>
    <p class="mt-4 text-night/85 font-normal max-w-2xl mx-auto">Join the Beanheads beta to get early access to features and help shape the future of coffee.</p>
    <div class="mt-8 flex items-center justify-center gap-4">
      <a href="#" class="inline-flex items-center rounded-md bg-blackbean text-ivory px-6 py-3 font-semibold hover:opacity-90 transition-opacity">
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
</style>
