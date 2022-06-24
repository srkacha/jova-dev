export enum RouteMethod {
    GET = "GET",
    POST = "POST",
    DELETE = "DELETE",
}

export type APIRoute = {
    path: string;
    method: RouteMethod;
};
