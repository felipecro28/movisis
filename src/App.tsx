import MainSection from "./components/MainSection/MainSection"
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import Cars from './components/Cars/Cars'
import ShopCart from "./components/ShopCart/Carrinho"
import { UseShopProvider } from './context/ShopCart'


function App() {

  return (
    <div className="App">
      <UseShopProvider>
        <Router>
          <Routes>
            <Route path="/" element={<MainSection />} />
            <Route path="/cars" element={<Cars />} />
            <Route path="/carrinho" element={<ShopCart />} />
          </Routes>
        </Router>
      </UseShopProvider>
    </div>
  )
}
export default App



