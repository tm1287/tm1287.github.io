import React from 'react'

import { Card, Tag, Space } from "antd";
import {Link} from "react-router-dom";

import "./projects.css"

const stringToColour = (str) => {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = str.charCodeAt(i) + ((hash << 5) - hash);
  }
  let colour = '#';
  for (let i = 0; i < 3; i++) {
    let value = (hash >> (i * 8)) & 0xFF;
    colour += ('00' + value.toString(16)).substring(2);
  }
  return colour;
}

const translateTag = (e) => {
  let specialCases = {
    "_3dprinting": "3D Printing",
    "html5": "HTML5",
    "css3": "CSS3",
    "nginx": "NGINX",
    "aws": "AWS",
  }

  if (Object.keys(specialCases).includes(e)) {
    return specialCases[e]
  } else {
    return e.charAt(0).toUpperCase() + e.slice(1)
  }
}

function Project(props) {
    return (
        (props.img) ? (
          <Link to={props.link}>
            <Card
              bordered={true}
              style={{
                  width: "100%",
                  minHeight: "375px",
                  borderRadius: "15px",
                  display: "inline-block",
                }}
              cover={
                  <img
                    className="card-cover" //This css style is not being applied. TODO: Revisit
                    src={props.img}
                    style={{ pointerEvents: "none", height: "200px", objectFit: "cover", borderRadius: "15px"}}
                    alt="cover"
                  />
                }
              hoverable
          >
            <h1 className="card-title">{props.title}</h1>
            <p className="card-content">
              {props.desc}
            </p>
            <p className="card-content-bold">
              {"Click this card to learn more."}
            </p>
            <Space size={[0, 8]} wrap>
              {props.tags.map((e) => {
                return <Tag style={{color: "black", opacity: 0.8}} color={stringToColour(e)}>{translateTag(e)}</Tag>
              })}
            </Space>
          </Card>
        </Link>

        ) : (
          <div/>
        )
        
    )
}

export default Project
