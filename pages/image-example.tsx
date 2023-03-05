import { ReactElement } from 'react';

import Layout from '@/components/Layout';
import LexicalEditor from '@/features/editor';

import { NextPageWithLayout } from './_app';
import { ImageNode, ImageRegister, ImageToolbarItem, ClipboardImageHandler } from '@/features/image';

const ImageExample: NextPageWithLayout = () => {
    return (
        <LexicalEditor
            customNodes={[
                ImageNode
            ]}
            toolbarItems={[
                <ImageToolbarItem key='image' />
            ]}>
            <ImageRegister />
            <ClipboardImageHandler />
        </LexicalEditor>
    );
};

ImageExample.getLayout = function getLayout(page: ReactElement) {
    return (
        <Layout
            title='🔥 Lexicalを使ってリッチエディタを実現する（画像編） 🔥'
            ogTitle='Lexicalを使ってリッチエディタを実現する（画像編)'
            description='このページでは、ツールバー/クリップボードから画像の挿入が行えます。ローカルの画像はアップロードされずに表示のみ行われます'
        >
            {page}
        </Layout >
    );
};

export default ImageExample;