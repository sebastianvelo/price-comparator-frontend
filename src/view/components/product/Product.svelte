<script>
    export let product;
</script>

<a href={product.url} target="_blank">
    <div
        class="border border-black p-4 flex w-full md:h-full md:flex-col items-center 
                justify-between rounded-xl space-x-4 md:space-x-0 space-y-2 bg-gradient-to-tl from-white to-blue-100 hover:to-blue-300"
    >
        <div class="flex space-x-4 items-center md:flex-col md:space-y-2 md:space-x-0">
            <img
                class="h-8 w-8 md:h-16 md:w-16 lg:h-32 lg:w-32 rounded-full shadow-xl ring-4 ring-blue-400 ring-offset-4"
                src={product.image}
                alt={product.name}
            />
            <div class="flex flex-col md:items-center space-y-2">
                <p class="text-xl text-green-700 font-bold">
                    {product.price.currency}
                    {product.price.value}
                </p>
                <h1
                    class="text-xs md:text-sm xl:text-center font-bold text-ellipsis max-w-full"
                >
                    {product.name}
                </h1>
            </div>
        </div>
        <img
            class="w-8 h-8 xl:w-12 xl:h-12 rounded-full shadow-xl"
            src={product.sourceImage}
            alt={product.source}
        />
    </div>
</a>
