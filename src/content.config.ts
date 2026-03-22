import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const experiments = defineCollection({
	loader: glob({ pattern: "**/[^_]*.md", base: "./src/content/experiments" }),
	schema: ({ image }) => z.object({
		title: z.string(),
		pubDate: z.date(),
		description: z.string(),
		url: z.string(),
		mux_id: z.string().optional(),
		image: z.object({
			url: image(),
			alt: z.string(),
		}).optional(),
		tags: z.array(z.string()).optional(),
	}),
});

const work = defineCollection({
	loader: glob({ pattern: "**/[^_]*.md", base: "./src/content/work" }),
	schema: ({ image }) => z.object({
		title: z.string(),
		pubDate: z.date(),
		description: z.string(),
		role: z.string(),
		url: z.string(),
		mux_id: z.string().optional(),
		image: z.object({
			url: image(),
			alt: z.string(),
		}).optional(),
		tags: z.array(z.string()).optional(),
	}),
});

const caseStudies = defineCollection({
	loader: glob({ pattern: "**/[^_]*.md", base: "./src/content/case-studies" }),
	schema: ({ image }) => z.object({
		title: z.string(),
		pubDate: z.date(),
		endDate: z.date().optional(),
		description: z.string(),
		role: z.string(),
		url: z.string(),
		mux_id: z.string().optional(),
		image: z.object({
			url: image(),
			alt: z.string(),
		}).optional(),
		tags: z.array(z.string()).optional(),
	}),
});

const thoughts = defineCollection({
	loader: glob({ pattern: "**/[^_]*.md", base: "./src/content/thoughts" }),
	schema: ({ image }) => z.object({
		title: z.string(),
		pubDate: z.date(),
		description: z.string(),
		image: z.object({
			url: image(),
			alt: z.string(),
		}).optional(),
		tags: z.array(z.string()).optional(),
	}),
});

export const collections = { experiments, work, caseStudies, thoughts };
