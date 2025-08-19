// DownloadPDF.js
import React, { useState } from 'react';
import Modal from './Model';

// ✅ New PDF Imports
import acting from "../pdf/Acting.pdf";
import virtualproduction from '../pdf/Advanced Virtual Production.pdf';
import cinematography from '../pdf/Cinematography.pdf';
import direction from '../pdf/Direction.pdf';
import editing from '../pdf/Editing.pdf';
import photography from "../pdf/Photography.pdf";
import stagevirtualproduction from '../pdf/Stage Unreal Virtual Production.pdf';
import vfx from '../pdf/VFX.pdf';

const AllCourse = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // ✅ Updated course list using new PDFs
  const courses = [
    { name: 'Screenplay & Direction', downloadFunc: () => downloadPDF(direction, 'Direction & Screenplay.pdf') },
    { name: 'Cinematography', downloadFunc: () => downloadPDF(cinematography, 'Cinematography.pdf') },
    { name: 'Editing', downloadFunc: () => downloadPDF(editing, 'Editing.pdf') },
    { name: 'VFX', downloadFunc: () => downloadPDF(vfx, 'VFX.pdf') },
    { name: 'Advanced Virtual Production', downloadFunc: () => downloadPDF(virtualproduction, 'Advanced_Virtual_Production.pdf') },
    { name: 'Stage Unreal Virtual Production', downloadFunc: () => downloadPDF(stagevirtualproduction, 'Stage_Unreal_Virtual_Production.pdf') },
    { name: 'Acting', downloadFunc: () => downloadPDF(acting, 'Acting.pdf') },
    { name: 'Photography', downloadFunc: () => downloadPDF(photography, 'Photography.pdf') },
  ];

  const downloadPDF = (pdf, fileName) => {
    const link = document.createElement('a');
    link.href = pdf;
    link.setAttribute('download', fileName);
    document.body.appendChild(link);
    link.click();
    link.remove();
  };

  return (
    <div class='font-[poppins]'>
      <button 
        onClick={() => setIsModalOpen(true)} 
        class="btn-download border border-white mt-2 md:mt-0 bg-[#ff0000] rounded-md md:rounded-lg px-4 md:px-10 py-2 md:py-3 font-semibold text-white font-[roboto] text-[12px] md:text-[16px] hover:scale-105 duration-300"
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
