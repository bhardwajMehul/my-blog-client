import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";


import {Register} from "./pages";

export const Router=()=><BrowserRouter>
    <Routes>
      <Route path="/" element={<>Dashboard, it will show your pages, and stories entered recently</>} />
      <Route path="/registration" element={<Register />} />
      <Route path="/story/:id" element={<>here you will get the content of a particular story</>} />
      <Route path="/*" element={<>404 Page not found</>} />
    </Routes>
  </BrowserRouter>
