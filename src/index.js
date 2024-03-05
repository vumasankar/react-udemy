import ReactDOM from "react-dom/client"
 
import "./index.css"

import Navbar from "./components/Navbar"
import Categories from "./components/categories"
import SaleImage from "./components/image"
import Recommended from "./components/recommended"

const root = ReactDOM.createRoot(document.getElementById("root"))



root.render(
<div>
  <Navbar></Navbar>
  <Categories></Categories>
  <SaleImage></SaleImage>
  <Recommended></Recommended>
  
</div>

)
