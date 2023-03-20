import React, { useEffect, useState } from 'react'
import ReactMarkdown from 'react-markdown'
import { useParams } from "react-router-dom";
import tii_aws from "./Writeups/tii-aws.md";
import tii_sp from "./Writeups/tii-sp.md";
import liftoff2021 from "./Writeups/liftoff2021.md";


function ProjectDetails() {
  let md_map = {
    "tii-aws": tii_aws,
    "tii-sp": tii_sp,
    "liftoff2021": liftoff2021,
  }

  const [text, setText] = useState("");

  let { id } = useParams(); 

  useEffect(() => {
    fetch(md_map[id]).then((response) => response.text()).then((text) => {
        console.log(text)
        setText(text)
      })
  })
  return (
    <div style={{padding: "100px", backgroundColor: "#F0F8FF"}}>
        <ReactMarkdown>{text}</ReactMarkdown>
    </div>
  )
}

export default ProjectDetails