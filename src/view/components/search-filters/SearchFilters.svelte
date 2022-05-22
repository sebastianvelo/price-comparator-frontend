<script>
    import Filter from "./Filter.svelte";
    export let sourcesCheckbox;

</script>

<div class="p-2 text-white text-3xl font-bold">
    <p>Buscar en:</p>
    <div class="flex lg:flex-col space-x-2 lg:space-x-0 lg:space-y-2 overflow-x-scroll lg:overflow-x-auto p-4 text-center">
        {#each sourcesCheckbox as source}
            <Filter {source} />
        {/each}
    </div>
</div>
