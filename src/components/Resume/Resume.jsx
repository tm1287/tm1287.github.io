import React, {useState} from 'react'
import resume from "./Tejas_Maraliga_Resume.pdf"
import { Document, Page, pdfjs} from "react-pdf/dist/esm/entry.webpack";
import "react-pdf/dist/esm/Page/TextLayer.css";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;


function Resume() {
    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);

    function onDocumentLoadSuccess({ numPages }) {
        setNumPages(numPages);
    }

    return (
        <Document
            file={resume} 
            onLoadError={(e) => console.error(e)} 
            onLoadSuccess={onDocumentLoadSuccess}>
            <div style={{marginTop: "20px", display: "flex", justifyContent: "center"}}>
                <Page pageNumber={pageNumber} />
            </div>
        </Document>
    );
}

export default Resume