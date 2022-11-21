import Particles from "react-tsparticles";
import React from 'react'
import "./MainPage.css"
import {Row, Col, Typography} from 'antd';
import particleJson from './particles.json';
import { textAlign } from "@mui/system";

import {
    LinkedInIcon,
    GithubIcon
} from "../Icons.jsx";

const { Title } = Typography;

function MainPage() {
    return (
        <div id="main-page">
            <Row justify="center">
                <Col span={12}>
                    <Title id="main-page-title-text">
                        Tejas Maraliga
                    </Title>
                    <Title level={3} id="main-page-text">
                        Chemical Engineering and Computer Science student at The University of Texas at Austin, class of 2024.
                    </Title>
                    <Row gutter={16} justify="center">
                        <Col>
                            <a href="https://www.linkedin.com/in/tejasmaraliga/" target="_blank" rel="noopener noreferrer">
                                <LinkedInIcon/>
                            </a>
                        </Col>
                        <Col>
                            <a href="https://github.com/tm1287" target="_blank" rel="noopener noreferrer">
                                <GithubIcon/>
                            </a>
                        </Col>
                    </Row>
                </Col>
            </Row>
        
        </div>
    )
}

export default MainPage
