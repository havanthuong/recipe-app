import React, { Component } from "react";
import style from "./recipe.module.css";

const Recipe = ({ title, calories, image, ingredients }) => {
  return (
    <div className={style.recipe}>
      <h2>{title}</h2>
      <ol>
        {ingredients.map((ingredient, index) => (

          <li key={index}>{ingredient.text}</li>
        ))}
      </ol>
      <p>{calories}</p>
      <img className={style.image} src={image} />
    </div>
  );
};
export default Recipe;
