# React Translation Application

This React application allows users to translate selected text into multiple languages using the Google Translate API. The application features a context menu for language selection, displays translations with word counts, and highlights selected text.

## Features

- **Text Selection**: Users can select text in the textarea.
- **Context Menu**: Right-click on the selected text to choose a target language from a context menu.
- **Translations**: View translations for the selected text in various languages.
- **Word Count**: Displays word count for the selected text alongside translations.


## Installation

### 1. Clone the Repository

First, clone the repository to your local machine:

```bash
git clone https://github.com/your-username/react-translation-app.git
cd react-translation-app
```

### 2. Install Dependencies

Install the project dependencies using npm or yarn:

```bash
npm install
```

or

```bash
yarn install
```

### 3. Configure API Keys

Obtain an API key for Google Translate from [RapidAPI](https://rapidapi.com). Create a `.env` file in the root directory of your project and add your API key:

```bash
REACT_APP_GOOGLE_TRANSLATE_API_KEY=your-rapidapi-key
```

Replace `your-rapidapi-key` with your actual API key.

## Running the Application

### 1. Start the Development Server

To run the development server and view the application locally, use:

```bash
npm start
```

or

```bash
yarn start
```

The application will be available at [http://localhost:3000](http://localhost:3000) in your web browser.

### 2. Build for Production

To create a production build of the application, use:

```bash
npm run build
```

or

```bash
yarn build
```

This command generates a `build` directory with the production-ready files.

## Application Structure

- `src/`: Source code for the application
  - `App.tsx`: Main application component
  - `components/`: Contains reusable components like `TextInput`, `ContextMenu`, and `TranslationList`
  - `translateService.ts`: Functions for interacting with the Google Translate API
  - `App.css`: Styling for the application
