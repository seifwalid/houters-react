import axios, { AxiosError, AxiosResponse } from "axios";

class api {
  base = axios.create({
    baseURL: "https://64e5e5f009e64530d17f37b1.mockapi.io/api",
  });

  defaultCatch(error: AxiosError) {
    console.error(error);
    return error;
  }

  printResponse(response: AxiosResponse) {
    console.log("request response: ", response);
    return response;
  }

  async get(endpoint: string) {
    return await this.base.get(endpoint).then(this.printResponse);
  }

  async del(endpoint: string) {
    return this.base.delete(endpoint);
  }

  async put(endpoint: string, body: any) {
    return this.base.put(endpoint, body);
  }

  async post(endpoint: string, body: any) {
    return this.base.put(endpoint, body);
  }
}

export default new api();
