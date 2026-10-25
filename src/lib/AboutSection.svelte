<script>
  import { teamMembers as defaultMembers, studioPrinciples as defaultPrinciples } from '../data/products.js';

  export let teamMembers = defaultMembers;
  export let principles = defaultPrinciples;
</script>

<section id="about" class="py-16 md:py-24 border-t border-white/[0.08] bg-[#0d0f14]/50">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="max-w-3xl mb-16">
      <h2 class="text-2xl sm:text-3xl font-bold tracking-tight text-white mb-4">Our Company</h2>
      <p class="text-base text-zinc-400 leading-relaxed mb-6">
        Lapis Development was built on three core engineering guarantees: zero-bloat code, absolute transparency, and long-term stability. We publish our benchmarks, build without unnecessary dependencies, and support every tool we ship - so your hosting company or game server runs smoothly and stays up when it matters most.
      </p>

      <div class="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {#each principles as principle}
          <div class="p-4 rounded-xl bg-[#111318] border border-white/[0.08]">
            <h3 class="text-sm font-bold text-white mb-1">{principle.title}</h3>
            <p class="text-xs text-zinc-400">{principle.description}</p>
          </div>
        {/each}
      </div>
    </div>

    <div class="pt-8 border-t border-white/[0.08]">
      <h3 class="text-xl font-bold text-white mb-8">Meet The Development Team</h3>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        {#each teamMembers as member}
          <div class="bg-[#111318] border border-white/[0.08] rounded-xl p-6 flex flex-col justify-between">
            <div>
              <h4 class="text-base font-bold text-white mb-0.5">{member.name}</h4>
              <p class="text-xs text-blue-400 font-medium mb-3">{member.role}</p>
              <p class="text-xs text-zinc-400 leading-relaxed mb-4">{member.specialty}</p>
            </div>
            <div class="pt-4 border-t border-white/[0.06] flex items-center justify-between text-xs text-zinc-500 font-mono">
                <span><a href={member.link}>{member.handle}</a></span>
              <span class="text-zinc-600">{member.shortRole}</span>
            </div>
          </div>
        {/each}
      </div>
    </div>
  </div>
</section>
