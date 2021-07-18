import React, { useEffect, useState } from "react";
import { useDropzone } from "react-dropzone";
import { Link } from "react-router-dom";
import "./Upload.css";

const FileUpload = () => {
  const [files, setFiles] = useState([]);
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
        <img src={file.preview} />
      </div>
    </div>
  ));

  useEffect(
    () => () => {
      files.forEach((file) => URL.revokeObjectURL(file.preview));
    },
    [files]
  );

  const filepath = acceptedFiles.map((file) => (
    <li key={file.path}>
      {file.path} - {file.size} bytes
    </li>
  ));
  const [show, setShow] = useState(false);
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
        <button
          className="finishBtn"
          onClick={() => window.alert("Your journey is ended!")}
        >
          Finish
        </button>
      </div>
    </div>
  );
};

export default FileUpload;
