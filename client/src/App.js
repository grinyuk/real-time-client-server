import React from 'react';
import './app.css';
import LongPolling from "./LongPolling";
import EventSourcing from "./EventSourcing";
import WebSock from "./WebSock";

const App = () => {
    return (
        <div>
            <WebSock />
        </div>
    );
};

export default App;