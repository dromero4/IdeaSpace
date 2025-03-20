import { Home, Menu } from 'lucide-react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { Index } from './Index.jsx';
import { LeftNavbar } from './LeftNavbar.jsx';
import { useState } from 'react';
import { Articles } from './Articles.jsx';
import { News } from './News.jsx';
import { Friends } from './Friends.jsx';
import { GChat } from './PChat.jsx';
import { Profile } from './Profile.jsx';

export function Topnavbar() {
    const [open, setOpen] = useState(false);

    return (
        <>
            <Router>
                {/* Menu superior */}
                <nav className="flex items-center w-full h-20 bg-navbar-light shadow-md">
                    <Menu className="w-8 h-8 mx-5" onClick={() => setOpen(!open)} />
                    <Link to="/">
                        <Home className="w-8 h-8" />
                    </Link>
                </nav>

                {open && <LeftNavbar setOpen={setOpen} />}

                <Routes>
                    <Route path="/" element={<Index />} />
                    <Route path="/articles" element={<Articles />} />
                    <Route path="/news" element={<News />} />
                    <Route path="/friends" element={<Friends />} />
                    <Route path="/global-chat" element={<GChat />} />
                    <Route path="/profile" element={<Profile />} />
                    <Route path="/global-chat" element={<GChat />} />
                </Routes>

            </Router>

        </>

    );
}
