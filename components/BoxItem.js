import '../styles/BoxItem.scss';

const BoxItem = (props) => (
    <div className="box-item">
            <h1>{props.title}</h1>
            <h2>{props.position}</h2>
            <h4 className="description">{props.duration}</h4>
            <ul>
                { props.description &&
                    props.description.map((value, index) => (
                        <li key={index}>
                            <p>{value}</p>
                        </li>
                    ))
                }
            </ul>
    </div>
);

export default BoxItem;