import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import Header from '../common/Header';
import CustomButton from '../common/CustomButton';
import { HERO_ALPHABET_LIST } from '../utils/helper';
import ProfileImg from '../assets/images/png/profile-img.png';
import SideImg from '../assets/images/png/hero-side-img.png';

const Hero = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const [selectedTab, setSelectedTab] = useState(searchParams.get('tab') || 'All');
    const [profileName, setProfileName] = useState('Billie Eilish');

    const handleTabChange = (tab) => {
        setSelectedTab(tab);
        setSearchParams({ tab });  
    };

    const handleAlphabetClick = (letter) => {
        setProfileName(`${letter}illen Eilish`);
        setSearchParams((prevParams) => {
            const newParams = new URLSearchParams(prevParams);
            newParams.set('category', letter);   
            return newParams;
        });
    };

    useEffect(() => {
        const tab = searchParams.get('tab') || 'All';
        setSelectedTab(tab);

        const category = searchParams.get('category');
        if (category) {
            setProfileName(`${category}illen Eilish`);
        }
    }, [searchParams]);

    return (
        <div className='flex flex-col justify-center items-center pb-5'>
            <div className="max-w-[1140px] mx-auto w-full max-xl:px-4">
                <Header />
                <div className="flex max-lg:flex-col gap-[15px] xl:mb-[43px] lg:mb-9 md:mb-7 mb-5">
                    <div className="flex gap-[5px]">
                        <CustomButton className={`${selectedTab === 'All' ? 'bg-black text-white' : ''}`} title="All" onClick={() => handleTabChange('All')} />
                        <CustomButton className={`${selectedTab === 'Pop' ? 'bg-black text-white' : ''}`} title="Pop" onClick={() => handleTabChange('Pop')} />
                        <CustomButton className={`${selectedTab === 'Rock' ? 'bg-black text-white' : ''}`} title="Rock" onClick={() => handleTabChange('Rock')} />
                        <select  className='border border-black lg:px-1.5 lg:text-xs px-1 py-0.5 hover:bg-black hover:text-white transition-all ease-linear duration-300 rounded-[9px]'
                            onChange={(e) => handleTabChange(e.target.value)} value={selectedTab}>
                            <option default className='max-w-max'>More</option>
                            <option value="All">All</option>
                            <option value="Pop">Pop</option>
                            <option value="Rock">Rock</option>
                        </select>
                    </div>
                    <div className="flex gap-[1.5px] overflow-x-scroll scrollbar-hide w-full">
                        {HERO_ALPHABET_LIST.map((item, index) => (
                            <button key={index}
                                className={`uppercase hover:bg-black text-black min-w-[29px] min-h-[29px] rounded-full hover:text-white transition-all ease-linear duration-300 ${profileName.startsWith(item) ? 'bg-black text-white' : ''}`}
                                onClick={() => handleAlphabetClick(item)}>
                                {item}
                            </button>
                        ))}
                    </div>
                </div>
                <div className="tab-section bg-light-black rounded-[22px] xl:pt-[43px] lg:pt-9 md:pt-8 sm:pt-7 pt-6 xl:ps-12 lg:ps-10 md:ps-7 ps-5 xl:pe-[43px] lg:pe-10 md:pe-7 pe-5 max-lg:pb-7 max-sm:pb-6">
                    <div className="flex flex-wrap">
                        <div className="lg:w-8/12 w-full flex flex-col max-lg:items-center mx-auto">
                            <h1 className='uppercase lg:!leading-[82%] max-lg:text-center text-white font-bold lg:text-5xl md:text-4xl text-3xl font-Montserrat xl:mb-[109px] lg:mb-20 md:mb-16 sm:mb-12 mb-6'>
                                {selectedTab === 'All' ? 'hit me hard and soft' : selectedTab === 'Pop' ? 'Pop Hits' : selectedTab === 'Rock' ? 'Rock Hits' : 'hit me hard and soft'}
                            </h1>
                            <div className="flex gap-[26px] items-center lg:-mb-14">
                                <img className='xl:max-w-[206px] lg:max-w-44 md:max-w-40 sm:max-w-32 max-w-28 w-full' src={ProfileImg} alt="profile-img" />
                                <div>
                                    <h3 className='lg:mb-[5px] mb-0.5 font-semibold lg:text-[32px] text-white md:text-3xl sm:text-2xl text-xl'>
                                        {profileName}
                                    </h3>
                                    <p className='font-Montserrat lg:text-base text-sm text-light-gray'>Released May 17, 2024</p>
                                </div>
                            </div>
                        </div>
                        <div className="lg:w-4/12 w-full flex items-start lg:justify-end justify-center max-lg:mt-7">
                            <img className='max-w-[261px] lg:pb-8 w-full' src={SideImg} alt="ladder-img" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
