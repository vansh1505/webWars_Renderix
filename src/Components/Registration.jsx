import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, CheckCircle, Wallet, QrCode, Sparkles, ArrowRight, Copy, Info, Landmark, File } from 'lucide-react';

function Registration() {
    const [selectedCategory, setSelectedCategory] = useState('regular');
    const [copiedField, setCopiedField] = useState(null);

    const registrationFees = {
        regular: [
            { type: 'Indian Delegates (Academia)', amount: '₹8,000', IEEEMember: '₹7,000' },
            { type: 'Indian Delegates (Industry/R&D)', amount: '₹10,000', IEEEMember: '₹9,000' },
            { type: 'Indian Students', amount: '₹6,000', IEEEMember: '₹5,000' },
            { type: 'Foreign Delegates', amount: '$300', IEEEMember: '$250' },
            { type: 'Foreign Students', amount: '$200', IEEEMember: '$150' }
        ],
        listener: [
            { type: 'Indian Participants', amount: '₹3,000', IEEEMember: '₹2,500' },
            { type: 'Foreign Participants', amount: '$100', IEEEMember: '$80' }
        ]
    };

    const bankDetails = {
        name: "GU Conferences",
        account: "6717000100025845",
        ifsc: "PUNB0671700",
        swift: "PUNBINBBMSN",
        bank: "Punjab National Bank, Noida"
    };

    const upi = "6717000100025845@PUNB0671700.ifsc.npci";

    const copyToClipboard = (text, field) => {
        navigator.clipboard.writeText(text);
        setCopiedField(field);
        setTimeout(() => setCopiedField(null), 2000);
    };

    const registrationSteps = [
        {
            title: "Select Category & Fee",
            description: "Choose your registration category and check applicable fee"
        },
        {
            title: "Make Payment",
            description: "Pay via bank transfer or UPI using the provided details"
        },
        {
            title: "Fill Registration Form",
            description: "Complete the registration form with your details"
        },
        {
            title: "Upload Documents",
            description: "Submit payment proof and required documents"
        }
    ];

    return (
        <section className="mt-12 py-16 bg-gradient-to-b from-gray-50 to-white">
            <div className="container mx-auto px-4">
                {/* Header */}
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                >
                    <h2 className="text-4xl font-bold text-gray-900 mb-6 flex items-center justify-center gap-3">
                        Registration
                        <Sparkles className="w-8 h-8 text-blue-600" />
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto mb-6 rounded-full" />
                    <div>
                        <p className='text-xl text-gray-600 max-w-3xl mx-auto'>Join us at ICCSAI 2025 to be part of groundbreaking discussions and networking opportunities</p>
                    </div>
                </motion.div>

                {/* Category Toggle */}
                <div className="flex justify-center mb-8">
                    <div className="inline-flex bg-gray-100 p-1 rounded-lg">
                        {['regular', 'listener'].map((category) => (
                            <button
                                key={category}
                                onClick={() => setSelectedCategory(category)}
                                className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${selectedCategory === category
                                    ? 'bg-white text-blue-600 shadow-sm'
                                    : 'text-gray-600 hover:text-gray-900'
                                    }`}
                            >
                                {category === 'regular' ? 'Regular' : 'Listener'}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Fee Structure */}
                <motion.div
                    className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 mb-12"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                >
                    <div className="flex items-center gap-3 mb-6">
                        <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center">
                            <Wallet className="w-5 h-5 text-blue-600" />
                        </div>
                        <h3 className="text-xl font-bold text-gray-900">Registration Fees</h3>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {registrationFees[selectedCategory].map((fee, index) => (
                            <div
                                key={index}
                                className="p-4 rounded-lg bg-gray-50 border border-gray-100"
                            >
                                <p className="font-medium text-gray-900 mb-2">{fee.type}</p>
                                <div className="flex justify-between text-sm">
                                    <span className="text-blue-600">IEEE Member: {fee.IEEEMember}</span>
                                    <span className="text-gray-600">Non-IEEE Member: {fee.amount}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div>
                        <p className='text-gray-600 mt-6 text-sm font-semibold'><span className='text-black'>Note: </span> * Extra page charge of ₹1000/- INR per page Indian author and $50 per page International author will be chargeable to the author's during registration process.</p>
                    </div>
                </motion.div>


                {/* Registration Process */}
                <motion.div
                    className="mb-16"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                >
                    <div className='bg-gray-50 border border-gray-100 p-8 shadow-md rounded-2xl'>
                        <div className='flex gap-5 items-center mb-8'>
                            <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center">
                                <File className="w-5 h-5 text-blue-600" />
                            </div>
                            <p className='text-xl font-bold'>Registration Process</p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                            {registrationSteps.map(({ title, description }, index) => (
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
                                        {index < registrationSteps.length - 1 && (
                                            <div className="absolute top-4 left-8 w-full h-0.5 bg-blue-100" />
                                        )}
                                    </div>
                                    <h4 className="text-gray-900 font-semibold">{title}</h4>
                                    <p className="text-gray-600 text-sm">{description}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </motion.div>

                {/* Payment Methods */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
                    {/* Bank Transfer */}
                    <motion.div
                        className="bg-white p-6 rounded-xl shadow-sm border border-gray-100"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                    >
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center">
                                <Landmark className="w-5 h-5 text-blue-600" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900">Bank Details</h3>
                        </div>

                        <div className="space-y-4">
                            {Object.entries(bankDetails).map(([key, value], index) => (
                                <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg group hover:bg-gray-100 transition-colors">
                                    <div>
                                        <p className="text-sm text-gray-500 capitalize">{key.replace('_', ' ')}</p>
                                        <p className="font-medium text-gray-900">{value}</p>
                                    </div>
                                    <button
                                        onClick={() => copyToClipboard(value, key)}
                                        className="p-2 rounded-lg hover:bg-white transition-colors"
                                    >
                                        {copiedField === key ? (
                                            <CheckCircle className="w-4 h-4 text-green-500" />
                                        ) : (
                                            <Copy className="w-4 h-4 text-gray-400 group-hover:text-gray-600" />
                                        )}
                                    </button>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    {/* UPI Payment */}
                    <motion.div
                        className="bg-white p-6 rounded-xl shadow-sm border border-gray-100"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                    >
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center">
                                <QrCode className="w-5 h-5 text-blue-600" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900">UPI Payment</h3>
                        </div>

                        <div className="text-center">
                            <div className="bg-gray-50 rounded-lg inline-block mb-5">
                                <p className='font-bold text-xl mb-2'>GU Conferences</p>
                                <img src="/upi.png" alt="UPI QR Code" className="w-52 h-52" />
                            </div>
                            <p className="text-sm font-semibold text-gray-600 mb-1">UPI ID:</p>
                            <div className="flex items-center justify-center gap-2 mb-6">
                                <code className="bg-gray-50 px-3 py-1 rounded text-gray-600">{upi}</code>
                                <button
                                    onClick={() => copyToClipboard(upi, 'upi')}
                                    className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
                                >
                                    {copiedField === 'upi' ? (
                                        <CheckCircle className="w-4 h-4 text-green-500" />
                                    ) : (
                                        <Copy className="w-4 h-4 text-gray-600" />
                                    )}
                                </button>
                            </div>
                            <div className="flex items-center justify-center gap-4">
                                <img src="https://upload.wikimedia.org/wikipedia/commons/2/24/Paytm_Logo_%28standalone%29.svg" alt="Paytm" className="h-6" />
                                <img src="https://upload.wikimedia.org/wikipedia/commons/e/e1/UPI-Logo-vector.svg" alt="UPI" className="h-6" />
                                <img src="https://upload.wikimedia.org/wikipedia/commons/f/f2/Google_Pay_Logo.svg" alt="Google Pay" className="h-6" />
                            </div>
                        </div>
                    </motion.div>
                </div>



                {/* Important Notes */}
                <motion.div
                    className="bg-blue-50 p-6 rounded-xl mb-12"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                >
                    <div className="flex items-start gap-3">
                        <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center flex-shrink-0">
                            <Info className="w-5 h-5 text-blue-600" />
                        </div>
                        <div>
                            <h4 className="font-bold text-gray-900 mb-3">Important Notes</h4>
                            <ul className="space-y-2 text-sm text-gray-600">
                                <li className="flex items-start gap-2">
                                    <ArrowRight className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                                    After payment, fill the registration form and upload payment proof
                                </li>
                                <li className="flex items-start gap-2">
                                    <ArrowRight className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                                    Registration confirmation will be sent within 24-48 hours
                                </li>
                                <li className="flex items-start gap-2">
                                    <ArrowRight className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                                    For international transfers, all bank charges to be borne by remitter
                                </li>
                            </ul>
                        </div>
                    </div>
                </motion.div>

                {/* Contact */}
                <motion.div
                    className="text-center"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                >
                    <p className="text-gray-600 mb-4">For registration assistance, contact:</p>
                    <a
                        href="mailto:iccsai@galgotiasuniversity.edu.in"
                        className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700"
                    >
                        <Mail className="w-5 h-5" />
                        iccsai@galgotiasuniversity.edu.in
                    </a>
                </motion.div>
            </div>
        </section>
    );
}
export default Registration;