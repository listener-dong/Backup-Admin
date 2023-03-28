import { ResultEnum } from "@/enums/httpEnum";
import { AxiosRequestConfig } from "axios";
const defaultConfig: AxiosRequestConfig = {
  // 默认地址请求地址，可在 .env.*** 文件中修改
  baseURL: import.meta.env.VITE_API_URL as string,
  // 请求超时时间
  timeout: ResultEnum.TIMEOUT as number,
  headers: {
    Accept: "application/json, text/plain, */*",
    "Content-Type": "application/json",
    "X-Requested-With": "XMLHttpRequest"
  },
  // 数组格式参数序列化（https://github.com/axios/axios/issues/5142）
  paramsSerializer: {
    // serialize: stringify as unknown as CustomParamsSerializer
  }
};

console.log(defaultConfig);

class RequestHttp {}

export default new RequestHttp();
