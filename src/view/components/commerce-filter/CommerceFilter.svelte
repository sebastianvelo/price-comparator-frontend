<script>
    export let source;
</script>

<div
    class={`hover:cursor-pointer font-bold text-xl flex flex-col items-center space-y-2 p-2 rounded-lg w-full h-full transition-all duration-300
    ${
        source.active
            ? "bg-gradient-to-b from-blue-500 to-blue-700 hover:to-blue-900"
            : "bg-gray-50 text-gray-300"
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
