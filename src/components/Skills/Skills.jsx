import React from 'react'
import "./Skills.css"

import {Row, Col, Typography} from 'antd';

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
    GithubIcon
} from "../Icons.jsx";

const { Title } = Typography;


let skillMap = {
    aws: {
        title: "Amazon Web Services",
        icon: <AWSIcon height={128}/>
    },
    apache: {
        title: "Apache",
        icon: <ApacheIcon height={128}/>
    },
    bash: {
        title: "Bash",
        icon: <BashIcon height={128}/>
    },
    css: {
        title: "CSS3",
        icon: <CSS3Icon height={128}/>
    },
    docker: {
        title: "Docker",
        icon: <DockerIcon height={128}/>
    },
    flask: {
        title: "Flask",
        icon: <FlaskIcon height={128}/>
    },
    git: {
        title: "Git",
        icon: <GitIcon height={128}/>
    },
    graphql: {
        title: "GraphQL",
        icon: <GraphQLIcon height={128}/>
    },
    html: {
        title: "HTML5",
        icon: <HTML5Icon height={128}/>
    },
    java: {
        title: "Java",
        icon: <JavaIcon height={128}/>
    },
    javascript: {
        title: "Javascript",
        icon: <JavascriptIcon height={128}/>
    },
    linux: {
        title: "Linux",
        icon: <LinuxIcon height={128}/>
    },
    nginx: {
        title: "NGINX",
        icon: <NginxIcon height={128}/>
    },
    python: {
        title: "Python",
        icon: <PythonIcon height={128}/>
    },
    react: {
        title: "React",
        icon: <ReactIcon height={128}/>
    },
    redis: {
        title: "Redis",
        icon: <RedisIcon height={128}/>
    },
    redux: {
        title: "Redux",
        icon: <ReduxIcon height={128}/>
    },
    sass: {
        title: "Sass",
        icon: <SassIcon height={128}/>
    }
}

function Skills() {
    return (
        <div id="skills-box">
            <Row gutter={[0,32]} justify="center">
                {Object.keys(skillMap).map(element => (
                        <Col span={4}>
                            <Row justify="center">
                                {skillMap[element].icon}
                            </Row>
                            <Title style={{textAlign: "center"}} level={4}>{skillMap[element].title}</Title>
                        </Col>
                ))}
            </Row>
        </div>

    )
}

export default Skills
