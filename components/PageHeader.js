import "../styles/PageHeader.scss";

const Timer = (title) => {
    const loadTimer = setTimeout()
}

const TitleTick = (title) => {
    
}

const PageHeader = (props) => {
    return (
        <div className="page-header">
            <h1>{props.title} /</h1>
        </div>
    );
}

export default PageHeader;