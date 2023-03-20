import React from 'react'

import { Card } from "antd";
import {Link} from "react-router-dom";

import "./projects.css"

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
                  display: "inline-block"
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
          </Card>
        </Link>

        ) : (
          <div/>
        )
        
    )
}

export default Project
