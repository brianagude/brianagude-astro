import { getCollection } from "astro:content";
import rss from "@astrojs/rss";

export async function GET(context) {
	const posts = await getCollection("thoughts");
	return rss({
		title: "Briana's Thoughts | .open(tabs)",
		description: "My little corner of the internet (:",
		site: context.site,
		items: posts.map((post) => ({
			title: post.data.title,
			pubDate: post.data.pubDate,
			description: post.data.description,
			link: `/thoughts/${post.id}/`,
		})),
		customData: `<language>en-us</language>`,
	});
}
