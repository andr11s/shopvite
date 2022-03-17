import Request from "../helpers/api";

class CategoriesServices extends Request {
    getCategoriesAll() {
        this.fetch(this.resource, { method: 'GET' })
    }

}

export default CategoriesServices;