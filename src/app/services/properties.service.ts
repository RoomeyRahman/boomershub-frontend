import request from "./request";
import { IParam } from "../global/mock/constant.mock";

export async function getProperties(params?: IParam) {
  return request(
    "/properties",
    {
      method: "GET",
      data: (params && params.data) || {},
    },
    params && params?.headers
  );
}

export async function getSingleProperties(id: any, params: IParam) {
  return request(`properties/${id}`, {
    method: "GET",
    data: params,
  });
}
