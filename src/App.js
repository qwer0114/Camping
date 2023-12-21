import React from "react";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom/dist";
import Camping from "./pages/Camping";
import CampingDetail from "./pages/CampingDetail";
import Home from "./pages/Home";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import TemaCamping from "./pages/TemaCamping";
function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/camping/place/지역/:id" element={<Camping />}></Route>
          <Route path="/camping/search/:id" element={<TemaCamping />}></Route>
          <Route path="/campingDetail/:id" element={<CampingDetail />}></Route>
        </Routes>
      </BrowserRouter>
      <ReactQueryDevtools initialIsOpen={false} position="bottom-right" />
    </QueryClientProvider>
  );
}
export default App;
