'use client'

import { Button } from "@/components/ui/button";
import { useShare } from "@/hooks";

type PostShareProps = {
    url: string;
    description: string;
    title: string;
}

export const PostShare = ({ url, description, title }: PostShareProps) => {
    const { shareButtons } = useShare({
        url,
        title,
        text: description
    });

    return (
        <aside className='space-y-6'>
            <div className='rounded-lg bg-gray-700'>
                <h2 className='mb-4 text-heading-xs text-gray-100 hidden md:block'>Compartilhar</h2>
                <div className='flex justify-center md:justify-between md:flex-col gap-2'>
                    {shareButtons.map((provider) => (
                        <Button
                            key={provider.provider}
                            onClick={() => provider.action()}
                            variant="outline"
                            className='w-fit md:w-full justify-center md:justify-start gap-2'
                        >
                            {provider.icon}
                            <span className='hidden md:block'>{provider.name}</span>
                        </Button>
                    ))}
                </div>
            </div>
        </aside>
    )
}