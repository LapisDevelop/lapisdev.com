<script>
    let mobileMenuOpen = false;

    function toggleMobileMenu() {
        mobileMenuOpen = !mobileMenuOpen;
    }

    function closeMobileMenu() {
        mobileMenuOpen = false;
    }

    import { discordUrl } from '../data/products.js';
</script>

<header class="sticky top-0 z-40 backdrop-blur-md bg-[#0a0a0a]/80 border-b border-white/[0.08]">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-8">
        <a href="#" class="flex items-center gap-3 text-lg font-bold tracking-tight text-white whitespace-nowrap shrink-0 group">
            <span class="w-2.5 h-2.5 rounded-full bg-blue-500 shadow-[0_0_12px_#3b82f6] transition-transform duration-300 group-hover:scale-125"></span>
            <span>Lapis Development</span>
        </a>

        <nav class="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-400">
            <a href="#software" class="hover:text-white transition-colors whitespace-nowrap">Software</a>
            <a href="#about" class="hover:text-white transition-colors whitespace-nowrap">About</a>
            <!--<a href="#testimonials" class="hover:text-white transition-colors whitespace-nowrap">Testimonials</a>-->
            <a href="#commissions" class="hover:text-white transition-colors whitespace-nowrap">Commissions</a>
        </nav>

        <div class="hidden sm:flex items-center gap-3 shrink-0">
            <a
                    href="https://docs.lapisdev.com"
                    target="_blank"
                    rel="noreferrer"
                    class="px-3.5 py-1.5 text-xs font-medium text-zinc-300 bg-[#16181e] hover:bg-[#1f222b] hover:text-white border border-white/[0.08] rounded-lg transition-colors flex items-center gap-1.5 whitespace-nowrap"
                    >
                    <span>Docs</span>
                    <svg class="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
            </a>
            <a
                    href={discordUrl}
                    target="_blank"
                    rel="noreferrer"
                    class="px-4 py-1.5 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-lg transition-all shadow-[0_0_15px_rgba(37,99,235,0.3)] hover:shadow-[0_0_20px_rgba(37,99,235,0.5)] flex items-center gap-1.5 whitespace-nowrap"
                    >
                    <svg class="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                        <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994.021-.041.001-.09-.041-.106a13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.061 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.893.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.028zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
                    </svg>
                <span>Discord</span>
            </a>
        </div>

        <button
                on:click={toggleMobileMenu}
                aria-label="Toggle Navigation Menu"
                class="md:hidden p-2 text-zinc-400 hover:text-white focus:outline-none"
                >
                <svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    {#if mobileMenuOpen}
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                    {:else}
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                    {/if}
                </svg>
        </button>
    </div>

    {#if mobileMenuOpen}
    <div class="md:hidden px-4 pt-2 pb-4 bg-[#111318] border-b border-white/[0.08] flex flex-col gap-3">
        <a on:click={closeMobileMenu} href="#software" class="text-sm font-medium text-zinc-300 hover:text-white py-1">Software</a>
        <a on:click={closeMobileMenu} href="#about" class="text-sm font-medium text-zinc-300 hover:text-white py-1">About</a>
        <a on:click={closeMobileMenu} href="#testimonials" class="text-sm font-medium text-zinc-300 hover:text-white py-1">Testimonials</a>
        <a on:click={closeMobileMenu} href="#commissions" class="text-sm font-medium text-zinc-300 hover:text-white py-1">Commissions</a>
        <div class="pt-2 flex items-center gap-3 border-t border-white/[0.08]">
            <a
                    href="https://docs.lapisdev.com"
                    target="_blank"
                    rel="noreferrer"
                    class="flex-1 py-2 text-center text-xs font-medium text-zinc-300 bg-[#16181e] border border-white/[0.08] rounded-lg"
                    >
                    Docs
            </a>
                <a
                        href={discordUrl}
                        target="_blank"
                        rel="noreferrer"
                        class="flex-1 py-2 text-center text-xs font-medium text-white bg-blue-600 rounded-lg"
                        >
                        Discord
                </a>
        </div>
    </div>
    {/if}
</header>
