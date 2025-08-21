import { Redis } from "@upstash/redis";

export const redis = new Redis({
  url: process.env.UPSTASH_REDIS_REST_URL!,
  token: process.env.UPSTASH_REDIS_REST_TOKEN!,
});

export async function getViewCount(slug: string): Promise<number> {
  const views = await redis.get(["pageviews", "projects", slug].join(":"));
  return Number(views) || 0;
}
