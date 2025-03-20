import { Home, Menu } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Options } from './options/navbar-options';

export function LeftNavbar({ setOpen }) {
    return (
        <aside className={`absolute top-0 h-full w-75 bg-navbar-light ${setOpen ? 'block' : 'hidden'}`}>
            <div className='flex flex-row justify-between m-8'>
                <Menu className="w-8 h-8" onClick={() => setOpen(false)} /> {/* Al hacer clic, cierra el menú */}
                <Link to="/" onClick={() => setOpen(false)}>
                    <Home className="w-8 h-8" />
                </Link>
            </div>

            <hr className='mx-5 opacity-25' />
            {/* top */}
            <div className='flex flex-col'>
                <Options svg={'./img/options-img/article.svg'} text={"Articles"} />
                <Options svg={'./img/options-img/news.svg'} text={"News"} />
                <Options svg={'./img/options-img/friends.svg'} text={"Friends"} />
                <Options svg={'./img/options-img/chat.svg'} text={"Global Chat"} />
            </div>

            {/* bottom */}
            <div className='absolute bottom-0 mb-1 w-full'>
                <Options svg={'./img/options-img/profile.svg'} text={"Profile"} />
                <Options svg={'./img/options-img/settings.svg'} text={"Settings"} />
            </div>
        </aside>

    );
}
