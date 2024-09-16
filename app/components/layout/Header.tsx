import Image from 'next/image';
import { ButtonFilled } from '@/app/components/components';

export default function Header({ children }: HeaderProps) {
    return (
        <header className='h-16 w-full px-8 grid grid-cols-12 grid-rows-1'>
            <div className='flex gap-2 flex-row items-center justify-start col-span-2'>
                <Image
                    src={'/logo.svg'}
                    alt='Loady Logo'
                    width={50}
                    height={50}
                    className='w-8 h-8'
                />
                <p className='font-bold text-lg'>Loady</p>
            </div>
            <nav className='col-span-8 flex items-center flex-row justify-end gap-10'>
                {children}
            </nav>
            <div className='col-span-2 flex flex-row items-center justify-end'>
                <ButtonFilled
                    name='Account'
                    URL='/'
                />
            </div>
        </header>
    );
}
