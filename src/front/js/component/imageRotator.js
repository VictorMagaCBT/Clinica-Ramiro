import React, {useState, useEffect} from "react";


const ImageRotator = () => {
    
    const imageUrls = [
    "https://i.ibb.co/XXN5N9p/Imagem-9-sem-Identidade-min.png",
    "https://i.ibb.co/C0MVHjM/Imagem-7-Incognita-min.jpg",
    "https://i.ibb.co/K7PJTH0/Imagem-11-Inc-gnita-min.jpg",
    "https://i.ibb.co/Tg7bcPW/Imagem-10.jpg",
    ];

    const [currentIndex, setCurrentIndex] = useState(0);
    const [currentImages, setCurrentImages] = useState([null, null, null]);

  
    useEffect(() => {
      const intervalId = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % imageUrls.length);
        setCurrentImages((prevImages) => {
          const newImages = [...prevImages];
          newImages[0] = imageUrls[(currentIndex + 2) % imageUrls.length];
          newImages[1] = imageUrls[(currentIndex + 1) % imageUrls.length];
          newImages[2] = imageUrls[currentIndex];
          return newImages;
      });
      }, 2000);
  
      return () => clearInterval(intervalId);
    }, [currentIndex, imageUrls]);
  
    return (
      <div className="photosOrtognatica">
        <div className="exemplo-image1">
          <a href={currentImages[0]} target="_blank" rel="noopener noreferrer">
            <img src={currentImages[0]} alt="Image 1" />
          </a>
        </div>
        <div className="exemplo-image2">
          <a href={currentImages[1]} target="_blank" rel="noopener noreferrer">
            <img src={currentImages[1]} alt="Image 2" />
          </a>
        </div>
        <div className="exemplo-image3">
          <a href={currentImages[2]} target="_blank" rel="noopener noreferrer">
            <img src={currentImages[2]} alt="Image 3" />
          </a>
        </div>
      </div>
    );
  };

  export default ImageRotator;