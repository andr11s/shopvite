import { DiscountedProducts } from "./discounted-products";

export function Main() {
    let $main = document.createElement('section');
    $main.id = 'main';
    $main.classList.add("grid-fluid");

    //$main.appendChild(DiscountedProducts());

    return $main;
}