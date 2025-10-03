import { PostPage } from "@/templates/blog";
import { allPosts } from "contentlayer/generated";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

type BlogPostPageProps = {
    params: Promise<{
        slug: string
    }>
}

export const revalidate = 60;

export async function generateStaticParams() {
    return allPosts.map((post) => ({
        slug: post.slug
    }));
}

export async function generateMetadata({ params }: BlogPostPageProps)
    : Promise<Metadata | undefined> {
    const { slug } = await params;
    const post = allPosts.find((post) => post.slug === slug);

    if (!post) {
        return {};
    }

    return {
        title: post.title,
        description: post.description,
        authors: [{ name: post.author.name }],
        robots: 'index, follow',
        openGraph: {
            images: [
                {
                    url: post.image ? post.image : 'https://ph-next-blog.vercel.app/og-image.jpg',
                    alt: post.title
                }
            ]
        }
    }
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
    const { slug } = await params;

    const post = allPosts.find((post) => post.slug === slug);

    if (!post) {
        notFound();
    }

    return <PostPage post={post} />
}