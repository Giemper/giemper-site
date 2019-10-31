import PageHeader from '../components/PageHeader';
import BoxItem from '../components/BoxItem';

import VALUES_EXPERIENCE from '../values/VALUES_EXPERIENCE';
import checkItem from '../tools/checkItem';

const Experience = (props) => {
    const lang = props.languageNum;
    const title = ["Work Experience", "Experiencia Laboral"];

    return (
        <div className="page">
            <div className="container">
                <PageHeader title={checkItem(title, lang)} id="nav_exp" />
                <div className="row box">
                    {
                        VALUES_EXPERIENCE.map((item, index) => (
                            <div className="col-lg-6 col-md-12" key={index}>
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

export default Experience;