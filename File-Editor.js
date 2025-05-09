function FileEditor() {
    const [fileContent, setFileContent] = useState('');
    const [filePath, setFilePath] = useState('');

    const saveFile = () => {
        fetch('http://your-termux-ip:3000/api/files/upload', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ path: filePath, content: fileContent })
        })
        .then(res => res.json())
        .then(alert('File saved!'));
    };

    return (
        <div>
            <input 
                placeholder="File path" 
                value={filePath}
                onChange={(e) => setFilePath(e.target.value)}
            />
            <textarea
                value={fileContent}
                onChange={(e) => setFileContent(e.target.value)}
                rows={10}
                cols={50}
            />
            <button onClick={saveFile}>Save File</button>
        </div>
    );
}
