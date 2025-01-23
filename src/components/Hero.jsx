import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import Header from '../common/Header';
import CustomButton from '../common/CustomButton';
import { HERO_ALPHABET_LIST } from '../utils/helper';
import ProfileImg from '../assets/images/png/profile-img.png';
import SideImg from '../assets/images/png/hero-side-img.png';

const Hero = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const [selectedLetter, setSelectedLetter] = useState(localStorage.getItem('selectedLetter') || '');
    const [selectedTab, setSelectedTab] = useState(localStorage.getItem('selectedTab') || 'all');

    useEffect(() => {
        const queryParams = new URLSearchParams(location.search);
        const letterFromUrl = queryParams.get('letter');
        if (letterFromUrl) {
            setSelectedLetter(letterFromUrl.toUpperCase());
            localStorage.setItem('selectedLetter', letterFromUrl.toUpperCase());
        } else {
            setSelectedLetter('');
            localStorage.removeItem('selectedLetter');
        }
    }, [location.search]);

    const handleLetterClick = (letter) => {
        setSelectedLetter(letter);
        localStorage.setItem('selectedLetter', letter);
        navigate(`?letter=${letter.toLowerCase()}`);
    };

    const handleTabChange = (tab) => {
        setSelectedTab(tab);
        localStorage.setItem('selectedTab', tab);
        navigate(`/${tab}`);
    };

    const tabHeadingMap = {
        all: 'Hit Me Hard and Soft',
        pop: 'Pop Hits',
        rock: 'Rock Classics',
    };

    const headingText = tabHeadingMap[selectedTab] || tabHeadingMap.all;

    return (
        <div className='flex flex-col justify-center items-center mb-[100px]'>
            <div className="max-w-[1140px] mx-auto w-full max-xl:px-4">
                <Header />
                <div className="flex max-lg:flex-col gap-[15px] xl:mb-[43px] lg:mb-9 md:mb-7 mb-5">
                    <div className="flex gap-[5px]">
                        <CustomButton className={selectedTab === 'all' ? 'bg-black text-white' : ''} onClick={() => handleTabChange('all')} title="All" />
                        <CustomButton className={selectedTab === 'pop' ? 'bg-black text-white' : ''} onClick={() => handleTabChange('pop')} title="Pop" />
                        <CustomButton className={selectedTab === 'rock' ? 'bg-black text-white' : ''} onClick={() => handleTabChange('rock')} title="Rock" />
                        <select className='border border-black !text-xs lg:px-1.5 px-1 py-0.5 hover:bg-black hover:text-white transition-all ease-linear duration-300 rounded-[9px]' value={selectedTab}
                            onChange={(e) => handleTabChange(e.target.value)}  >
                            <option className='text-xs' >More</option>
                            <option className='text-xs' value="all">All</option>
                            <option className='text-xs' value="pop">Pop</option>
                            <option className='text-xs' value="rock">Rock</option>
                        </select>
                    </div>
                    <div className="flex gap-[1.4px] overflow-x-scroll scrollbar-hide w-full">
                        {HERO_ALPHABET_LIST.map((item, index) => (
                            <button
                                onClick={() => handleLetterClick(item)}
                                key={index}
                                className={`uppercase ${selectedLetter === item ? 'bg-black text-white' : ''} text-black min-w-[29px] min-h-[29px] rounded-full hover:bg-black hover:text-white transition-all ease-linear duration-300`}
                            >
                                {item}
                            </button>
                        ))}
                    </div>
                </div>
                <div className="lg:max-h-[347px] bg-light-brown-2 rounded-[22px] xl:pt-[43px] lg:pt-9 md:pt-8 sm:pt-7 pt-6 xl:ps-12 lg:ps-10 md:ps-7 ps-5 xl:pe-[43px] lg:pe-10 md:pe-7 pe-5 max-lg:pb-7 max-sm:pb-6">
                    <div className="flex flex-wrap">
                        <div className="lg:w-8/12 w-full flex flex-col max-lg:items-center mx-auto">
                            <h1 className='uppercase lg:!leading-[82%] max-lg:text-center text-white font-bold lg:text-5xl md:text-4xl text-3xl font-Montserrat xl:mb-[109px] lg:mb-20 md:mb-16 sm:mb-12 mb-6'>
                                {headingText}
                            </h1>
                            <div className="flex gap-[26px] items-center xl:translate-y-0 lg:translate-y-10">
                                <img className='xl:max-w-[206px] lg:max-w-44 pointer-events-none md:max-w-40 sm:max-w-32 max-w-28 w-full' src={ProfileImg} alt="profile-img" />
                                <div>
                                    <h3 className='lg:mb-[5px] mb-0.5 font-semibold lg:text-[32px] text-white md:text-3xl sm:text-2xl text-xl'>
                                        {selectedLetter ? `Billie Eilish - ${selectedLetter}` : 'Billie Eilish'}
                                    </h3>
                                    <p className='font-Montserrat lg:text-base text-sm text-light-gray'>Released May 17, 2024</p>
                                </div>
                            </div>
                        </div>
                        <div className="lg:w-4/12 w-full flex items-start lg:justify-end justify-center max-lg:mt-7">
                            <img className='max-w-[261px] lg:pb-8 w-full pointer-events-none' src={SideImg} alt="ladder-img" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
