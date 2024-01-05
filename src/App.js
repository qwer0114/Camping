import React from "react";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom/dist";
import Camping from "./pages/Camping";
import CampingDetail from "./pages/CampingDetail";
import Home from "./pages/Home";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import TemaCamping from "./pages/TemaCamping";
import NotFound from "./pages/NotFound";
function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/camping/place/지역/:id" element={<Camping />}></Route>
          <Route path="/camping/search/" element={<TemaCamping />}></Route>
          <Route path="/campingDetail/:id" element={<CampingDetail />}></Route>
          <Route path="/*" element={<NotFound />}></Route>
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}
export default App;
