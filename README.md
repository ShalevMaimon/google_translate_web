# React Translation Application ![Google Translate](https://img.shields.io/badge/Google%20Translate-4285F4?style=flat&logo=google-translate&logoColor=white) ![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=flat&logo=typescript&logoColor=white)

This React application allows users to translate selected text into multiple languages using the Google Translate API. The app provides a seamless user experience with a context menu for language selection, displays translations with word counts, and highlights the selected text.

🔗 **Live Demo:** [https://google-translate-app-eta.vercel.app/](https://google-translate-app-eta.vercel.app/)

---

## Features ✨

- **Text Selection**: Users can select text within a textarea.
- **Context Menu**: Right-click on the selected text to choose a target language from the context menu.
- **Translations**: View translations of the selected text in various languages.
- **Word Count**: Displays word count for the selected text along with the translations.

---

## Screenshots 📸

A visual guide for translating text on a website:

![Screenshot 1](src/p1.PNG)  
*Writing the text in the box.*

![Screenshot 2](src/p2.PNG)  
*Select text to translate and right-click to select the language.*

![Screenshot 3](src/p3.PNG)  
*Translating text into a variety of languages.*

---

## Installation 🛠️

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/react-translation-app.git
cd react-translation-app
2. Install Dependencies
Using npm:

bash
Copy
Edit
npm install
Or using yarn:

bash
Copy
Edit
yarn install
3. Configure API Keys 🔑
To use the Google Translate API, get an API key from RapidAPI.
Create a .env file in the root directory of the project and add the following:

env
Copy
Edit
REACT_APP_GOOGLE_TRANSLATE_API_KEY=your-rapidapi-key
Replace your-rapidapi-key with your actual key.

Running the Application 🚀
Development Mode
bash
Copy
Edit
npm start
or

bash
Copy
Edit
yarn start
Open your browser and navigate to http://localhost:3000

Production Build
To generate an optimized production build:

bash
Copy
Edit
npm run build
or

bash
Copy
Edit
yarn build
The build output will be in the build/ folder.

Application Structure 🏗️
bash
Copy
Edit
react-translation-app/
├── public/
├── src/
│   ├── components/         # Reusable components like ContextMenu, TextInput, TranslationList
│   ├── App.tsx             # Main app component
│   ├── App.css             # Styling
│   └── translateService.ts # API communication logic
├── .env                    # Your API key (not pushed to Git)
├── package.json
└── README.md
Contributing 🤝
Contributions are welcome! Feel free to open an issue or a pull request.

