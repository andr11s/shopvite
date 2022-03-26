import { environmentsDev } from "../../environments/environments";
import { ContentType, Methods } from "../interfaces/configurations-api";

class Request {
  resource: string;
  baseUrl: string;

  constructor(resource: string, baseUrl: string) {
    this.resource = resource;
    this.baseUrl = baseUrl;
  }

  async fetch(resource = this.resource, options: RequestInit) {

    const method = options.method ? options.method.toLocaleUpperCase() : Methods.GET;
    const requestOptions = { ...options, method };

    requestOptions.headers = new Headers({
      'Content-Type': ContentType.JSON,
      ...options.headers
    });

    if (options.body) requestOptions.body = JSON.stringify(options.body);

    const baseUrl = this.baseUrl ? this.baseUrl : environmentsDev.API;

    const response = await fetch(`${baseUrl}/${resource}`, requestOptions);
    return await response.json();
  }
}


export default Request;