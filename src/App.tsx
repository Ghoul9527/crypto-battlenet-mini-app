import React, { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import WebApp from '@twa-dev/sdk'

const App: React.FC = () => {
    const [count, setCount] = useState(0)

    const [userName, setUserName] = useState<string>('');

    useEffect(() => {
        const initTelegramWebApp = () => {
            const tg = (window as any).Telegram.WebApp;
            tg.ready();

            const user = tg.initDataUnsafe?.user;
            if (user) {
                setUserName(user.username || `${user.first_name} ${user.last_name}`);
            }
        };

        initTelegramWebApp();
    }, []);

    return (
        <>
            <div>
                <a href="https://vitejs.dev" target="_blank">
                    <img src={viteLogo} className="logo" alt="Vite logo"/>
                </a>
                <a href="https://react.dev" target="_blank">
                    <img src={reactLogo} className="logo react" alt="React logo"/>
                </a>
            </div>
            <h1>Vite + React</h1>
            <div className="card">
                <button onClick={() => setCount((count) => count + 1)}>
                    计数是 {count}
                </button>
            </div>
            {/* 在此处添加带有警告回调的按钮 */}
            <div className="card">
                <button onClick={() => WebApp.showAlert(`Hello World! Current count is ${count}`)}>
                    显示警告
                </button>
            </div>

            <div>
                <h1>Telegram Mini App</h1>
                <h2>User: {userName}</h2>
            </div>
        </>
    )
}

export default App