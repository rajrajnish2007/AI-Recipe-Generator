import React from "react";
import Header from "./Header.jsx";
import Form from "./form.jsx";
import ClaudeRecipe from "./Claude_recipe";
import IngrdtList from "./Ingrdts_list";
import { getRecipeFromMistral } from "./ai"
import LoadingMessage from "./loadingMessages.jsx";


export default function App() {
const [ingrdts, setIngrdts] = React.useState([]);
const [isLoading, setIsLoading] = React.useState(false);
const [recipe, setRecipe] = React.useState("");


 async function getRecipe() {
  setIsLoading(true)
 const recipeMarkdown = await getRecipeFromMistral(ingrdts)
 setRecipe(recipeMarkdown)
 setIsLoading(false);
}
  return (
    <>
      <Header />
      <Form setter = {setIngrdts} />
      <IngrdtList ingrdts={ingrdts} getRecipe ={getRecipe} />
      <LoadingMessage isLoading={isLoading} />
      <ClaudeRecipe recipe={recipe} />
    </>
  );
}
