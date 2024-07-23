import React, { useState } from 'react';
import { detectLanguage } from '../translateService';
import ContextMenu from '../ContextMenu';
import { languages } from '../ContextMenu';
import { translateText } from '../translateService';
import TranslationList from './TranslationList';

function TextInput() {
    const [selectedText, setSelectedText] = useState<string>('');
    const [fromLang, setFromLang] = useState<string>('en'); 
    const [contextMenu, setContextMenu] = useState<{ x: number, y: number } | null>(null);
    const [loading, setLoading] = useState<boolean>(false);
    const [translations, setTranslations] = useState<{ [key: string]: string }>({});
    const [wordCount, setWordCount] = useState<number>(0);

    const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        const text = e.target.value;
        setSelectedText(text);
        setTranslations({});
        setWordCount(calculateWordCount(text));
    };

    const startTranslate = async (lang: string) => {
        if (!fromLang) {
            alert('Unable to detect source language. Please select it manually.');
            return;
        }
        const language = languages.find(l => l.code === lang);
        setLoading(true);
        if (selectedText === '') {
            setTranslations({});
            setLoading(false);
            return '';
        }
        try {
            const result = await translateText(selectedText, fromLang, lang);
            setTranslations((prevTranslations) => ({
                ...prevTranslations,
                [String(language?.name)]: String(result.trans),
            }));
        } catch (error) {
            console.error('Error:', error);
            return '';
        } finally {
            setLoading(false);
        }
    };

    const handleContextMenu = async (e: React.MouseEvent<HTMLTextAreaElement>) => {
        e.preventDefault();
        const selectedText = window.getSelection()?.toString() || '';
        if (selectedText.trim() === '') {
            return;
        }
        setSelectedText(selectedText);
        setWordCount(calculateWordCount(selectedText));

        try {
            const detectedLang = await detectLanguage(selectedText);
            setFromLang(detectedLang);
            setContextMenu({ x: e.clientX, y: e.clientY });
        } catch (error) {
            console.error('Error detecting language:', error);
            alert('Error detecting source language.');
        }
    };

    const handleSelectLanguage = async (lang: string) => {
        setContextMenu(null);
        try {
            await startTranslate(lang);
        } catch (error) {
            console.error('Error during translation:', error);
            alert('Error during translation.');
        }
    };

    const calculateWordCount = (text: string) => {
        return text.trim() ? text.trim().split(/\s+/).length : 0;
    };

    return (
        <div style={{ marginLeft: '-440px' }}>
            <textarea
                className='textboxbig'
                id="text-input"
                onChange={handleChange}
                onContextMenu={handleContextMenu}
                rows={10}
                cols={50}
                placeholder="write your text"
            />
            {contextMenu && (
                <ContextMenu
                    x={contextMenu.x}
                    y={contextMenu.y}
                    onSelectLanguage={handleSelectLanguage}
                />
            )}
            <br /><br /><br />
            <h1 style={{fontSize: '40px'}}>Translation:</h1>
            <TranslationList trans={translations} selectedTextWordCount={wordCount} />

            <div>{loading ? <p>Loading...</p> : null}</div>
        </div>
    );
}

export default TextInput;
