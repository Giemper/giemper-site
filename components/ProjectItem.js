import '../styles/ProjectItem.scss';
import SkillBox from '../components/SkillBox';
import checkItem from '../tools/checkItem';

const Preview = (props) => {
    const type = (props.type === 'Phone') ? "phone-preview" : "browser-preview";
    return (
        <video className={type} autoPlay loop muted>
            <source src={props.main} type="video/webm" />
            <source src={props.fallback} type="video/mp4" />
        </video>
    );
}

const ProjectItem = (props) => {
    const lang = props.languageNum;
    const descriptions = checkItem(props.description, lang);
    const availableAt = ["Available at", "Displonible en"];
    const madeWith = ["Made with", "Hecho con"];
    const order = (props.index % 2 == 0) ? 'order-last' : 'order-first';
    const textClasses = (props.type === 'Phone') ? "col-lg-6 col-md-6 col-sm-12 project-pad"
                        : (props.type === 'Browser') ? "col-lg-6 col-md-6 col-sm-12 project-pad"
                        : "col-12 project-pad";
    const previewClasses = (props.type === 'Phone') ? "col-lg-6 col-md-6 col-sm-12 project-pad " + order
                        : (props.type === 'Browser') ? "col-lg-6 col-md-6 col-sm-12 project-pad " + order
                        : "";
    const textCenter = (props.type === 'Phone') ? "center" : "";
    const previewCenter = (props.type === 'Phone') ? "" : "center";


    return (
        <div className="project-item">
            <div className="row">
                <div className={textClasses}>
                    <div className={`project-text ${textCenter}`}>
                        <h1>{props.title}</h1>
                        { 
                            descriptions !== undefined &&
                            descriptions.map((item, index) => ( 
                                <p key={index}>{item}</p>
                            ))
                        }
                        {
                            props.skills !== undefined &&
                            <>
                                <h3>{checkItem(madeWith, lang)}</h3>
                                <div>
                                    {
                                        props.skills.map((item, index) => (
                                            <SkillBox text={item} key={index}/>
                                        ))
                                    }
                                </div>
                            </>
                        }
                        { 
                            props.availability !== undefined &&
                            <>
                                <h3>{checkItem(availableAt, lang)}</h3>
                                <div>
                                    {
                                        props.availability.map((item, index) => (
                                            <a key={index} 
                                                href={item.link} 
                                                target="_bind"
                                                className="project-link">{item.title}</a>
                                        ))
                                    }
                                </div>
                            </>
                        }

                    </div>
                </div>
                {
                    props.sourceMain !== undefined &&
                    <div className={previewClasses}>
                        <div className={`project-preview ${previewCenter}`}>
                            <Preview type={props.type} main={props.sourceMain} fallback={props.sourceFallback} />
                        </div>
                    </div>
                }
            </div>
        </div>
    )
}

export default ProjectItem;