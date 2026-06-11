'use client';

import { useEffect, useState } from 'react';

export function useTypewriter(text: string, speed = 20) {
    const [output, setOutput] = useState('');

    useEffect(() => {
        let index = 0;

        const resetTimeout = window.setTimeout(() => {
            setOutput('');
        }, 0);

        const interval = window.setInterval(() => {
            index += 1;
            setOutput(text.slice(0, index));

            if (index >= text.length) {
                window.clearInterval(interval);
            }
        }, speed);

        return () => {
            window.clearTimeout(resetTimeout);
            window.clearInterval(interval);
        };
    }, [text, speed]);

    return output;
}