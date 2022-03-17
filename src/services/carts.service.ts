import Request from "../helpers/api";

class CartsServices extends Request {
    getCartsAll() {
        this.fetch(this.resource, { method: 'GET' })
    }
}

export default CartsServices;
