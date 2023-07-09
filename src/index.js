import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Routes, Route } from "react-router-dom/dist";
import Camping from "./Components/Camping";
import CampingDetail from "./Components/CampingDetail";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import TemaCamping from "./Components/TemaCamping";
const queryClient = new QueryClient();
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <QueryClientProvider client={queryClient}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}></Route>
        <Route path="/camping/place/지역/:id" element={<Camping />}></Route>
        <Route path="/camping/search/:id" element={<TemaCamping />}></Route>
        <Route path="/campingDetail/:id" element={<CampingDetail />}></Route>
      </Routes>
    </BrowserRouter>
    <ReactQueryDevtools initialIsOpen={false} position="bottom-right" />
  </QueryClientProvider>
);

reportWebVitals();
