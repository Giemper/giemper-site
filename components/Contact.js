import { useState } from 'react';
import emailjs from 'emailjs-com';
import VALUES_CONTACT from '../values/VALUES_CONTACT';
import checkItem from '../tools/checkItem';
import '../styles/Contact.scss';

const Feedback = (props) => {
    if (props.status === "error") return (
        <div className="message-error">
            {
                props.errorList.map((item, index) => (
                    <p key={index}>{checkItem(item, props.language)}</p>
                ))
            }
        </div>
    );
    else if (props.status === "sent") return (
        <div className="message-success">
            <p>{checkItem(VALUES_CONTACT.success, props.language)}</p>
        </div>
    );
    else return <></>;
}

const Contact = (props) => {
    const lang = props.languageNum;
    const [status, setStatus] = useState("");
    const [errorList, setErrorList] = useState([]);

    const validateText = (target, valueContact) => {
        const trim = target.value.trim();
        if (!trim) {
            target.dataset.state = 'invalid';
            setStatus("error");
            setErrorList(old => [...old, valueContact]);
        }
        else target.dataset.state = 'valid';
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setStatus("");
        setErrorList([]);

        validateText(e.target.user_name, VALUES_CONTACT.errorName);
        validateText(e.target.user_email, VALUES_CONTACT.errorEmail);

        if (e.target.user_name.value.trim() && e.target.user_email.value.trim()) {
            emailjs.sendForm('gmail', 'giemper_6OSriQM4', e.target)
                .then((result) => {
                    setStatus("sent");
                }), (error) => {
                    setStatus("error");
                    setErrorList([VALUES_CONTACT.errorServer]);
                }
        }
    }

    return (
        <div>
            <form className="contact-form" onSubmit={handleSubmit}>
                <h2 className="form-title">{checkItem(VALUES_CONTACT.head, lang)}</h2>
                <div>
                    <p className="form-subtitle">{checkItem(VALUES_CONTACT.name, lang)}</p>
                    <input className="form-text" type="text" name="user_name" />
                </div>
                <div>
                    <p className="form-subtitle">{checkItem(VALUES_CONTACT.email, lang)}</p>
                    <input className="form-text" type="email" name="user_email" />
                </div>
                <div>
                    <p className="form-subtitle">{checkItem(VALUES_CONTACT.message, lang)}</p>
                    <textarea className="form-text area" name="message_html" />
                </div>
                <Feedback status={status} errorList={errorList} language={lang} />
                <input className="form-button" type="submit" value={checkItem(VALUES_CONTACT.send, lang)}/>
            </form>
        </div>
    );
}

export default Contact;