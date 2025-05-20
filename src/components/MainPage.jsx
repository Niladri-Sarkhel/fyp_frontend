import { Box, Skeleton, CircularProgress } from "@mui/material";
import ImageIcon from "@mui/icons-material/Image";
import PromptBar from "./PromptBar";
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
      <Box
        sx={{
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
        {true ? (
          <ImageIcon
            sx={{
              fontSize: "5em",
              zIndex: 0,
            }}
          ></ImageIcon>
        ) : (
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
        )}
      </Box>
      <PromptBar></PromptBar>
    </Box>
  );
}
