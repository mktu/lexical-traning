import { FC, useState } from 'react';

import { FocusTrap, Popover } from '@headlessui/react';
import { TOGGLE_LINK_COMMAND } from '@lexical/link';
import { useLexicalComposerContext } from '@lexical/react/LexicalComposerContext';

import { validateUrl } from '../../utils/url';
import LinkIcon from './LinkIcon';
import { useLinkListener } from '../../hooks/useLinkCheckListener';

const LinkToolbarItem: FC = () => {
    const [url, setUrl] = useState('');
    const [editing, setEditing] = useState(false);
    const [editor] = useLexicalComposerContext();
    const { isEmpty, link } = useLinkListener();
    return (
        <Popover className="relative">
            <Popover.Button className='group flex items-center gap-1 text-gray-400 hover:text-gray-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-300'>
                <LinkIcon className='h-5 w-5 fill-gray-400 group-hover:fill-gray-500' />
                <span>リンクに変換</span>
            </Popover.Button>
            <Popover.Panel className="absolute z-10 min-w-[300px] rounded bg-white p-2 text-gray-400 shadow">
                {({ close }) => (
                    <FocusTrap>
                        <div className='flex flex-col gap-1'>
                            <label htmlFor='url' className='text-xs'>URL(https://)</label>
                            <input disabled={isEmpty} id='url' value={editing ? url : link} onChange={(e) => { setUrl(e.target.value); setEditing(true); }}
                                className='rounded border border-gray-200 px-2 py-1 text-gray-700 outline-none focus:outline-none' />
                            {isEmpty && <div className=' text-sm text-red-400'>⚠️リンクにしたい文字列を選択してください</div>}
                            <div className='flex items-center justify-end'>
                                <button disabled={isEmpty} onClick={() => {
                                    if (validateUrl(url)) {
                                        editor.dispatchCommand(
                                            TOGGLE_LINK_COMMAND,
                                            url,
                                        );
                                    } else {
                                        console.error('invalid url');
                                    }
                                    close();
                                    setEditing(false);
                                    setUrl('');
                                }} className={`
                                p-1 font-semibold focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-300
                                ${isEmpty ? 'text-gray-300' : 'hover:text-gray-500'}
                                `}>挿入</button>
                            </div>
                        </div>
                    </FocusTrap>
                )}
            </Popover.Panel>
        </Popover>
    );
};

export default LinkToolbarItem;