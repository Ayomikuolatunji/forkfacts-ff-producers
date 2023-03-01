import { Box, Button, Snackbar, Typography, useTheme } from "@mui/material";
import React, { useState, useEffect } from "react";

interface EmbedCodeGeneratorProps {
  componentUrl: string;
}

const EmbedCodeGenerator = ({ componentUrl }: EmbedCodeGeneratorProps) => {
  const theme = useTheme();
  const [iframeHeight, setIframeHeight] = useState("50vh");
  const [showSnackbar, setShowSnackbar] = useState(false);
  const [inputUrl, setInputUrl] = useState(componentUrl);

  useEffect(() => {
    const handleIframeResize = () => {
      const iframe = document.getElementById("embedded-component") as HTMLIFrameElement;
      if (iframe) {
        const newHeight = `${iframe.contentWindow?.document.body.scrollHeight}px`;
        setIframeHeight(newHeight);
      }
    };

    window.addEventListener("resize", handleIframeResize);
    handleIframeResize();

    return () => {
      window.removeEventListener("resize", handleIframeResize);
    };
  }, [inputUrl]);

  const handleCopyClick = () => {
    const el = document.createElement("textarea");
    el.value = generateEmbedCode();
    document.body.appendChild(el);
    el.select();
    document.execCommand("copy");
    document.body.removeChild(el);

    setShowSnackbar(true);
  };

  const handleCloseSnackbar = () => {
    setShowSnackbar(false);
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputUrl(event.target.value);
  };

  const generateEmbedCode = () => {
    return `<iframe src="${inputUrl}" style="width: 100%; height: ${iframeHeight}; border: none;"></iframe>`;
  };

  return (
    <Box>
      <Typography sx={{ mb: theme.spacing(2) }}>
        To embed the ForkFacts component on your website, follow these steps:
      </Typography>
      <Box component="ol">
        <Box component="li">
          Copy the following code:
          <Box
            component="textarea"
            readOnly
            value={generateEmbedCode()}
            sx={{ width: "100%", height: "120px", p: 1, my: 2, border: "1px solid #ccc", borderRadius: "4px" }}
          />
        </Box>
        <Box component="li">
          Paste the code into your website where you want the component to appear.
        </Box>
        <li>
          Adjust the height of the iframe to ensure that the embedded content is fully visible.
        </li>
      </Box>
      <Box sx={{ mt: theme.spacing(2) }}>
        <input type="text" value={inputUrl} onChange={handleInputChange} />
        <Button variant="contained" color="primary" onClick={handleCopyClick}>
          Copy Embed Code
        </Button>
      </Box>
      <Snackbar open={showSnackbar} autoHideDuration={3000} onClose={handleCloseSnackbar} message="Embed code copied to clipboard" />
    </Box>
  );
};

export default EmbedCodeGenerator;
