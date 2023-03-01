import React from "react";

interface EmbedCodeGeneratorProps {
	componentUrl: string;
}

const EmbedCodeGenerator = ({ componentUrl }: EmbedCodeGeneratorProps) => {
	const embedCode = `<iframe src="${componentUrl}" width="100%" height="300px" frameborder="0"></iframe>`;

	return (
		<div>
			<h2>Embed Code Generator</h2>
			<p>
				Copy and paste the following code into your website to embed the
				ForkFacts component:
			</p>
			<textarea value={embedCode} readOnly rows={5} style={{ width: "100%" }} />
		</div>
	);
};

export default EmbedCodeGenerator;
