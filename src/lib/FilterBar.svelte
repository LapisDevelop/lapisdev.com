<script>
  import { createEventDispatcher } from 'svelte';
  import { filterCategories, discordUrl } from '../data/products.js';

  export let activeCategory = 'all';
  export let searchQuery = '';
  export let totalProductsCount = 0;

  const dispatch = createEventDispatcher();

  function selectCategory(categoryId) {
    activeCategory = categoryId;
    dispatch('categoryChange', categoryId);
    dispatch('filterChange', { category: activeCategory, search: searchQuery });
  }

  function handleSearchInput(event) {
    searchQuery = event.target.value;
    dispatch('searchChange', searchQuery);
    dispatch('filterChange', { category: activeCategory, search: searchQuery });
  }

  function handleClearSearch() {
    searchQuery = '';
    dispatch('searchChange', '');
    dispatch('clearSearch');
    dispatch('filterChange', { category: activeCategory, search: '' });
  }
</script>

<div class="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
  <div>
    <h2 class="text-2xl sm:text-3xl font-bold tracking-tight text-white mb-2">Software Catalog</h2>
    <p class="text-sm text-zinc-400">Discover our performance-optimized modular utilities and tools for game servers, hosting companies, and developers.</p>
    <p class="text-sm text-zinc-500 mt-1"><b>Most of these tools are still in development.</b> Please report any issues or bugs on our <a href={discordUrl} class="text-blue-400 hover:underline">Discord</a>.</p>
  </div>

  <div class="w-full md:w-72 relative">
    <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-zinc-500">
      <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
    </div>
    <input
      type="text"
      value={searchQuery}
      on:input={handleSearchInput}
      placeholder="Search software or tags..."
      class="w-full bg-[#111318] text-sm text-white placeholder-zinc-500 rounded-lg pl-9 pr-9 py-2 border border-white/[0.08] focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 transition-colors"
    />
    {#if searchQuery}
      <button
        on:click={handleClearSearch}
        class="absolute inset-y-0 right-0 pr-3 flex items-center text-zinc-400 hover:text-white"
        aria-label="Clear Search Query"
      >
        <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    {/if}
  </div>
</div>

<div class="flex flex-wrap items-center gap-2 mb-8">
  {#each filterCategories as category}
    <button
      on:click={() => selectCategory(category.id)}
      class="px-3.5 py-1.5 text-xs font-medium rounded-lg transition-colors whitespace-nowrap {activeCategory === category.id ? 'bg-blue-600 text-white shadow-sm' : 'bg-[#16181e] text-zinc-400 hover:text-white border border-white/5'}"
    >
      {category.label}
      {#if category.id === 'all' && totalProductsCount > 0}
        ({totalProductsCount})
      {/if}
    </button>
  {/each}
</div>
