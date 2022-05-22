import axios from "axios";

const search = async (query, body) => {
    const res = await axios.post(
        `http://192.168.0.100:7000/api/product/list/${query}`,
        body
    );
    return res.data;
};

export default search;