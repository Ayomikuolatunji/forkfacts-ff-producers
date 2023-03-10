import * as React from "react";
import { SVGProps } from "react";

const SvgCompareSorting = (props: SVGProps<SVGSVGElement>) => (
	<svg
		width={14}
		height={18}
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		{...props}
	>
		<path
			d="M4 0 0 3.99h3V11h2V3.99h3L4 0Zm7 14.01V7H9v7.01H6L10 18l4-3.99h-3Z"
			fill="#78767A"
		/>
	</svg>
);
export default SvgCompareSorting;
