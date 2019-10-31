const Footer = (props) => {
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
                        <p className="title">Guillermo Magdaleno</p>
                        <p>Software Developer</p>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12 align-self-center">
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
    );
}

export default Footer;