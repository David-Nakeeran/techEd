"use client";
import { createContext, use, useContext, useReducer } from "react";

// reducer function
function themeReducer(state, action) {
  console.log(state, action);
  switch (action.type) {
    case "light":
      return { ...state, theme: "light" };
    case "dark":
      return { ...state, theme: "dark" };
    case "colourblind":
      return { ...state, theme: "colourblind" };
    case "dyslexia":
      return { ...state, theme: "dyslexia" };
    default:
      return { ...state, theme: "light" };
  }
}

const ThemeContext = createContext("light");

export function ThemeProvider({ children }) {
  //   const [theme, setTheme] = useState("light");
  //   const [colourblind, setColourblind] = useState("off");
  //   const [dyslexia, setDyslexia] = useState("off");
  const [state, dispatch] = useReducer(themeReducer, { theme: "" });

  return (
    <ThemeContext.Provider value={{ state, dispatch }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}
