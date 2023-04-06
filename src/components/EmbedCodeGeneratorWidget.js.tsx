import {
  Box,
  Button,
  Snackbar,
  TextareaAutosize,
  TextField,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import React, { useEffect, useState } from "react";

interface EmbedCodeGeneratorProps {
  name: string;
  description: string;
  url: string;
}

const EmbedCodeGeneratorWidget = ({
  name,
  description,
  url = "https://forkfacts-v2.vercel.app/",
}: EmbedCodeGeneratorProps) => {
  const [embedCode, setEmbedCode] = useState("");
  const theme = useTheme();
  const [showSnackbar, setShowSnackbar] = useState(false);

  useEffect(() => {
    const embedCodeTemplate = `<div style="position: relative; overflow: hidden; padding-top: 56.25%;">
    <iframe src="${url}" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; border: none;"></iframe>
  </div>`;
    setEmbedCode(embedCodeTemplate);
  }, [url, name, description]);

  const handleCopyCode = () => {
    navigator.clipboard.writeText(embedCode);
    setShowSnackbar(true);
  };

  const handleCloseSnackbar = () => {
    setShowSnackbar(false);
  };

  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        columnGap: theme.spacing(2),
        backgroundColor: "#F2EFFF",
        p: theme.spacing(3),
      }}
    >
      <Box
        boxShadow={2}
        sx={{
          width: theme.spacing(32.75),
          height: "auto",
          borderRadius: theme.spacing(1),
          backgroundColor: "#FFF",
        }}
      >
        <Typography
          sx={{
            borderBottom: "1px solid #E4E1EC",
            p: theme.spacing(1),
            color: "#908EA5",
            fontWeight: 500,
            fontSize: theme.spacing(1.95),
            lineHeight: theme.spacing(2),
          }}
        >
          {name}
        </Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            mt: theme.spacing(7),
          }}
        >
          <Box component="img" src="/Pantry.svg" />
        </Box>
        <Typography sx={{ textAlign: "center", p: theme.spacing(4) }}>
          {description}
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          width: "40%",
          columnGap: theme.spacing(2),
        }}
      >
        <Typography
          sx={{
            borderBottom: "1px solid #E4E1EC",
            color: "#908EA5",
            fontWeight: 500,
            fontSize: theme.spacing(1.95),
            lineHeight: theme.spacing(2),
            p: theme.spacing(1),
            textTransform: "uppercase",
          }}
        >
          Embed this tool
        </Typography>
        <Typography sx={{ p: theme.spacing(1) }}>
          To embed this on your site, just copy and paste the code below:
        </Typography>
        <Box
          sx={{
            p: theme.spacing(2),
          }}
        >
          <Box
            component="textarea"
            value={embedCode}
            sx={{
              height: theme.spacing(15),
              width: "100%",
              mt: theme.spacing(1),
            }}
          />
        </Box>
        <Box
          sx={{
            ml: theme.spacing(2),
            width: theme.spacing(30),
            height: theme.spacing(5),
            p: theme.spacing(2),
          }}
        >
          <Button
            onClick={handleCopyCode}
            variant="contained"
            color="primary"
            sx={{
              width: theme.spacing(30),
              height: theme.spacing(5),
            }}
          >
            Copy Embed Code
          </Button>
        </Box>
      </Box>
      <Snackbar
        open={showSnackbar}
        autoHideDuration={3000}
        onClose={handleCloseSnackbar}
        message="Embed code copied to clipboard"
      />
    </Box>
  );
};

export default EmbedCodeGeneratorWidget;
