/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui";
export default {
	daisyui: {
		themes: ["luxury"],
	},
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		container: {
			center: true,
		},
		extend: {},
	},
	plugins: [daisyui],
};
