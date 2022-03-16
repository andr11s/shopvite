import { example } from "./components/home";


export function App() {
    const d = document;

    let $app = d.getElementById('app');

    console.log('app', $app);

    const examplex = new example('products', 'https://fakestoreapi.com/');

    examplex.getAll().then(data => console.log('aaghhh', data));

    const a = d.createElement('header');

    a.classList.add("header");

    a.innerHTML = `Hola como estas esto es un h1 en vite!!!!`;

    $app?.appendChild(a);

}