export function DiscountedProducts() {
  const d = document;
  const $section = d.createElement('section');

  $section.classList.add('discounted__products');
  $section.id = 'discounted__products';

  $section.innerHTML = `
    <section class="discounted__products">
    <div class="discounted__products-image">
      <div class="discounted__products-text">
        <h2>Super Flash Sale 50% Off</h2>
      </div>
    </div>

    <div class="discounted__products-title row">
      <h3>Productos mas vendidos</h3>
    </div>
    <div class="products__list row">
      <div class="products__list-card col-md-12">
        <div class="products__card-title">
          <div class="card__title">
            <h3>FS - QUILTED MAXI CROSS BAG</h3>
          </div>
          <div class="card__price">
            <h5>$299,43</h5>
          </div>
        </div>
        <div class="products__list-image">
          <Img src="/src/assets/image/promotion-Image.png"></Img>
          <div class="products__list-discounted">
            <p class="discounted-price">$534,33 </p>
            <p class="discounted-discount"> 24% Off</p>
          </div>
        </div>
      </div> 
      </div> 
    </div>

  </section>`;

  return $section;
}
