import React from 'react';
import { Route, Routes } from 'react-router-dom'
import Join from '../src/components/Join/Join.js'
import Chat from '../src/components/Chat/Chat.js'

class Main extends React.Component {
    render() {
        return <>
            <Routes>
                <Route path="/" element={<Join />} />
                <Route path="/chat" element={<Chat />} />
            </Routes>
        </>;
    }
}

export default Main;
