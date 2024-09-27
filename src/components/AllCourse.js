// DownloadPDF.js
import React, { useState } from 'react';

import pdfScreenplay from '../images/screenplay.pdf';
import pdfCinematography from '../images/cinematography.pdf';
import pdfEditing from '../images/cinematography.pdf';
import pdfVFX from '../images/vfx.pdf';
import pdfvirtualproduction from '../images/cinematography.pdf';
import pdfacting from '../images/cinematography.pdf';
import pdfphotography from '../images/cinematography.pdf';
import pdfColorgrading from '../images/cinematography.pdf';

// Import other PDF files here

import Modal from './Model';

const AllCourse = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Define the course list with corresponding download functions
  const courses = [
      { name: 'Screenplay & Direction', downloadFunc: () => downloadPDF(pdfScreenplay, 'Screenplay.pdf') },
      { name: 'Cinematography', downloadFunc: () => downloadPDF(pdfCinematography, 'Cinematography.pdf') },
      { name: 'Editing', downloadFunc: () => downloadPDF(pdfEditing, 'Editing.pdf') },
      { name: 'VFX', downloadFunc: () => downloadPDF(pdfVFX, 'VFX.pdf') },
    { name: 'Virtual Production', downloadFunc: () => downloadPDF(pdfvirtualproduction, 'Virtual_Production.pdf') },
    { name: 'Acting', downloadFunc: () => downloadPDF(pdfacting, 'Acting.pdf') },
    { name: 'Photography', downloadFunc: () => downloadPDF(pdfphotography, 'Photography.pdf') },
    { name: 'Color Grading (DI)', downloadFunc: () => downloadPDF(pdfColorgrading, 'color_grading(DI).pdf') },
    
  ];

  const downloadPDF = (pdf, fileName) => {
    const link = document.createElement('a');
    link.href = pdf; // Use the imported PDF file
    link.setAttribute('download', fileName); // Set the file name
    document.body.appendChild(link);
    link.click();
    link.remove();
  };

  return (
    <div className='font-[poppins]'>
      <button 
        onClick={() => setIsModalOpen(true)} 
        className="btn-download border border-white mt-2 md:mt-0 bg-[#ff0000] rounded-md md:rounded-lg px-4 md:px-10 py-2 md:py-3 font-semibold text-white font-[roboto] text-[12px] md:text-[16px] hover:scale-105 duration-300"
      >
        Download Brochure
      </button>

      <Modal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        courses={courses} 
      />
    </div>
  );
};

export default AllCourse;
