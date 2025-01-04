import React, { useState } from 'react';
import { Mail, Phone, MapPin, Instagram, Linkedin } from 'lucide-react';

export default function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        try {
            const response = await fetch('https://api.web3forms.com/submit', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    access_key: 'd0615b36-f5f8-42db-a0ec-0e2ffc8e1d20', // Füge hier deinen Web3Forms Access Key ein
                    ...formData,
                }),
            });

            if (response.ok) {
                console.log('Email sent successfully');
                alert('Your message has been sent!');
                setFormData({
                    name: '',
                    email: '',
                    message: '',
                });
            } else {
                console.error('Error sending email:', response.statusText);
                alert('Something went wrong. Please try again later.');
            }
        } catch (error) {
            console.error('Error:', error);
            alert('An error occurred. Please try again later.');
        }
    };

    return (
        <div className="container mx-auto px-6 py-20">
            <div className="max-w-4xl mx-auto">
                <div className="grid md:grid-cols-2 gap-12">
                    {/* Contact Information */}
                    <div>
                        <h1 className="font-display text-4xl text-gold mb-8">
                            Let's Talk About Your Dream Home
                        </h1>
                        <div className="space-y-6 text-offwhite mb-12">
                            <div className="flex items-center space-x-4">
                                <Mail className="h-6 w-6 text-beige" />
                                <span className="font-body">
                                    florence@fmginteriorarchticture.com
                                </span>
                            </div>
                            <div className="flex items-center space-x-4">
                                <Phone className="h-6 w-6 text-beige" />
                                <span className="font-body">(+971) 50 467 8006</span>
                            </div>
                            <div className="flex items-center space-x-4">
                                <MapPin className="h-6 w-6 text-beige" />
                                <span className="font-body">Downtown Dubai, UAE</span>
                            </div>
                        </div>

                        <div className="flex space-x-4">
                            <a
                                href="https://instagram.com/florence_maya_gonot"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-beige hover:text-gold transition-colors"
                            >
                                <Instagram className="h-6 w-6" />
                            </a>
                            <a
                                href="https://linkedin.com/in/florencegonot"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-beige hover:text-gold transition-colors"
                            >
                                <Linkedin className="h-6 w-6" />
                            </a>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="space-y-2">
                            <label htmlFor="name" className="block font-caption text-offwhite">
                                Name
                            </label>
                            <input
                                id="name"
                                name="name"
                                type="text"
                                value={formData.name}
                                onChange={handleChange}
                                className="w-full px-4 py-3 bg-darkgray/20 border border-darkgray text-offwhite focus:border-beige outline-none transition-colors"
                                placeholder="Your Name"
                                required
                            />
                        </div>

                        <div className="space-y-2">
                            <label htmlFor="email" className="block font-caption text-offwhite">
                                Email
                            </label>
                            <input
                                id="email"
                                name="email"
                                type="email"
                                value={formData.email}
                                onChange={handleChange}
                                className="w-full px-4 py-3 bg-darkgray/20 border border-darkgray text-offwhite focus:border-beige outline-none transition-colors"
                                placeholder="Your Email"
                                required
                            />
                        </div>

                        <div className="space-y-2">
                            <label htmlFor="message" className="block font-caption text-offwhite">
                                Message
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                rows={6}
                                value={formData.message}
                                onChange={handleChange}
                                className="w-full px-4 py-3 bg-darkgray/20 border border-darkgray text-offwhite focus:border-beige outline-none transition-colors"
                                placeholder="Your Message"
                                required
                            ></textarea>
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-beige text-primary px-6 py-3 font-caption hover:bg-gold transition-colors"
                        >
                            Send Message
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}
