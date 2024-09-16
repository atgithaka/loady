import { Footer } from '@/app/components/components';

export default function Main({ children }: MainProps) {
    return (
        <main className='h-[calc(100%-64px)] flex flex-col items-start justify-start w-full px-8'>
            <div className='h-[calc(100%-32px)]'>{children}</div>
            <Footer />
        </main>
    );
}
