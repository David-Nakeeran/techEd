import "./App.css";
import { Button } from "./components/Button.jsx";
import { WelcomeCard } from "./components/WelcomeCard.jsx";
import { Header } from "./components/Header.jsx";
import { useState } from "react";

export const App = () => {
  let [count, setCount] = useState(0);
  const decrementHandleClick = () => {
    if (count != 0) {
      setCount(count - 1);
    } else {
      console.log("Count can not be decremented past 0");
    }
  };
  return (
    <>
      <Header />
      <main>
        <WelcomeCard firstName="Alice" title="Lady" />
        <WelcomeCard firstName="Jane" title="Lady" />
        <WelcomeCard firstName="Bob" />
        <Button
          count={count}
          incrementCount={() => setCount(count + 1)}
          decrementCount={decrementHandleClick}
        />
        <p>{count}</p>
      </main>
    </>
  );
};
