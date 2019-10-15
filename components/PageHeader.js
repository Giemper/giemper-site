import viewWatcher from '../Tools/ViewWatcher';
import "../styles/PageHeader.scss";

const PageHeader = (props) => {
    viewWatcher(props.id);
    
    return (
        <div className="page-header">
            <h1 id={props.id}>{props.title}</h1>
        </div>
    );
}

export default PageHeader;