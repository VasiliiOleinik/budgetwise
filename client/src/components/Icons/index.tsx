import  { useState } from 'react';
import { brandIcons } from '@/constants/brandIcons';
import { regularIcons } from '@/constants/regularIcons';
import { solidIcons } from '@/constants/solidIcons';
import { ICON_TYPES } from './constants';
import Button from '../Button';
import { generateKey } from '@/utils';


const Icons = ({setIcon}) => {
    const [iconType, setIconType] = useState(ICON_TYPES.solid);
    const [showIcons, setShowIcons] = useState(false);

    const icons = {
        [ICON_TYPES.solid]: solidIcons,
        [ICON_TYPES.regular]: regularIcons,
        [ICON_TYPES.brand]: brandIcons
    }

    function handleIconClick(icon) {
        setIcon(icon);
        setShowIcons(false);
    }

    return (
        <div className='relative'>
            <Button onClick={() => setShowIcons(!showIcons)}><i className="fa-solid fa-icons"></i></Button>
            <div className='absolute top-0 left-0 bg-white shadow-md rounded-3xl w-[380px] h-[250px] flex flex-col p-4 overflow-auto' style={{display: showIcons ? 'block' : 'none'}}>
                <div className='flex justify-between mb-4 border-y py-2 sticky top-[-16px] bg-white transition-all'>
                   <button 
                        className='bg-white shadow-default-shadow border border-[#e9eaf3] px-4 py-2 rounded-3xl transition-all hover:bg-blue-500 hover:text-white'
                        onClick={() => setIconType(ICON_TYPES.solid)}
                    >
                        {ICON_TYPES.solid}
                    </button>
                   <button 
                        className='bg-white shadow-default-shadow border border-[#e9eaf3] px-4 py-2 rounded-3xl transition-all hover:bg-blue-500 hover:text-white'
                        onClick={() => setIconType(ICON_TYPES.regular)}
                    >
                        {ICON_TYPES.regular}
                    </button>
                   <button 
                        className='bg-white shadow-default-shadow border border-[#e9eaf3] px-4 py-2 rounded-3xl transition-all hover:bg-blue-500 hover:text-white'
                        onClick={() => setIconType(ICON_TYPES.brand)}
                    >
                        {ICON_TYPES.brand}
                    </button>
                </div>
                <div className='flex flex-wrap gap-4'>
                    {icons[iconType].map((icon) => (
                        <i 
                            key={generateKey()}
                            className={`${icon} text-lg hover:text-blue-500 p-1 cursor-pointer`}
                            onClick={() => handleIconClick(icon)}
                        ></i>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Icons;