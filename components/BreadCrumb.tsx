import { FC, Fragment } from 'react';
import { useRouter } from "next/router";
import Link from 'next/link';

const BreadCrumb: FC = () => {
    const router = useRouter();
    const paths = decodeURI(router.asPath).substring(1).split("/");
    const roots = paths.reduce((prev, cur, idx) => {
        if (idx === 0) {
            return ['/' + cur];
        }
        return [...prev, '/' + cur];
    }, ['']);

    return (
        <nav className='flex items-center gap-1 text-gray-500'>
            {router.asPath === '/' ? (
                <div className='invisible'>
                    Top
                </div>
            ) : (
                <>
                    <Link href={"/"} className='underline'>
                        Top
                    </Link>
                    {paths.map((x, i) => (
                        <Fragment key={i}>
                            {/* サブページのリンク */}
                            <span>{'>'}</span>
                            {router.asPath === roots[i] ? (
                                <span>{x}</span>
                            ) : (
                                <Link href={roots[i]} className='underline'>
                                    {x}
                                </Link>
                            )}

                        </Fragment>
                    ))
                    }
                </>
            )}
        </nav >
    );
};

export default BreadCrumb;