import React, { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Form = () => {
    const [formData, setFormData] = useState({
        NaName: '',
        Phone: '',
        Email: '',
        Number: '',
        Qualification: '',
        Course: '',
    });

    const [phoneError, setPhoneError] = useState('');
    const [altPhoneError, setAltPhoneError] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false); // To track form submission status

    const handleChange = (e) => {
        const { name, value } = e.target;

        // Phone validation logic
        if (name === 'Phone') {
            const phoneRegex = /^[0-9]{10}$/; // Ensures 10-digit phone number
            if (!phoneRegex.test(value)) {
                setPhoneError('Please enter a valid 10-digit phone number.');
            } else {
                setPhoneError('');
            }
        }

        // Alternative phone validation logic
        if (name === 'Number') {
            const altPhoneRegex = /^[0-9]{10}$/; // Ensures 10-digit alternative phone number
            if (!altPhoneRegex.test(value)) {
                setAltPhoneError('Please enter a valid 10-digit alternative phone number.');
            } else {
                setAltPhoneError('');
            }
        }

        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (phoneError || altPhoneError) {
            toast.error('Please fix the phone number errors before submitting.');
            return;
        }

        setIsSubmitting(true);

        const scriptURL = 'https://script.google.com/macros/s/AKfycbwZji-DNYO5UOpiAeQ-ohlprlvMJuSaqiqJm77bj-Uk04OnPfGmfJ-Pq7-oiIxlJ80Low/exec';
        const formDataEncoded = new URLSearchParams(formData).toString();

        try {
            const response = await fetch(scriptURL, {
                method: 'POST',
                body: formDataEncoded,
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
            });

            const result = await response.text();

            if (result.includes('Submitted')) {
                toast.success('Form submitted successfully!');
                setFormData({
                    Name: '',
                    Phone: '',
                    Email: '',
                    Number: '',
                    Qualification: '',
                    Course: '',
                });
            } else {
                toast.error('Error submitting the form: ' + result);
            }
        } catch (error) {
            console.error('Error submitting the form:', error);
            toast.error('Error submitting the form');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div>
            <ToastContainer />
            <div className="container mx-auto">
                <div className="max-w-md mx-auto overflow-hidden">
                    <div className="md:flex">
                        <div className="w-full md:px-1 py-8">
                            <h2 className="text-center text-[18px] md:text-[30px] uppercase font-bold font-[poppins] text-black">Apply Now</h2>
                            <form className="mt-6 md:mt-10" onSubmit={handleSubmit}>
                                <div className='flex flex-col gap-y-6 md:flex-row items-center gap-x-3 w-full mb-6 md:mb-8'>
                                    <div className="w-full">
                                        <label className="block text-[12px] md:text-[14px] font-semibold mb-2 text-black" htmlFor="name">Name* </label>
                                        <div>
                                            <input
                                                className="bg-white shadow border border-gray-500 text-[12px] md:text-[12px] rounded-lg w-full py-3 px-3 focus:outline-none focus:shadow-outline text-black"
                                                id="Name"
                                                name="Name"
                                                type="text"
                                                placeholder="Name"
                                                value={formData.name}
                                                onChange={handleChange}
                                                required
                                            />
                                        </div>
                                    </div>

                                    <div className="w-full">
                                        <label className="block text-[12px] md:text-[14px] text-black font-semibold mb-2" htmlFor="phone">Phone Number*</label>
                                        <div>
                                            <input
                                                className="bg-white shadow border border-gray-500 text-[12px] md:text-[12px] rounded-lg w-full py-3 px-3 focus:outline-none focus:shadow-outline text-black"
                                                id="Phone"
                                                name="Phone"
                                                type="tel"
                                                placeholder="Phone Number"
                                                value={formData.phone}
                                                onChange={handleChange}
                                                required
                                            />
                                            {phoneError && (
                                                <p className="text-red-500 text-[12px] mt-1">{phoneError}</p>
                                            )}
                                        </div>
                                    </div>
                                </div>

                                <div className="w-full mb-6 md:mb-8">
                                    <label className="block text-[12px] md:text-[14px] text-black font-semibold mb-2" htmlFor="email">Email*</label>
                                    <div>
                                        <input
                                            className="bg-white shadow border border-gray-500 text-[12px] md:text-[12px] rounded-lg w-full py-3 px-3 focus:outline-none focus:shadow-outline text-black"
                                            id="Email"
                                            name="Email"
                                            type="email"
                                            placeholder="Email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>
                                </div>

                                <div className="w-full mb-6 md:mb-8">
                                    <label className="block text-[12px] md:text-[14px] text-black font-semibold mb-2" htmlFor="number">Alternative Phone Number</label>
                                    <div>
                                        <input
                                            className="bg-white shadow border border-gray-500 text-[12px] md:text-[12px] rounded-lg w-full py-3 px-3 focus:outline-none focus:shadow-outline text-black"
                                            id="Number"
                                            name="Number"
                                            type="tel"
                                            placeholder="Alternative Phone Number (optional)"
                                            value={formData.number}
                                            onChange={handleChange}
                                            
                                        />
                                        {altPhoneError && (
                                            <p className="text-red-500 text-[12px] mt-1">{altPhoneError}</p>
                                        )}
                                    </div>
                                </div>

                                <div className="w-full mb-6 md:mb-8">
                                    <label className="block text-[12px] md:text-[14px] text-black font-semibold mb-2" htmlFor="qualification">Professional Qualifications</label>
                                    <div>
                                        <input
                                            className="bg-white shadow border border-gray-500 text-[12px] md:text-[12px] rounded-lg w-full py-3 px-3 focus:outline-none focus:shadow-outline text-black"
                                            id="Qualification"
                                            name="Qualification"
                                            type="text"
                                            placeholder="Professional Qualifications (optional)"
                                            value={formData.qualification}
                                            onChange={handleChange}
                                           
                                        />
                                    </div>
                                </div>

                                <div className="mb-6 md:mb-8">
                                    <label className="block text-[12px] md:text-[14px] text-black font-semibold mb-2" htmlFor="course">Select a Course*</label>
                                    <select
                                        className="bg-white shadow border border-gray-500 text-[12px] md:text-[12px] rounded-lg w-full py-3 px-3 focus:outline-none focus:shadow-outline text-black"
                                        id="Course"
                                        name="Course"
                                        value={formData.course}
                                        onChange={handleChange}
                                        required
                                    >
                                        <option value="" className='text-black'>Select a Course</option>
                                        <option value="Screenplay & Direction">Screenplay & Direction</option>
                                        <option value="Cinematography">Cinematography</option>
                                        <option value="Visual Effects">Visual Effects</option>
                                        <option value="Virtual Production">Virtual Production</option>
                                        <option value="Editing">Editing</option>
                                        <option value="Acting">Acting</option>
                                        <option value="Photography">Photography</option>
                                        <option value="Color Grading">Color Grading (DI)</option>
                                    </select>
                                </div>

                                <button
                                    className={`w-full border border-gray-200 bg-gray-950 rounded-lg uppercase text-white hover:scale-105 duration-500 font-semibold text-[14px] py-2 px-4 focus:outline-none focus:shadow-outline ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
                                    type="submit"
                                    disabled={isSubmitting} // Disable button when submitting
                                >
                                    {isSubmitting ? 'Submitting...' : 'Submit'}
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Form;
