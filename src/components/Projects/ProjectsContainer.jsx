import React from 'react'
import Project from './Project'
import {Row, Col, Typography} from 'antd';
import projects from "../project_data.json";

const { Title } = Typography;

function ProjectsContainer() {
    return (
        <div style={{margin: "0px 100px"}}>
        <Title style={{margin: "50px"}} id="title-text">Projects</Title>
        <Row gutter={[32, 32]}>
            {projects.map((p) => {
                return (
                    <Col span={12}>
                        <Project title={p.title} desc={p.desc} tags={p.tags} img={p.img} link={p.link}/>
                    </Col>
                )
            })}
        </Row>
        </div>
    )
}

export default ProjectsContainer
