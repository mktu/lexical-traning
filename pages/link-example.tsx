import { ReactElement } from 'react';

import Layout from '@/components/Layout';
import LexicalEditor from '@/features/editor';
import LinkPlugins, { LinkPreviewNode, LinkToolbarItem } from '@/features/link';
import { validateUrl } from '@/features/link/utils/url';
import { AutoLinkNode, LinkNode } from '@lexical/link';
import { LinkPlugin as LexicalLinkPlugin } from '@lexical/react/LexicalLinkPlugin';

import { NextPageWithLayout } from './_app';

const LinkExample: NextPageWithLayout = () => {
    return (
        <LexicalEditor
            customNodes={[
                LinkNode, // エディタ上にリンクノードを生成するために必要
                AutoLinkNode, // エディタ上のURLをリンクノードに変換するために必要
                LinkPreviewNode // プレビュー表示のために必要
            ]}
            toolbarItems={[
                <LinkToolbarItem key='link' />
            ]}>
            {/* LexicalCommand経由でリンクノードを生成するために必要 */}
            <LexicalLinkPlugin validateUrl={validateUrl} />
            {/* 今回追加したプラグイン */}
            <LinkPlugins />
        </LexicalEditor>
    );
};

LinkExample.getLayout = function getLayout(page: ReactElement) {
    return (
        <Layout
            title='🔥 Lexicalを使ってリッチエディタを実現する（Link編） 🔥'
            description={'このページでは、リンクの挿入 / エディタ上のリンク自動変換 / リンクカードの表示が行えます'}
        >
            {page}
        </Layout>
    );
};

export default LinkExample;