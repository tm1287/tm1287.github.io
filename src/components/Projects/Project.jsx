import React from 'react'

import { Card } from "antd";

function Project(props) {
    return (
        
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
                  src={require("../../images/DCPDRxn.jpg")}
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
        </Card>
    )
}

export default Project
