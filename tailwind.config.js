/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./index.html"],
	theme: {
		extend: {
			backgroundImage: {
				splash: "url('/public/images/background-image.png')",
			},
			animation: {
				"bounce-spin": "bounce-spin 1500ms infinite ease-in-out",
			},
			keyframes: {
				"bounce-spin": {
					"0%": {
						transform: "translateY(-25%) rotateY(0deg)",
					},
					"50%": {
						transform: "translateY(0) rotateY(180deg)",
					},
					"100%": {
						transform: "translateY(-25%) rotateY(360deg)",
					},
				},
			},
		},
		plugins: [require("@tailwindcss/forms")],
	},
};
