// src/config/cloudinary.ts
export const CLOUDINARY_CONFIG = {
  cloudName: 'afengenharia', // Substitua pelo seu
  baseUrl: 'https://res.cloudinary.com/dr6wyopah/image/upload/v1766126790/'
};

// Função para gerar URLs otimizadas
export const getCloudinaryUrl = (
  imagePath: string, 
) => {
  return `${CLOUDINARY_CONFIG.baseUrl}/${imagePath}`;
};

// Para miniaturas
export const getThumbnailUrl = (imagePath: string) => {
  return `${CLOUDINARY_CONFIG.baseUrl}/w_150,h_150,c_fill,f_auto,q_auto/${imagePath}`;
};