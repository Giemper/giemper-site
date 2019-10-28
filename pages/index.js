import { useState, useEffect } from 'react';

import Navbar from '../components/Navbar';
import Language from '../tools/Language';
import Intro from './Intro';
import Who from './Who';
import Skills from './Skills';
import Experience from './Experience';
import Education from './Education';

import '../styles/pages.scss';

const Index = () => {
    var tempHeight = { height: '1600px' };

    const lang = new Language();
    lang.start();

    return (
        <>
            <Navbar language={lang} />
            <Intro />
            <Who />
            <Skills />
            <Experience />
            <Education />
            <div style={tempHeight} />
        </>
    );
}

export default Index;