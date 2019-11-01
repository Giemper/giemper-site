import { useEffect } from 'react';
// import Viewport from '../tools/Viewport';
import '../styles/Intro.scss';

const ProfilePicture = (props) => {
    const canvasHeight = (props.height / 1.5 > 500) 
                            ? props.height / 1.5
                            : 500;
    const canvasWidth = (props.width > 1160) ? 1
                        : (props.width > 992) ? 0.8
                        : (props.width > 768) ? 0.6 : 0.55;
    
    const canvasMargin = canvasHeight * 0.1;
    const canvasRadius = ((canvasHeight + canvasMargin) / 2) * canvasWidth;
    const canvasSquare = ((canvasHeight - canvasMargin) * (canvasWidth));
    const canvasSize = (canvasHeight + canvasMargin) * canvasWidth;
    const imageAdapter =  { width: canvasSquare + "px", 
                            height: canvasSquare + "px" } ;

    useEffect(() => {
        if(props.width > 768) {
        const canvas = document.getElementById('circleBG');
        const context = canvas.getContext('2d');
        context.clearRect(0, 0, canvas.width, canvas.height);
        context.beginPath();
        context.arc(
            canvasRadius + (canvasMargin / 2), 
            canvasRadius, 
            canvasRadius, 
            0, 2 * Math.PI);
        context.fillStyle = 'rgba(139, 233, 253, 0.2)';
        context.fill();
        }
    });

    return (
        <div className="intro-picture row justify-content-end">
            {
                (props.width > 768) 
                ? <canvas id="circleBG" height={canvasSize} width={canvasSize} /> 
                : <></>
            }
            <img src={props.picture} style={imageAdapter} />
        </div>
    );
};

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
                    <ProfilePicture height={props.viewHeight} width={props.viewWidth} picture={image} />
                </div>
            </div>
        </div>
    );
};

export default Intro;



// const CanvasBackground = (props) => {
//     const canvasHeight = props.height;
//     const canvasWidth = props.width + 17;
//     const drawLine = (context, startPointX, startPointY, endPointX, endPointY) => {
//         context.moveTo(startPointX, startPointY);
//         context.lineTo(endPointX, endPointY);
//         context.stroke();
//     }

//     useEffect(() => {
//         const canvas = document.getElementById("line-canvas");
//         const context = canvas.getContext('2d');
//         context.clearRect(0, 0, canvas.width, canvas.height);
//         context.beginPath();
//         context.strokeStyle = (canvasWidth > 420) 
//                                 ? 'rgba(68, 71, 90, 0.5)'
//                                 : 'rgba(68, 71, 90, 0.2)';
//         context.lineWidth = 3;
//         drawLine(context, 0, 0, canvasWidth, canvasHeight - 150);
//         drawLine(context, canvasWidth * 0.75, 0, canvasWidth / 2, canvasHeight);
//         drawLine(context, canvasWidth * 0.43, 0, canvasWidth * 0, canvasHeight * 0.85);
//         drawLine(context, canvasWidth * 0.08, 0, canvasWidth * 0.39, canvasHeight);
//         drawLine(context, canvasWidth, canvasHeight * 0.04, canvasWidth * 0.15, canvasHeight);
//         drawLine(context, 0, canvasHeight * 0.45, canvasWidth * 0.81, canvasHeight);
//         drawLine(context, canvasWidth * 0.51, 0, canvasWidth * 0.62, canvasHeight);
//     });

//     return (
//         <canvas id="line-canvas" height={canvasHeight} width={canvasWidth} />
//     );
// }
