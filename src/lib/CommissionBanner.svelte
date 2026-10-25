<script lang="ts">
    import { discordUrl } from '../data/products.js';
</script>

<section id="commissions" class="py-16 border-t border-white/[0.08] bg-[#0d0f14]/80">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="bg-[#111318] border border-white/[0.08] rounded-2xl p-8 sm:p-12 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
      <div class="max-w-2xl">
        <h2 class="text-2xl sm:text-3xl font-bold tracking-tight text-white mb-3">
          Can't find what you need in our catalog?
        </h2>
        <p class="text-sm text-zinc-400 leading-relaxed">
          We take on a limited number of bespoke software commissions each month to ensure quality and attention to detail. If you have a unique project in mind, reach out to us on Discord to discuss your requirements and get a quote.
          Fast turnaround times and quality assurance, all tailored to your needs for a low price starting at $20.
        </p>
      </div>

      <div class="shrink-0 flex flex-col sm:flex-row items-center gap-3 w-full lg:w-auto">
        <a
          href={discordUrl}
          target="_blank"
          rel="noreferrer"
          class="w-full sm:w-auto px-6 py-3 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-lg transition-all shadow-[0_0_20px_rgba(37,99,235,0.3)] text-center flex items-center justify-center gap-2 whitespace-nowrap"
        >
          <span>Open Commission Ticket</span>
          <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </a>
      </div>
    </div>
  </div>
</section>
