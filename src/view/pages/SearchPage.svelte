<script>
    import ProductList from "../components/product-list/ProductList.svelte";
    import Searchbar from "../components/search-bar/Searchbar.svelte";
    import SearchFilters from "../components/search-filters/SearchFilters.svelte";
    import search from "../../api/search.service";

    let products = [];
    let query = "";
    let sourcesCheckbox = [
        {
            label: "Coto",
            id: "coto",
            active: true,
        },
        {
            label: "Dia",
            id: "dia",
            active: true,
        },
        {
            label: "Maxiconsumo",
            id: "maxiconsumo",
            active: true,
        },
        {
            label: "Carrefour",
            id: "carrefour",
            active: true,
        },
        {
            label: "MercadoLibre",
            id: "mercadolibre",
            active: true,
        },
        {
            label: "TiendaMia",
            id: "tiendamia",
            active: true,
        },
        {
            label: "Fravega",
            id: "fravega",
            active: true,
        },
        {
            label: "Garbarino",
            id: "garbarino",
            active: true,
        },
    ];

    const getSources = () => {
        return sourcesCheckbox
            .filter((source) => source.active)
            .map((source) => source.id);
    };

    const onSearch = () => {
        const sources = getSources();
        products = search(query, {
            sources,
        });
    };
</script>

<main
    class="bg-gradient-to-b from-black to-gray-600 min-h-screen max-w-screen"
>
    <div class="flex  flex-col lg:grid lg:grid-cols-4">
        <div class="bg-black lg:min-h-screen bg-opacity-40">
            <Searchbar {onSearch} bind:query />
            <SearchFilters bind:sourcesCheckbox />
        </div>
        <div class="lg:col-span-3 px-4">
            <ProductList {products} {query} />
        </div>
    </div>
</main>
