import { TextField, InputAdornment, IconButton, Box } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
export default function PromptBar() {
  return (
    <Box
      sx={{
        boxShadow: "1em 1em 3em rgba(0, 0, 0)", // custom shadow
        borderRadius: "0.7em", // optional
        border: "0.1em solid #114e88", // ✅ fixed border definition

        backgroundColor: "#09223b",
        backgroundColor: "#051c2e",
        color: "#99ccff",
        fontWeight: "bold",
        width: "100%",
      }}
    >
      <TextField
        id="outlined-basic"
        variant="outlined"
        multiline
        maxRows={5}
        fullWidth
        placeholder="write your prompt here..."
        slotProps={{
          input: {
            sx: {
              color: "white", // text color
            },
            startAdornment: (
              <InputAdornment position="start">
                <span style={{ fontSize: "1.3em", filter: "brightness(1)" }}>
                  ✨
                </span>
              </InputAdornment>
            ),
            endAdornment: (
              <InputAdornment position="end">
                <IconButton edge="end" size="small">
                  <SendIcon sx={{ color: "white" }} />
                </IconButton>
              </InputAdornment>
            ),
          },
          inputLabel: {
            sx: {
              color: "white", // label color
            },
          },
        }}
      ></TextField>
    </Box>
  );
}
