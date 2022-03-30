export function DiscountedProducts() {
    const d = document;
    const section = d.createElement('section');

    section.classList.add('discounted__products');
    section.id = 'discounted__products';

    section.innerHTML = `hola esto es una section`;


    return section;
}