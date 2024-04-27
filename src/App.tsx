import { BrowserRouter, Route, Routes } from "react-router-dom";
import DefaultLayout from "./layouts/default";
import Home from "./pages/home";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* Pages with default layout */}
          <Route path="/" element={<DefaultLayout />}>
            <Route index element={<Home />}></Route>
          </Route>
          {/* End Pages with default layout */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
