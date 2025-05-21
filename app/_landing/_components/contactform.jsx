"use client";
import { useState, useRef, useEffect } from 'react';
import emailjs from '@emailjs/browser';

export default function ContactForm() {
    const formRef = useRef();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState(false);
    // We'll keep the isMounted state for hydration safety
    const [isMounted, setIsMounted] = useState(false);

    // Fix hydration error by ensuring component is mounted before rendering
    useEffect(() => {
        setIsMounted(true);
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);
        setSuccess(false);
        setError(false);

        // Replace these with your actual EmailJS credentials
        const serviceId = process.env.NEXT_PUBLIC_SERVICE_ID;
        const templateId = process.env.NEXT_PUBLIC_TEMPLATE_ID;
        const publicKey = process.env.NEXT_PUBLIC_PUBLIC_KEY;

        // Initialize EmailJS with your public key first
        emailjs.init(publicKey);

        // Then use emailjs.sendForm for form submissions
        emailjs.sendForm(serviceId, templateId, formRef.current)
            .then((result) => {
                console.log("Email Sent: ", result);
                setSuccess(true);
                setFormData({ name: '', email: '', message: '' });
            })
            .catch((error) => {
                console.error('Email sending failed:', error);
                setError(true);
            })
            .finally(() => {
                setLoading(false);
            });
    };

    // Improved loading state with consistent dimensions to prevent layout shift
    if (!isMounted) {
        return (
            <div className="w-full max-w-2xl mx-auto">
                <div className="animate-pulse bg-[#111111] rounded-lg shadow-xl p-8 border border-gray-800 w-full" style={{ minHeight: "520px" }}>
                    <div className="h-8 bg-gray-800 rounded w-1/3 mb-12"></div>
                    <div className="h-10 bg-gray-800 rounded mb-6"></div>
                    <div className="h-10 bg-gray-800 rounded mb-6"></div>
                    <div className="h-32 bg-gray-800 rounded mb-8"></div>
                    <div className="h-12 bg-gray-800 rounded"></div>
                </div>
            </div>
        );
    }



    return (
        <div className="w-full max-w-2xl mx-auto">
            <div className="text-center mb-12">
                <h2 className="text-4xl font-bold mb-4 text-white">Contact <span className="text-[#F9004D]">Me</span></h2>
                <p className="text-gray-400 text-lg">Feel free to reach out if you have any questions or opportunities!</p>
            </div>

            <form
                ref={formRef}
                onSubmit={handleSubmit}
                className="bg-[#111111] rounded-lg shadow-xl p-8 border border-gray-800 backdrop-blur-sm"
            >
                {/* Rest of the form remains unchanged */}
                <div className="mb-6">
                    <label htmlFor="name" className="block text-gray-300 text-sm font-medium mb-2">
                        Name
                    </label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full bg-[#0D0D0D] text-white px-4 py-3 rounded-md border border-gray-700 focus:outline-none focus:ring-2 focus:ring-[#F9004D] focus:border-transparent transition-all duration-300"
                        placeholder="Your name"
                    />
                </div>

                <div className="mb-6">
                    <label htmlFor="email" className="block text-gray-300 text-sm font-medium mb-2">
                        Email
                    </label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full bg-[#0D0D0D] text-white px-4 py-3 rounded-md border border-gray-700 focus:outline-none focus:ring-2 focus:ring-[#F9004D] focus:border-transparent transition-all duration-300"
                        placeholder="your.email@example.com"
                    />
                </div>

                <div className="mb-8">
                    <label htmlFor="message" className="block text-gray-300 text-sm font-medium mb-2">
                        Message
                    </label>
                    <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows="6"
                        className="w-full bg-[#0D0D0D] text-white px-4 py-3 rounded-md border border-gray-700 focus:outline-none focus:ring-2 focus:ring-[#F9004D] focus:border-transparent transition-all duration-300 resize-none"
                        placeholder="Your message here..."
                    />
                </div>

                <div className="flex flex-col space-y-4">
                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full bg-[#F9004D] hover:bg-[#d0003f] text-white font-medium py-3 px-6 rounded-md transition-all duration-300 transform hover:translate-y-[-2px] hover:shadow-lg disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none"
                    >
                        {loading ? (
                            <span className="flex items-center justify-center">
                                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                </svg>
                                Sending...
                            </span>
                        ) : "Send Message"}
                    </button>

                    {success && (
                        <div className="bg-green-900/50 border border-green-800 text-green-300 px-4 py-3 rounded-md text-center">
                            Thank you! Your message has been sent successfully.
                        </div>
                    )}

                    {error && (
                        <div className="bg-red-900/50 border border-red-800 text-red-300 px-4 py-3 rounded-md text-center">
                            Oops! Something went wrong. Please try again later.
                        </div>
                    )}
                </div>
            </form>
        </div>
    );
}