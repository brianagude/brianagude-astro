import { getCollection } from "astro:content";
import { getPostUrl } from "@/utils"
import rss from "@astrojs/rss";

export async function GET(context) {
	const thoughts = await getCollection("thoughts");
	const buildLogs = await getCollection("buildLogs");
	const allPosts = [...thoughts, ...buildLogs]

	const sortedPosts = allPosts.sort((a, b) => 
		b.data.pubDate.valueOf() - a.data.pubDate.valueOf()
	);

	return rss({
		title: "Written by Briana Gude",
		description: "My little corner of the internet (:",
		site: context.site,
		items: sortedPosts.map((post) => ({
			title: post.data.title,
			pubDate: post.data.pubDate,
			description: post.data.description,
			link: getPostUrl(post),
		})),
		customData: `<language>en-us</language>`,
	});
}
