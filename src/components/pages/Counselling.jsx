import React from 'react';

const medicalImg = [
    { name: "Medical Facility 1", img: "../../../src/assets/images/counselling/img-1.jpg" },
];

const Counselling = () => {
    return (
        <div className="bg-gray-100 p-6 rounded-lg shadow-md max-w-5xl mx-auto">
            <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">Medical Facilities Gallery</h2>

            {/* Center images dynamically */}
            <div className="flex flex-wrap justify-center gap-6">
                {medicalImg.map((img, index) => (
                    <div key={index} className="bg-white p-4 rounded-lg shadow-md overflow-hidden">
                        <img 
                            src={img.img} 
                            alt={img.name} 
                            className="w-64 h-48 object-cover rounded-md transition-transform transform hover:scale-105"
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Counselling;