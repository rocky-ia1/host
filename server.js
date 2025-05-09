const express = require('express');
const bodyParser = require('body-parser');
const { exec } = require('child_process');
const fs = require('fs');

const app = express();
app.use(bodyParser.json());

// API لإدارة البوتات
app.post('/api/bot/start', (req, res) => {
    const { botName } = req.body;
    
    exec(`cd ~/bots/${botName} && python main.py`, (error, stdout, stderr) => {
        if (error) {
            return res.status(500).json({ error: stderr });
        }
        res.json({ message: `Bot ${botName} started`, output: stdout });
    });
});

// API لإدارة الملفات
app.post('/api/files/upload', (req, res) => {
    const { path, content } = req.body;
    
    fs.writeFile(path, content, (err) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json({ message: 'File saved successfully' });
    });
});

// تشغيل الخادم على المنفذ 3000
app.listen(3000, () => {
    console.log('Server running on port 3000');
});
