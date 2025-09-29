import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages";
import Books from "./Pages/BookList";
import Team from "./Pages/Team";
import Contact from "./Pages/Contact";
import Header from "./components/shared/Header";
import Footer from "./components/shared/Footer/Footer";
import Login from "./Pages/auth/login";
import Register from "./Pages/auth/register";
function App() {

  return (
    <>
      <div className='container'>
        <BrowserRouter>
        <Header />

          <Routes>
            <Route index element={<Home />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/Register" element={<Register />} />
            <Route path="/Books" element={<Books />} />
            <Route path="/Team" element={<Team />} />
            <Route path="/Contact" element={<Contact />} />
          </Routes>

          <Footer />
        </BrowserRouter>
      </div>
      
    </>
  )
}

export default App
