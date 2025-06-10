import { Routes, Route } from "react-router";
import { Header } from "./components/Header";
import { NotFound } from "./pages/NotFound";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { UserProfile } from "./pages/UserProfile";
import { Profile } from "./components/Profile";
import "./App.css";

export function App() {
  const username = "What";
  return (
    <>
      <Header username={username} />
      <Routes>
        <Route path={"/"} element={<Home />}></Route>
        <Route path={"about"} element={<About />} />
        <Route path={"*"} element={<NotFound />} />
        <Route path={"userprofile"} element={<UserProfile />}>
          <Route path={":username"} element={<Profile />} />
        </Route>
      </Routes>
    </>
  );
}
