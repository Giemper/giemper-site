import Link from 'next/link';
import { useState, useEffect } from 'react';
import '../styles/Navbar.scss';

const Scroll = () => {
    const [navScroll, setNavScroll] = useState(false);

    useEffect(() => {
        document.addEventListener('scroll', () => {
            (window.scrollY > 200)
                ? setNavScroll(true)
                : setNavScroll(false);
        });
    });

    return navScroll;
}

const Navbar = () => {
    return (
        <div className={"nav " + (Scroll() ? "scrolled" : "none")}>
            <div className="row justify-content-between align-items-center">
                <div className="col">
                    <Link href="#">
                        <a className="nav-button">Home</a>
                    </Link>
                    <Link href="#">
                        <a className="nav-button">Who am I?</a>
                    </Link>
                    <Link href="#">
                        <a className="nav-button">Skills</a>
                    </Link>
                    <Link href="#">
                        <a className="nav-button">Experience</a>
                    </Link>
                </div>
                <div className="col-2">
                    <div className="row justify-content-end">
                        <div className="col-auto lang-selection">
                            <Link href="#">
                                <a className="lang-button">EN</a>
                            </Link>
                            <span> / </span>
                            <Link href="#">
                                <a className="lang-button">ES</a>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Navbar;