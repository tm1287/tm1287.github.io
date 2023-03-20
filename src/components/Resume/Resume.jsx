import React, {useState} from 'react'
import { Document, Page } from "react-pdf/dist/esm/entry.webpack5";

function Resume() {
    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);

    function onDocumentLoadSuccess({ numPages }) {
        setNumPages(numPages);
    }

    return (
        <div>
        <Document file="./Tejas_Maraliga_Resume.pdf" onLoadSuccess={onDocumentLoadSuccess}>
            <Page pageNumber={pageNumber} />
        </Document>
        <p>
            Page {pageNumber} of {numPages}
        </p>
        </div>
    );
}

export default Resume