import {useEffect, useState} from 'react'
import './App.css'

function App() {
    const [text, setText] = useState('');
    const token = localStorage.getItem('token');

    useEffect(() => {
        console.log(text);
    }, [text]);

    return (
        <>
            <div>
                <img src="../public/logo.png" className="logo react" alt="React logo"/>
            </div>
            <h1>Fake Info Verification Service - made by Oleksii Stepaniak, master of NU KhPI</h1>
            <div className="card">
                <p>
                    Edit <code>src/App.tsx</code> and save to test HMR
                </p>
            </div>
            <textarea
                className="main-textarea"
                value={text}
                onChange={e => setText(e.target.value)}
                placeholder={token ? "" : "To continue, you need to authenticate in our service!"}
                disabled={!token}

            ></textarea>
        </>
    )
}

export default App
