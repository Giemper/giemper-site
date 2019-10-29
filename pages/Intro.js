import { useEffect, useState } from 'react';
import Viewport from '../tools/Viewport';

const ProfilePicture = (props) => {
    const canvasHeight = props.height / 1.5;
    const canvasMargin = canvasHeight * 0.1;
    const canvasRadius = canvasHeight / 2;
    const imageAdapter = { width: (canvasHeight - canvasMargin) + "px", 
                            height: (canvasHeight - canvasMargin) + "px", 
                            marginTop: canvasMargin + "px" };

    useEffect(() => {
        const canvas = document.getElementById('circleBG');
        const context = canvas.getContext('2d');
        context.beginPath();
        context.arc(
            canvasRadius + (canvasMargin), 
            canvasRadius + (canvasMargin / 2), 
            canvasRadius, 
            0, 2 * Math.PI);
        // context.fillStyle = 'rgb(68, 71, 90)';
        context.fillStyle = 'rgba(139, 233, 253, 0.2)';
        context.fill();
    });



    return (
        <div className="row justify-content-end">
            <div>
                <div className="intro-canvas">
                    <div className="canvas-panel">
                        <div className="relative-panel">
                            <canvas id="circleBG" height={canvasHeight + canvasMargin} width={canvasHeight + canvasMargin} />
                            <img src="/myself.jpg" style={imageAdapter}/>
                            {/* <img src="/blank.jpg" style={imageAdapter}/> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

const AnimatedBackground = (props) => {
    const canvasHeight = props.height;
    const canvasWidth = props.width;
    const drawLine = (context, startPointX, startPointY, endPointX, endPointY) => {
        context.moveTo(startPointX, startPointY);
        context.lineTo(endPointX, endPointY);
        context.stroke();
    }

    useEffect(() => {
        const canvas = document.getElementById("animatedBG");
        const context = canvas.getContext('2d');

        context.beginPath();
        context.strokeStyle = 'rgba(68, 71, 90, 0.5)';
        context.lineWidth = 3;
        drawLine(context, 0, 0, canvasWidth, canvasHeight - 150);
        drawLine(context, canvasWidth * 0.75, 0, canvasWidth / 2, canvasHeight);
        drawLine(context, canvasWidth * 0.43, 0, canvasWidth * 0, canvasHeight * 0.85);
        drawLine(context, canvasWidth * 0.08, 0, canvasWidth * 0.39, canvasHeight);
        drawLine(context, canvasWidth, canvasHeight * 0.04, canvasWidth * 0.15, canvasHeight);
        drawLine(context, 0, canvasHeight * 0.45, canvasWidth * 0.81, canvasHeight);
        drawLine(context, canvasWidth * 0.51, 0, canvasWidth * 0.62, canvasHeight);
    });

    return (
        < >
            <canvas id="animatedBG" height={canvasHeight - 50} width={canvasWidth} />
        </>
    );
}

const Intro = () => {
    const { viewHeight, viewWidth } = Viewport();

    const space = { height: (viewHeight - 50) + 'px'};
    const backgroundSpace = { height: (viewHeight - 50) + 'px', backgroundColor: 'rgba(0,0,0,0.5)', width: '100%' };

    return (
        <div className="intro" id="nav_home">
            <div className="intro-background" style={backgroundSpace}>
                <AnimatedBackground height={viewHeight} width={viewWidth} />
            </div>
            <div className="row align-items-center" style={space}>
                <div className="col-7">
                    <div className="intro-panel">
                        <p className="message">Hello I'm</p>
                        <p className="name">Guillermo</p>
                        <p className="name">Magdaleno</p>
                        <p className="title">Software Developer</p>
                    </div>
                </div>
                <div className="col-5">
                    <ProfilePicture height={viewHeight} width={viewWidth}/>
                </div>
            </div>
        </div>
    );
};

export default Intro;