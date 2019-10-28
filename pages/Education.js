import PageHeader from '../components/PageHeader';
import BoxItem from '../components/BoxItem';

const Education = () => {
    return (
        <div className="container">
            <PageHeader title="Education" id="nav_edu"/>
            <div className="row">
                <div className="col">
                    <BoxItem
                        title="CETYS University"
                        position="Computer Science Engineering"
                        city="Mexicali, Baja California, Mexico"
                        duration="August 2011 - July 2015" />
                </div>
                <div className="col">
                    <BoxItem
                        title="Polytechnique Montreal"
                        position="Software Engineering"
                        city="Montreal, Quebec, Canada"
                        duration="August 2014 - December 2014" 
                        description={["Academic Exchange"]} />
                </div>
                <div className="col">
                    <BoxItem
                        title="Udacity"
                        position="Front-End Nanodegree"
                        city="Online Course" />
                </div>
            </div>
        </div>
    );
}

export default Education;