import React from "react";
import ImageCard from "./ImageCard";
import "./ImageList.css";

const referenceImage = (props) => {
    console.log(props);
}

const renderImages = images => {
  return images.map(image => {
    console.log("listssssssss", image);
    return <ImageCard ref={referenceImage} key = {image.id} imageObj={image} />;
  });
};

const ImageList = props => {
  const imagesList = props.images;
  return <div className="image-list">{renderImages(imagesList)}</div>;
};
export default ImageList;
