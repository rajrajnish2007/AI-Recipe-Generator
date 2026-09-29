# Chef_Claude 🍳
This is my first react app which takes ingredients you have and generate recipes using Hugging Face AI.
## How to run?
###  Clone this repository
###  Open the project folder and run these command on your machine
```
cd Chef_Claude
npm install
```
   
### Setting Up Hugging Face AI
I have used Hugging Face AI to generate recipes, if you want to do the same you will need a Hugging Face API token.

1. Create a Hugging Face account

Go to:

https://huggingface.co/

Create an account or log in if you already have one.

2. Create an API token

After logging in:

- Go to your Hugging Face profile.
- Open Settings.
- Go to Access Tokens.
- Create a new token.
- Copy the token.

3. Create the .env file

In the main project folder, create a file named ".env"  inside file add:

HF_TOKEN=enter_your_token_here

### Start the Project:
Run:
```
npm run dev
```
The terminal will show a local URL. Open that URL in your browser.

That's it! 🎉

Add the ingredients you have, click Get a recipe, and let the AI cook something for you. 👨‍🍳

## Built With
- React
- Vite
- JavaScript
- CSS
- Hugging Face AI
- React Markdown