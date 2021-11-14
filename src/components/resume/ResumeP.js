import React from "react";
import fileDownload from "../../assets/Sheyla_Popovich_Resume.docx.pdf"

export default function Resume () {
  return(
  <p>
    <a href={fileDownload} download="SheylaPopovich_Popovich" target="_blank">
Resume 
      </a>
      </p>
  
    )
  }


