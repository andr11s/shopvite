import Request from "../helpers/api";

class ProductsService extends Request {
    async getAll() {
        return await this.fetch(this.resource, { method: 'GET' });
    }
}

export default ProductsService;