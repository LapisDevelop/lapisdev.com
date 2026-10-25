<script>
  import { createEventDispatcher } from 'svelte';
  import { getCategoryConfig } from '../data/products.js';

  export let product;

  const dispatch = createEventDispatcher();

  $: categoryConfig = getCategoryConfig(product.category);

  function handleClick() {
    dispatch('select', product);
  }
</script>

<div class="bg-[#111318] border {categoryConfig.cardBorderClass} transition-all duration-200 rounded-xl p-5 flex flex-col justify-between group">
  <div>
    <div class="flex items-start justify-between gap-3 mb-3">
      <span class="text-xs font-medium px-2.5 py-0.5 rounded-full {categoryConfig.badgeClass}">
        {product.categoryName}
      </span>
      <span class="text-xs font-mono text-zinc-400 bg-white/[0.04] px-2 py-0.5 rounded border border-white/[0.04]">
        {product.version}
      </span>

    </div>

    <h3 class="text-lg font-bold text-white group-hover:text-blue-400 transition-colors mb-2">
      {product.name}
    </h3>

    <p class="text-sm text-zinc-400 leading-relaxed mb-4">
      {product.shortDesc}
    </p>

    <div class="flex flex-wrap gap-1.5 mb-6">
      {#each product.tags as tag}
        <span class="text-[11px] font-mono text-zinc-400 bg-[#16181e] px-2 py-0.5 rounded border border-white/[0.04]">
          {tag}
        </span>
      {/each}
    </div>
  </div>

  <div class="pt-4 border-t border-white/[0.06] flex items-center justify-between gap-3">
    <div class="flex items-baseline gap-1">
      {#if product.inDevelopment}
        <span class="text-[11px] text-zinc-500 uppercase tracking-wider">In Development</span>
        {:else}

        <span class="text-lg font-extrabold text-white font-mono">{product.price}</span>
        {#if product.price != 'Free'}
        <span class="text-[11px] text-zinc-500 uppercase tracking-wider">USD</span>
        {/if}
      {/if}
    </div>

    <button
      on:click={handleClick}
      class="px-3.5 py-1.5 text-xs font-semibold text-zinc-200 bg-[#16181e] hover:bg-blue-600 hover:text-white border border-white/[0.08] hover:border-blue-500 rounded-lg transition-colors flex items-center gap-1.5"
    >
      <span>View Details</span>
      <svg class="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
      </svg>
    </button>
  </div>
</div>
