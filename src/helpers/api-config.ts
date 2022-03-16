import { environmentsDev } from '../environments/environments';
import { RequestUrl } from '../interfaces/configurations-api';

const DOMAIN = `${environmentsDev.API}`,
    PRODUCTS = `${DOMAIN}/${RequestUrl.products}`,
    CATEGORIES = `${DOMAIN}/${RequestUrl.categories}`,
    USERS = `${DOMAIN}/${RequestUrl.users}`,
    CARTS = `${DOMAIN}/${RequestUrl.carts}`;

export const ApiConfig = {
    DOMAIN,
    PRODUCTS,
    CATEGORIES,
    USERS,
    CARTS,
};
