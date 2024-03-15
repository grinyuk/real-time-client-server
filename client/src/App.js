import React from 'react';
import './app.css';
import LongPolling from "./LongPolling";
import EventSourcing from "./EventSourcing";

const App = () => {
    return (
        <div>
            <EventSourcing />
        </div>
    );
};

export default App;