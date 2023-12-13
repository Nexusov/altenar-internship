import { usePhone } from 'components/Phone/PhoneContext';
import { useState, useRef } from 'react';
import { DragnDropStatuses } from "styles/StyledComponents/DragnDrop";
import { DEFAULT_IMAGE_URL } from 'utils/transformData';

const useFileUploader = () => {
  const [status, setStatus] = useState(DragnDropStatuses.Default)
  const { imageUrl, setImageUrl } = usePhone();
  const fileInputRef = useRef(null)

  const handleReset = () => {
    setImageUrl(DEFAULT_IMAGE_URL);
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
        setStatus(DragnDropStatuses.Loading)
        console.log("File is loading:")
        setImageUrl(url)
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