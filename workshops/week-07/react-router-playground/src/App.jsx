import { Routes, Route } from "react-router";
import { Header } from "./components/Header";
import { NotFound } from "./pages/NotFound";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { UserProfile } from "./pages/UserProfile";
import { Profile } from "./components/Profile";
import "./App.css";
import { UserOrders } from "./components/UserOrders";
import { Form } from "./components/Form";
import { DryForm } from "./components/DryForm";

export function App() {
  const username = "David";
  return (
    <>
      <Header username={username} />
      <Routes>
        <Route path={"/"} element={<Home />}></Route>
        <Route path={"about"} element={<About />} />
        <Route path={"form"} element={<Form />} />
        <Route path={"dryform"} element={<DryForm />} />
        <Route path={"/userprofile/"} element={<UserProfile />}>
          <Route path={":username"} element={<Profile />} />
          {/* <Route path={"orders"} element={<UserOrders />} /> */}
        </Route>
        <Route path={"*"} element={<NotFound />} />
      </Routes>
    </>
  );
}
