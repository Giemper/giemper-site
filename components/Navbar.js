import Link from 'next/link';
import { useState, useEffect } from 'react';
import '../styles/Navbar.scss';
import VALUES_NAVBAR from '../values/VALUES_NAVBAR';
import checkItem from '../tools/checkItem';

const Scroll = () => {
    const [navScroll, setNavScroll] = useState(false);

    useEffect(() => {
        document.addEventListener('scroll', () => {
            (window.scrollY > 200 || window.pageYOffset > 200)
                ? setNavScroll(true)
                : setNavScroll(false);
        });
    });

    return navScroll;
}

const Navbar = (props) => {
    const language = props.language;

    const ChangeToEnglish = (e) => {
        e.preventDefault();
        language.setLanguage(0);
    }

    const ChangeToSpanish = (e) => {
        e.preventDefault();
        language.setLanguage(1);
    }

    return (
        <div className={`nav ${Scroll() ? "scrolled" : ""}`}>
            <div className="row justify-content-between align-items-center">
                <div className="col">
                    { props.viewWidth > 768 &&
                        VALUES_NAVBAR.map((item, index) => (
                            <Link href={`/#${item.id}`} as={`/giemper-site/#${item.id}`} key={index} replace>
                                <a className="nav-button" draggable="false">
                                    { checkItem(item.title, language.lang) }
                                </a>
                            </Link>
                        ))
                    }
                </div>
                <div className="col-auto">
                    <div className="row justify-content-end">
                        <div className="col-auto lang-selection">
                            <img src="globe.svg" className="globe-icon"/>
                            <a  id="Nav_Eng" 
                                href="#"
                                className={`lang-button + ${language.lang == '0' ? "selected" : "none"}`}
                                onClick={ChangeToEnglish}>EN</a>
                            <span> / </span>
                            <a  id="Nav_Esp" 
                                href="#"
                                className={`lang-button + ${language.lang == '1' ? "selected" : "none"}`}
                                onClick={ChangeToSpanish}>ES</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Navbar;