import { useState, useRef } from "react";

import CloseIcon from "components/Icons/CloseIcon/CloseIcon";
import FileIcon from "components/Icons/FileIcon/FileIcon";
import { DragnDropStatuses, StyledDragnDrop } from "styles/StyledComponents/DragnDrop";
import DragnDropText from "./DragnDropText";
import { StyledText, TextStyleTypes } from "styles/StyledComponents/Text";
import Image, { ImageTypes } from "components/Image/Image";

const DragnDrop = () => {
  const [status, setStatus] = useState(DragnDropStatuses.Default);
  const fileInputRef = useRef(null);

  const handleReset = () => {
    setStatus(DragnDropStatuses.Default);
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setStatus(DragnDropStatuses.Active);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    setStatus(DragnDropStatuses.Default);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setStatus(DragnDropStatuses.Loading);
    console.log("File is loading:");

    const files = e.dataTransfer.files;
    if (files) {
      try {
        setStatus(DragnDropStatuses.Uploaded)
        console.log("File has loaded:");
      } catch (error) {
        console.error("File uploading error:", error);
        setStatus(DragnDropStatuses.Error); 
      }
    }
  };

  const handleFileInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setStatus(DragnDropStatuses.Loading);
    console.log("File is loading:");

    const files = e.target.files;
    if (files) {
      try {
        setStatus(DragnDropStatuses.Uploaded)
        console.log("File has loaded:");
      } catch (error) {
        console.error("File uploading error:", error);
        setStatus(DragnDropStatuses.Error); 
      }
    }
  };

  return (
    <StyledDragnDrop
      className="form-block__drag-drop drag-drop"
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
      status={status}
    >
      {
        (status === DragnDropStatuses.Loading || status === DragnDropStatuses.Uploaded) 
          && <CloseIcon onClick={handleReset} /> 
      }
      {
        (status === DragnDropStatuses.Loading || status === DragnDropStatuses.Uploaded) 
          ? <Image type={ImageTypes.DragnDrop} alt="Uploaded Image" src={'assets/img/image12.jpg'} />
          : <FileIcon />
      }
      <input
        type="file"
        id="fileInput"
        className="drag-drop__input"
        accept="image/*"
        onChange={handleFileInputChange}
      />
      <DragnDropText />
      {status === DragnDropStatuses.Error && (
        <StyledText type={TextStyleTypes.SizeError}>
          Слишком маленький размер изображения
        </StyledText>
      )}
    </StyledDragnDrop>
  )
}

export default DragnDrop;