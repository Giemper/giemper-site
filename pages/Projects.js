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
                <ProjectItem />
            </div>
        </div>
    );
}

export default Projects;