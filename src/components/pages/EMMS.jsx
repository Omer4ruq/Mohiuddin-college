import React from 'react';
import sudipabarua from '../../../src/assets/images/wing/sudipa.jpg';

const EMMS = () => {
    return (
        <div className="bg-gray-100 p-6 rounded-lg shadow-md max-w-xl mx-auto text-center">
            {/* Image Section */}
            <div className="flex justify-center mb-4">
                <div className="w-40 h-40 rounded-full overflow-hidden border-4 border-gray-300 shadow-lg">
                    <img 
                        src={sudipabarua} 
                        alt="Sudipa Barua" 
                        className="w-full h-full object-cover"
                    />
                </div>
            </div>

            {/* Text Section */}
            <h1 className="text-2xl font-bold text-gray-800 mb-2">Sudipa Barua</h1>
            <p className="text-lg text-gray-600">Vice Principal, EMMS</p>
        </div>
    );
};

export default EMMS;
