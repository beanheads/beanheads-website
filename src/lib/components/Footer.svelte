<script lang="ts">
  import { base } from '$app/paths'
</script>

<footer class="mt-24 border-t border-blackbean/10 bg-white">
  <div
    class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 grid grid-cols-1
    md:grid-cols-4 gap-8">
    <div>
      <div class="mb-4">
        <img
          src={`${base}/assets/beanheads_wordmark.png`}
          alt="Beanheads"
          class="h-8 w-auto" />
      </div>
      <p class="text-night/70 text-sm">Elevate every cup.</p>
    </div>
    <div>
      <h3 class="text-night font-semibold mb-3">Legal</h3>
      <ul class="space-y-2 text-night/80">
        <li>
          <a href={`${base}/assets/Beanheads_Privacy_Policy.pdf`} class="hover:text-night">Privacy Policy</a>
        </li>
        <li>
          <a href={`${base}/assets/Beanheads_Terms_of_Service.pdf`} class="hover:text-night">Terms &amp; Conditions</a>
        </li>
      </ul>
    </div>
    <div>
      <h3 class="text-night font-semibold mb-3">Support</h3>
      <ul class="space-y-2 text-night/80">
        <li>
          <a href="mailto:support@beanheads.social" class="hover:text-night">
            Contact
          </a>
        </li>
      </ul>
    </div>
    <div class="md:text-right flex md:block items-end">
      <p class="text-night/60 text-sm w-full">
        © {new Date().getFullYear()} Beanheads. All rights reserved.
      </p>
    </div>
  </div>
</footer>
