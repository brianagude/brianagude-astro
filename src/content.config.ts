import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";


const thoughts = defineCollection({
	loader: glob({ pattern: "**/[^_]*.md", base: "./src/thoughts" }),
	schema: z.object({
		title: z.string(),
		pubDate: z.date(),
		description: z.string(),
		author: z.string(),
		image: z.object({
			url: z.string(),
			alt: z.string(),
		}).optional(),
		tags: z.array(z.string()),
	}),
});

export const collections = { thoughts };
