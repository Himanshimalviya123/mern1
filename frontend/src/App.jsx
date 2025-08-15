import {BrowserRouter ,Routes,Route} from "react-router-dom"
import Layout from "./layout";
import Insert from "./pages/insert";
import Display from "./pages/display";
import Update from "./pages/update";
import Home from "./pages/home";
import Editdata from "./pages/editdata";
import Contact from "./pages/contact";
import Search from "./pages/search";
const App=()=>{
  return(
    <>
     <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout/>}>
          <Route index element={<Home/>}/>
          <Route path="home" element={<Home/>}/>
          <Route path="insert" element={<Insert/>}/>
          <Route path="display" element={<Display/>}/>
          <Route path="update" element={<Update/>}/>
          <Route path="search" element={<Search/>}/>
          <Route path="contact" element={<Contact/>}/>
           <Route path="/edit/:id" element={<Editdata/>}/>
          </Route>
        </Routes>
     </BrowserRouter>
    </>
  )
}
export default App;