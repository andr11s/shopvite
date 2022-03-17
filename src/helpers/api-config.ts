import { environmentsDev } from '../environments/environments';
import { RequestUrl } from '../interfaces/configurations-api';
import ProductsService from '../services/products.service';

export const productsServices = new ProductsService(RequestUrl.products, environmentsDev.API);