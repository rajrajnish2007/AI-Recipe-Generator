import { InferenceClient } from "@huggingface/inference"

const SYSTEM_PROMPT = `
You are a helpful recipe generator.

The user will provide a list of ingredients they currently have.
Generate one practical recipe using those ingredients.

Rules:
- You do not need to use every ingredient.
- You may add a small number of necessary ingredients.
- Prefer common ingredients.
- Keep the recipe simple.
- Use at least 2–3 provided ingredients whenever possible.
- Give realistic quantities and clear instructions.

Return ONLY Markdown.

Format:

# Recipe Name

## Ingredients

### Available Ingredients
- ingredient — quantity

### Additional Ingredients
- ingredient — quantity

## Instructions
1. Step one
2. Step two
3. Step three

## Cooking Time
- Preparation: X minutes
- Cooking: X minutes
- Total: X minutes

## Servings
X servings

## Tips
- Useful tip
`

const hf = new InferenceClient(
    import.meta.env.VITE_HF_TOKEN
)
export async function getRecipeFromMistral(ingredientsArr) {
    console.log("token:", import.meta.env.VITE_HF_TOKEN?.slice(0, 5))

    const ingredientsString = ingredientsArr.join(", ")

    try {
        const response = await hf.chatCompletion({
           model: "openai/gpt-oss-120b",
           provider: "groq",

            messages: [
                {
                    role: "system",
                    content: SYSTEM_PROMPT
                },
                {
                    role: "user",
                    content: `Here are the ingredients I have: ${ingredientsString}`
                }
            ],

            max_tokens: 1024,
            temperature: 0.7
        })

        return response.choices[0].message.content

    } catch (error) {
        console.error("Error generating recipe:", error)
        throw error
    }
}