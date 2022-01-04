import React from "react";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import "./Slider.css";

function ReactCardSlider(props) {
  const slides = [
      {title: "Yahari", image: "https://i.ytimg.com/vi/FdSH_KLFJ0o/maxresdefault.jpg"},
      {title: "Kaguya-sama wa Kokurasetai", image: "https://wallpaperaccess.com/full/1580438.jpg"},
      {title: "Re: Zero", image: "https://ais-s.ais-vidnt.com/ais/play/origin/VOD/Poster/75066902.93230952.backdrop.original.jpg"},
      {title: "Karakai Jouzu no Takagi-san", image: "https://c4.wallpaperflare.com/wallpaper/709/423/809/anime-karakai-jouzu-no-takagi-san-nishikata-karakai-jouzu-no-takagi-san-takagi-karakai-jouzu-no-takagi-san-wallpaper-preview.jpg"},
      {title: "Seishun Buta Yarou", image: "https://wallpaperaccess.com/full/1886986.jpg"},
      {title: "Hello World", image: "https://wallpaperaccess.com/full/2647418.jpg"},
      {title: "Weathering With You", image: "https://assets.brandinside.asia/uploads/2019/04/Screen-Shot-2019-04-10-at-16.12.22.png"},
      {title: "A Whisker Away", image: "https://miro.medium.com/max/1200/1*IDe9e59QVnQK-K26saipiA.jpeg"}


  ];

  const slideLeft = () => {
    let slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft + 500;
  };

  const slideRight = () => {
    let slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft - 500;
  };

  return (
    <div id="main-slider-container">
      <MdChevronLeft
        size={40}
        className="slider-icon left"
        onClick={slideLeft}
      />
      <div id="slider">
        {slides.map((slide, index) => (
          <div className="slider-card" key={index}>
            <div className="slider-card-image">
                <img src={slide.image} alt="" />
            </div>
            <p className="slider-card-title">{index + 1}. {slide.title}</p>
            <p className="slider-card-description">Card Description</p>
          </div>
        ))}
      </div>
      <MdChevronRight
        size={40}
        className="slider-icon right"
        onClick={slideRight}
      />
    </div>
  );
}

export default ReactCardSlider;
