import { useState, useRef } from 'react';
import { DragnDropStatuses } from "styles/StyledComponents/DragnDrop";

const useFileUploader = () => {
  const [status, setStatus] = useState(DragnDropStatuses.Default)
  const [imageUrl, setImageUrl] = useState('assets/img/image12.jpg')
  const fileInputRef = useRef(null)

  const handleReset = () => {
    setImageUrl(null);
    setStatus(DragnDropStatuses.Default);
    if (fileInputRef.current) {
      fileInputRef.current.value = ""
    }
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault()
    setStatus(DragnDropStatuses.Active)
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault()
    setStatus(DragnDropStatuses.Default)
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault()
    processFile(e.dataTransfer.files)
  };

  const handleFileInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault()
    processFile(e.target.files)
  };

  const processFile = (files: FileList) => {
    const file = files[0]
    if (!file) return
  
    const url = URL.createObjectURL(file);
    const img = new Image()

    img.onload = () => {
      if (img.width === img.height && img.width >= 1242) {
        setImageUrl(url)
        setStatus(DragnDropStatuses.Loading)
        console.log("File is loading:")
        setStatus(DragnDropStatuses.Uploaded)
        console.log("File has loaded:")
      } else {
        setStatus(DragnDropStatuses.Error)
        console.error("Error loading image.")
        URL.revokeObjectURL(url)
      }
    }
    img.src = url
  }
  
  return {
    status,
    handleReset,
    handleDragOver,
    handleDragLeave,
    handleDrop,
    handleFileInputChange,
    fileInputRef,
    imageUrl
  }
}

export default useFileUploader