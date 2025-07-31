import React from 'react';
import medeical1 from '../../../src/assets/images/medical/medicalimg1.jpeg'
import medeical2 from '../../../src/assets/images/medical/medicalimg2.jpeg'

const medicalImg = [
    { name: "Medical Facility 1", img: medeical1 },
    { name: "Medical Facility 2", img: medeical2 }
];

const MedicalGallery = () => {
    const isTwoImages = medicalImg.length === 2;

    return (
        <div className="bg-gray-100 p-6 rounded-lg shadow-md max-w-5xl mx-auto">
            <h2 className="text-2xl font-semibold text-center mb-6 text-primary">Medical Facilities Gallery</h2>

            {/* Conditionally center images if there are only two */}
            <div className={`grid gap-6 ${isTwoImages ? "grid-cols-1 sm:grid-cols-2 justify-center" : "grid-cols-1 sm:grid-cols-2 md:grid-cols-3"}`}>
                {medicalImg.map((img, index) => (
                    <div key={index} className="relative bg-white p-4 rounded-lg shadow-md overflow-hidden flex justify-center">
                        <img 
                            src={img.img} 
                            alt={img.name} 
                            className="w-full h-48 object-cover rounded-md transition-transform transform hover:scale-105"
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MedicalGallery;