import Navbar from '../components/Navbar';
import Language from '../tools/Language';
import Intro from './Intro';
import Who from './Who';
import Skills from './Skills';
import Experience from './Experience';
import Education from './Education';
import Projects from './Projects';

import '../styles/pages.scss';

const Index = () => {
    const language = new Language();
    language.start();

    return (
        <>
            <Navbar language={language} />
            <Intro />
            <Who languageNum={language.getLanguage()} />
            <Skills languageNum={language.getLanguage()} />
            <Experience languageNum={language.getLanguage()} />
            <Education languageNum={language.getLanguage()} />
            <Projects languageNum={language.getLanguage()} />
        </>
    );
}

export default Index;