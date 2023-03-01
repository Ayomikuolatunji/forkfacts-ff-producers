import React from "react";
import { Box, Typography } from "@mui/material";

interface EmbeddableComponentProps {
	label: string;
	data: string;
}

export const EmbeddableComponent: React.FC<EmbeddableComponentProps> = ({
	label,
	data,
}) => {
	return (
		<Box
			sx={{
				backgroundColor: "#fff",
				borderRadius: 8,
				boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.05)",
				p: 2,
				width: "238px",
				height: "238px",
			}}
		>
			<Typography variant="h3" sx={{ fontSize: 20, fontWeight: 700, mb: 1 }}>
				{label}
			</Typography>
			<Typography variant="body1" sx={{ fontSize: 16 }}>
				{data}
			</Typography>
		</Box>
	);
};
