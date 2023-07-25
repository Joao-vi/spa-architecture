import axios, { AxiosResponse } from 'axios'

import { IHttpClient } from '../../core/http'

export class HttpAxiosClient implements IHttpClient {
  async request<Data>(param: IHttpClient.Param): Promise<IHttpClient.Response<Data>> {
    let response: AxiosResponse
    try {
      response = await axios.request(param)
    } catch (e) {
      response = e.response
    }

    return {
      status: response.status,
      data: response.data,
    }
  }
}
