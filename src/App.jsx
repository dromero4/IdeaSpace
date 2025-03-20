import { Topnavbar } from './components/Top-Navbar';
import WebSocketClient from './components/websocketclient';
import './styles/topnavbar.css';

function App() {
  return (
    <>
      <WebSocketClient />
      <Topnavbar />

    </>
  )
}

export default App
