import { TextField, InputAdornment, IconButton, Box } from "@mui/material";
import { useState } from "react";
import SendIcon from "@mui/icons-material/Send";

import { useContext } from "react";
import { ImageContainerContext } from "../contexts/ImageContainerContext";

export default function PromptBar() {
  const { containerState, setContainerState, image, setImage } = useContext(
    ImageContainerContext
  );
  const [inputValue, setInputValue] = useState("");

  const handleSend = async function () {
    const prompt = inputValue.replace(/\s+/g, " ").trim();
    if (!prompt) return; // guard clause

    console.log("Input:", prompt); // or do something with it
    setInputValue(""); // Clear the text field
    setContainerState(1);

    try {
      const response = await fetch("http://127.0.0.1:3000/api/generate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          prompt: prompt,
        }),
      });

      const blob = await response.blob(); // ✅ get binary data
      const imageUrl = URL.createObjectURL(blob); // ✅ create URL to use in <img>

      setImage(imageUrl); // you can now use this in an <img src={image} />
      setContainerState(2); // completed
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Box
      sx={{
        boxShadow: "1em 1em 3em rgba(0, 0, 0)", // custom shadow
        borderRadius: "0.7em", // optional
        border: "0.1em solid #114e88", // ✅ fixed border definition

        // backgroundColor: "#09223b",
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
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
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
                <IconButton
                  edge="end"
                  size="small"
                  disabled={inputValue.trim() === ""} // ✅ disables when only whitespace
                  onClick={handleSend}
                >
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
