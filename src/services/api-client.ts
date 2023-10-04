import axios from "axios";

export interface FetchResponse<T> {
    count: number;
    results: T[];
  }
  
export default axios.create({
    baseURL:'https://api.rawg.io/api',
    params:{
             key:'d01488b34d224f8da5712a91b4396379'
    }
})