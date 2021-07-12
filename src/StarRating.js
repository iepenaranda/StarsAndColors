import React, { useState } from "react";
import Star from "./Star";
import { createArray } from "./utils";

export default function StarRating ({totalStars = 5}) {
    const [selectedStar, setSelectedStar] = useState(3);

    return (
        <>
        {createArray(totalStars).map((n,i) => (
            <Star
            key={i}
            selected={i < selectedStar}
            onSelect={() => setSelectedStar(i + 1)}
            />
            
        ))}
        <p>{selectedStar} of {totalStars} stars</p>
        </>
    );
}