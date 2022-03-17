import { Main } from "./components/main";

export async function App() {
    const d = document;
    let $app = d.getElementById('app');

    const a = d.createElement('header');

    a.classList.add("header");

    a.innerHTML = `Hola como estas esto es un h1 en vite!!!!`;

    $app?.appendChild(a);
    $app?.appendChild(Main());
}