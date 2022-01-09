import React from 'react'

import {Row, Col} from 'antd';

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

/*
                    <AWSIcon/>
                    <ApacheIcon/>
                    <BashIcon/>
                    <CSS3Icon/>
                    <DockerIcon/>
                    <FlaskIcon/>
                    <GitIcon/>
                    <GraphQLIcon/>
                    <HTML5Icon/>
                 <JavaIcon/>
                    <JavascriptIcon/>
                    <LinkedInIcon/>
                    <LinuxIcon/>
                    <NginxIcon/>
                    <PythonIcon/>
                    <ReactIcon/>
                    <RedisIcon/>
                    <ReduxIcon/>
                    <SassIcon/>
                    <GithubIcon/>
                </Col>*/

function Skills() {
    return (
        <Row gutter={[16,16]} justify="center">
            <Col span={2}>
                <AWSIcon/>
                <ApacheIcon/>
                <BashIcon/>

            </Col>
        </Row>

    )
}

export default Skills
