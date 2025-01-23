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
                            <h2 className='font-semibold xl:text-5xl lg:text-4xl text-3xl text-start'>Songs</h2>
                            <div className="max-w-4xl mx-auto mt-8" >
                                {/* Table Headers */}
                                < div className="flex flex-wrap mb-[33px]" >
                                    <div className="w-7/12 font-semibold ps-9">{SONGS_LIST[0].heading}</div>
                                    <div className="w-3/12 font-semibold">{SONGS_LIST[0].releaseDate}</div>
                                    <div className="w-2/12 flex justify-end font-semibold">{SONGS_LIST[0].time}</div>
                                </div >
                            </div >
                        </div>
                        {/* Table Content */}
                        <div className="max-w-[774px] w-full space-y-11" >
                            {SONGS_LIST.slice(1).map((song, index) => (
                                <div key={index} className="flex flex-wrap" >
                                    <div className='w-6/12 flex lg:gap-[17px] gap-3'>
                                        <p className='text-light-gray-2 lg:text-sm text-xs !leading-[171.43%] min-w-[19px]'>{song.counting}.</p>
                                        <h4 className='font-semibold lg:text-sm text-xs !leading-[171.43%]'>{song.songName}</h4>
                                    </div>
                                    <div className='w-3/12 justify-center flex'><p className='text-xs !leading-[200%] text-light-brown'>{song.date}</p></div>
                                    <div className='w-3/12 justify-end flex'><p className='text-xs !leading-[200%] text-light-brown'>{song.playedTime}</p></div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="lg:w-4/12 w-full lg:justify-end justify-center flex max-lg:mt-6">
                        <div className="bg-blue relative w-[300px] h-[600px] rounded-[20px] flex items-center justify-center text-center">
                            <input hidden onChange={(e) => handleChange(e)} type="file" id="my-input" multiple />
                            <label htmlFor="my-input" className={`cursor-pointer text-white ${showImage ? "hidden" : "block"}`}>
                                Add Place
                            </label>
                            <img className={`w-[300px] h-[600px] object-cover rounded-[20px] ${showImage ? "block" : "hidden"}`} src={uploads} alt="Uploaded content" />
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


