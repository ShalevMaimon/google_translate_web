export const languages = [
    { code: 'he', name: 'Hebrew' },
    { code: 'en', name: 'English' },
    { code: 'es', name: 'Spanish' },
    { code: 'fr', name: 'French' },
    { code: 'de', name: 'German' },
    { code: 'zh', name: 'Chinese' }
];

const ContextMenu = ({ x, y, onSelectLanguage }) => {
    return (
        <ul 
            style={{
                position: 'absolute',
                top: y,
                left: x,
                backgroundColor: 'white',
                border: '1px solid #ccc',
                listStyle: 'none',
                padding: '10px',
                margin: 0,
                zIndex: 1000,
                borderRadius: '20px',
            }}
        >

            {languages.map(lang => (
                <li
                    key={lang.code}
                    onClick={() => onSelectLanguage(lang.code)}
                    style={{ cursor: 'pointer', padding: '5px 0', color: 'black' }}
                >
                    {lang.name}
                </li>
            ))}
        </ul>
    );
};

export default ContextMenu;
