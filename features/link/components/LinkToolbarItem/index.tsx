import { FC, useState } from 'react';

import { FocusTrap, Popover } from '@headlessui/react';
import { TOGGLE_LINK_COMMAND } from '@lexical/link';
import { useLexicalComposerContext } from '@lexical/react/LexicalComposerContext';

import { validateUrl } from '../../utils/url';
import LinkIcon from './LinkIcon';

const LinkToolbarItem: FC = () => {
    const [url, setUrl] = useState('');
    const [editor] = useLexicalComposerContext();
    return (
        <Popover className="relative">
            <Popover.Button className='group flex items-center gap-1 text-gray-400 hover:text-gray-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-300'>
                <LinkIcon className='h-5 w-5 fill-gray-400 group-hover:fill-gray-500' />
                <span>リンクを挿入</span>
            </Popover.Button>
            <Popover.Panel className="absolute z-10 min-w-[300px] rounded bg-white p-2 text-gray-400 shadow">
                {({ close }) => (
                    <FocusTrap>
                        <div className='flex flex-col gap-1'>
                            <label htmlFor='url' className='text-xs'>URL(https://)</label>
                            <input id='url' onChange={(e) => { setUrl(e.target.value); }}
                                className='rounded border border-gray-200 px-2 py-1 text-gray-700 outline-none focus:outline-none' />
                            <div className='flex items-center justify-end'>
                                <button onClick={() => {
                                    if (validateUrl(url)) {
                                        editor.dispatchCommand(
                                            TOGGLE_LINK_COMMAND,
                                            url,
                                        );
                                    } else {
                                        console.error('invalid url');
                                    }
                                    close();
                                }} className='p-1 font-semibold hover:text-gray-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-300'>挿入</button>
                            </div>
                        </div>
                    </FocusTrap>
                )}
            </Popover.Panel>
        </Popover>
    );
};

export default LinkToolbarItem;