'use client';

import { FormEvent, useState } from 'react';

interface ContactFormState {
    isSubmitting: boolean;
    message: string;
    handleSubmit: (event: FormEvent<HTMLFormElement>) => Promise<void>;
}

export function useContactForm(): ContactFormState {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [message, setMessage] = useState('');

    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const form = event.currentTarget;
        const formData = new FormData(form);

        setIsSubmitting(true);
        setMessage('');

        try {
            const response = await fetch('/api/send-email', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    name: formData.get('name'),
                    email: formData.get('email'),
                    message: formData.get('message'),
                }),
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.error || 'Failed to send email');
            }

            setMessage("Thank you! I'll get back to you soon.");
            form.reset();
        } catch (error) {
            setMessage(error instanceof Error ? error.message : 'Failed to send email');
        } finally {
            setIsSubmitting(false);
        }
    };

    return { isSubmitting, message, handleSubmit };
}