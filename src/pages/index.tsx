import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import EmbedCodeGenerator from "../components/EmbedCodeGenerator";
import { Box } from "@mui/material";

const IndexPage: React.FC<PageProps> = () => {
	const componentUrl = "https://www.figma.com/file/JexGuMEfOIWqn6KX8SBy5C/Forkfacts-with-material-theme-(Copy-Colours)?node-id=5104%3A118877&t=XM2NrjxkTm34mHa5-0";


	return (
		<Box sx={{ width: "50%", mx: "auto"}}>
			<h1>Welcome to ForkFacts!</h1>
			<EmbedCodeGenerator componentUrl={componentUrl} />
		</Box>
	);
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;
