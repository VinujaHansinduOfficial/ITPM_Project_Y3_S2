import React from "react";
import "./featured.css";
// FeaturedItem Component
const FeaturedItem = ({ imageSrc, altText, title, properties }) => (
  <div className="featuredItem">
    <img src={imageSrc} alt={altText} className="featuredImg" />
    <div className="featuredTitles">
      <h1>{title}</h1>
      <h2>{properties ? `${properties} properties` : "No properties available"}</h2>
    </div>
  </div>
);

// Featured Component
const Featured = () => {
  const featuredData = [
    {
      id: 1,
      imageSrc:
        "https://cf.bstatic.com/xdata/images/city/max500/957801.webp?k=a969e39bcd40cdcc21786ba92826063e3cb09bf307bcfeac2aa392b838e9b7a5&o=",
      altText: "Bay Vista",
      title: "Bay Vista",
      properties: 123,
    },
    {
      id: 2,
      imageSrc:
        "https://cf.bstatic.com/xdata/images/city/max500/690334.webp?k=b99df435f06a15a1568ddd5f55d239507c0156985577681ab91274f917af6dbb&o=",
      altText: "Jetwing Surf",
      title: "Jetwing Surf",
      properties: 533,
    },
    {
      id: 3,
      imageSrc:
        "https://cf.bstatic.com/xdata/images/city/max500/689422.webp?k=2595c93e7e067b9ba95f90713f80ba6e5fa88a66e6e55600bd27a5128808fdf2&o=",
      altText: "Arugam Bay",
      title: "Arugam Bay",
      properties: 149,
    },
    {
      id: 4,
      imageSrc:
        "https://cf.bstatic.com/xdata/images/city/max500/690334.webp?k=b99df435f06a15a1568ddd5f55d239507c0156985577681ab91274f917af6dbb&o=",
      altText: "Jetwing Surf",
      title: "Jetwing Surf",
      properties: 533,
    },
    {
      id: 5,
      imageSrc:
        "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.vecteezy.com%2Ffree-photos%2Fnew-adventure&psig=AOvVaw34WDwWtmwDwdXUUWp6_gN2&ust=1746171968397000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCPCv54fkgY0DFQAAAAAdAAAAABBL",
      altText: "Arugam Bay",
      title: "Arugam Bay",
      properties: 149,
    },
   
  ];

  return (
    <div className="featured">
      {featuredData.map(({ id, imageSrc, altText, title, properties }) => (
        <FeaturedItem
          key={id}
          imageSrc={imageSrc}
          altText={altText}
          title={title}
          properties={properties}
        />
      ))}
    </div>
  );
};

export default Featured;
