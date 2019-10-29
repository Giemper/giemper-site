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

    const language = new Language();
    language.start();

    return (
        <>
            <Navbar language={language} />
            <Intro />
            <Who languageNum={language.getLanguage()} />
            <Skills languageNum={language.getLanguage()}/>
            <Experience languageNum={language.getLanguage()}/>
            <Education languageNum={language.getLanguage()}/>
            <div style={tempHeight} />
        </>
    );
}

export default Index;