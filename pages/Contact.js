import PageHeader from '../components/PageHeader';
import VALUES_CONTACT from '../values/VALUES_CONTACT';
import checkItem from '../tools/checkItem';

const Contact = (props) => {
    const lang = props.languageNum;
    const title = ["Contact", "Contacto"];

    return (
        <div className="page">
            <div className="container">
                <PageHeader title={checkItem(title, lang)} id="nav_cont" />
                <p>Let's get in contact</p>
            </div>
        </div>
    );
}

export default Contact;