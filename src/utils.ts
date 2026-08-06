export function getPostUrl(post: any) {
  if (!post.body || post.body.trim().length === 0) return post.data.url;
  const prefixes: Record<string, string> = {
    work: '/work',
  };
  return `${prefixes[post.collection]}/${post.id}/`;
}