import imageLogo from "../../assets/image/logo_copy.svg";

export function Header() {
  const $header = document.createElement('header');

  $header.id = 'header';
  $header.classList.add('header');
  $header.classList.add('container');
  $header.innerHTML = `
  <header class="header">
  <div class="header__menu">
    <nav class="menu">
      <a href="#" class="menu-item">
        <span class="material-icons"><i class="fa-solid fa-house"></i></span>
        <span class="menu-item-label">Home</span>
      </a>
      <a href="#" class="menu-item">
        <span class="material-icons"><i class="fa-solid fa-magnifying-glass"></i> </span>
        <span class="menu-item-label">Explorer</span>
      </a>
      <a href="#" class="menu-item">
        <span class="material-icons"><i class="fa-solid fa-cart-shopping"></i></span>
        <span class="menu-item-label">Cart</span>
      </a>
      <a href="#" class="menu-item">
        <span class="material-icons"><i class="fa-solid fa-tag"></i></span>
        <span class="menu-item-label">Offer</span>
      </a>
      <a href="#" class="menu-item">
        <span class="material-icons"><i class="fa-solid fa-user"></i></span>
        <span class="menu-item-label">Account</span>
      </a>
    </nav>
  </div>
</header>`;

  return $header;
}