import * as React from "react";
import { SVGProps } from "react";
const SvgTwitter = (props: SVGProps<SVGSVGElement>) => (
	<svg
		width={44}
		height={45}
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		{...props}
	>
		<path
			d="M32 15.95a8.49 8.49 0 0 1-2.36.64 4.13 4.13 0 0 0 1.81-2.27c-.806.48-1.69.819-2.61 1a4.1 4.1 0 0 0-7 3.74 11.64 11.64 0 0 1-8.45-4.29 4.16 4.16 0 0 0-.55 2.07 4.09 4.09 0 0 0 1.82 3.41 4.05 4.05 0 0 1-1.86-.51v.05a4.1 4.1 0 0 0 3.3 4 3.929 3.929 0 0 1-1.1.17 4.895 4.895 0 0 1-.77-.07 4.11 4.11 0 0 0 3.83 2.84 8.22 8.22 0 0 1-6.06 1.7 11.57 11.57 0 0 0 6.29 1.85A11.59 11.59 0 0 0 30 18.6v-.53a8.43 8.43 0 0 0 2-2.12Z"
			fill="#1DA1F2"
		/>
		<rect
			x={0.5}
			y={0.5}
			width={43}
			height={43.281}
			rx={21.5}
			stroke="#4C42E8"
		/>
	</svg>
);
export default SvgTwitter;
