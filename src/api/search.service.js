import axios from "axios";

const search = async (query, body) => {
    const res = await axios.post(
        `https://comparador-precios-api.herokuapp.com/api/product/list/${query}`,
        body
    );
    return res.data;
};

export default search;