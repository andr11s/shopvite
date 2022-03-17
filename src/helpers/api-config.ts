import { environmentsDev } from '../environments/environments';
import { RequestUrl } from '../interfaces/configurations-api';
import ProductsService from '../services/products.service';

const products = new ProductsService(RequestUrl.products, environmentsDev.API);

export { products as productsApi }