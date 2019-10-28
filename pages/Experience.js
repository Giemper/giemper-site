import PageHeader from '../components/PageHeader';
import BoxItem from '../components/BoxItem';

const Experience = () => {
    const collins = [
        "Developed Intranet webpage for Mexicali's HR department. The page helps employees and managers on our site, allowing them to not only keep up to date with our company's news, but also to fill requests for paid time off, inquiries with HR, work authorizations, and even create monetary rewards based on employee's performance.",
        "Collaborated closely with the HR and Finance departments for the creation of reporting and charting tools, employee self-service platforms, and process automation.",
        "Refactored the Time & Attendance Tracking system of hourly and salary employees to fit the necessities and policies of the company.",
        "Managed the local transition of the HR and Finance systems to a new unified corporate payroll and employee management platform."
    ];

    const honeywell = [
        "Participated as part of the Honeywell Summer Intership Program",
        "Worked with the Mexicali’s DevOps Tools team collecting the requirements and documentation for the new version of a work authorization tracking system."
    ];

    return (
        <div className="page">
            <div className="container">
                <PageHeader title="Work Experience" id="nav_exp" />
                <div className="row">
                    <div className="col-6">
                        <BoxItem 
                            title="Collins Aerospace" 
                            subtitle="Previously UTC Aerospace Systems"
                            position="Software Engineer"
                            duration="October 2015 - Current"
                            description={collins} />
                    </div>
                    <div className="col-6">
                        <BoxItem 
                            title="Honeywell Aerospace"
                            subtitle="Intern" 
                            position="Software Engineer - Intern"
                            duration="May 2014 - August 2014"
                            description={honeywell} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Experience;