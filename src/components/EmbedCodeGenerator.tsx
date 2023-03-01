import { Box, Typography, useTheme } from "@mui/material";
import React, { useState, useEffect } from "react";

interface EmbedCodeGeneratorProps {
  componentUrl: string;
}

const EmbedCodeGenerator = ({ componentUrl }: EmbedCodeGeneratorProps) => {
  const theme = useTheme();
  const [iframeHeight, setIframeHeight] = useState("50vh");

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
  }, [componentUrl]);

  const embedCode = () => {
    return (
      <Box
        component="iframe"
        src={componentUrl}
        sx={{ width: "100%", height: iframeHeight, mx: "auto", border: "none" }}
        title="Iframe Example"
      />
    );
  };

  return (
    <Box>
      <Typography sx={{ mb: theme.spacing(2) }}>
        Copy and paste the following code into your website to embed the ForkFacts component:
      </Typography>
      {embedCode()}
    </Box>
  );
};

export default EmbedCodeGenerator;
