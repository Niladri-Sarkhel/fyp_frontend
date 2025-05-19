import { AppBar, Chip, Box, Avatar } from "@mui/material";

export default function TitleBar() {
  return (
    <>
      <AppBar
        position="sticky"
        style={{
          height: "3.5em",
          //   backgroundColor: "#002630",
          backgroundColor: "rgba(0, 20, 26, 0.1)", // semi-transparent
          backdropFilter: "blur(10px)",
          WebkitBackdropFilter: "blur(10px)", // Safari support
        }}
      >
        <Box
          sx={{
            height: "100%",
            display: "flex",
            justifyContent: "space-between", // horizontal centering
            alignItems: "center", // vertical centering
            padding: "0em 1.5em",
          }}
        >
          <Chip
            label="Chip Outlined"
            variant="outlined"
            color="primary"
            sx={{
              backgroundColor: "#09223b",
              color: "#99ccff",
              fontWeight: "bold",
            }}
          />
          <Chip
            label="🧠✨ Bring the image of your mind to life 🖼️🌌"
            variant="outlined"
            color="primary"
            sx={{
              backgroundColor: "#09223b",
              color: "#99ccff",
              fontWeight: "bold",
            }}
          />

          <Chip
            clickable
            label="login / signin"
            avatar={<Avatar>🤖</Avatar>}
            variant="outlined"
            color="primary"
            sx={{
              backgroundColor: "#09223b",
              color: "#99ccff",
              fontWeight: "bold",
            }}
          />
        </Box>
      </AppBar>
    </>
  );
}
