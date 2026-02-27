import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Button } from '../components/Button';
import { Phone, Mail, MapPin, MessageCircle } from 'lucide-react';

export const Contact: React.FC = () => {
    const location = useLocation();
    const [activeTab, setActiveTab] = useState<'family' | 'helper'>('family');

    useEffect(() => {
        const params = new URLSearchParams(location.search);
        if (params.get('type') === 'helper') {
            setActiveTab('helper');
        }
    }, [location]);

    const handleFamilySubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const name = formData.get('name');
        const phone = formData.get('phone');
        const service = formData.get('service_interested');
        const message = formData.get('message');

        const text = `*New Family Inquiry*\n\n*Name:* ${name}\n*Contact:* ${phone}\n*Interested In:* ${service}\n\n*Message:*\n${message}`;
        window.open(`https://wa.me/6589123455?text=${encodeURIComponent(text)}`, '_blank');
    };

    const handleHelperSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const name = formData.get('name');
        const whatsapp = formData.get('whatsapp_number');
        const experience = formData.get('has_experience');
        const message = formData.get('message');

        const text = `*New Helper Registration*\n\n*Name:* ${name}\n*WhatsApp:* ${whatsapp}\n*Experience:* ${experience === 'yes' ? 'Yes' : 'No'}\n\n*About Me:*\n${message}`;
        window.open(`https://wa.me/6589123455?text=${encodeURIComponent(text)}`, '_blank');
    };

    return (
        <div className="w-full bg-brand-cream">
            <div className="bg-brand-navy py-16 px-4">
                <div className="max-w-7xl mx-auto text-center">
                    <h1 className="font-serif text-4xl font-bold text-white mb-4">Let's Get Started</h1>
                    <p className="text-brand-beige">Reach out today. We're here to help.</p>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 py-16 grid md:grid-cols-2 gap-12">
                {/* Contact Info */}
                <div className="space-y-8">
                    <div>
                        <h2 className="font-serif text-2xl font-bold text-brand-navy mb-6">Get in Touch</h2>
                        <p className="text-brand-charcoal mb-8">
                            Whether you are a family looking for help or a helper looking for work, our door is always open.
                        </p>

                        <div className="space-y-6">
                            <div className="flex items-start gap-4">
                                <div className="bg-white p-3 rounded-full shadow-sm text-brand-gold"><Phone size={24} /></div>
                                <div>
                                    <p className="font-semibold text-brand-navy">Phone</p>
                                    <p className="text-brand-charcoal">+65 8912 3455</p>
                                    <p className="text-xs text-brand-gray">Mon-Sat: 10am - 7pm</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <div className="bg-white p-3 rounded-full shadow-sm text-brand-gold"><MessageCircle size={24} /></div>
                                <div>
                                    <p className="font-semibold text-brand-navy">WhatsApp</p>
                                    <a href="https://wa.me/6589123455" className="text-brand-navy underline text-sm hover:text-brand-gold">Chat now</a>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <div className="bg-white p-3 rounded-full shadow-sm text-brand-gold"><Mail size={24} /></div>
                                <div>
                                    <h4 className="font-bold text-brand-navy">Email</h4>
                                    <p className="text-brand-charcoal">Adel.employment.agency@gmail.com</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <div className="bg-white p-3 rounded-full shadow-sm text-brand-gold"><MapPin size={24} /></div>
                                <div>
                                    <h4 className="font-bold text-brand-navy">Visit Us</h4>
                                    <p className="text-brand-charcoal">30 Lor Tanggam<br />Singapore 798730</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Form Section */}
                <div className="bg-white rounded-xl shadow-md p-8">
                    <div className="flex mb-8 border-b border-brand-beige">
                        <button
                            className={`flex-1 py-4 text-center font-bold text-lg transition-colors ${activeTab === 'family' ? 'text-brand-navy border-b-2 border-brand-navy' : 'text-brand-gray hover:text-brand-navy'}`}
                            onClick={() => setActiveTab('family')}
                        >
                            For Families
                        </button>
                        <button
                            className={`flex-1 py-4 text-center font-bold text-lg transition-colors ${activeTab === 'helper' ? 'text-brand-navy border-b-2 border-brand-navy' : 'text-brand-gray hover:text-brand-navy'}`}
                            onClick={() => setActiveTab('helper')}
                        >
                            For Helpers
                        </button>
                    </div>

                    {activeTab === 'family' ? (
                        <form className="space-y-4" onSubmit={handleFamilySubmit}>
                            <h3 className="font-bold text-xl text-brand-navy mb-2">Tell Us About Your Family</h3>
                            <div>
                                <label className="block text-sm font-bold text-brand-charcoal mb-1">Your Name</label>
                                <input type="text" name="name" required className="w-full border border-gray-300 rounded p-3 focus:outline-none focus:border-brand-navy" placeholder="John Doe" />
                            </div>
                            <div>
                                <label className="block text-sm font-bold text-brand-charcoal mb-1">Contact Number</label>
                                <input type="tel" name="phone" required className="w-full border border-gray-300 rounded p-3 focus:outline-none focus:border-brand-navy" placeholder="+65" />
                            </div>
                            <div>
                                <label className="block text-sm font-bold text-brand-charcoal mb-1">Services Interested In</label>
                                <select name="service_interested" className="w-full border border-gray-300 rounded p-3 focus:outline-none focus:border-brand-navy">
                                    <option value="Fresh Maid">Fresh Maid</option>
                                    <option value="Ex-Singapore">Ex-Singapore</option>
                                    <option value="Transfer Maid">Transfer Maid</option>
                                    <option value="Direct Hire">Direct Hire</option>
                                    <option value="Renewal">Renewal</option>
                                    <option value="Unsure / Consultation">Unsure / Consultation</option>
                                </select>
                            </div>
                            <div>
                                <label className="block text-sm font-bold text-brand-charcoal mb-1">Message</label>
                                <textarea name="message" required className="w-full border border-gray-300 rounded p-3 focus:outline-none focus:border-brand-navy h-32" placeholder="Tell us about your requirements..."></textarea>
                            </div>
                            <Button fullWidth type="submit">Send My Inquiry</Button>
                            <p className="text-xs text-center text-brand-gray mt-2">We'll get back to you within 24 hours.</p>
                        </form>
                    ) : (
                        <form className="space-y-4" onSubmit={handleHelperSubmit}>
                            <h3 className="font-bold text-xl text-brand-navy mb-2">Start Your Singapore Journey <span className="block text-sm font-normal text-brand-charcoal mt-1">(Mulai Perjalanan Anda di Singapura)</span></h3>
                            <div>
                                <label className="block text-sm font-bold text-brand-charcoal mb-1">Full Name <span className="font-normal text-brand-gray ml-1">(Nama Lengkap)</span></label>
                                <input type="text" name="name" required className="w-full border border-gray-300 rounded p-3 focus:outline-none focus:border-brand-navy" placeholder="Your Name / Nama Anda" />
                            </div>
                            <div>
                                <label className="block text-sm font-bold text-brand-charcoal mb-1">WhatsApp Number <span className="font-normal text-brand-gray ml-1">(Nomor WhatsApp)</span></label>
                                <input type="tel" name="whatsapp_number" required className="w-full border border-gray-300 rounded p-3 focus:outline-none focus:border-brand-navy" placeholder="+62" />
                            </div>
                            <div>
                                <label className="block text-sm font-bold text-brand-charcoal mb-1">Have you worked as a helper before? <span className="block font-normal text-brand-gray mt-1">(Apakah anda punya pengalaman kerja?)</span></label>
                                <div className="flex gap-4 mt-2">
                                    <label className="flex items-center gap-2">
                                        <input type="radio" name="has_experience" value="yes" required /> Yes (Ya)
                                    </label>
                                    <label className="flex items-center gap-2">
                                        <input type="radio" name="has_experience" value="no" required /> No (Tidak)
                                    </label>
                                </div>
                            </div>
                            <div>
                                <label className="block text-sm font-bold text-brand-charcoal mb-1">About Yourself <span className="font-normal text-brand-gray ml-1">(Tentang Diri Anda)</span></label>
                                <textarea name="message" required className="w-full border border-gray-300 rounded p-3 focus:outline-none focus:border-brand-navy h-32" placeholder="Tell us a bit about your experience and skills... (Ceritakan pengalaman dan keahlian anda...)"></textarea>
                            </div>
                            <Button fullWidth variant="secondary" type="submit">Register With Us (Daftar Sekarang)</Button>
                            <p className="text-xs text-center text-brand-gray mt-2">No agency fees for helpers (Tanpa biaya agen).</p>
                        </form>
                    )}
                </div>
            </div>
        </div>
    );
};