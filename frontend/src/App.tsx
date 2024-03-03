import {
  BrowserRouter as Router,
  Route,
  BrowserRouter,
  Routes,
} from "react-router-dom";

import { LoginPage } from "./pages";
import { useAppSelector } from "./hooks/redux";

function App() {
  const isLoggedIn = useAppSelector((state) => state.auth.isLoggedIn);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            isLoggedIn ? (
              <div>
                <p>dsadas</p>
              </div>
            ) : (
              <LoginPage />
            )
          }
        ></Route>
        <Route
          path="/login"
          element={
            !isLoggedIn ? (
              <LoginPage />
            ) : (
              <div>
                <p>dsadas</p>
              </div>
            )
          }
        ></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
