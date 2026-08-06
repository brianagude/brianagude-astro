import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const work = defineCollection({
	loader: glob({ pattern: "**/[^_]*.md", base: "./src/content/work" }),
	schema: ({ image }) => z.object({
		title: z.string(),
		pubDate: z.date(),
		endDate: z.date().optional(),
		description: z.string(),
		role: z.string().optional(),
		url: z.string(),
		mux_id: z.string().optional(),
		image: z.object({
			url: image(),
			alt: z.string(),
		}).optional(),
		tags: z.array(z.string()).optional(),
	}),
});

export const collections = { work };
