'use client';

import { Search } from "@/components/search";
import { PostCard } from "./components/post-card";
import { PostGridCard } from "./components/post-grid-card";
import { Post } from "contentlayer/generated";
import { Inbox } from "lucide-react";
import { useSearchParams } from "next/navigation";

export type BlogListProps = {
    posts: Post[];
}

export function BlogList({ posts }: BlogListProps ) {
    const searchParams = useSearchParams();
    const query = searchParams?.get('q') || '';
    
    const pageTitle = query
        ? `Resultados de busca para: "${query}"`
        : 'Dicas e estratégias para impulsionar seu negócio';

    const postList = query
        ? posts.filter(post => post.title.toLowerCase().includes(query.toLowerCase()))
        : posts;

    const hasPosts = postList.length > 0;

    return (
        <div className="container flex flex-col py-24 flex-grow h-full">
            <header className="pb-14">
                <div className="container space-y-6 flex flex-col items-start 
                        justify-between md:flex-row md:items-end lg:items-end">
                    <div className="flex flex-col gap-4 md:px-0">
                        <span className="text-body-tag text-cyan-100 py-2
                            w-fit rounded-md text-center md:text-left px-8 bg-cyan-300">
                            BLOG
                        </span>
                        <h1 className="text-balance max-w-2xl text-gray-100
                            text-start md:text-left text-heading-lg md:text-heading-xl">
                            {pageTitle}
                        </h1>
                    </div>

                    <Search />
                </div>
            </header>

            {/* LISTAGEM */}
            {hasPosts && (
                <PostGridCard>
                    {postList.map((post) => (
                        <PostCard
                            key={post._id}
                            title={post.title}
                            slug={post.slug}
                            description={post.description}
                            image={post.image}
                            date={new Date(post.date).toLocaleDateString('pt-BR', {
                                day: '2-digit',
                                month: '2-digit',
                                year: 'numeric'
                            })}
                            author={{
                                name: post.author.name,
                                avatar: post.author.avatar
                            }}
                        />
                    ))}
                </PostGridCard>
            )}
            {!hasPosts && (
                <div className="container px-8">
                    <div className="flex flex-col items-center justify-center gap-8
                            border-dashed border-2 border-gray-300 p-8 md:p-12 rounded-lg">
                        <Inbox className="text-cyan-100 h-12 w-12" />
                        <p className="text-gray-100 text-center">Nenhum post encontrado.</p>
                    </div>
                </div>
            )}
        </div>
    )
}