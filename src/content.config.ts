import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const objects = defineCollection({
	loader: glob({ pattern: "**/[^_]*.md", base: "./src/content/objects" }),
	schema: z.object({
		title: z.string(),
		pubDate: z.date(),
		description: z.string(),
		url: z.string(),
		video: z.string().optional(),
		image: z.object({
			url: z.string(),
			alt: z.string(),
		}).optional(),
		tags: z.array(z.string()).optional(),
	}),
});

const work = defineCollection({
	loader: glob({ pattern: "**/[^_]*.md", base: "./src/content/work" }),
	schema: z.object({
		title: z.string(),
		pubDate: z.date(),
		description: z.string(),
		role: z.string(),
		url: z.string(),
		video: z.string().optional(),
		image: z.object({
			url: z.string(),
			alt: z.string(),
		}).optional(),
		tags: z.array(z.string()).optional(),
	}),
});

const caseStudies = defineCollection({
	loader: glob({ pattern: "**/[^_]*.md", base: "./src/content/case-studies" }),
	schema: z.object({
		title: z.string(),
		pubDate: z.date(),
		description: z.string(),
		role: z.string(),
		url: z.string(),
		video: z.string().optional(),
		image: z.object({
			url: z.string(),
			alt: z.string(),
		}).optional(),
		tags: z.array(z.string()).optional(),
	}),
});

const thoughts = defineCollection({
	loader: glob({ pattern: "**/[^_]*.md", base: "./src/content/thoughts" }),
	schema: z.object({
		title: z.string(),
		pubDate: z.date(),
		description: z.string(),
		image: z.object({
			url: z.string(),
			alt: z.string(),
		}).optional(),
		tags: z.array(z.string()).optional(),
	}),
});

export const collections = { objects, work, caseStudies, thoughts };
