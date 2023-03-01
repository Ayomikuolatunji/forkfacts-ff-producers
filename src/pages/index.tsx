import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import EmbedCodeGenerator from "../components/EmbedCodeGenerator";

const IndexPage: React.FC<PageProps> = () => {
	const componentUrl = "https://example.com/ff-producer";
	return (
		<div>
			<h1>Welcome to ForkFacts!</h1>
			<EmbedCodeGenerator componentUrl={componentUrl} />
		</div>
	);
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;
