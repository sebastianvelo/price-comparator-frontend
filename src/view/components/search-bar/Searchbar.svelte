<script>
    export let query;
    export let onSearch;
</script>

<div class="flex">
    <input
        placeholder="Busca un producto"
        class="w-full focus:outline-none p-2 rounded-tl-xl rounded-bl-xl bg-gray-100 hover:bg-white transition-all duration-200"
        type="text"
        bind:value={query}
    />
    <button
        class="bg-blue-500 hover:bg-blue-800 transition-all duration-300 text-white font-bold px-4 rounded-tr-xl rounded-br-xl focus:outline-none focus:border-none"
        on:click={onSearch}>Buscar</button
    >
</div>
