// Modal.js
import React from 'react';
import { IoClose } from "react-icons/io5";
import { FaDownload } from "react-icons/fa";



const Modal = ({ isOpen, onClose, courses }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
            <div className="bg-white rounded-lg p-6 w-11/12 md:w-1/3">
                <div className='flex items-center justify-between  mb-6 md:mb-8'>
                    <h2 className="text-[18px] md:text-[24px] font-bold ">Available Courses</h2>

                    <button onClick={onClose} className="bg-red-500 text-white drop-shadow-md shadow-lg flex justify-center items-center size-6 md:size-8 rounded-full hover:scale-105 duration-300">
                        <IoClose />
                    </button>
                </div>

                <ul className="mb-4">
                    {courses.map((course, index) => (
                        <li key={index} className="mb-2">
                            <div className="flex justify-between items-center">
                                <span className='font-semibold text-[12px] md:text-[14px]'>{course.name}</span>
                                <button
                                    onClick={course.downloadFunc}
                                    className="bg-blue-500 text-white rounded px-3 py-2 flex items-center gap-x-2  hover:scale-105 duration-300"
                                >
                                    
                                    <span className=''> <FaDownload className='text-[14px] font-bold  text-white '/> </span>

                                    <span className='hidden md:flex  text-[14px]'>Download Brochure</span> 
                                </button>
                            </div>
                        </li>
                    ))}
                </ul>

            </div>
        </div>
    );
};

export default Modal;
