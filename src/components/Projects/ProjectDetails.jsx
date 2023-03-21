import React, { useEffect, useState } from 'react'
import ReactMarkdown from 'react-markdown'
import { useParams } from "react-router-dom";
import tii_aws from "./Writeups/tii-aws.md";
import tii_sp from "./Writeups/tii-sp.md";
import liftoff2021 from "./Writeups/liftoff2021.md";
import s2s from "./Writeups/s2s.md";
import dcpd from "./Writeups/dcpd.md";
import semicrystalline from "./Writeups/semicrystalline.md";
import lhr from "./Writeups/lhr.md";
import flightcontroller from "./Writeups/flightcontroller.md";

function ProjectDetails() {
  let md_map = {
    "tii-aws": tii_aws,
    "tii-sp": tii_sp,
    "liftoff2021": liftoff2021,
    "s2s": s2s,
    "dcpd": dcpd,
    "semicrystalline": semicrystalline,
    "lhr": lhr,
    "flightcontroller": flightcontroller,
  }

  const [text, setText] = useState("");

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  let { id } = useParams(); 

  useEffect(() => {
    fetch(md_map[id]).then((response) => response.text()).then((text) => {
        console.log(text)
        setText(text)
      })
  })
  return (
    <div style={{padding: "100px", backgroundColor: "#F0F8FF", minHeight: "93vh"}}>
        <ReactMarkdown>{text}</ReactMarkdown>
    </div>
  )
}

export default ProjectDetails