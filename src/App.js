import { Outlet, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Homepage from "./pages/Homepage";

function App() {
  return (

    <Routes>
      <Route path="/" element={<Layout/>}>
      <Route index element={<Homepage />} />
      </Route>
    </Routes>
  )
}


function Layout () {
  return (
    <div>
      <Navbar />

      <Outlet />

    </div>
  )
}

export default App;