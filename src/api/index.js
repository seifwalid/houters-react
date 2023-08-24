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
    return await this.base.get(endpoint).catch(this.defaultCatch);
  }

  async del(endpoint: string) {
    return await this.base.delete(endpoint).catch(this.defaultCatch);
  }

  async put(endpoint: string, body: any) {
    return await this.base.put(endpoint, body).catch(this.defaultCatch);
  }

  async post(endpoint: string, body: any) {
    return await this.base.post(endpoint, body).catch(this.defaultCatch);
  }
}

export default new api();
