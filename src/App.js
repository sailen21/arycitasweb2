import './App.css';
import Formulario from "./componentes/formulario";
import Lugares from './componentes/lugares';
import TablaCitas from './componentes/tablaCitas';

import {
  BrowserRouter,
  Routes,
  Route,
  Navigate
} from "react-router-dom";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Formulario />}></Route>
        <Route path='lugares' element={<Lugares />}></Route>
        <Route path='citas' element={<TablaCitas />}></Route>
        <Route path="*" element={<Navigate replace to="/" />} />
      </Routes>
    </BrowserRouter>
  );
}
