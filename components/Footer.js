import checkItem from '../tools/checkItem';
import Contact from './Contact';
import '../styles/Footer.scss';

const Footer = (props) => {
    const lang = props.languageNum;
    const findme = ["Find me at", "Encuentrame en"];
    const sites = [
        { site: "LinkedIn", link: "http://www.linkedin.com/in/gmomagdaleno", icon: "icons/linkedin.svg" },
        { site: "Github", link: "https://github.com/giemper", icon: "icons/github.svg" },
        { site: "Twitter", link: "https://twitter.com/giemper", icon: "icons/twitter.svg" }
    ];

    return (
        <div className="footer">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-md-6 col-sm-12 align-self-end foot-block">
                        <Contact languageNum={lang}/>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12">
                        <div className="foot-social">
                            <h2>{checkItem(findme, lang)}</h2>
                            {
                                sites.map((item, index) => (
                                    <a key={index} 
                                        className="foot-combo"
                                        href={item.link} 
                                        target="_bind"  
                                        draggable="false">
                                            <img src={item.icon} className="foot-icon"/>
                                            <label className="foot-links">{item.site}</label>
                                    </a>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;