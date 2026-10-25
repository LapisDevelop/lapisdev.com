<script>
  import { testimonials as defaultTestimonials } from '../data/products.js';

  export let testimonials = defaultTestimonials;
</script>

<section id="testimonials" class="py-16 md:py-24 border-t border-white/[0.08]">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="text-center max-w-2xl mx-auto mb-16">
      <h2 class="text-2xl sm:text-3xl font-bold tracking-tight text-white mb-3">Proven Under Peak Concurrency</h2>
      <p class="text-sm text-zinc-400">Read how production gaming servers sustain rock-solid 20.0 TPS with Lapis architecture.</p>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
      {#each testimonials as item}
        <div class="bg-[#111318] border border-white/[0.08] rounded-xl p-6 flex flex-col justify-between hover:border-blue-500/20 transition-colors">
          <div>
            <div class="inline-block px-2.5 py-1 rounded bg-blue-950/40 border border-blue-500/20 text-blue-400 font-mono text-xs font-semibold mb-4">
              {item.metric}
            </div>
            <p class="text-sm text-zinc-300 leading-relaxed italic mb-6">"{item.quote}"</p>
          </div>

          <div class="pt-4 border-t border-white/[0.06]">
            <h4 class="text-sm font-bold text-white">{item.author}</h4>
            <p class="text-xs text-zinc-400 mt-0.5">{item.network}</p>
          </div>
        </div>
      {/each}
    </div>
  </div>
</section>
