import MainSection from "./components/MainSection/MainSection"
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import Cars from './components/Cars/Cars'

function App() {


  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<MainSection />} />
          <Route path="/cars" element={<Cars />} />
        </Routes>
    </Router>
    </div>
  )
}

export default App



