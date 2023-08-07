import React from 'react'
import SimpleImageSlider from "react-simple-image-slider" 

const images = [
    { url: "Images/welcome.jpg" },
    { url: "Images/welcome2.jpg" }
  
  ];
export default function Home() {
  return (
    <div>
    <SimpleImageSlider
        width={1350}
        height={570}
        images={images}
        showBullets={true}
        showNavs={true}
      />
    {/* <img src='./welcome.jpg' alt="Logo" width={1400} height={570} /> */}
    </div>
  )
}
