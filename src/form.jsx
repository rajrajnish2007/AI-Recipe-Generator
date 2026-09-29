



export default function Form({setter}) {
  function SubmitEvent(FormData) {
const newIngrdt = FormData.get("ingrdt");
setter((prevIngrdt) => [...prevIngrdt, newIngrdt]);
  }
 
  return (
    <>
      <form action={SubmitEvent}>
        <ingredient-item className="Add_ingred">
          <input
            type="text"
            aria-label="Add ingredient"
            placeholder="e.g. oregano"
            name="ingrdt"
          />
          <button type="submit"> Add Ingredients</button>
        </ingredient-item>
      </form>
      
        
    </>
  );
}
