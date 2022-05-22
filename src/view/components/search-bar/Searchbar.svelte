<script>
    export let query;
    export let onSearch;
</script>

<div class="flex">
    <input
        placeholder="Busca un producto"
        class="w-full focus:outline-none p-2 rounded-tl-xl rounded-bl-xl"
        type="text"
        bind:value={query}
    />
    <button class="bg-blue-500 text-white font-bold px-4 rounded-tr-xl rounded-br-xl" on:click={onSearch}>Buscar</button>
</div>
