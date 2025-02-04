import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
    CreditCard, 
    Users, 
    GraduationCap, 
    CheckCircle,
    AlertCircle,
    FileCheck,
    Mail,
    Phone
} from 'lucide-react';

function Registration() {
    const [selectedCategory, setSelectedCategory] = useState('regular');

    const registrationFees = {
        regular: [
            { type: 'Indian Delegates (Academia)', amount: '₹8,000', early: '₹7,000' },
            { type: 'Indian Delegates (Industry/R&D)', amount: '₹10,000', early: '₹9,000' },
            { type: 'Indian Students', amount: '₹6,000', early: '₹5,000' },
            { type: 'Foreign Delegates', amount: '$300', early: '$250' },
            { type: 'Foreign Students', amount: '$200', early: '$150' }
        ],
        listener: [
            { type: 'Indian Participants', amount: '₹3,000', early: '₹2,500' },
            { type: 'Foreign Participants', amount: '$100', early: '$80' }
        ]
    };

    const benefits = [
        'Conference Kit with Printed Proceedings',
        'Lunch and Refreshments for All Conference Days',
        'Certificate of Participation',
        'Access to All Technical Sessions',
        'Networking Opportunities',
        'Publication in Conference Proceedings'
    ];

    const paymentSteps = [
        'Select your registration category and check the applicable fee',
        'Complete the registration form with accurate details',
        'Make payment through the secure payment gateway',
        'Receive confirmation email with registration details',
        'Upload payment proof and required documents'
    ];

    return (
        <section className="py-16 bg-gray-50 relative mt-12 overflow-hidden">
            <motion.div 
                className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500 rounded-full opacity-5 blur-3xl"
                animate={{ 
                    scale: [1, 1.2, 1],
                    opacity: [0.05, 0.1, 0.05]
                }}
                transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
            />

            <div className="container mx-auto px-4">
                <motion.div 
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <h2 className="text-4xl font-bold text-gray-900 mb-4">Registration</h2>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        Join us at ICCSAI 2025 to be part of groundbreaking discussions and networking opportunities
                    </p>
                </motion.div>

                {/* Registration Categories */}
                <motion.div 
                    className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ staggerChildren: 0.2 }}
                >
                    {[
                        {
                            id: 'regular',
                            title: 'Regular Registration',
                            icon: Users,
                            description: 'For paper presenters and full conference access'
                        },
                        {
                            id: 'listener',
                            title: 'Listener Registration',
                            icon: GraduationCap,
                            description: 'For attendees without paper presentation'
                        }
                    ].map((category) => (
                        <motion.div
                            key={category.id}
                            whileHover={{ scale: 1.05 }}
                            onClick={() => setSelectedCategory(category.id)}
                            className={`cursor-pointer group ${
                                selectedCategory === category.id 
                                    ? 'ring-2 ring-blue-500 ring-offset-2' 
                                    : ''
                            }`}
                        >
                            <div className="bg-white p-8 rounded-2xl shadow-lg relative overflow-hidden">
                                <motion.div 
                                    className="absolute -top-20 -right-20 w-40 h-40 bg-blue-500 rounded-full opacity-5 group-hover:opacity-10 transition-opacity blur-2xl"
                                    animate={{ 
                                        scale: [1, 1.2, 1],
                                        opacity: [0.05, 0.1, 0.05]
                                    }}
                                    transition={{
                                        duration: 4,
                                        repeat: Infinity,
                                        ease: "easeInOut"
                                    }}
                                />
                                <div className="flex items-center gap-4 mb-4">
                                    <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center">
                                        <category.icon className="w-6 h-6 text-blue-600" />
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-900">{category.title}</h3>
                                </div>
                                <p className="text-gray-600 mb-4">{category.description}</p>
                                <div className="flex items-center gap-2 text-blue-600">
                                    <span className="text-sm font-semibold">View Details</span>
                                    <div className="w-4 h-0.5 bg-blue-600 group-hover:w-6 transition-all" />
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Fee Structure */}
                <motion.div 
                    className="bg-white p-8 rounded-2xl shadow-lg mb-16 relative overflow-hidden"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <motion.div 
                        className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500 rounded-full opacity-5 blur-3xl"
                        animate={{ 
                            scale: [1, 1.2, 1],
                            opacity: [0.05, 0.1, 0.05]
                        }}
                        transition={{
                            duration: 4,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                    />
                    
                    <div className="flex items-center gap-3 mb-8">
                        <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center">
                            <CreditCard className="w-6 h-6 text-blue-600" />
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900">Registration Fees</h3>
                    </div>

                    <div className="overflow-x-auto">
                        <table className="w-full">
                            <thead>
                                <tr className="border-b border-gray-200">
                                    <th className="text-left py-4 px-6 text-gray-600 font-semibold">Category</th>
                                    <th className="text-left py-4 px-6 text-blue-600 font-semibold">Early Bird (Before March 1, 2025)</th>
                                    <th className="text-left py-4 px-6 text-gray-600 font-semibold">Regular Fee</th>
                                </tr>
                            </thead>
                            <tbody>
                                {registrationFees[selectedCategory].map((fee, index) => (
                                    <tr key={index} className="border-b border-gray-100">
                                        <td className="py-4 px-6 text-gray-900 font-medium">{fee.type}</td>
                                        <td className="py-4 px-6">
                                            <span className="text-blue-600 font-semibold">{fee.early}</span>
                                        </td>
                                        <td className="py-4 px-6 text-gray-900">{fee.amount}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </motion.div>

                {/* Benefits and Important Notes */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                    {/* Benefits */}
                    <motion.div 
                        className="bg-white p-8 rounded-2xl shadow-lg relative overflow-hidden"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <div className="flex items-center gap-3 mb-8">
                            <div className="w-12 h-12 rounded-xl bg-green-100 flex items-center justify-center">
                                <CheckCircle className="w-6 h-6 text-green-600" />
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900">Registration Benefits</h3>
                        </div>
                        <ul className="space-y-4">
                            {benefits.map((benefit, index) => (
                                <motion.li 
                                    key={index}
                                    className="flex items-center gap-3 text-gray-600"
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                >
                                    <span className="w-1.5 h-1.5 rounded-full bg-green-400" />
                                    {benefit}
                                </motion.li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Important Notes */}
                    <motion.div 
                        className="bg-white p-8 rounded-2xl shadow-lg relative overflow-hidden"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <div className="flex items-center gap-3 mb-8">
                            <div className="w-12 h-12 rounded-xl bg-orange-100 flex items-center justify-center">
                                <AlertCircle className="w-6 h-6 text-orange-600" />
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900">Important Notes</h3>
                        </div>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3 text-gray-600">
                                <span className="w-1.5 h-1.5 rounded-full bg-orange-400 mt-2" />
                                At least one author must register for each accepted paper
                            </li>
                            <li className="flex items-start gap-3 text-gray-600">
                                <span className="w-1.5 h-1.5 rounded-full bg-orange-400 mt-2" />
                                Registration fee is non-refundable
                            </li>
                            <li className="flex items-start gap-3 text-gray-600">
                                <span className="w-1.5 h-1.5 rounded-full bg-orange-400 mt-2" />
                                Early bird registration deadline: March 1, 2025
                            </li>
                            <li className="flex items-start gap-3 text-gray-600">
                                <span className="w-1.5 h-1.5 rounded-full bg-orange-400 mt-2" />
                                All prices are inclusive of applicable taxes
                            </li>
                        </ul>
                    </motion.div>
                </div>

                {/* Registration Steps */}
                <motion.div 
                    className="bg-white p-8 rounded-2xl shadow-lg relative overflow-hidden"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <div className="flex items-center gap-3 mb-8">
                        <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center">
                            <FileCheck className="w-6 h-6 text-blue-600" />
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900">Registration Process</h3>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
                        {paymentSteps.map((step, index) => (
                            <motion.div 
                                key={index}
                                className="relative"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                            >
                                <div className="flex items-center gap-4 mb-4">
                                    <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold">
                                        {index + 1}
                                    </div>
                                    {index < paymentSteps.length - 1 && (
                                        <div className="absolute top-4 left-8 w-full h-0.5 bg-blue-100" />
                                    )}
                                </div>
                                <p className="text-gray-600 text-sm">{step}</p>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Contact Information */}
                <motion.div 
                    className="mt-16 text-center"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">Need Help?</h3>
                    <p className="text-gray-600 mb-8">
                        For registration queries, please contact:
                    </p>
                    <div className="flex justify-center gap-8">
                        <a href="mailto:registration@iccsai.in" className="flex items-center gap-2 text-blue-600 hover:text-blue-700">
                            <Mail className="w-5 h-5" />
                            registration@iccsai.in
                        </a>
                        <a href="tel:+911234567890" className="flex items-center gap-2 text-blue-600 hover:text-blue-700">
                            <Phone className="w-5 h-5" />
                            +91 123 456 7890
                        </a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

export default Registration;
