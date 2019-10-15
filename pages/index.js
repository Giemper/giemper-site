import Navbar from '../components/Navbar';
import Intro from './Intro';
import Who from './Who';

import '../styles/pages.scss';
import PageHeader from '../components/PageHeader';

const Index = () => {
    var tempHeight = { height: '1600px' };
    var tempHeightSmall = { height: '300px' };

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