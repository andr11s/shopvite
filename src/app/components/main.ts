import { DiscountedProducts } from './discounted-products';
import { FlashSale } from './flash-sale';

export function Main() {
  let $main = document.createElement('section');
  $main.id = 'main';
  $main.classList.add('grid-fluid');

  $main.appendChild(DiscountedProducts());
  $main.appendChild(FlashSale());
  return $main;
}
