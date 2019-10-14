import Navbar from '../components/Navbar';
import Intro from './Intro';
import Who from './Who';

import '../styles/pages.scss';

const Index = () => {
    var tempHeight = { height: '1600px' };

    return (
        <>
            <Navbar />
            <Intro />
            <Who />
            <div style={tempHeight} />
        </>
    );
}

export default Index;