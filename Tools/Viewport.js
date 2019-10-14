import { useEffect, useState } from 'react';

const Viewport = () => {
    const [viewHeight, setViewHeight] = useState(0);
    const [viewWidth, setViewWidth] = useState(0);

    const setViews = () => {
        setViewHeight(Math.max(document.documentElement.clientHeight, window.innerHeight || 0));
        setViewWidth(Math.max(document.documentElement.clientHeight, window.innerWidth || 0));
    }

    useEffect(() => {
        setViews();
        window.addEventListener("resize", () => {
            setViews();
        });
    });

    return { viewHeight, viewWidth }
};

export default Viewport;