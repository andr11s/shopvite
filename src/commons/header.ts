export function Header() {
  const $header = document.createElement('header');

  $header.id = 'header';
  $header.classList.add('header');
  $header.classList.add('container');
  $header.innerHTML = `
    <div class="row">
           <div class="col-md-6">
           <img src="./src/assets/image/logo.svg" alt="aaaa"> 
          </div>
          <div class="col-md-6"> 
              <nav class="header-container-menu"> 
                      <a class="is-active" href="#/">HOME</a>
                      <a href="#">SNEAKERS</a>
                      <a href="#">BELT</a> 
                      <a href="#">CONTACT</a> 
              </nav>  
          </div>  
  </div>
      `;

  return $header;
}