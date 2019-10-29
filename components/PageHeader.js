import viewWatcher from '../tools/ViewWatcher';
import "../styles/PageHeader.scss";

const PageHeader = (props) => {
    const viewID = "id_" + props.id;
    viewWatcher(viewID);
    
    const color = { top: '-128px', position: 'relative'};

    return (
        <>
            <div style={color} id={props.id}></div>
            <div className="page-header">
                <h1 id={viewID}>{props.title}</h1>
            </div>
        </>
    );
}

export default PageHeader;