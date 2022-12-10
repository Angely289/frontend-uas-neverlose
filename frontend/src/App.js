import Header from "./components/Header";
import Pet from "./components/Pet";
import Product from "./components/Product";
import Rating from "./components/Rating";
import Bantuan from "./components/Bantuan";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="App">
      <Header />
      <Pet />
      <Product />
      <Rating />
      <Bantuan />
      <Footer />
    </div>
  );
}

export default App;
