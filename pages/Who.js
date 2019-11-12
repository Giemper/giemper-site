import PageHeader from '../components/PageHeader';
import checkItem from '../tools/checkItem';
import VALUES_WHO from '../values/VALUES_WHO';

const Who = (props) => {
    const lang = props.languageNum;
    const title = ["Who am I?", "¿Quien Soy?"];
    const valuesWho = checkItem(VALUES_WHO, lang);
    

    return (
        <div className="page">
            <div className="container">
                <PageHeader title={checkItem(title, lang)} id="nav_who" />
                <div className="col-lg-8 col-md-12 col-sm-12 who-item">
                    {
                        valuesWho.map((item, index)=>(
                            <p key={index}>{item}</p>
                        ))
                    }
                </div>
            </div>
        </div>
    );
}

export default Who;