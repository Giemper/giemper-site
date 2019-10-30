const Browser = () => {

}

const Phone = (props) => (
    <img className="project-preview" src={props.source}/>
    // <video className="project-preview" src={require(props.source)} />
);

const ProjectItem = (props) => {
    return (
        <div className="project-item">
            <div className="row">
                <div className="col-7 project-pad">

                </div>
                <div className="col-5 project-pad">
                    <Phone source="Colour.gif" />
                </div>
            </div>
        </div>
    )
}

export default ProjectItem;