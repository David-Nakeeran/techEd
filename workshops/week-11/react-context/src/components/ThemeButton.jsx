"use client"; // Context only works in client compontent
import { useTheme } from "@/context/ThemeContext";

export default function ThemeButton() {
  const { state, dispatch } = useTheme();
  return (
    <>
      <button
        className={state.theme}
        onClick={() => dispatch({ type: "light" })}
      >
        Toggle light
      </button>
      <button
        className={state.theme}
        onClick={() => dispatch({ type: "dark" })}
      >
        Toggle dark
      </button>
    </>
  );
}
