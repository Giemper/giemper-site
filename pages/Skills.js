import { useState, useEffect } from 'react';
import PageHeader from '../components/PageHeader';
import SkillBox from '../components/SkillBox';
import checkItem from '../tools/checkItem';
import VALUES_SKILLS from '../values/VALUES_SKILLS';


const SkillFilter = (props) => {
    const tags = ["All", "Desktop", "Mobile", "Web"];
    const filter = (e, tag) => {
        e.preventDefault();
        props.setFilter(tag);
    }

    return (
        <>
            {
                tags.map((tag, index) => (
                    <a  key={index}
                        href="#"
                        className={`skill-filter ${(props.filter === tag ? "selected" : "none")}`}
                        onClick={(e) => filter(e,tag)}>{tag}</a>
                ))
            }
        </>
    )
}

const Skills = (props) => {
    const lang = props.languageNum;
    const title = ["Skills", "Habilidades"];
    const [filter, setFilter] = useState('All');
    
    return (
        <div className="page shadow">
            <div className="container">
                <PageHeader title={checkItem(title, lang)} id="nav_skill"/>
                <div className="row">
                    <div className="col-lg-auto col-md-12 skill-line">
                        <div className="skill-center">
                            <SkillFilter 
                                filter={filter} 
                                setFilter={setFilter} />
                        </div>
                    </div>
                    <div className="col-lg col-md-12 skill-box-center">
                        {
                            VALUES_SKILLS.map((item, index) => {
                                if(item.tags.includes(filter) || filter === "All")
                                    return <SkillBox text={item.skill} key={index} />;
                            })
                        }
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Skills;