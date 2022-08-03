import MainSection from "./components/MainSection/MainSection"
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import Cars from './components/Cars/Cars'

function App() {


  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<MainSection />} />
          <Route exact path="/cars" element={<Cars />} />
        </Routes>
    </Router>
    </div>
  )
}

export default App



