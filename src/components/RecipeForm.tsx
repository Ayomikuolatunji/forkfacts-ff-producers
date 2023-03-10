import {
	Box,
	Button,
	TextareaAutosize,
	TextField,
	Typography,
	useMediaQuery,
	useTheme,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import EmbedCodeGenerator from "./EmbedCodeGenerator";

const RecipeForm = () => {
	const theme = useTheme();
	const mobile = useMediaQuery(theme.breakpoints.down("md"));
	const [generate, setGenerate] = useState(false);
	const [form, setForm] = useState({
		name: "",
		description: "",
	});

	const handleFormChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
	) => {
		const { name, value } = e.target;
		setForm((prevForm) => ({
			...prevForm,
			[name]: value,
		}));
	};

	const onTrySample = () => {
		setForm({
			description:
				"Consume in 3-4 days  if refrigerated from the date of purchase",
			name: "Pantry",
		});
	};

	const onGenerateCode = () => {
		if (form.description) {
			setGenerate(true);
		}
	};

	useEffect(() => {
		if (form.description) {
			setGenerate(true);
		}
	}, [generate]);

	const clearRecipe = () => {
		setForm({
			description: "",
			name: "",
		});
		setGenerate(false);
	};

	return (
		<Box
			sx={{
				width: mobile ? "100%" : "100%",
				display: "flex",
				justifyContent: "space-between",
				alignItems: "flex-start",
				columnGap: theme.spacing(2),
			}}
		>
			<Box
				sx={{
					width: "50%",
					display: "flex",
					justifyContent: "flex-start",
					flexDirection: "column",
					rowGap: theme.spacing(3),
				}}
			>
				<Box
					sx={{
						display: "flex",
						justifyContent: "flex-start",
						flexDirection: "column",
						rowGap: theme.spacing(3),
						width: "100%",
					}}
				>
					<Typography component="label">
						Enter Recipe Name (optional)
					</Typography>
					<TextField
						sx={{ width: "100%" }}
						value={form.name}
						onChange={handleFormChange}
						name="name"
					/>
				</Box>
				<Box
					sx={{
						display: "flex",
						justifyContent: "flex-start",
						flexDirection: "column",
					}}
				>
					<Box
						sx={{
							display: "flex",
							justifyContent: "space-between",
							flexDirection: "row",
						}}
					>
						<Typography component="label">Enter Recipe Description</Typography>
						<Button
							variant="text"
							sx={{ textDecoration: "underline", color: "#4C42E8" }}
							onClick={onTrySample}
						>
							Try a sample recipe
						</Button>
					</Box>
					<TextareaAutosize
						aria-label="minimum height"
						minRows={15}
						value={form.description}
						name="description"
						onChange={handleFormChange}
					/>
				</Box>
				<Box>
					{generate ? (
						<Button
							variant="contained"
							color="primary"
							onClick={clearRecipe}
							sx={{ mt: theme.spacing(1) }}
						>
							Clear Recipe
						</Button>
					) : (
						<Button
							variant="contained"
							color="primary"
							onClick={onGenerateCode}
							sx={{ mt: theme.spacing(1) }}
							disabled={!generate ? false : true}
						>
							Generate Embed Code
						</Button>
					)}
				</Box>
			</Box>
			<Box
				sx={{
					my: theme.spacing(2),
					width: "50%",
					display: "flex",
					justifyContent: "flex-end",
					alignItems: "flex-end",
				}}
			>
				{generate && (
					<EmbedCodeGenerator name={form.name} description={form.description} />
				)}
			</Box>
		</Box>
	);
};

export default RecipeForm;
