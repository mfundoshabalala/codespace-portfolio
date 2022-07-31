/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./index.html"],
	theme: {
		extend: {
			backgroundImage: {
				"splash": "url('/public/images/background-image.png')",
			},
		},
	},
	plugins: [require("@tailwindcss/forms")],
};



