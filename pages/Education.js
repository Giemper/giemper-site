import PageHeader from '../components/PageHeader';
import BoxItem from '../components/BoxItem';

import VALUES_EDUCATION from '../values/VALUES_EDUCATION';
import checkItem from '../tools/checkItem';

const Education = (props) => {
    const lang = props.languageNum;
    const title = ["Education", "Educación"];

    return (
        <div className="page">
            <div className="container">
                <PageHeader title={checkItem(title, lang)} id="nav_edu"/>
                <div className="row">
                    {
                        VALUES_EDUCATION.map((item, index) => (
                            <div className="col" key={index}>
                                <BoxItem 
                                    title={checkItem(item.title, lang)}
                                    position={checkItem(item.position, lang)}
                                    city={checkItem(item.city, lang)}
                                    duration={checkItem(item.duration, lang)}
                                    description={checkItem(item.description, lang)}/>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    );
}

export default Education;