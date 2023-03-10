import * as React from "react";
import { SVGProps } from "react";
const SvgLinkedin = (props: SVGProps<SVGSVGElement>) => (
	<svg
		width={44}
		height={44}
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		{...props}
	>
		<path
			fillRule="evenodd"
			clipRule="evenodd"
			d="M19.429 18.969h3.714v1.85c.535-1.064 1.907-2.02 3.968-2.02 3.951 0 4.889 2.118 4.889 6.004V32h-4v-6.312c0-2.213-.535-3.461-1.897-3.461-1.889 0-2.674 1.345-2.674 3.46V32h-4V18.969ZM12.57 31.83h4V18.799h-4V31.83Zm4.573-17.28a2.53 2.53 0 0 1-.753 1.802 2.59 2.59 0 0 1-3.638.001A2.549 2.549 0 0 1 12 14.55c0-.677.27-1.325.753-1.803a2.583 2.583 0 0 1 3.637 0c.482.478.753 1.126.753 1.803Z"
			fill="#0072B1"
		/>
		<rect x={0.5} y={0.5} width={43} height={43} rx={21.5} stroke="#4C42E8" />
	</svg>
);
export default SvgLinkedin;
