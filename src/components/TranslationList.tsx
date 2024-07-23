import React from 'react';

function TranslationList({ trans, selectedTextWordCount }: { trans: { [key: string]: string }, selectedTextWordCount: number }) {
    return (
        <div>
            {Object.keys(trans).length > 0 ? (
                Object.keys(trans).map((lang) => (
                    <div key={lang} style={{ marginBottom: '10px' }}>
                        <div>Word count: {selectedTextWordCount}</div>
                        <textarea
                            className='textbox'
                            readOnly
                            value={`${lang}: ${trans[lang]}`}
                        />
                        <br/><br/><br/>      
                    </div>
                ))
            ) : (
                <textarea
                    className='textbox'
                    readOnly
                    placeholder="No translations, start by selecting a text"
                />
            )}
        </div>
    );
}

export default TranslationList;
