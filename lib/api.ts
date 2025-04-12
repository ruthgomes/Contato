// Dados mockados para o site institucional
import { partners, instagramPhotos } from "@/lib/mock-data"

export async function getPartners() {
  // Simula uma chamada à API que retorna os parceiros
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(partners)
    }, 500)
  });
}

export async function getInstagramPhotos() {
  // Simula uma chamada à API que retorna as fotos do Instagram
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(instagramPhotos)
    }, 500)
  });
}

export async function submitContactForm(data: any) {
  // Simula o envio do formulário de contato
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Formulário de contato enviado:", data)
      resolve(true)
    }, 500)
  });
}

export async function submitJobApplication(data: any) {
  // Simula o envio da candidatura
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Candidatura enviada:", data)
      resolve(true)
    }, 500)
  });
}
