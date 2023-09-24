import axios from "axios";

export default axios.create({
    baseURL:'https://api.rawg.io/api',
    params:{
        // key:'c95f38e8724e445abc9f477a91827ae0'
    }
})