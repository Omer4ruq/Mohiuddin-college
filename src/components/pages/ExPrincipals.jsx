import React from 'react';

// Image Imports
import nuruNabi from '../../../src/assets/images/ex-head-masters/nurun-nabi.jpeg';
import sohrabAli from '../../../src/assets/images/ex-head-masters/shorab-ali-talukdar.jpeg';
import mokarromAli from '../../../src/assets/images/ex-head-masters/mokarram-ali-khan.jpeg';
import rezaulKarim from '../../../src/assets/images/ex-head-masters/rejaul-karim.jpeg';
import mushfiqurRahman from '../../../src/assets/images/ex-head-masters/mushfiq-ur-rahman.jpeg';
import golamHossain from '../../../src/assets/images/ex-head-masters/golam-hossan-sarkar.jpeg';
import imamulHuda from '../../../src/assets/images/ex-head-masters/imamul-huda.jpeg';
import mmSalehin from '../../../src/assets/images/ex-head-masters/m-m-salehin.jpeg';
import kaziShawkat from '../../../src/assets/images/ex-head-masters/Kazi-Shawkat-alam.jpeg';
import tayefUlHaq from '../../../src/assets/images/ex-head-masters/tayef-ul-haq.jpeg';
import bahauddin from '../../../src/assets/images/ex-head-masters/a-s-m-bahauddin.jpeg';

// Data Array
const exPrincipals = [
    { name: "Col Nurun Nabi", img: nuruNabi, degree: "(Retd)" },
    { name: "Brig Gen Sohrab Ali Talukder", img: sohrabAli, degree: "(Retd)" },
    { name: "Col Mokarrom Ali Khan", img: mokarromAli, degree: "(Retd)" },
    { name: "Brig Gen A K M Rezaul Karim", img: rezaulKarim, degree: "(Retd)" },
    { name: "Brig Gen A S M Musfiqur Rahman", img: mushfiqurRahman, degree: "psc (Retd)" },
    { name: "Brig Gen Mohd. Golam Hossain Sarker", img: golamHossain, degree: "psc (Retd)" },
    { name: "Brig Gen Imamul Huda", img: imamulHuda, degree: "psc (Retd)" },
    { name: "Brig Gen M M Salehin", img: mmSalehin, degree: "ndc, psc (Retd)" },
    { name: "Brig Gen Kazi Shawkat Alam", img: kaziShawkat, degree: "ndc, psc (Retd)" },
    { name: "Brig Gen Tayef Ul Haq", img: tayefUlHaq, degree: "ndc, psc, জি" },
    { name: "Brig Gen A. S. M. Bahauddin", img: bahauddin, degree: "sup, spp, ndc, afwc, psc, g" },
];

// Component
const ExPrincipals = () => {
    return (
        <div className="bg-gray-100 p-6 rounded-lg shadow-md max-w-5xl mx-auto">
            <h2 className="text-2xl font-semibold text-center mb-6 text-primary">
                Ex-Principals of the College
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {exPrincipals.map((principal, index) => (
                    <div
                        key={index}
                        className="bg-white p-4 rounded-lg shadow-md flex flex-col items-center"
                    >
                        <img
                            src={principal.img}
                            alt={principal.name}
                            className="w-40 h-40 rounded-full shadow-lg mb-4 object-contain"
                            // border-4 border-gray-300
                        />
                        <h3 className="text-lg font-semibold text-center">{principal.name}</h3>
                        {principal.degree && (
                            <p className="text-sm text-gray-600 text-center mt-2">{principal.degree}</p>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ExPrincipals;
