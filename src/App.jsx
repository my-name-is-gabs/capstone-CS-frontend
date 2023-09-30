import { Navigation} from "./components"
import { Route, Routes } from "react-router-dom"
import {Home, About, Guidelines} from './pages'

function App() {

  return (
    <>
      <Navigation />
      <Routes>
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/guidelines" element={<Guidelines />} />
      </Routes>
      <footer className='footer'>
        <p className="text-end fw-bold fs-5 me-5">©DEVGROUP 2023</p>
      </footer>
    </>
  )
}

export default App
