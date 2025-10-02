'use client';

import { useCallback, useEffect, useState } from "react";

type useClipboardProps = {
    timeout?: number;
}

export const useClipboard = ({ timeout = 2000 }: useClipboardProps) => {
    const [isCopied, setIsCopied] = useState(false);
    
    const handleCopy = useCallback(async (text: string) => {
        if(!navigator.clipboard) {
            return;
        }

        try {
            await navigator.clipboard.writeText(text);
            setIsCopied(true);

        } catch (error) {
            console.error('Falha em copiar o text: ', error);
            setIsCopied(false);
            return;
        }
    }, []);

    useEffect(() => {
        if (isCopied) {
            const timer = setTimeout(() => {
                setIsCopied(false);
            }, timeout);

            return () => clearTimeout(timer);
        }
    }, [isCopied, timeout]);

    return {
        isCopied,
        handleCopy
    };
}