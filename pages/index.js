import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Language from '../tools/Language';
import Viewport from '../tools/Viewport';
import Intro from './Intro';
import Who from './Who';
import Skills from './Skills';
import Experience from './Experience';
import Education from './Education';
import Projects from './Projects';
import '../styles/pages.scss';

import '../demo';

const Index = () => {
    const language = new Language();
    language.start();

    const { viewHeight, viewWidth } = Viewport();
    const adjustedHeight = (viewHeight > 930) ? viewHeight - 50 : viewHeight;
    const adjustedWidth = viewWidth - 17;

    return (
        <>
            <Navbar language={language} viewWidth={adjustedWidth} />
            <Intro viewHeight={adjustedHeight} viewWidth={adjustedWidth} />
            <Who languageNum={language.getLanguage()} />
            <Skills languageNum={language.getLanguage()} />
            <Experience languageNum={language.getLanguage()} />
            <Education languageNum={language.getLanguage()} />
            <Projects languageNum={language.getLanguage()} />
            <Footer />
        </>
    );
}

export default Index;