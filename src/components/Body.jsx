import { useState } from "react";
import { Container, Box, Typography, Button } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import SendIcon from "@mui/icons-material/Send";
import SettingsSuggestIcon from "@mui/icons-material/SettingsSuggest";
import DownloadIcon from "@mui/icons-material/Download";

const steps = [
  {
    title: "Describe your image",
    description:
      "type a phrase, sentence, or paragraph that describes the image you want to create.",
    icon: <EditIcon></EditIcon>,
  },
  {
    title: "image generation",
    description:
      "Our AI-powered engine will transform your text into high quality image.",
    icon: <SettingsSuggestIcon></SettingsSuggestIcon>,
  },
  {
    title: "Download",
    description: "Download your image",
    icon: <DownloadIcon></DownloadIcon>,
  },
];

const CustomCard = function ({ title, description, icon }) {
  return (
    <Box
      sx={{
        width: "auto",
        boxShadow: 6,
        // backgroundColor: "#010f17",
        display: "flex",
        gap: 2,
        justifyContent: "left",
        alignItems: "center",
        padding: "0.5em 1em",
        // color: "#c0d5ea",
        border: 2,
        borderColor: "#155da5",
        borderRadius: 1.5,

        backgroundColor: "#09223b",
        color: "#99ccff",
      }}
    >
      <Box>{icon}</Box>
      <Box>
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          sx={{ color: "white" }}
        >
          {title}
        </Typography>
        <Typography variant="body2">{description}</Typography>
      </Box>
    </Box>
  );
};

export default function Body() {
  return (
    <>
      <Container
        sx={{
          backgroundImage: `
          linear-gradient(to right, rgba(0, 255, 0, 0.1) 0.05em, transparent 0.05em),
          linear-gradient(to bottom, rgba(0, 255, 0, 0.1) 0.05em, transparent 0.05em)
        `,
          backgroundSize: "2.5em 2.5em", // size of each cell
        }}
      >
        <Box
          sx={{
            minHeight: "100vh",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            scrollSnapAlign: "start",
            // scrollSnapStop: "always",
          }}
          id="section-1"
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "2em",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Typography variant="h2">
              Turn text into{" "}
              <p style={{ color: "#3399ff", fontStyle: "italic" }}>✨ image</p>{" "}
              with a single <span style={{ fontStyle: "italic" }}>click</span>
            </Typography>
            <Button
              variant="contained"
              endIcon={<SendIcon></SendIcon>}
              sx={{ width: "100%" }}
            >
              generate image ✨
            </Button>
          </Box>
        </Box>

        <Box
          sx={{
            minHeight: "100vh",
            display: "flex",
            flexDirection: "column",
            gap: "3em",
            alignItems: "center",
            justifyContent: "center",
            scrollSnapAlign: "start",
            // scrollSnapStop: "always",
          }}
          id="section-2"
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Typography variant="h2" sx={{ color: "#3399ff" }}>
              How it works
            </Typography>
            <Typography variant="h5" sx={{ fontStyle: "italic" }}>
              transform words into stunning images
            </Typography>
          </Box>

          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "1em",
              width: "30em",
            }}
          >
            {steps.map((values) => (
              <CustomCard
                title={values.title}
                description={values.description}
                icon={values.icon}
              ></CustomCard>
            ))}
          </Box>
        </Box>

        <Box
          sx={{
            minHeight: "100vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            scrollSnapAlign: "start",
            // scrollSnapStop: "always",
          }}
          id="section-3"
        >
          <Typography variant="h2">Section 3</Typography>
        </Box>
      </Container>
    </>
  );
}
