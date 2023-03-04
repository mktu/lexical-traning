import { useLexicalComposerContext } from '@lexical/react/LexicalComposerContext';
import type { FC } from 'react';
import { INSERT_IMAGE_COMMAND } from '../../utils/InsertImageCommand';
import { uploadImage } from '../../utils/uploadImage';
import ImageIcon from './ImageIcon';

const ImageToolBarItem: FC = () => {
    const [editor] = useLexicalComposerContext();
    return (
        <label className='group flex cursor-pointer items-center gap-1 p-1' htmlFor='file-upload' aria-label='image upload'>
            <ImageIcon className='h-5 w-5 fill-gray-400 group-hover:fill-gray-500' />
            <span className='text-gray-400 group-hover:text-gray-500'>画像を挿入</span>
            <input id="file-upload" type='file' className='hidden' onChange={async (e) => {
                if (!e.target.files || e.target.files.length === 0 || !e.target.files[0]) {
                    return;
                }
                const file = e.target.files[0];
                const { path } = await uploadImage(file);
                editor.update(() => {
                    editor.dispatchCommand(INSERT_IMAGE_COMMAND, {
                        altText: file.name,
                        src: path
                    });
                });
            }} />
        </label>
    );
};

export default ImageToolBarItem;