
export default function ingrdtList({ingrdts,getRecipe}){
   const ingrdtListItems = ingrdts.map((ingrdt) => (
    <li key={ingrdt}>{ingrdt}</li>
  ));
  return (<>
{ingrdts.length > 0 && (
        <section>
          <h2>Ingredients on hand:</h2>
          <ul className="ingrdtList" aria-live="polite">
            {ingrdtListItems}
          </ul>
          {ingrdts.length > 3 && (
            <div className="get-recipe-container">
              <div>
                <h3>Ready for a recipe?</h3>
                <p>Genereate a recipe from your list of ingredients.</p>
              </div>
              <button onClick={getRecipe}  id="get-recipe">
                Get a recipe
              </button>
            </div>
          )}
           </section>
          )}
        </>
  )
}