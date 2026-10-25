<script>
  import Navbar from './lib/Navbar.svelte';
  import Hero from './lib/Hero.svelte';
  import FilterBar from './lib/FilterBar.svelte';
  import ProductCard from './lib/ProductCard.svelte';
  import ProductModal from './lib/ProductModal.svelte';
  import AboutSection from './lib/AboutSection.svelte';
  import TestimonialsSection from './lib/TestimonialsSection.svelte';
  import CommissionBanner from './lib/CommissionBanner.svelte';
  import Footer from './lib/Footer.svelte';
  import { products } from './data/products.js';

  let activeCategory = 'featured';
  let searchQuery = '';
  let selectedProduct = null;

  $: normalizedQuery = searchQuery.trim().toLowerCase();

  $: filteredProducts = products.filter((product) => {
    const matchesCategory =
      activeCategory === 'featured'
        ? Boolean(product.featured)
        : product.category === activeCategory;

    const matchesQuery =
      normalizedQuery === '' ||
      product.name.toLowerCase().includes(normalizedQuery) ||
      product.shortDesc.toLowerCase().includes(normalizedQuery) ||
      product.tags.some((tag) => tag.toLowerCase().includes(normalizedQuery));

    return matchesCategory && matchesQuery;
  });

  function handleSelectProduct(event) {
    selectedProduct = event.detail;
  }

  function handleCloseModal() {
    selectedProduct = null;
  }

  function handleCategoryChange(event) {
    activeCategory = event.detail;
  }

  function handleSearchChange(event) {
    searchQuery = event.detail;
  }

  function handleResetFilters() {
    activeCategory = 'featured';
    searchQuery = '';
  }
</script>

<div class="min-h-screen bg-[#0a0a0a] text-zinc-100 flex flex-col font-sans">
  <Navbar />

  <main class="flex-1">
    <Hero />

    <section id="software" class="py-16 md:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <FilterBar
        {activeCategory}
        {searchQuery}
        totalProductsCount={products.length}
        on:categoryChange={handleCategoryChange}
        on:searchChange={handleSearchChange}
        on:clearSearch={() => (searchQuery = '')}
      />

      {#if filteredProducts.length > 0}
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {#each filteredProducts as product (product.id)}
            <ProductCard {product} on:select={handleSelectProduct} />
          {/each}
        </div>
      {:else}
        <div class="p-12 text-center bg-[#111318] border border-white/[0.08] rounded-2xl max-w-md mx-auto">
          <svg class="w-12 h-12 text-zinc-600 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <h3 class="text-base font-semibold text-white mb-1">No matching software</h3>
          <p class="text-xs text-zinc-400 mb-5">There are no packages matching "{searchQuery}" under the selected category.</p>
          <button
            on:click={handleResetFilters}
            class="px-4 py-2 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-lg transition-colors"
          >
            Reset Filters
          </button>
        </div>
      {/if}
    </section>

    <AboutSection />
    <CommissionBanner />
  </main>

  <Footer />

  <ProductModal
    product={selectedProduct}
    isOpen={Boolean(selectedProduct)}
    on:close={handleCloseModal}
  />
</div>
