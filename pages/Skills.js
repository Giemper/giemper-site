import PageHeader from '../components/PageHeader';

const skillList =  [
    { key: 0, skill: "Java", tags: [""] },
    { key: 1, skill: "C#", tags: [""] },
    { key: 2, skill: "C++", tags: [""] },
    { key: 3, skill: "Javascript", tags: [""] },
    { key: 4, skill: "HTML", tags: [""] },
    { key: 5, skill: "CSS", tags: [""] },
    { key: 6, skill: "PHP", tags: [""] },
    { key: 7, skill: "VueJS", tags: [""] },
    { key: 8, skill: "React", tags: [""] },
    { key: 9, skill: "NodeJS", tags: [""] },
    { key: 10, skill: "AngularJS", tags: [""] },
    { key: 11, skill: "jQuery", tags: [""] },
    { key: 12, skill: "ASP.NET", tags: [""] },
    { key: 13, skill: "SQL", tags: [""] },
    { key: 14, skill: "WPF", tags: [""] },
    { key: 15, skill: "Sharepoint", tags: [""] },
    { key: 16, skill: "Android Development", tags: [""] }
];

const SkillBox = (props) => (
    <div className="skill-item">
        <span>{props.text}</span>
    </div>
);

const Skills = () => {
    return (
        <div className="page shadow">
            <div className="container">
                <PageHeader title="Skills" id="nav_skill"/>
                {
                    skillList.map((item) => (
                        <SkillBox text={item.skill} key={item.key} />
                    ))
                }
            </div>
        </div>
    );
}

export default Skills;