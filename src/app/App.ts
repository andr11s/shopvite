import { Header } from './commons/header';
import MenuResponsive from './commons/menu';
import { Main } from './components/main';
const d = document;

export async function App() {
  let $app = d.getElementById('app');
  let $loading = d.getElementById('.loader-page');

  $app?.appendChild(Header());
  $app?.appendChild(Main());

  setTimeout(() => {
    $loading?.style.setProperty('visibility', 'hidden');
    $loading?.style.setProperty('opacity', '0');

    console.log('yaaaa');
  }, 2000);
}

d.addEventListener('click', (e: MouseEvent) => MenuResponsive(e));
