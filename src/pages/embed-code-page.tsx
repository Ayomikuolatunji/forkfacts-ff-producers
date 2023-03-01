import React from "react";


const EmbedCodePage: React.FC = () => {
	const embedCode = `<iframe src="https://your-ff-producer.vercel.app/embed" frameborder="0" width="300" height="200"></iframe>`;

	return (
		<>
			<h1>Embed Code</h1>
			<p>Copy and paste the following code to embed the component:</p>
			<pre>{embedCode}</pre>
		</>
	);
};

export default EmbedCodePage;
