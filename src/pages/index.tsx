import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";
import "@fontsource/poppins";
import "@fontsource/poppins/500.css";
import "@fontsource/poppins/600.css";
import "@fontsource/poppins/700.css";

import { Facebook, Linkedin, Twitter } from "../DesignIcons";
import RecipeForm from "../components/RecipeForm";

const IndexPage: React.FC<PageProps> = () => {
  const theme = useTheme();
  const mobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Box sx={{ width: "100%", overflow: "hidden" }}>
      <Box
        boxShadow={2}
        sx={{
          width: "100%",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-start",
            flexDirection: "column",
            width: "100%",
            p: theme.spacing(3),
            textAlign: "center",
          }}
        >
          <Typography
            color="primary"
            variant={mobile ? "h3" : "h3"}
            sx={{
              lineHeight: mobile ? theme.spacing(4.5) : theme.spacing(4),
              fontWeight: theme.typography.fontWeightLight,
              color: "#4C42E8",
            }}
          >
            Forkfacts
          </Typography>
        </Box>
      </Box>
      <Box
        sx={{
          width: mobile ? "100%" : "80%",
          ml: "auto",
          display: "flex",
          justifyContent: "space-between",
          flexDirection: "row",
          alignItems: "center",
          mt: theme.spacing(6.5),
        }}
      >
        <Box>
          <Typography
            variant="h3"
            sx={{ fontWeight: theme.typography.fontWeightLight }}
          >
            Try Our Recipe Nutrition generator
          </Typography>
        </Box>
      </Box>
      <Box
        sx={{
          width: mobile ? "100%" : "80%",
          ml: "auto",
          display: "flex",
          justifyContent: "flex-start",
          flexDirection: "column",
          alignItems: "flex-start",
          mt: theme.spacing(1.5),
        }}
      >
        <RecipeForm />
      </Box>
    </Box>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;
