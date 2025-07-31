import React from "react";

const PrivacyPolicy = () => {
    return (
        <div className="max-w-3xl mx-auto px-8 py-12 bg-white rounded-lg shadow-lg text-gray-800">
        {/* Title */}
        <h1 className="text-4xl font-bold mb-8 text-center text-primary">Privacy Policy</h1>

        {/* Sections */}
        <div className="space-y-8 text-justify">
            
            {/* Information Collection */}
            <div className="border-l-4 border-primary pl-4">
                <h2 className="text-xl font-semibold mb-2">Information We Collect</h2>
                <ul className="list-disc pl-6">
                    <li><strong>Personal Data:</strong> Name, student ID, contact details, academic info, and payment history.</li>
                    <li><strong>Usage Data:</strong> IP address, device type, browser details, login timestamps.</li>
                </ul>
            </div>

            {/* Facilities Section */}
            <div className="border-l-4 border-blue-500 pl-4">
                <h2 className="text-xl font-semibold mb-2">Facilities Available</h2>
                <ul className="list-disc pl-6">
                    <li><strong>Tuition Fee Payment</strong> – Securely pay tuition and exam fees through the platform.</li>
                    <li><strong>Academic Results Access</strong> – View detailed marks, grades, and performance reports.</li>
                    <li><strong>Personalized Dashboard</strong> – Get academic notifications, updates, and student records.</li>
                </ul>
            </div>

            {/* Data Usage */}
            <div className="border-l-4 border-secondary pl-4">
                <h2 className="text-xl font-semibold mb-2">How We Use Your Data</h2>
                <ul className="list-disc pl-6">
                    <li>Maintain student profiles and dashboards.</li>
                    <li>Enable secure login and authentication.</li>
                    <li>Process tuition or fee payments securely.</li>
                    <li>Provide academic updates, notifications, and enhancements.</li>
                </ul>
            </div>

            {/* Data Sharing */}
            <div className="border-l-4 border-green-500 pl-4">
                <h2 className="text-xl font-semibold mb-2">Data Sharing & Disclosure</h2>
                <ul className="list-disc pl-6">
                    <li>We <strong>do not</strong> sell or rent personal data.</li>
                    <li>Data may be shared only with payment gateways, government authorities, or authorized college administrators.</li>
                </ul>
            </div>

            {/* Security Measures */}
            <div className="border-l-4 border-red-500 pl-4">
                <h2 className="text-xl font-semibold mb-2">Data Security</h2>
                <p>We implement industry-standard encryption and security protocols to safeguard your information.</p>
            </div>

            {/* User Rights */}
            <div className="border-l-4 border-purple-500 pl-4">
                <h2 className="text-xl font-semibold mb-2">Your Rights</h2>
                <ul className="list-disc pl-6">
                    <li>Access and update your profile.</li>
                    <li>Request account deletion (subject to academic policies).</li>
                    <li>Opt out of non-essential communications.</li>
                </ul>
            </div>

            {/* Changes to Policy */}
            <div className="border-l-4 border-yellow-500 pl-4">
                <h2 className="text-xl font-semibold mb-2">Updates & Changes</h2>
                <p>Our privacy policy may be updated periodically. Changes take effect upon posting.</p>
            </div>

            {/* Contact Info */}
            <div className="border-l-4 border-blue-500 pl-4">
                <h2 className="text-xl font-semibold mb-2">Contact Us</h2>
                <p>📧 Email: info@rajukcollege.edu.bd</p>
                <p>📞 Phone: +8801819472150</p>
                <p>🌐 Website: <a href="https://www.rajukcollege.edu.bd" className="text-blue-500">rajukcollege.edu.bd</a></p>
            </div>
        </div>
        </div>
    );
};

export default PrivacyPolicy;
