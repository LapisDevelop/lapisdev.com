<script lang="ts">
    import { discordUrl } from '../data/products.js';
</script>

<footer class="border-t border-white/[0.08] bg-[#0a0a0a] py-12">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
        <div class="flex items-center gap-3">
            <img src="/logo.png" alt="Lapis Development Logo" class="w-8 h-8" />
            <span class="text-sm font-bold text-white tracking-tight">Lapis Development</span>
            <span class="text-xs text-zinc-500 font-mono ml-7 mt-1
                ">© 2026. All rights reserved.</span>
        </div>

        <div class="flex flex-wrap items-center gap-6 text-xs text-zinc-400">
            <a href="#software" class="hover:text-white transition-colors">Software</a>
            <a href="#about" class="hover:text-white transition-colors">About</a>
            <a href="#commissions" class="hover:text-white transition-colors">Commissions</a>
            <a href="https://docs.lapisdev.com" target="_blank" rel="noreferrer" class="hover:text-white transition-colors">Documentation</a>
            <a href="https://builtbybit.com" target="_blank" rel="noreferrer" class="hover:text-white transition-colors">BuiltByBit</a>
            <a href="https://sourcexchange.net" target="_blank" rel="noreferrer" class="hover:text-white transition-colors">SourceXchange</a>
            <a href={discordUrl} target="_blank" rel="noreferrer" class="hover:text-white transition-colors">Discord</a>
        </div>
    </div>
</footer>
