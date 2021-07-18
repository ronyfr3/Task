import React, { useEffect, useState } from "react";
import { useDropzone } from "react-dropzone";
import { Link } from "react-router-dom";
import ProductModal from "./ProductModal";
import "./Upload.css";

const FileUpload = () => {
  const [files, setFiles] = useState([]);
  localStorage.setItem("filename", JSON.stringify(files));
  const [showProductDetails, setShowProductDetails] = useState(false);
  const handleShowProduct = () => {
    setShowProductDetails(!showProductDetails);
  };

  const logoPosition = localStorage.getItem("logoPosition");
  const productSize = localStorage.getItem("size");
  const logoMethod = localStorage.getItem("logoMethod");
  const logoType = localStorage.getItem("logoType");
  const logoName = localStorage.getItem("filename");

  const { getInputProps, acceptedFiles, open } = useDropzone({
    accept: "image/*",
    noClick: true,
    noKeyboard: true,
    onDrop: (acceptedFiles) => {
      setFiles(
        acceptedFiles.map((file) =>
          Object.assign(file, {
            preview: URL.createObjectURL(file),
          })
        )
      );
    },
  });
  const thumbs = files.map((file) => (
    <div key={file.name}>
      <div>
        <img src={file.preview} alt="" />
      </div>
    </div>
  ));
  const filepath = acceptedFiles.map((file) => (
    <span key={file.path}>{file.path}</span>
  ));
  useEffect(
    () => () => {
      files.forEach((file) => URL.revokeObjectURL(file.preview));
    },
    [files]
  );
  const [show, setShow] = useState(false);

  if (showProductDetails) {
    setTimeout(() => {
      setShowProductDetails(false);
    }, 5000);
  }
  return (
    <div className="container">
      <div className="file-wrapper">
        <input {...getInputProps()} />
        <p>Drag 'n' drop some files here,or click to select files</p>
        <button type="button" onClick={open} className="openfile">
          {files.length !== 0 ? <p>{filepath}</p> : <p>Choose file</p>}
        </button>
        <p>JPG, PNG, EPS, AI, PDF</p>
        <small>Max Size: 8MB</small>
      </div>
      <button onClick={() => setShow(!show)} className="showOff">
        Show file
      </button>
      {show && (
        <div className="thumbImg">
          <div className="thumb">{thumbs && thumbs}</div>
        </div>
      )}
      <div className="finish-wrapper">
        <Link to="/customisation/type" className="backFinishLink">
          Back a step
        </Link>
        <button className="finishBtn" onClick={handleShowProduct}>
          Show Details
        </button>
      </div>
      {showProductDetails && (
        <ProductModal
          logoPosition={logoPosition}
          productSize={productSize}
          logoMethod={logoMethod}
          logoType={logoType}
          logoName={logoName}
        />
      )}
    </div>
  );
};

export default FileUpload;
