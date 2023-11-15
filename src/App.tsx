import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainLayOut from "./components/layouts/MainLayOut";
import { HomePage } from "./pages/Home/HomePage";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainLayOut></MainLayOut>}>
            <Route index element={<HomePage></HomePage>}></Route>
          </Route>
         
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
