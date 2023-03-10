import * as React from "react";
import { SVGProps } from "react";
const SvgEmail = (props: SVGProps<SVGSVGElement>) => (
	<svg
		width={44}
		height={44}
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		{...props}
	>
		<path
			d="M14 30c-.55 0-1.02-.196-1.412-.587A1.927 1.927 0 0 1 12 28V16c0-.55.196-1.02.588-1.412A1.923 1.923 0 0 1 14 14h16c.55 0 1.021.196 1.413.588.391.391.587.862.587 1.412v12c0 .55-.196 1.021-.587 1.413A1.928 1.928 0 0 1 30 30H14Zm8-7-8-5v10h16V18l-8 5Zm0-2 8-5H14l8 5Zm-8-3v-2 12-10Z"
			fill="#DB4437"
		/>
		<rect x={0.5} y={0.5} width={43} height={43} rx={21.5} stroke="#4C42E8" />
	</svg>
);
export default SvgEmail;
