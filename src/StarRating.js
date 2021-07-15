import React from "react";
import Star from "./Star";
import { createArray } from "./utils";

export default function StarRating({
  totalStars = 5,
  selectedStars = 0,
  onRate = (index) => index,
  rating,
  color,
}) {
  return (
    <>
      {createArray(totalStars).map((n, i) => (
        <Star
          key={i}
          selected={i < rating}
          onSelect={() => onRate(i + 1)}
          color={color}
        />
      ))}
      <p>
        {rating} of {totalStars} stars
      </p>
    </>
  );
}
