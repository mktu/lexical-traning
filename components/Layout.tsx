import { FC, ReactNode } from 'react';
import BreadCrumb from './BreadCrumb';
import GithubIcon from './icons/Github';

type Props = {
    children: ReactNode,
    title: string,
    description: string | ReactNode
}

const Layout: FC<Props> = ({ children, title, description }) => (
    <div className='flex w-screen flex-col items-center gap-6 py-5'>
        <div className='w-[800px]'>
            <BreadCrumb />
        </div>
        <header className='flex w-[800px] flex-col gap-2 rounded-lg bg-white p-4'>
            <h1 className='flex text-xl text-gray-500'>{title}</h1>
            <div className='text-gray-500'>
                {description}
            </div>
        </header>
        <main className='relative w-[800px] rounded-lg bg-white p-4'>
            {children}
            <a className='absolute bottom-5 left-5' href='https://github.com/mktu/lexical-traning' target='_blank' rel='noopener noreferrer'>
                <GithubIcon className='h-10 w-10 fill-slate-400' />
            </a>
        </main>
    </div>
);

export default Layout;