import React from 'react';
import khandokar from '../../../src/assets/images/wing/khandkar-anisul.jpg';

const Bmds = () => {
    return (
        <div className="bg-gray-100 p-6 rounded-lg shadow-md max-w-xl mx-auto text-center">
            {/* Image Section */}
            <div className="flex justify-center mb-4">
                <img 
                    src={khandokar} 
                    alt="Khandaker Anisul Haque" 
                    className="w-40 h-40 rounded-full border-4 border-gray-300 shadow-lg"
                />
            </div>

            {/* Text Section */}
            <h1 className="text-2xl font-bold text-gray-800 mb-2">Khandaker Anisul Haque</h1>
            <p className="text-lg text-gray-600">Vice Prencipal, BMDS</p>
        </div>
    );
};

export default Bmds;