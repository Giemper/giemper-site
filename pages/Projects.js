import VALUES_PROJECTS from '../values/VALUES_PROJECTS';
import PageHeader from '../components/PageHeader';
import ProjectItem from '../components/ProjectItem';
import checkItem from '../tools/checkItem';

const Projects = (props) => {
    const lang = props.languageNum;
    const title = ["Projects", "Proyectos"];

    return (
        <div className="page shadow">
            <div className="container">
                <PageHeader title={checkItem(title, lang)} id="nav_pro" />
                {
                    VALUES_PROJECTS.map((item, index) => (
                        <ProjectItem 
                            key={index}
                            index={index}
                            title={item.title}
                            type={item.type}
                            sourceMain={item.sourceMain}
                            sourceFallback={item.sourceFallback}
                            description={item.description}
                            availability={item.availability}
                            languageNum={lang} />
                    ))
                }
            </div>
        </div>
    );
}

export default Projects;