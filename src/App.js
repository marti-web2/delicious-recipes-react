import { BrowserRouter } from "react-router-dom"
import Search from "./components/Search"

import Pages from "./pages/Pages"
import Category from "./components/Category"

const App = () => (
  <div className="App">
    <BrowserRouter>
    <Search />
      <Category />
      <Pages />
    </BrowserRouter>
  </div>
)

export default App