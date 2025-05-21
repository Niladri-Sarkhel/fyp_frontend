import { createContext, useState } from "react";
const ImageContainerContext = createContext();

function ImageContainerProvider({ children }) {
  const [containerState, setContainerState] = useState(0);
  const [image, setImage] = useState(null);
  return (
    <ImageContainerContext.Provider
      value={{ containerState, setContainerState, image, setImage }}
    >
      {children}
    </ImageContainerContext.Provider>
  );
}

export { ImageContainerContext, ImageContainerProvider };
