import { Box } from "@mui/material";
import PromptBar from "./PromptBar";
import ImageContainer from "./ImageContainer";
export default function MainPage() {
  return (
    <Box
      sx={{
        height: "70%",
        width: "50%",
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <ImageContainer></ImageContainer>
      <PromptBar></PromptBar>
    </Box>
  );
}
