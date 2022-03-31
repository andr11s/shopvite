export function FlashSale() {
  const d = document;
  const $section = d.createElement('section');

  $section.classList.add('flash__sale');
  $section.id = 'flash__sale';

  $section.innerHTML = `
        <h1> Hola esto es h1 del flash sale</h1>

    
    `;

  return $section;
}
