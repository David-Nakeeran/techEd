import "./App.css";
import { Button } from "./components/Button.jsx";
import { WelcomeCard } from "./components/WelcomeCard.jsx";
import { Header } from "./components/Header.jsx";
import { Person } from "./components/Person.jsx";
import { ShowMessageButton } from "./components/ShowMessageButton.jsx";
import { Message } from "./components/Message.jsx";
import { useState } from "react";
import { dataArr } from "./lib/data.jsx";
import { v4 as uuidv4 } from "uuid";
export const App = () => {
  let [count, setCount] = useState(0);

  const [isMessageVisible, setIsMessageVisible] = useState(false);

  const decrementHandleClick = () => {
    if (count != 0) {
      setCount(count - 1);
    } else {
      console.log("Count can not be decremented past 0");
    }
  };

  const personElements = dataArr.map((element) => {
    return <Person key={uuidv4()} {...element} />;
  });

  const handleMessageClick = () => {
    setIsMessageVisible(!isMessageVisible);
  };

  return (
    <>
      <Header />
      <main>
        <WelcomeCard firstName="Alice" title="Lady" />
        <WelcomeCard firstName="Jane" title="Lady" />
        <WelcomeCard firstName="Bob" />
        <Button
          // count={count}
          incrementCount={() => setCount(count + 1)}
          decrementCount={decrementHandleClick}
        />
        <p>{count}</p>
        {personElements}
        <ShowMessageButton messageClick={handleMessageClick} />
        {isMessageVisible ? <Message /> : null}
      </main>
    </>
  );
};
