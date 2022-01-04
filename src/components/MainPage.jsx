import Particles from "react-tsparticles";
import React from 'react'
import "./MainPage.css"
import {Row, Col, Typography} from 'antd';
import particleJson from './particles.json';

const { Title } = Typography;

function MainPage() {
    return (
        <div>
            <div id="main-page-title">
                <Title id="main-page-title-text">
                    Tejas Maraliga
                </Title>
                <Title level={3} id="main-page-text">
                    Incoming Systems Engineering intern at Fidelity Investments. Current Chemical Engineering student at The University of Texas at Austin, class of 2024.
                </Title>
            </div>
            <Particles
                id="tsparticles"
                options = {particleJson}
                height="100vh"
            />
        </div>
    )
}

export default MainPage
