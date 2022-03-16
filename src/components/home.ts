import Request from "../helpers/api";


export class example extends Request {
    getAll() {
        return this.fetch(this.resource, { method: 'GET' });
    }

}