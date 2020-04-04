import {AxiosInstance} from "axios";
import { api_address, api_port } from "../config";

const axios = require('axios').default;

export const NewConnection = (): AxiosInstance => axios.create({
  baseURL: api_address + api_port
});

