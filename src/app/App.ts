import { Header } from "./commons/header";
import { Main } from "./components/main";

export async function App() {
    const d = document;
    let $app = d.getElementById('app');

    $app?.appendChild(Header());
    $app?.appendChild(Main());
}