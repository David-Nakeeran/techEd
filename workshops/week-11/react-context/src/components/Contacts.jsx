"use client";
import { useTheme } from "@/context/ThemeContext";

export default function Contacts() {
  const { theme } = useTheme();
  return (
    <div className={theme}>
      <h2>Manny</h2>
      <p>Instrctor</p>
    </div>
  );
}
