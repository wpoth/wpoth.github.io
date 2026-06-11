import { Container } from '@/components/Container';

export function Footer() {
    return (
        <footer className="border-t border-warm-gray-200 bg-warm-gray-100 py-8 text-white dark:bg-black">
            <Container className="text-center">
                <p className="font-light">
                    © {new Date().getFullYear()} Wesley Poth. All rights reserved.
                </p>
            </Container>
        </footer>
    );
}