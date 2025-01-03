import ImageContainer from "./ImageContainer";

function ContentDisplay() {
  return (
    <div className="gradient-container">
      <div className="flex-column-container">
        <div className="gradient-overlay-container" />
        <ImageContainer />
      </div>
    </div>
  );
}

export default ContentDisplay;
