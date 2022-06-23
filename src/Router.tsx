import { Route, Routes } from "react-router-dom";
import { Evento } from "./pages/Evento";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<h1>Home</h1>}></Route>
      <Route path="/event" element={<Evento />}></Route>
      <Route path="/event/lesson/:slug" element={<Evento />}></Route>
    </Routes>
  );
}
