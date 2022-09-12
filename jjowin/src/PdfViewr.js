import React, {useState} from 'react';
import {Document, Page, pdfjs} from 'react-pdf';
import styled from "styled-components"


pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
const Container = styled.div`
    justify-content: center;
    text-align: center;
    p{
        font-weight: bold;
        font-size:1vw;
    }
`;
const Button = styled.button`
    background-color: white;
    color:black;
    padding:0.5vw;
    font-size: 1vw;
    margin-left:0.5vw;
    margin-right:0.5vw;
    margin-bottom: 3vh;
`;
const PdfViewr = () => {
    const [numPages, setNumPages] = useState(null); // 총 페이지수
    const [pageNumber, setPageNumber] = useState(1); // 현재 페이지

    function onDocumentLoadSuccess({numPages}) {
        console.log(`numPages ${numPages}`);
        setNumPages(numPages);
    }
    
    return (
        <>
            <Container>
             <p>
                {pageNumber}/{numPages}
            </p>
            <Button onClick={() => {
                    setPageNumber(pageNumber === 1 ? pageNumber : pageNumber - 1)
                }}> &lt;
            </Button>
                <Button onClick={() => {
                    setPageNumber(numPages === pageNumber ? pageNumber : pageNumber + 1)
                }}> &gt;
            </Button>
            
            </Container>
            <div style={{display:"flex",justifyContent:"center"}}>
            <div style={{width: '640px', height: '800px', overflow: 'auto',border:"1px solid black",borderRadius:"10px"}}>
                <Document file="/대본_서기.pdf" onLoadSuccess={onDocumentLoadSuccess}>
                    <Page width={640} height={800} pageNumber={pageNumber}/>
                </Document>
            </div>
            </div>
            
        </>
    );
};

export default PdfViewr;