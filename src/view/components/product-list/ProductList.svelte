<script>
    import Product from "../product/Product.svelte";
    import Error from "../error/Error.svelte";

    export let query;
    export let products;
</script>

<div class="w-full space-y-4 h-screen overflow-y-auto">
    {#await products}
        <p class="text-white text-3xl">Buscando {query}...</p>
    {:then products}
        {#if products.length === 0}
            <Error>No se han encontrado productos</Error>
        {:else}
            <p class="text-white text-xl md:text-3xl font-bold">{products.length} resultados</p>
        {/if}
        <div class="grid md:grid-cols-3 xl:grid-cols-5 gap-y-2 md:gap-x-2">
            {#each products as product}
                <Product {product} />
            {/each}
        </div>
    {:catch error}
        <Error>{error.message}</Error>
    {/await}
</div>
