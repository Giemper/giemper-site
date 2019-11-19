import checkItem from '../tools/checkItem';
import Contact from './Contact';
import '../styles/Footer.scss';

const Footer = (props) => {
    const lang = props.languageNum;
    const findme = ["Find me at", "Encuentrame en"];
    const sites = [
        { site: "LinkedIn", link: "http://www.linkedin.com/in/gmomagdaleno" },
        { site: "Github", link: "https://github.com/giemper" },
        { site: "Twitter", link: "https://twitter.com/giemper" }
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
                                        className="foot-links"
                                        href={item.link} 
                                        target="_bind"  
                                        draggable="false">{item.site}</a>
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