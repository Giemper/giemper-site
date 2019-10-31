import PageHeader from '../components/PageHeader';

import checkItem from '../tools/checkItem';

const Who = (props) => {
    const lang = props.languageNum;
    const title = ["Who am I?", "¿Quien Soy?"];

    return (
        <div className="page">
            <div className="container">
                <PageHeader title={checkItem(title, lang)} id="nav_who" />
                <div className="col-8 who-item">
                    <p>Without getting into a deeper existencial crisis, the easiest way I can start describing myself is</p>

                    <p>
                        I have a Computer Science Engineering degree from <b>CETYS University</b> in Mexicali, Mexico, and did
                        a half-year academic exchange in the <b>Ecolé Polytechnique</b> of Montreal, Canada.
                    </p>
                </div>
                <div className="col-4">
                    
                </div>
            </div>
        </div>
    );
}

export default Who;