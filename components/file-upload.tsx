"use client"

import type React from "react"

import { useState, useRef } from "react"
import { Upload, X } from "lucide-react"
import { Button } from "@/components/ui/button"

interface FileUploadProps {
  accept?: string
  maxSize?: number
  label?: string
  helperText?: string
  onChange?: (file: File | null) => void
}

export function FileUpload({
  accept = "*",
  maxSize = 5,
  label = "Arraste um arquivo ou clique para selecionar",
  helperText = "Tamanho máximo: 5MB",
  onChange,
}: FileUploadProps) {
  const [file, setFile] = useState<File | null>(null)
  const [isDragging, setIsDragging] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  const handleFileChange = (selectedFile: File | null) => {
    setError(null)

    if (!selectedFile) {
      setFile(null)
      if (onChange) onChange(null)
      return
    }

    // Verificar tamanho do arquivo
    if (selectedFile.size > maxSize * 1024 * 1024) {
      setError(`O arquivo excede o tamanho máximo de ${maxSize}MB.`)
      return
    }

    // Verificar tipo do arquivo
    if (accept !== "*") {
      const acceptedTypes = accept.split(",").map((type) => type.trim())
      const fileExtension = `.${selectedFile.name.split(".").pop()}`
      const fileType = selectedFile.type

      const isAccepted = acceptedTypes.some((type) => type === fileExtension || type === fileType || type === "*")

      if (!isAccepted) {
        setError(`Tipo de arquivo não aceito. Use: ${accept}`)
        return
      }
    }

    setFile(selectedFile)
    if (onChange) onChange(selectedFile)
  }

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault()
    setIsDragging(true)
  }

  const handleDragLeave = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault()
    setIsDragging(false)
  }

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault()
    setIsDragging(false)

    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      handleFileChange(e.dataTransfer.files[0])
    }
  }

  const handleClick = () => {
    if (inputRef.current) {
      inputRef.current.click()
    }
  }

  const handleRemoveFile = () => {
    setFile(null)
    if (onChange) onChange(null)
    if (inputRef.current) {
      inputRef.current.value = ""
    }
  }

  return (
    <div className="w-full">
      <input
        type="file"
        ref={inputRef}
        accept={accept}
        onChange={(e) => handleFileChange(e.target.files?.[0] || null)}
        className="hidden"
      />

      {!file ? (
        <div
          onClick={handleClick}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
          className={`flex cursor-pointer flex-col items-center justify-center rounded-md border border-dashed p-6 transition-colors ${
            isDragging
              ? "border-primary bg-primary/5"
              : "border-muted-foreground/20 hover:border-primary/50 hover:bg-muted"
          }`}
        >
          <Upload className="mb-2 h-10 w-10 text-muted-foreground" />
          <p className="mb-1 text-sm font-medium">{label}</p>
          <p className="text-xs text-muted-foreground">{helperText}</p>
        </div>
      ) : (
        <div className="flex items-center justify-between rounded-md border border-muted-foreground/20 bg-muted/50 p-3">
          <div className="flex items-center space-x-2 overflow-hidden">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-primary/10">
              <Upload className="h-5 w-5 text-primary" />
            </div>
            <div className="min-w-0 flex-1">
              <p className="truncate text-sm font-medium">{file.name}</p>
              <p className="text-xs text-muted-foreground">{(file.size / 1024 / 1024).toFixed(2)} MB</p>
            </div>
          </div>
          <Button variant="ghost" size="icon" onClick={handleRemoveFile} className="h-8 w-8 shrink-0">
            <X className="h-4 w-4" />
            <span className="sr-only">Remover arquivo</span>
          </Button>
        </div>
      )}

      {error && <p className="mt-2 text-sm text-destructive">{error}</p>}
    </div>
  )
}
