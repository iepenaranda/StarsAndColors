import React from "react";
import { FaTrash } from "react-icons/fa";
import StarRating from "./StarRating";
import { useColors } from "./ColorProvider";

export default function Color({id, title, color, rating}) {
  const { updateRating, removeColor } = useColors();
  return (
    <section>
      <h1>{title}</h1>
      <button onClick={() => removeColor(id)}> <FaTrash/> </button>
      <div style={{height: 20, width: 200, backgroundColor: color}}>
      </div>
      <StarRating onRate={(rating) => updateRating(id, rating)} rating={rating} color={color}/>
    </section>
  );
}