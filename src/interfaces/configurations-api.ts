export interface Api {
    url: string,
    obsuccess: Function
}

export enum Methods {
    GET = 'GET',
    POST = 'POST',
    PUT = 'PUT',
    DELETE = 'DELETE'
}

export enum ContentType {
    JSON = 'application/json'
}

export enum RequestUrl {
    products = 'products',
    categories = 'categories',
    users = 'users',
    carts = 'carts'
}