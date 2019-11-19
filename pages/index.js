import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';
import { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import emailjs from 'emailjs-com';
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
// import Contact from './Contact';
import '../styles/pages.scss';

const Index = () => {
    const language = new Language();
    language.start();

    const { viewHeight, viewWidth } = Viewport();
    const adjustedHeight = (viewHeight > 930) ? viewHeight - 50 : viewHeight;
    const adjustedWidth = viewWidth - 17;

    useEffect(() => {
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments)}
        gtag('js', new Date());
        gtag('config', 'UA-20127186-2');
    })

    return (
        <>
            <Helmet>
                <meta charSet="utf-8"/>
                <title>Guillermo Magdaleno</title>
                <link rel="shortcut icon" type="image/png" href="/favicon.png"/>
                { emailjs.init("user_7XWSfbX3F92thbWruog2F") }
                <script async src="https://www.googletagmanager.com/gtag/js?id=UA-20127186-2"></script>
            </Helmet>
            <Navbar language={language} viewWidth={adjustedWidth} />
            <Intro languageNum={language.getLanguage()} viewHeight={adjustedHeight} viewWidth={adjustedWidth} />
            <Who languageNum={language.getLanguage()} />
            <Skills languageNum={language.getLanguage()} />
            <Experience languageNum={language.getLanguage()} />
            <Education languageNum={language.getLanguage()} />
            <Projects languageNum={language.getLanguage()} />
            {/* <Contact languageNum={language.getLanguage()} /> */}
            <Footer languageNum={language.getLanguage()} />
        </>
    );
}

export default Index;