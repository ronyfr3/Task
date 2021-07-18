import React, { useState } from "react";
import FileUpload from "../Dropzone/FileUpload";
import "./UploadLogo.css";

const UploadLogo = () => {
  return (
    <div className="main-container">
      <h2>Add Customisation</h2>
      <h3>5. Configure your logo</h3>
      <FileUpload />
    </div>
  );
};

export default UploadLogo;
