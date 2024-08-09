import { Header } from "./components/Header";
import { Card } from "./components/Card";
import { Drawer } from "./components/Drawer";

export function App() {
  return (
    <div className="App">
      <div className="wrapper">
        <Drawer />
        <Header />
        <main className="p-40">
          <h2>Все кроссовки</h2>
          <div className="cards_list d-flex">
            <Card />
            <Card />
            <Card />
          </div>
        </main>
      </div>
    </div>
  );
}