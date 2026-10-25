<script>
    import { createEventDispatcher } from 'svelte';
    import { getCategoryConfig, discordUrl } from '../data/products.js';

    export let product = null;
    export let isOpen = false;

    const dispatch = createEventDispatcher();

    $: categoryConfig = product ? getCategoryConfig(product.category) : getCategoryConfig('all');

    $: if (typeof document !== 'undefined') {
        if (isOpen && product) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
    }

    function handleClose() {
        dispatch('close');
    }

    function handleKeydown(event) {
        if (isOpen && event.key === 'Escape') {
            handleClose();
        }
    }
</script>

<svelte:window on:keydown={handleKeydown} />

{#if isOpen && product}
<div
        class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
        on:click={handleClose}
        role="dialog"
        aria-modal="true"
        >
        <div
                class="bg-[#111318] border border-white/[0.12] rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl p-6 sm:p-8 relative flex flex-col gap-6"
                on:click|stopPropagation
                >
                <div class="flex items-start justify-between gap-4">
                    <div>
                        <div class="flex items-center gap-2 mb-2">
                            <span class="text-xs font-medium px-2.5 py-0.5 rounded-full {categoryConfig.badgeClass}">
                                {product.categoryName}
                            </span>
            <span class="text-xs font-mono text-zinc-400 bg-white/[0.04] px-2 py-0.5 rounded border border-white/[0.06]">
                {product.version}
            </span>
                        </div>
                        <h3 class="text-2xl font-bold text-white tracking-tight">{product.name}</h3>
                    </div>

                    <button
                            on:click={handleClose}
                            aria-label="Close Product Details"
                            class="p-2 text-zinc-400 hover:text-white hover:bg-white/[0.06] rounded-lg transition-colors"
                            >
                            <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                    </button>
                </div>

                <div>
                    <h4 class="text-xs uppercase tracking-wider text-zinc-400 font-semibold mb-2 font-mono">Overview</h4>
                    <p class="text-sm text-zinc-300 leading-relaxed">{product.fullDesc}</p>
                </div>

                <div>
                    <h4 class="text-xs uppercase tracking-wider text-zinc-400 font-semibold mb-3 font-mono">Key Features</h4>
                    <ul class="space-y-2.5">
                        {#each product.specs as spec}
                        <li class="flex items-start gap-2.5 text-sm text-zinc-300">
                            <svg class="w-4 h-4 text-blue-500 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7" />
                            </svg>
                            <span>{spec}</span>
                        </li>
                        {/each}
                    </ul>
                </div>

                <div>
                    <h4 class="text-xs uppercase tracking-wider text-zinc-400 font-semibold mb-2 font-mono">Platform Tags</h4>
                    <div class="flex flex-wrap gap-1.5">
                        {#each product.tags as tag}
                        <span class="text-xs font-mono text-zinc-300 bg-[#16181e] px-2.5 py-1 rounded border border-white/[0.08]">
                            {tag}
                        </span>
                        {/each}
                    </div>
                </div>

                <div class="pt-4 border-t border-white/[0.08] flex flex-col sm:flex-row items-center justify-between gap-4">
                    <div class="flex items-baseline gap-2">
                        <span class="text-2xl font-extrabold text-white font-mono">{product.price}</span>
                        <span class="text-xs text-zinc-400 uppercase tracking-wider">Lifetime Access</span>
                    </div>

                    <div class="flex items-center gap-3 w-full sm:w-auto">
                        <a
                                href="https://docs.lapisdev.com"
                                target="_blank"
                                rel="noreferrer"
                                class="flex-1 sm:flex-none px-4 py-2 text-xs font-semibold text-zinc-300 bg-[#16181e] hover:bg-[#1f222b] hover:text-white border border-white/[0.08] rounded-lg transition-colors text-center"
                                >
                                Documentation
                        </a>

                            {#if product.inDevelopment}
                            <a
                                    href={discordUrl}
                                    target="_blank"
                                    rel="noreferrer"
                                    class="flex-1 sm:flex-none px-5 py-2 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-lg transition-all shadow-[0_0_15px_rgba(37,99,235,0.4)] text-center"
                                    >
                                    Join Early Access
                            </a>
                                {:else}
                                <a
                                        href={product.storeUrl}
                                        target="_blank"
                                        rel="noreferrer"
                                        class="flex-1 sm:flex-none px-5 py-2 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-lg transition-all shadow-[0_0_15px_rgba(37,99,235,0.4)] text-center"
                                        >
                                        Download Release
                                </a>
                                    {/if}
                    </div>
                </div>
        </div>
</div>
{/if}
