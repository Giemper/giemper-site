import '../styles/ProjectItem.scss';
import checkItem from '../tools/checkItem';

const Browser = () => (
    <>
    </>
);

const Phone = (props) => (
    <video className="project-preview" autoPlay loop muted>
        <source src={props.main} type="video/webm" />
        <source src={props.fallback} type="video/mp4" />
    </video>
);

const ProjectItem = (props) => {
    const lang = props.languageNum;
    const availableAt = ["Available at:", "Displonible en:"]
    const projectType = (props.type === 'Phone')
                    ? <Phone main={props.sourceMain} fallback={props.sourceFallback} />
                    : <Browser />;
    const projectAvailability = (props.availability !== undefined)
                    ? <h3>{checkItem(availableAt, lang)}</h3>
                    : <></>;
    const order = (props.index % 2 == 0)
                    ? 'order-last'
                    : 'order-first';
    const desc = checkItem(props.description, lang);

    return (
        <div className="project-item">
            <div className="row">
                <div className="col-lg-6 col-md-6 col-sm-12 project-pad">
                    <div className="project-text">
                        <h1>{props.title}</h1>
                        { desc !== undefined &&
                            desc.map((item, index) => (
                                <p key={index}>{item}</p>
                            ))
                        }
                        {projectAvailability}
                        <div>
                            { props.availability !== undefined &&
                                props.availability.map((item, index) => (
                                    <a 
                                        key={index} 
                                        href={item.link} 
                                        className="project-link">{item.title}</a>
                                ))
                            }
                        </div>
                    </div>
                </div>
                <div className={`col-lg-6 col-md-6 col-sm-12 project-pad ${order}`}>
                    {projectType}
                </div>
            </div>
        </div>
    )
}

export default ProjectItem;