import { menu, item } from "./pages/Data";
import Product from "./pages/Product";


function App() {
  return (
    <div align="center">
      <Product menu={menu} item={item} />
    </div>
  );
}

export default App;
