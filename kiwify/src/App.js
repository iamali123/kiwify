import "./App.css";
import React from "react";
import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";
import { Login, Signup } from "./ComponentFile";

const ROUTES = {
  login: { id: "1", element: Login, path: "/" },
  signUp: { id: "2", element: Signup, path: "/signup" },
};

function App() {
  return (
    <BrowserRouter>
      <Routes>
      {Object.entries(ROUTES).map((r) => {
            const Component = r[1].element;
            return (
              <>
                <Route key={r[1].id} path={r[1].path} element={<Component />}>
                  <Route path={r[1].path} element={<Component />} />
                </Route>
              </>
            );
          })}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
