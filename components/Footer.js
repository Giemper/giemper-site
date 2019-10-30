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
                    <div className="col-6 align-self-end foot-block">
                        <p className="title">Guillermo Magdaleno</p>
                        <p>Software Developer</p>
                    </div>
                    <div className="col-6 align-self-center">
                        {
                            sites.map((item) => (
                                <a href={item.link} target="_bind">{item.site}</a>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}