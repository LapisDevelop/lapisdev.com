<script>
    import { studioStats, discordUrl } from '../data/products.js';

    export let stats = studioStats;
</script>

<section class="relative pt-20 pb-16 md:pt-28 md:pb-24 overflow-hidden border-b border-white/[0.08]">
    <div class="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(37,99,235,0.15),rgba(255,255,255,0))] pointer-events-none"></div>

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div class="max-w-3xl">
            <div class="inline-flex items-center gap-2 px-3 py-1 rounded-md text-xs font-mono font-medium text-blue-400 bg-blue-950/40 border border-blue-500/20 mb-6">
                <span>Calagopus Extensions &amp; Minecraft Plugins</span>
            </div>

            <h1 class="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.2] mb-6">
                High-Performance Software for 
                <span class="text-blue-400/95 underline decoration-blue-500/25 decoration-1 underline-offset-[10px] transition-colors hover:decoration-blue-400/50">
                    Game Hosts
                </span> 
                & 
                <span class="text-blue-400/95 underline decoration-blue-500/25 decoration-1 underline-offset-[10px] transition-colors hover:decoration-blue-400/50">
                    Server Owners
                </span>
            </h1>

            <p class="text-lg sm:text-xl text-zinc-400 leading-relaxed mb-8 max-w-2xl">
                Backed by 8 years of software engineering and with over 100 projects built across our team, Lapis Development hand-crafts battle-tested Calagopus extensions and Minecraft plugins designed to maximize performance and stability for game hosts and server owners.
            </p>

            <div class="flex flex-wrap items-center gap-4">
                <a
                        href="#software"
                        class="px-6 py-3 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-lg transition-all shadow-[0_0_20px_rgba(37,99,235,0.3)] hover:shadow-[0_0_25px_rgba(37,99,235,0.5)] flex items-center gap-2"
                        >
                        <span>Explore Releases</span>
                        <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                        </svg>
                </a>

                <a
                        href={discordUrl}
                        target="_blank"
                        rel="noreferrer"
                        class="px-6 py-3 text-sm font-semibold text-zinc-300 hover:text-white bg-[#111318] hover:bg-[#16181e] border border-white/[0.08] rounded-lg transition-colors flex items-center gap-2"
                        >
                        <span>Join Discord</span>
                        <svg class="w-4 h-4 fill-current text-[#5865F2]" viewBox="0 0 24 24">
                            <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994.021-.041.001-.09-.041-.106a13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.061 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.893.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.028zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
                        </svg>
                </a>
            </div>
        </div>

        <div class="mt-14 pt-8 border-t border-white/[0.08] grid grid-cols-1 sm:grid-cols-3 gap-6">
            {#each stats as stat}
            <div class="flex flex-col">
                <span class="text-3xl font-extrabold text-white font-mono tracking-tight tabular-nums">{stat.value}</span>
                <span class="text-xs uppercase tracking-wider text-zinc-400 font-medium mt-1">{stat.label}</span>
            </div>
            {/each}
        </div>
    </div>
</section>
