import React from 'react'
import { NavLink as Link } from 'react-router-dom';
import styled from 'styled-components';
import {Row, Col } from 'antd';
import { HomeFilled, ToolFilled, FolderOpenFilled, FilePdfFilled } from '@ant-design/icons';


//The Nav Container
export const Container = styled.div`
  z-index: 10;
  font-size: 13pt;
  font-family: 'Roboto', sans-serif;
  font-weight: bold;
  position: relative;
`;

//Standalone Link
export const NavLink = styled(Link)`
  color: rgba(255, 255, 255, 0.85);
  display: flex;
  align-items: center;
  padding: 0 1rem;
  height: 100%;
`;

function Navbar() {
    return (
        <Container>
          <Row align="middle" justify='center'>
              <Col span={4}>
                      <Row justify="start" align="middle">
                          <NavLink to='/'>
                            <HomeFilled style={{padding: "10px"}}/>
                            Home
                          </NavLink>
                      </Row>
              </Col>
              <Col span={16}>
                      <Row justify="center" align="middle">
                          <NavLink to='/skills' activeStyle>
                              <ToolFilled style={{padding: "10px"}}/>
                              Skills
                          </NavLink>
                          <NavLink to='/projects' activeStyle>
                            <FolderOpenFilled style={{padding: "10px"}}/>
                              Projects
                          </NavLink>
                          <NavLink to='/resume' activeStyle>
                            <FilePdfFilled style={{padding: "10px"}}/>
                              Resumé
                          </NavLink>
                      </Row>
              </Col>
              <Col span={4}>
              </Col>
          </Row>
        </Container>
    )
}

export default Navbar
