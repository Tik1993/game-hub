import axios, { AxiosRequestConfig } from "axios";

export interface FetchResponse<T> {
    count: number;
    next:string|null;
    results: T[];
  }
  
const axiosInatance = axios.create({
    baseURL:'https://api.rawg.io/api',
    params:{
      key:'d01488b34d224f8da5712a91b4396379'
    }
})

class APIClient<T>{
  endpoint:string;

  constructor(endpoint:string){
    this.endpoint=endpoint
  }

  getAll=(config: AxiosRequestConfig) =>{
    return axiosInatance
    .get<FetchResponse<T>>(this.endpoint, config)
    .then(res=>res.data)
  }
}

export default APIClient;