import { environmentsDev } from '../environments/environments';
import { RequestUrl } from '../interfaces/configurations-api';
import ProductsService from '../services/products.service';
import CategoriesServices from '../services/categories.service';
import UsersServices from '../services/users.service';
import CartsServices from '../services/carts.service';

export const productsServices = new ProductsService(RequestUrl.products, environmentsDev.API);
export const categoriesServices = new CategoriesServices(RequestUrl.categories, environmentsDev.API);
export const userService = new UsersServices(RequestUrl.users, environmentsDev.API);
export const cartsService = new CartsServices(RequestUrl.carts, environmentsDev.API);