import { Box, Typography } from "@mui/material";
import React from "react";

interface EmbedCodeGeneratorProps {
	componentUrl: string;
}

const EmbedCodeGenerator = ({ componentUrl }: EmbedCodeGeneratorProps) => {
	const embedCode = () => {
		return (
			<Box
				component="iframe"
				src={componentUrl}
				sx={{ width: "100%", height: "50vh", mx: "auto" }}
				title="Iframe Example"
			/>
		);
	};

	return (
		<Box>
			<Typography>
				Copy and paste the following code into your website to embed the
				ForkFacts component:
			</Typography>
			{embedCode()}
		</Box>
	);
};

export default EmbedCodeGenerator;
