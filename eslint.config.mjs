import eslintPluginAstro from "eslint-plugin-astro";
import tsParser from "@typescript-eslint/parser";

export default [
	...eslintPluginAstro.configs.recommended,
	{
		files: ["**/*.astro"],
		languageOptions: {
			parserOptions: {
				parser: tsParser,
				extraFileExtensions: [".astro"],
			},
		},
		rules: {
			"astro/no-set-html-directive": "error",
		},
	},
];
