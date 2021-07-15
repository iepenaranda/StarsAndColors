import React, { createContext, useContext, useState } from "react";
import colorData from "./color-data.json";
import { v4 } from "uuid";

const ColorContext = createContext();
export const useColors = () => useContext(ColorContext);

export default function ColorProvider({ children }) {
  const [colors, setColors] = useState(colorData);

  const addColor = (title, color) => {
    setColors([
      ...colors,
      {
        id: v4(),
        title,
        color,
        rating: 0,
      },
    ]);
  };

  const updateRating = (id, rating) => {
    setColors(
      colors.map((color) => (color.id === id ? { ...color, rating } : color))
    );
  };

  const removeColor = (id) =>
    setColors(colors.filter((color) => color.id !== id));

  return (
    <ColorContext.Provider
      value={{ colors, addColor, updateRating, removeColor }}
    >
      {children}
    </ColorContext.Provider>
  );
}