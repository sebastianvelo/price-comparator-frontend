<script>
    export let source;
</script>

<div
    class={`font-bold text-xl flex flex-col items-center space-y-2 p-2 rounded-lg bg-gradient-to-bl  w-full h-full
    ${
        source.active ? "from-blue-700 to-blue-900" : "from-gray-50 to-gray-200 text-gray-300"
    }`}
>
    <input
        class="w-full h-full focus:outline-none"
        type="checkbox"
        name={source.id}
        id={source.id}
        bind:checked={source.active}
    />
    <label class="w-full h-full" for={source.id}>{source.label}</label>
</div>
