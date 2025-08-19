// DownloadPDF.js
import React from 'react';
import pdf from '../images/pdf.pdf'; // Adjust the path based on your file structure

const PDF = () => {
    
    const downloadPDF = () => {
        const link = document.createElement('a');
        link.href = pdf; // Use the imported PDF file
        link.setAttribute('download', 'VFX.pdf'); // Set the file name
        document.body.appendChild(link);
        link.click();
        link.remove();
    };

    return (
        <div>
            <button onClick={downloadPDF} class="btn-download bg-[#ff0000] rounded-md  md:rounded-lg px-4 py-2 md:py-3 font-semibold text-white font-[roboto] text-[12px] md:text-[16px]">
                Download Brochure
            </button>
        </div>
    );
};

export default PDF;
