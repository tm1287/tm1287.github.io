import React, {useState} from 'react'
import "./Skills.css"
import project_data from "../project_data.json";

import {Row, Col, Typography, Drawer} from 'antd';

import {
    AWSIcon,
    ApacheIcon,
    BashIcon,
    CSS3Icon,
    DockerIcon,
    FlaskIcon,
    GitIcon,
    GraphQLIcon,
    HTML5Icon,
    JavaIcon,
    JavascriptIcon,
    LinkedInIcon,
    LinuxIcon,
    NginxIcon,
    PythonIcon,
    ReactIcon,
    RedisIcon,
    ReduxIcon,
    SassIcon,
    GithubIcon,
    AngularIcon,
    ChemistryIcon,
    _3DPrinting,
} from "../Icons.jsx";
import Project from '../Projects/Project.jsx';

const { Title, Text } = Typography;

const HEIGHT = 96;

let skillMap = {
    _3dprinting: {
        title: "3D Printing",
        icon: <_3DPrinting height={HEIGHT}/>
    },
    angular: {
        title: "Angular",
        icon: <AngularIcon height={HEIGHT}/>
    },
    aws: {
        title: "AWS",
        icon: <AWSIcon height={HEIGHT}/>
    },
    apache: {
        title: "Apache",
        icon: <ApacheIcon height={HEIGHT}/>
    },
    bash: {
        title: "Bash",
        icon: <BashIcon height={HEIGHT}/>
    },
    chemistry: {
        title: "Chemistry",
        icon: <ChemistryIcon height={HEIGHT}/>
    },
    css3: {
        title: "CSS3",
        icon: <CSS3Icon height={HEIGHT}/>
    },
    docker: {
        title: "Docker",
        icon: <DockerIcon height={HEIGHT}/>
    },
    flask: {
        title: "Flask",
        icon: <FlaskIcon height={HEIGHT}/>
    },
    git: {
        title: "Git",
        icon: <GitIcon height={HEIGHT}/>
    },
    graphql: {
        title: "GraphQL",
        icon: <GraphQLIcon height={HEIGHT}/>
    },
    html5: {
        title: "HTML5",
        icon: <HTML5Icon height={HEIGHT}/>
    },
    java: {
        title: "Java",
        icon: <JavaIcon height={HEIGHT}/>
    },
    javascript: {
        title: "Javascript",
        icon: <JavascriptIcon height={HEIGHT}/>
    },
    linux: {
        title: "Linux",
        icon: <LinuxIcon height={HEIGHT}/>
    },
    nginx: {
        title: "NGINX",
        icon: <NginxIcon height={HEIGHT}/>
    },
    python: {
        title: "Python",
        icon: <PythonIcon height={HEIGHT}/>
    },
    react: {
        title: "React",
        icon: <ReactIcon height={HEIGHT}/>
    },
    redis: {
        title: "Redis",
        icon: <RedisIcon height={HEIGHT}/>
    },
    redux: {
        title: "Redux",
        icon: <ReduxIcon height={HEIGHT}/>
    },
    sass: {
        title: "Sass",
        icon: <SassIcon height={HEIGHT}/>
    }
}

function Skills() {
    const [open, setOpen] = useState(false);

    const [projects, setProjects] = useState([]);

    const onOpen = (e) => {
        console.log(e);

        let filteredProjects = []
        project_data.forEach((p) => {
            if(p.tags.includes(e)) {
                filteredProjects.push(<Project title={p.title} desc={p.desc} tags={p.tags} img={p.img}/>)
            }
        })

        setProjects(filteredProjects)

        setOpen(!open)

    }

    const onClose = () => {
        setOpen(false);
    }

    return (
        <>
        <div id="skills-container">
            <Title style={{marginTop: "50px"}} id="title-text">Skills and Technologies</Title>
            <Text id="subtitle-text">Click on any skill to see my relevant projects</Text>
            <Row justify='center'>
                <Col span={18}>
                    <div id="skills-box">
                        <Row gutter={[0,32]} justify="center">
                            {Object.keys(skillMap).map(element => (
                                    <Col span={3}>
                                        <div className='skill-card' onClick={(e) => {onOpen(element)}}>
                                            <Row justify="center">
                                                {skillMap[element].icon}
                                            </Row>
                                            <Title style={{textAlign: "center"}} level={5}>{skillMap[element].title}</Title>
                                        </div>
                                    </Col>
                            ))}
                            
                        </Row>
                    </div>
                </Col>

            </Row>
        </div>
        <Drawer title="Projects" size="large" placement="right" onClose={onClose} open={open}>
            {projects}
        </Drawer>
        </>
    )
}

export default Skills
