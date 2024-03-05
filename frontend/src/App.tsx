import {
  BrowserRouter as Router,
  Route,
  BrowserRouter,
  Routes,
} from "react-router-dom";

import { ChatPage, LoginPage, NewChat } from "./pages";
import { useAppSelector } from "./hooks/redux";

function App() {
  const isLoggedIn = useAppSelector((state) => state.auth.isLoggedIn);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={isLoggedIn ? <ChatPage /> : <LoginPage />}
        ></Route>
        <Route
          path="/login"
          element={!isLoggedIn ? <LoginPage /> : <ChatPage />}
        ></Route>
        <Route
          path="/new-chat"
          element={isLoggedIn ? <NewChat /> : <LoginPage />}
        ></Route>
        <Route path="*" element={isLoggedIn ? <ChatPage /> : <LoginPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
