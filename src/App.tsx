import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainLayOut from "./components/layouts/MainLayOut";
import { HomePage } from "./pages/Home/HomePage";
import { routes } from "./routes";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainLayOut></MainLayOut>}>
           {routes}
          </Route>
         
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
