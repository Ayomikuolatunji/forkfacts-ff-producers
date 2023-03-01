import { Box, Button, Snackbar, TextField, Typography, useMediaQuery, useTheme } from "@mui/material";
import React, { useState, useEffect } from "react";

interface EmbedCodeGeneratorProps {
	componentUrl: string;
}

const EmbedCodeGenerator = ({ componentUrl }: EmbedCodeGeneratorProps) => {
	const theme = useTheme();
	const mobile = useMediaQuery(theme.breakpoints.down("md"));
	const [iframeHeight, setIframeHeight] = useState("50vh");
	const [showSnackbar, setShowSnackbar] = useState(false);
	const [inputUrl, setInputUrl] = useState(componentUrl);

	useEffect(() => {
		const handleIframeResize = () => {
			const iframe = document.getElementById(
				"embedded-component",
			) as HTMLIFrameElement;
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
	}, [inputUrl]);

	const handleCopyClick = () => {
		const el = document.createElement("textarea");
		el.value = generateEmbedCode();
		document.body.appendChild(el);
		el.select();
		document.execCommand("copy");
		document.body.removeChild(el);

		setShowSnackbar(true);
	};

	const handleCloseSnackbar = () => {
		setShowSnackbar(false);
	};

	const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setInputUrl(event.target.value);
	};

	const generateEmbedCode = () => {
		return `<iframe src="${inputUrl}" style="width: 100%; height: ${iframeHeight}; border: none;"></iframe>`;
	};

	return (
		<Box sx={{ p: 3, backgroundColor: theme.palette.background.paper }}>
			<Typography variant="h5" sx={{ mb: theme.spacing(2) }}>
				Embed the ForkFacts component on your website
			</Typography>
			<Box component="ol">
				<Box component="li">
					Copy the following code:
					<Box
						component="textarea"
						readOnly
						value={generateEmbedCode()}
						sx={{
							width: "100%",
							height: "120px",
							p: 1,
							my: 2,
							border: "1px solid #ccc",
							borderRadius: "4px",
						}}
					/>
				</Box>
				<Box component="li">
					Paste the code into your website where you want the component to
					appear.
				</Box>
				<Box component="li">
					Adjust the height of the iframe to ensure that the embedded content is
					fully visible.
				</Box>
			</Box>
			<Box sx={{ mt: theme.spacing(2) }}>
				<TextField
					type="text"
					value={inputUrl}
					onChange={handleInputChange}
					sx={{
						padding: "12px",
						borderRadius: "4px",
						border: "1px solid #ccc",
						width: "100%",
					}}
				/>
				<Button
					variant="contained"
					color="primary"
					onClick={handleCopyClick}
					sx={{ mt: theme.spacing(2) }}
				>
					Copy Embed Code
				</Button>
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
