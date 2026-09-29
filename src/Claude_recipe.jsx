import ReactMarkdown from "react-markdown";
export default function claudeRecipe({recipe}){
return(
    <>
    { recipe &&
        <section className="suggested-recipe-container" aria-live="polite">
           <h1>Chef-Claude Recommends:</h1>
             <ReactMarkdown>{recipe}</ReactMarkdown>
        </section>
   }               
</>)
}