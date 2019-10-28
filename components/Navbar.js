import Link from 'next/link';
import { useState, useEffect } from 'react';
import '../styles/Navbar.scss';
import VALUES_NAVBAR from '../values/VALUES_NAVBAR';

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

const Navbar = (props) => {
    const language = props.language;
    const values = new VALUES_NAVBAR();

    const ChangeToEnglish = (e) => {
        e.preventDefault();
        language.setLanguage(0);
        
    }

    const ChangeToSpanish = (e) => {
        e.preventDefault();
        language.setLanguage(1);
    }

    return (
        <div className={"nav " + (Scroll() ? "scrolled" : "none")}>
            <div className="row justify-content-between align-items-center">
                <div className="col">
                    {
                        values.sections.map((section, index) => (
                            <Link href={'#' + section.id} key={index}>
                                <a className="nav-button">
                                    { values.getValueLanguage(index, language.lang) }
                                </a>
                            </Link>
                        ))
                    }
                </div>
                <div className="col-2">
                    <div className="row justify-content-end">
                        <div className="col-auto lang-selection">
                            <a id="Nav_Eng" 
                                className={"lang-button " + (language.lang == '0' ? "selected" : "none")}
                                onClick={ChangeToEnglish}>EN</a>
                            <span> / </span>
                            <a id="Nav_Esp" 
                                className={"lang-button " + (language.lang == '1' ? "selected" : "none")}
                                onClick={ChangeToSpanish}>ES</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Navbar;