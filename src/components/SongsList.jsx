import React, { useState } from 'react'
import { SONGS_LIST } from '../utils/helper'

const SongsList = () => {
    const [uploads, setUploads] = useState(null);
    const [showImage, setShowImage] = useState(false);

    const handleChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const imgUpload = URL.createObjectURL(file);
            setUploads(imgUpload);
            setShowImage(true);
        }
    };

    const handleRemoveImage = () => {
        setUploads(null);
        setShowImage(false);
    };
    return (
        <div className='flex flex-col justify-center items-center pb-11'>
            <div className="max-w-[1140px] mx-auto w-full max-xl:px-4">
                <div className="flex flex-wrap w-full mx-auto">
                    <div className="lg:w-8/12 w-full mx-auto justify-center max-lg:flex max-lg:flex-col max-lg:items-center">
                        <div className="max-w-[774px] w-full">
                            <h2 className='font-semibold xl:text-5xl lg:text-4xl md:text-3xl text-2xl text-start'>Songs</h2>
                            <div className="max-w-4xl mx-auto lg:mt-8 md:mt-7 mt-6" >
                                <div className="flex flex-wrap xl:mb-[33px] lg:mb-7 mb-6 w-full" >
                                    <div className="lg:w-7/12 w-6/12 lg:text-sm text-xs font-semibold lg:ps-9 ps-8">{SONGS_LIST[0].heading}</div>
                                    <div className="w-3/12 lg:text-sm text-xs font-semibold">{SONGS_LIST[0].releaseDate}</div>
                                    <div className="lg:w-2/12 w-3/12 lg:text-sm text-xs flex lg:justify-end justify-center font-semibold">{SONGS_LIST[0].time}</div>
                                </div>
                            </div>
                        </div>
                        <div className="max-w-[774px] w-full xl:space-y-11 lg:space-y-9 md:space-y-7 space-y-5" >
                            {SONGS_LIST.slice(1).map((song, index) => (
                                <div key={index} className="flex flex-wrap" >
                                    <div className='w-6/12 flex lg:gap-[17px] gap-3'>
                                        <p className='text-light-gray-2 lg:text-sm text-xs !leading-[171.43%] min-w-[19px]'>{song.counting}.</p>
                                        <h4 className='font-semibold lg:text-sm text-xs !leading-[171.43%]'>{song.songName}</h4>
                                    </div>
                                    <div className='w-3/12 lg:justify-center flex'><p className='text-xs !leading-[200%] text-light-brown'>{song.date}</p></div>
                                    <div className='w-3/12 lg:justify-end justify-center flex'><p className='text-xs !leading-[200%] text-light-brown'>{song.playedTime}</p></div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="lg:w-4/12 w-full lg:ps-10 justify-center flex max-lg:mt-6">
                        <div className="bg-blue relative lg:w-[300px] max-w-xl w-full lg:h-[600px] min-h-48 py-2 px-2 rounded-[20px] flex items-center justify-center text-center">
                            <input hidden onChange={(e) => handleChange(e)} type="file" id="my-input" multiple />
                            <label htmlFor="my-input" className={`cursor-pointer text-white ${showImage ? "hidden" : "block"}`}>
                                Add Place
                            </label>
                            <img className={`max-w-[300px] max-h-[600px]  rounded-[20px] ${showImage ? "block" : "hidden"}`} src={uploads} alt="Uploaded content" />
                            <div onClick={handleRemoveImage} className="flex flex-col gap-2 absolute top-5 right-5 cursor-pointer">
                                <span className={`${showImage ? "h-0.5 w-7 bg-white rounded-lg rotate-45 translate-y-1.5" : "h-0 w-0"}`}></span>
                                <span className={`${showImage ? "h-0.5 w-7 bg-white rounded-lg -rotate-45 -translate-y-1" : "h-0 w-0"}`}></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SongsList


