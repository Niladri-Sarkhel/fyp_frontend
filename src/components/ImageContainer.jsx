import { Box, Skeleton, Dialog, Button } from "@mui/material";
import ImageIcon from "@mui/icons-material/Image";
import DownloadIcon from "@mui/icons-material/Download";

import { useContext, useState } from "react";
import { ImageContainerContext } from "../contexts/ImageContainerContext";

const containerStates = Object.freeze({
  IDLE: 0,
  GENERATING: 1,
  COMPLETED: 2,
});

function RenderContent({ state, generatedImage, handleImageClick }) {
  switch (state) {
    case containerStates.IDLE:
      return (
        <ImageIcon
          sx={{
            fontSize: "5em",
            zIndex: 0,
          }}
        ></ImageIcon>
      );
    case containerStates.GENERATING:
      return (
        <Skeleton
          variant="rectangular"
          width={"100%"}
          height={"100%"}
          animation="wave"
          sx={{
            borderRadius: "0.7em", // round corners
            backgroundColor: "#0d1117", // background shade
            opacity: 1, // transparency
          }}
        ></Skeleton>
      );
    case containerStates.COMPLETED:
      return (
        <img
          src={generatedImage} // image from context
          alt="Generated result"
          onClick={() => {
            handleImageClick(true);
          }}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            borderRadius: "0.7em",
          }}
        />
      );
    default:
      return null;
  }
}

export default function ImageContainer() {
  const { containerState, setContainerState, image } = useContext(
    ImageContainerContext
  );
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  return (
    <Box
      sx={{
        position: "relative",
        height: "70%",
        width: "70%",

        // boxShadow: "1em 1em 3em rgba(0, 0, 0)", // custom shadow
        borderRadius: "0.7em", // optional
        border: "0.1em solid #000000", // ✅ fixed border definition

        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {containerState === containerStates.COMPLETED && (
        <a href={image} download="generated-image.jpeg">
          <Button
            sx={{
              position: "absolute",
              top: "0.5em",
              right: 0,
              marginRight: "0.5em",
              padding: "0.5em",
              border: "0.1em solid #444c53", // ✅ fixed border definition
              backgroundColor: "rgba(0, 0, 0, 0.5)",
              color: "white",
              "&:hover": {
                backgroundColor: "rgba(0, 0, 0, 0.7)",
              },
            }}
          >
            <DownloadIcon />
          </Button>
        </a>
      )}

      <RenderContent
        state={containerState}
        generatedImage={image}
        handleImageClick={setIsDialogOpen}
      ></RenderContent>
      <Dialog
        open={isDialogOpen}
        onClose={() => {
          setIsDialogOpen(false);
        }}
        fullWidth
      >
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          sx={{
            border: "0.1em solid #000000", // ✅ fixed border definition
          }}
        >
          <img
            src={image}
            alt="Dialog preview"
            style={{
              maxWidth: "100%",
              maxHeight: "100vh",
            }}
          />
        </Box>
      </Dialog>
    </Box>
  );
}
