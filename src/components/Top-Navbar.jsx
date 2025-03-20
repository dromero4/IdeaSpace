import { Home, Menu } from 'lucide-react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { Index } from './Index.jsx';
import { LeftNavbar } from './LeftNavbar.jsx';
import { useState } from 'react';

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


                <Routes>
                    <Route path="/" element={<Index />} />
                </Routes>

                {open && <LeftNavbar setOpen={setOpen} />}
            </Router>

        </>

    );
}
