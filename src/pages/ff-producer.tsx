import React from "react";
import { EmbeddableComponent } from "../components/EmbeddableComponent";

interface EmbedComponentPageProps {
	label: string;
	data: string;
}

const EmbedComponentPage: React.FC<EmbedComponentPageProps> = ({
	label = "PANTRY",
	data = "Consume in 3-4 days if refrigerated from the date of purchase",
}) => {
	return <EmbeddableComponent label={label} data={data} />;
};

export default EmbedComponentPage;
