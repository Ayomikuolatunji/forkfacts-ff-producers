import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import EmbedCodeGenerator from "../components/EmbedCodeGenerator";
import { Box } from "@mui/material";

const IndexPage: React.FC<PageProps> = () => {
	const componentUrl = "https://www.forkfacts-components-link";


	return (
		<Box sx={{ width: "50%", mx: "auto"}}>
			<h1>Welcome to ForkFacts!</h1>
			<EmbedCodeGenerator componentUrl={componentUrl} />
		</Box>
	);
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;
