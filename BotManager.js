import React, { useState } from 'react';

function BotManager() {
    const [botStatus, setBotStatus] = useState({});
    
    const startBot = (botName) => {
        fetch('http://your-termux-ip:3000/api/bot/start', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ botName })
        })
        .then(res => res.json())
        .then(data => {
            setBotStatus(prev => ({ ...prev, [botName]: 'running' }));
        });
    };

    return (
        <div>
            <h2>Bot Control Panel</h2>
            <button onClick={() => startBot('telegram-bot')}>
                Start Telegram Bot
            </button>
            <div>Status: {botStatus['telegram-bot'] || 'stopped'}</div>
        </div>
    );
}
