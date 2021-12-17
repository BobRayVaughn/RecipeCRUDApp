import React, { useState } from "react";

function RecipeCreate({ recipes, setRecipes}) {

  const [type, setType] = useState("Text");
  const initialFormState = {name: '', cuisine: '', photo: '', ingredients: '', preparation: ''};
  
  const [formData, setFormData] = useState(initialFormState)
  
   function handleChange(event){
    setFormData({
      ...formData, [event.target.name]: event.target.value
    })
  };
  
  function handleCreate(event){
    event.preventDefault();
    setRecipes([...recipes,formData]);
    setFormData(initialFormState);
  }
  
  return (
    <form name="create" onSubmit={handleCreate}>
      <table>
        <tbody>
          <tr>
            <td>
             <input
                id="name"
                type="text"
                name="name"
                onChange={handleChange}
                value={formData.name}
                placeholder= "Name"
             />
            </td>
            <td>
             <input
                id="cuisine"
                type="text"
                name="cuisine"
                onChange={handleChange}
                value={formData.cuisine}
                placeholder= "Cuisine"
             />
            </td>
            <td>
             <input 
                id="photo" 
                name="photo" 
                type="url" 
                onChange={handleChange}
                value={formData.photo} 
                placeholder= "URL"
              />
            </td>
            <td>
              <textarea 
                id="ingredients" 
                name="ingredients" 
                type="text" 
                onChange={handleChange}
                value={formData.ingredients}
                placeholder= "Ingredients"
              />
            </td>
            <td>
              <textarea 
                id="preparation" 
                name="preparation" 
                type="text" 
                onChange={handleChange}
                value={formData.preparation} 
                placeholder= "Preparation"
              />
            </td>
            <td>
              <button type="submit" onClick={handleCreate}>Create</button>
            </td>
          </tr>
        </tbody>
      </table>
    </form>
  );
}

export default RecipeCreate;