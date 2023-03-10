import {
	Box,
	Button,
	Snackbar,
	TextareaAutosize,
	TextField,
	Typography,
	useMediaQuery,
	useTheme,
} from "@mui/material";
import React, { useState } from "react";

interface EmbedCodeGeneratorProps {
	name: string;
	description: string;
}

const EmbedCodeGenerator = ({ name, description }: EmbedCodeGeneratorProps) => {
	const theme = useTheme();
	const mobile = useMediaQuery(theme.breakpoints.down("md"));
	const [showSnackbar, setShowSnackbar] = useState(false);
	const embedCode = `<a href="${
		window.location.href
	}" target="_blank"><img width="320" height="635" src="https://www.example.com/image.png?name=${encodeURIComponent(
		name,
	)}&description=${encodeURIComponent(description)}" /></a>`;

	const handleCopyCode = () => {
		navigator.clipboard.writeText(embedCode);
		setShowSnackbar(true);
	};

	const handleCloseSnackbar = () => {
		setShowSnackbar(false);
	};

	return (
		<Box
			sx={{
				width: "100%",
				display: "flex",
				columnGap: theme.spacing(2),
				backgroundColor: "#F2EFFF",
				p: theme.spacing(3),
			}}
		>
			<Box
				boxShadow={2}
				sx={{
					width: theme.spacing(32.75),
					height: "auto",
					borderRadius: theme.spacing(1),
					backgroundColor: "#FFF",
				}}
			>
				<Typography
					sx={{
						borderBottom: "1px solid #E4E1EC",
						p: theme.spacing(1),
						color: "#908EA5",
						fontWeight: 500,
						fontSize: theme.spacing(1.95),
						lineHeight: theme.spacing(2),
					}}
				>
					{name}
				</Typography>
				<Box
					sx={{
						display: "flex",
						justifyContent: "center",
						alignItems: "center",
						mt: theme.spacing(7),
					}}
				>
					<Box component="img" src="/Pantry.svg" />
				</Box>
				<Typography sx={{ textAlign: "center", p: theme.spacing(4) }}>
					{description}
				</Typography>
			</Box>
			<Box
				sx={{
					display: "flex",
					flexDirection: "column",
					width: "40%",
					columnGap: theme.spacing(2),
				}}
			>
				<Typography
					sx={{
						borderBottom: "1px solid #E4E1EC",
						color: "#908EA5",
						fontWeight: 500,
						fontSize: theme.spacing(1.95),
						lineHeight: theme.spacing(2),
						p: theme.spacing(1),
						textTransform: "uppercase",
					}}
				>
					Embed this tool
				</Typography>
				<Typography sx={{ p: theme.spacing(1) }}>
					To embed this on your site, just copy and paste the code below:
				</Typography>
				<Box
					sx={{
						p: theme.spacing(2),
					}}
				>
					<Box
						component="textarea"
						value={embedCode}
						sx={{
							height: theme.spacing(15),
							width: "100%",
							mt: theme.spacing(1),
						}}
					/>
				</Box>
				<Box
					sx={{
						ml: theme.spacing(2),
						width: theme.spacing(30),
						height: theme.spacing(5),
						p: theme.spacing(2),
					}}
				>
					<Button
						onClick={handleCopyCode}
						variant="contained"
						color="primary"
						sx={{
							width: theme.spacing(30),
							height: theme.spacing(5),
						}}
					>
						Copy Embed Code
					</Button>
				</Box>
			</Box>
			<Snackbar
				open={showSnackbar}
				autoHideDuration={3000}
				onClose={handleCloseSnackbar}
				message="Embed code copied to clipboard"
			/>
		</Box>
	);
};

export default EmbedCodeGenerator;
