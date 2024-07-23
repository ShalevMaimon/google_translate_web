import axios from 'axios';

const API_KEY = 'b6d022d12fmsh16e70aab18bf88ep1fb439jsne1f870063558';
const API_URL = 'https://google-translate113.p.rapidapi.com/api/v1/translator/html';

export const translateText = async (html: string, fromLang: string, toLang: string) => {
    try {
        const data = JSON.stringify({
            from: fromLang,
            to: toLang,
            html: html
        });

        const response = await axios.post(
            API_URL,
            data,
            {
                headers: {
                    'Content-Type': 'application/json',
                    'x-rapidapi-key': API_KEY,
                    'x-rapidapi-host': 'google-translate113.p.rapidapi.com'
                }
            }
        );
        
        if (response.status === 200) {
            return response.data;
        } else {
            console.error(`Unexpected response status: ${response.status}`);
            throw new Error(`Unexpected response status: ${response.status}`);
        }
    } catch (error: any) {
        if (error.response) {
            // Server responded with a status other than 2xx
            console.error('Error response:', error.response.data);
            console.error('Error status:', error.response.status);
            console.error('Error headers:', error.response.headers);
        } else if (error.request) {
            // No response was received
            console.error('Error request:', error.request);
        } else {
            // Something happened in setting up the request
            console.error('Error message:', error.message);
        }
        throw error;
    }
};



export const detectLanguage = async (text:string) => {
    const options = {
        method: 'POST',
        url: 'https://google-translator9.p.rapidapi.com/v2/detect',
        headers: {
            'x-rapidapi-key': API_KEY,
            'x-rapidapi-host': 'google-translator9.p.rapidapi.com',
            'Content-Type': 'application/json'
        },
        data: { q: text } // עדכן כאן את השם של הפרמטר ל-'q' כפי שצוין בתיעוד
    };

    try {
        const response = await axios.request(options);
        console.log(response)
        console.log(response.data.data.detections[0][0].language)
        return response.data.data.detections[0][0].language; 
    } catch (error) {
    }
};
