import React from 'react';
import SockJsClient from 'react-stomp';

const SOCKET_URL = 'http://localhost:8080/ws-message';

class SocketConnection extends React.Component {

    onConnected = () => {
        console.log("Connected!!")
    }

    render() {
        return <SockJsClient
            url={SOCKET_URL}
            topics={['/message/updated']}
            onConnect={this.onConnected}
            onDisconnect={console.log("Disconnected!")}
            onMessage={msg => this.props.onMessageReceived(msg)}
            debug={false}
        />;
    }
}

export default SocketConnection;