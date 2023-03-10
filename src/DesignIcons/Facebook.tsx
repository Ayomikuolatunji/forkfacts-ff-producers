import * as React from "react";
import { SVGProps } from "react";
const SvgFacebook = (props: SVGProps<SVGSVGElement>) => (
	<svg
		width={46}
		height={44}
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		{...props}
	>
		<path
			d="M24.75 23.5h2.5l1-4h-3.5v-2c0-1.03 0-2 2-2h1.5v-3.36c-.326-.043-1.557-.14-2.857-.14-2.715 0-4.643 1.657-4.643 4.7v2.8h-3v4h3V32h4v-8.5Z"
			fill="#4267B2"
		/>
		<rect
			x={1.25}
			y={0.5}
			width={43.5}
			height={43}
			rx={21.5}
			stroke="#4C42E8"
		/>
	</svg>
);
export default SvgFacebook;
