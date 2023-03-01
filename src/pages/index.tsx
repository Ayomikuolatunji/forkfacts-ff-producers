import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import EmbedCodeGenerator from "../components/EmbedCodeGenerator";
import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";

const IndexPage: React.FC<PageProps> = () => {
	const theme = useTheme();
	const mobile = useMediaQuery(theme.breakpoints.down("md"));
	const componentUrl = "paste your component link here";

	return (
		<Box sx={{ width: mobile ? "100%" : "50%", mx: "auto" }}>
			<Typography variant={mobile ? "h4" : "h3"} sx={{ p: mobile ? 2 : 0 }}>
				Welcome to ForkFacts!
			</Typography>
			<EmbedCodeGenerator componentUrl={componentUrl} />
		</Box>
	);
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;
