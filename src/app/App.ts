import { Header } from "./commons/header";
import MenuResponsive from "./commons/menu";
import { Main } from "./components/main";
const d = document;

export async function App() {
    let $app = d.getElementById('app');

    $app?.appendChild(Header());
    $app?.appendChild(Main());
}

d.addEventListener("click", (e: MouseEvent) => MenuResponsive(e));