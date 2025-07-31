import React from 'react';
import headMasterImg from '../../../src/assets/images/head-master.jpeg';

const CurrentPrincipal = () => {
    return (
        <div className="bg-gray-100 p-6 rounded-2xl shadow-lg max-w-3xl mx-auto">
            {/* Image Section */}
            <div className="flex justify-center mb-6">
                <img 
                    src={headMasterImg} 
                    alt="Head Master Image" 
                    className="w-44 h-44 rounded-full border-4 border-white shadow-md object-cover"
                />
            </div>

            {/* Name & Designation Section */}
            <div className="bg-indigo-100 text-center p-6 rounded-xl shadow-inner mb-6">
                <h2 className="text-2xl md:text-3xl font-extrabold text-gray-800 tracking-wide">
                    Brigadier General Md Enamul Islam, <span className="text-blue-600">psc, PhD</span>
                </h2>
                <p className="text-lg text-gray-600 mt-2 font-medium">
                    Principal, Rajuk Uttara Model College
                </p>
            </div>

            {/* Description Section */}
            <div className="text-gray-800 text-base md:text-lg leading-relaxed space-y-4 px-2 md:px-4">
                <p>
                    Brigadier General Md Enamul Islam has had a long and illustrious career in the Bangladesh Army spanning over twenty-nine years. 
                    His distinguished career is a unique blend of Command, Staff, and Instructional appointments at various levels, including training institutions like JCO/NCO Academy and National Defence College.
                </p>
                <p>
                    He has participated in UN assignments in DR Congo and Sudan. His academic achievements include multiple Master's degrees in Defense Studies, Finance, Marketing, and Supply Chain Management, alongside a PhD from Limkokwing University of Creative Technology, Malaysia.
                </p>
                <p>
                    He is an avid researcher, keynote speaker, and session chair at various international conferences. Outside his professional life, he enjoys golf, traveling, reading, and conducting research.
                </p>
            </div>
        </div>
    );
};

export default CurrentPrincipal;
