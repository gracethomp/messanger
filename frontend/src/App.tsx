import {useSelector } from "react-redux";
import {
  BrowserRouter as Router,
  Route,
  BrowserRouter,
  Routes,
} from "react-router-dom";

import { LoginPage } from "./pages";
import { RootState } from "./store";

function App() {
  const isLoggedIn = useSelector((state: RootState) => state.auth.isLoggedIn);

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
