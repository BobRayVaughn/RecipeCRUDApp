import React from "react";
import DeleteButton from "./DeleteButton";

function RecipeList({recipes, setRecipes}) {

  const list = recipes.map((recipe, index) => {
      return (
        <tr key={index}>
            <td>
              {recipe.name}
            </td>
            <td>
              {recipe.cuisine}
            </td>
            <td>
              <img src={recipe.photo} width="100%" height="100%" alt="food"/>
            </td>
            <td className="content_td">
              <p>{recipe.ingredients}</p>
            </td>
            <td className="content_td">
              <p>{recipe.preparation}</p>
            </td>
            <td>
            <DeleteButton recipes={recipes} setRecipes={setRecipes} index={index}/>
            </td>
        </tr>
      )
  })

  return (
    <div className="recipe-list">
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Cuisine</th>
            <th>Photo</th>
            <th>Ingredients</th>
            <th>Preparation</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {list}
        </tbody>
      </table>
    </div>
  );
}

export default RecipeList;
