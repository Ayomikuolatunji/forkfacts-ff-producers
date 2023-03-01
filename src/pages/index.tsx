import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import EmbedCodeGenerator from "../components/EmbedCodeGenerator";
import { Box, Typography } from "@mui/material";

const IndexPage: React.FC<PageProps> = () => {
	const componentUrl = "paste your component link here";


	return (
		<Box sx={{ width: "50%", mx: "auto"}}>
			<Typography variant="h1">Welcome to ForkFacts!</Typography>
			<EmbedCodeGenerator componentUrl={componentUrl} />
		</Box>
	);
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;
