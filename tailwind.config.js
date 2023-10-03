/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./public/**/*.{html,js}"],
	theme: {
		extend: {
			colors: {
				primary: "#22A5EF",
				secondary: {
					100: "#fcfcfc",
					200: "#F5F4F4 ",
					300: "#F6F6F6",
					400: "#DDDDDD",
					500: "#6F6F6F",
				},
				priority: {
					normal: "#28BD10",
					medium: "#F2D226",
					urgent: "#F22626",
				},
			},

			height: {
				128: "32rem",
			},

			minHeight: {
				32: "7rem",
				128: "32rem",
			},
		},
	},
	plugins: [],
};
