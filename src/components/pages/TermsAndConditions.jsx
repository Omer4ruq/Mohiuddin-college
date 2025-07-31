import React from "react";

const TermsAndConditions = () => {
    return (
        <div className="max-w-3xl mx-auto px-8 py-12 bg-white rounded-lg shadow-lg text-gray-800">
            {/* Title */}
            <h1 className="text-4xl font-bold mb-8 text-center text-primary">Terms & Conditions</h1>

            {/* Sections */}
            <div className="space-y-8 text-justify">
                
                {/* Eligibility */}
                <div className="border-l-4 border-primary pl-4">
                    <h2 className="text-xl font-semibold mb-2">Eligibility</h2>
                    <p>Only registered students of Rajuk Uttara Model College are eligible to use login, dashboard, and payment features.</p>
                </div>

                {/* Account Responsibility */}
                <div className="border-l-4 border-secondary pl-4">
                    <h2 className="text-xl font-semibold mb-2">Account Responsibility</h2>
                    <ul className="list-disc pl-6">
                        <li>Maintain confidentiality of your login credentials.</li>
                        <li>Never share your credentials.</li>
                        <li>Report unauthorized account access immediately.</li>
                    </ul>
                </div>

                {/* Payments */}
                <div className="border-l-4 border-green-500 pl-4">
                    <h2 className="text-xl font-semibold mb-2">Payments</h2>
                    <ul className="list-disc pl-6">
                        <li>All payments are final and non-refundable unless stated otherwise.</li>
                        <li>Payment gateways are secure and PCI-DSS compliant.</li>
                    </ul>
                </div>

                {/* User Conduct */}
                <div className="border-l-4 border-red-500 pl-4">
                    <h2 className="text-xl font-semibold mb-2">User Conduct</h2>
                    <ul className="list-disc pl-6">
                        <li>Do not upload false or misleading information.</li>
                        <li>No hacking, breaching, or misuse of the app.</li>
                        <li>Respect academic policies and avoid harmful content.</li>
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

                {/* Intellectual Property */}
                <div className="border-l-4 border-purple-500 pl-4">
                    <h2 className="text-xl font-semibold mb-2">Intellectual Property</h2>
                    <p>All content and materials belong to Rajuk Uttara Model College. Unauthorized reproduction or distribution is strictly prohibited.</p>
                </div>

                {/* Termination & Liability */}
                <div className="border-l-4 border-gray-600 pl-4">
                    <h2 className="text-xl font-semibold mb-2">Termination & Liability</h2>
                    <ul className="list-disc pl-6">
                        <li>We may suspend or terminate access for policy violations.</li>
                        <li>We are not liable for technical issues or outdated data.</li>
                    </ul>
                </div>

                {/* Changes to Terms & Governing Law */}
                <div className="text-center mt-6 text-sm text-gray-500">
                    <p>These Terms may be updated at any time and will be governed by the laws of Bangladesh.</p>
                </div>
            </div>
        </div>
    );
};

export default TermsAndConditions;
