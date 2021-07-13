// import logo from './logo.svg';
import "./App.css";
import React, { useState } from "react";
import ColorList from "./ColorList";
import colorData from "./color-data.json";
import AddColorForm from "./AddColorForm";
import {v4} from "uuid";

function App() {
  const [colors, setColors] = useState(colorData);

  return (
    <>
      <AddColorForm onNewColor={(title, color) => {
        const newColor = [
          ...colors,
          {
            id: v4(),
            title,
            color,
            rating: 0,
          }
        ];
        setColors(newColor);
      }}/>
      <ColorList
        colors={colors}
        onRemoveColor={(id) => {
          const newColors = colors.filter((color) => color.id !== id);
          setColors(newColors);
        }}
        onRateColor={(id, rating) => {
          const newColors = colors.map((color) => (
            color.id === id ? { ...color, rating } : color
          ));
          setColors(newColors);
        }}
      />
    </>
  );
}

export default App;
