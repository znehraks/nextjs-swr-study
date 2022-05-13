import axios from "axios";

export interface IStore {
  id: string | number;
  name: string;
  url?: string;
  description: string;
  image: string;
  thumb: string;
}

export interface IData {
  data: IStore[];
}

axios.defaults.baseURL = "http://localhost:9000";
export const fetcher = (url: string) => axios.get(url).then((res) => res.data);
