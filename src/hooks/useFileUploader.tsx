import { useState, useRef } from 'react';
import { DragnDropStatuses } from "styles/StyledComponents/DragnDrop";

const useFileUploader = () => {
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
    processFile(e.dataTransfer.files);
  };

  const handleFileInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    processFile(e.target.files);
  };

  const processFile = (files: FileList) => {
    const file = files[0]
    setStatus(DragnDropStatuses.Loading);
    console.log("File is loading:");

    try {
      setStatus(DragnDropStatuses.Uploaded);
      console.log("File has loaded:");
    } catch (error) {
      console.error("File uploading error:", error);
      setStatus(DragnDropStatuses.Error);
    }
  };

  return {
    status,
    handleReset,
    handleDragOver,
    handleDragLeave,
    handleDrop,
    handleFileInputChange,
    fileInputRef
  }
}

export default useFileUploader;