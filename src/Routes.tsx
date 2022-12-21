import { Routes, Route } from "react-router-dom";
import { DefaultLayout } from "./layout/defaultLayout";

export function RoutesApp() {
  return (
    <Routes>
      <Route path="/">
        <Route path="/" element={<DefaultLayout />} />
      </Route>
    </Routes>
  );
}
