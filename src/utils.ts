export function getPostUrl(post: any) {
  if (post.data.skip_content) return post.data.url;
  const prefixes: Record<string, string> = {
    work: '/work',
    caseStudies: '/case-studies',
    experiments: '/experiments',
  };
  return `${prefixes[post.collection]}/${post.id}/`;
}