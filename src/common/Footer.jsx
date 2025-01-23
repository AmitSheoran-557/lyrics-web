import React, { useState } from 'react'
import { FOOTER_LIST, FOOTER_LIST_TWO, HERO_ALPHABET_LIST } from '../utils/helper';
import { Navigate } from 'react-router-dom';

const Footer = () => {
    const [selectedLetter, setSelectedLetter] = useState(localStorage.getItem('selectedLetter') || '');

    const handleLetterClick = (letter) => {
        setSelectedLetter(letter);
        localStorage.setItem('selectedLetter', letter);
        // Navigate(`?letter=${letter.toLowerCase()}`);
    };
    return (
        <div className='flex flex-col justify-center items-center bg-off-white-two'>
            <div className="flex gap-[1.4px] overflow-x-scroll scrollbar-hide w-full lg:pt-[42px] lg:pb-[37px] max-lg:py-7 max-md:py-6 md:justify-center border-t border-b border-off-white mb-[29px]">
                {HERO_ALPHABET_LIST.map((item, index) => (
                    <button onClick={() => handleLetterClick(item)} key={index}
                        className={`uppercase ${selectedLetter === item ? 'bg-black text-white' : ''} text-black min-w-[29px] min-h-[29px] rounded-full hover:bg-black hover:text-white transition-all ease-linear duration-300`}>
                        {item}
                    </button>
                ))}
            </div>
            <div className="max-w-[1140px] mx-auto w-full lg:px-4 lg:mb-[89px] md:mb-16 sm:mb-12 mb-8">
                <div className="flex flex-wrap w-full mx-auto">
                    <div className="lg:w-8/12 w-full mx-auto justify-center max-lg:flex max-lg:flex-col max-lg:items-center lg:mt-[62px] md:mt-7 sm:mt-4">
                        <div className="lg:max-w-[728px] max-w-3xl max-lg:mx-auto w-full">
                            <div className="lg:max-w-4xl w-full mx-auto flex justify-center items-center" >
                                <div className="flex flex-wrap xl:mb-[37px] justify-center lg:mb-8 md:mb-7 sm:mb-6 mb-4 w-full" >
                                    <div className="w-4/12 max-lg:flex flex-col items-center justify-center">
                                        <div className="font-semibold lg:text-sm text-xs !leading-[174%]">{FOOTER_LIST[0].heading}</div>
                                    </div>
                                    <div className="w-4/12 max-lg:flex flex-col items-center justify-center">
                                        <div className="font-semibold lg:text-sm text-xs !leading-[174%]">{FOOTER_LIST[0].songs}</div>
                                    </div>
                                    <div className="w-4/12 max-lg:flex flex-col items-center justify-center">
                                        <div className="font-semibold lg:text-sm text-xs !leading-[174%]">{FOOTER_LIST[0].artist}</div>
                                    </div>
                                </div>
                            </div>

                            <div className="lg:max-w-[728px] w-full lg:space-y-6 md:space-y-4 space-y-3" >
                                {FOOTER_LIST.slice(1).map((song, index) => (
                                    <div key={index} className="flex flex-wrap justify-center" >
                                        <div className="w-4/12 max-lg:flex flex-col items-center justify-start">
                                            <div className='flex'>
                                                <h4 className='lg:text-sm text-xs text-light-brown-2 !leading-[171.43%]'>{song.link}</h4>
                                            </div>
                                        </div>
                                        <div className="w-4/12 max-lg:flex flex-col items-center justify-start">
                                            <div className='flex'>
                                                <p className='lg:text-sm text-xs !leading-[200%] text-light-brown-2'>{song.aboutSong}</p>
                                            </div>
                                        </div>
                                        <div className="w-4/12 max-lg:flex flex-col items-center justify-start">
                                            <div className='flex'>
                                                <p className='lg:text-sm text-xs !leading-[200%] text-light-brown-2'>{song.aboutArtist}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="lg:w-4/12 w-full flex max-lg:justify-center">
                        <div className="lg:ps-10 pt-10 max-w-[312px] w-full">
                            <h4 className='font-semibold text-sm text-light-brown-2 lg:mb-[26px] md:mb-5 mb-4'>Follow us</h4>
                            {FOOTER_LIST_TWO.map((item, index) => (
                                <div key={index} className={`flex bg-white rounded-[10px] justify-between items-center mb-[14px] py-3 ps-6 pe-[14px] ${index === 3 ? 'mb-0' : ''}`}>
                                    <h3 className='!leading-[174%] font-semibold lg:text-sm text-xs'>{item.title}</h3>
                                    <a target='_blank' href={item.link}><img className='max-w-[30px] cursor-pointer' src={item.image} alt={item.alt} /></a> 
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <div className="border-t border-off-white w-full xl:py-[30px] lg:py-6 py-5 justify-center items-center flex">
                <div className="max-w-[1140px] mx-auto w-full md:px-4">
                    <div className="flex flex-wrap w-full justify-between md:gap-5 gap-3">
                        <p className='text-light-brown-2 lg:text-sm text-xs text-center max-lg:mx-auto max-lg:px-6'>All rights reserved to Global Media Holdings Ltd. {new Date().getFullYear()}</p>
                        <div className='flex lg:gap-10 gap-7 max-lg:px-6 max-lg:mx-auto'>
                            <a className='text-light-brown-2 lg:text-sm text-xs' href="/">Privacy Policy</a>
                            <a className='text-light-brown-2 lg:text-sm text-xs' href="/">Terms of Use</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer