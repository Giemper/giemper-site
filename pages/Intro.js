import '../styles/Intro.scss';

const ProfilePicture = (props) => {
    const canvasHeight = (props.height / 1.5 > 500) 
                            ? props.height / 1.5
                            : 450;
    const canvasWidth = (props.width > 1160) ? 1
                        : (props.width > 992) ? 0.8
                        : (props.width > 768) ? 0.6 : 0.55;
    const canvasPhone = (props.width >= 751) ? true : false;
    
    const canvasMargin = canvasHeight * 0.1;
    const canvasSquare = (canvasHeight - canvasMargin) * canvasWidth;
    const canvasSize = canvasPhone ? (canvasHeight + canvasMargin) * canvasWidth : 0;
    const imageAdapter =  { width: canvasSquare + "px", height: canvasSquare + "px" };
    const bgAdapter = { width: canvasSize + "px", height: canvasSize + "px" };

    return (
        <div className="intro-picture row justify-content-end">
            <div className="picture-bg" style={bgAdapter}/>
            <img src={props.source} style={imageAdapter} />
        </div>
    );
}

const Intro = (props) => {
    const space = { height: (props.viewHeight) + "px" };
    const image = "Myself.jpg";

    return (
        <div className="intro page" id="nav_home" style={space}>
            <div className="row align-items-center">
                <div className="col-lg-7 col-md-8 col-sm-12 intro-item text">
                    <div className="intro-panel">
                        <p className="message">Hello there, I'm</p>
                        <p className="name">Guillermo</p>
                        <p className="name">Magdaleno</p>
                        <p className="title">Software Developer</p>
                    </div>
                </div>
                <div className="col-lg-5 col-md-4 col-sm-12 intro-item picture">
                    <ProfilePicture height={props.viewHeight} width={props.viewWidth} source={image}/>
                </div>
            </div>
        </div>
    );
};

export default Intro;