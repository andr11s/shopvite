//  import imageLogo from "../../assets/image/logo_copy.svg";
import onlyLogo from "../../assets/image/only-logo.png";

export function Header() {
  const $header = document.createElement('header');

  $header.id = 'header';
  $header.classList.add('header');
  $header.classList.add('container');
  $header.innerHTML = `
  <header class="header">
  <div class="header__menu">
    <div class="menu">
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
        <span class="menu-item-label">Account</span>
      </a>
      <a class="menu-item">
        <span class="material-icons">
          <i id='icon_active' class="fa-solid fa-bars icons_view"></i>
          <i id='icon_inactive' class="menu__active fa-solid fa-bars-staggered icons_view"></i>
        </span>
        <span class="menu-item-label">Menu</span>
      </a>
    </div>
  </div>


  <nav role="navigation" class="menu__mobile view__menu menu__in--view" id="nav__menu">
    <div class="menu__mobile--section">
      <img src="${onlyLogo}" alt="" class="d-inline-block align-text-center">
      <a class="menu__mobile--logo" href="#">
        Welcome to E-com
      </a>
    </div>
    <ul class="menu__mobile--ul">
      <li class="menu__mobile--li"><a href="#">Home</a></li>
      <li class="menu__mobile--li"><a href="#">Bags</a></li>
      <li class="menu__mobile--li"><a href="#">Sneakers</a></li>
      <li class="menu__mobile--li"><a href="#">Belt</a></li>
      <li class="menu__mobile--li"><a href="#">Contact</a></li>
    </ul>
  </nav>

</header>`;

  return $header;
}