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
                                <h4 className="font-bold text-brand-navy">Call Us</h4>
                                <p className="text-brand-charcoal">+65 1234 5678</p>
                                <p className="text-xs text-brand-gray">Mon-Sat: 10am - 7pm</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-4">
                            <div className="bg-white p-3 rounded-full shadow-sm text-brand-gold"><MessageCircle size={24} /></div>
                            <div>
                                <h4 className="font-bold text-brand-navy">WhatsApp</h4>
                                <p className="text-brand-charcoal">Fastest way to connect</p>
                                <a href="https://wa.me/6512345678" className="text-brand-navy underline text-sm hover:text-brand-gold">Chat now</a>
                            </div>
                        </div>
                        <div className="flex items-start gap-4">
                            <div className="bg-white p-3 rounded-full shadow-sm text-brand-gold"><Mail size={24} /></div>
                            <div>
                                <h4 className="font-bold text-brand-navy">Email</h4>
                                <p className="text-brand-charcoal">hello@cleanrk.com.sg</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-4">
                            <div className="bg-white p-3 rounded-full shadow-sm text-brand-gold"><MapPin size={24} /></div>
                            <div>
                                <h4 className="font-bold text-brand-navy">Visit Us</h4>
                                <p className="text-brand-charcoal">123 Orchard Road, #05-01<br/>Singapore 238888</p>
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
                    <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                        <h3 className="font-bold text-xl text-brand-navy mb-2">Tell Us About Your Family</h3>
                        <div>
                            <label className="block text-sm font-bold text-brand-charcoal mb-1">Your Name</label>
                            <input type="text" className="w-full border border-gray-300 rounded p-3 focus:outline-none focus:border-brand-navy" placeholder="John Doe" />
                        </div>
                        <div>
                            <label className="block text-sm font-bold text-brand-charcoal mb-1">Contact Number</label>
                            <input type="tel" className="w-full border border-gray-300 rounded p-3 focus:outline-none focus:border-brand-navy" placeholder="+65" />
                        </div>
                        <div>
                            <label className="block text-sm font-bold text-brand-charcoal mb-1">Services Interested In</label>
                            <select className="w-full border border-gray-300 rounded p-3 focus:outline-none focus:border-brand-navy">
                                <option>Fresh Maid</option>
                                <option>Ex-Singapore</option>
                                <option>Transfer Maid</option>
                                <option>Direct Hire</option>
                                <option>Renewal</option>
                                <option>Unsure / Consultation</option>
                            </select>
                        </div>
                        <div>
                            <label className="block text-sm font-bold text-brand-charcoal mb-1">Message</label>
                            <textarea className="w-full border border-gray-300 rounded p-3 focus:outline-none focus:border-brand-navy h-32" placeholder="Tell us about your requirements..."></textarea>
                        </div>
                        <Button fullWidth type="submit">Send My Inquiry</Button>
                        <p className="text-xs text-center text-brand-gray mt-2">We'll get back to you within 24 hours.</p>
                    </form>
                ) : (
                    <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                        <h3 className="font-bold text-xl text-brand-navy mb-2">Start Your Singapore Journey</h3>
                        <div>
                            <label className="block text-sm font-bold text-brand-charcoal mb-1">Full Name</label>
                            <input type="text" className="w-full border border-gray-300 rounded p-3 focus:outline-none focus:border-brand-navy" placeholder="Your Name" />
                        </div>
                        <div>
                            <label className="block text-sm font-bold text-brand-charcoal mb-1">WhatsApp Number</label>
                            <input type="tel" className="w-full border border-gray-300 rounded p-3 focus:outline-none focus:border-brand-navy" placeholder="+62" />
                        </div>
                        <div>
                            <label className="block text-sm font-bold text-brand-charcoal mb-1">Have you worked as a helper before?</label>
                            <div className="flex gap-4 mt-2">
                                <label className="flex items-center gap-2">
                                    <input type="radio" name="experience" value="yes" /> Yes
                                </label>
                                <label className="flex items-center gap-2">
                                    <input type="radio" name="experience" value="no" /> No
                                </label>
                            </div>
                        </div>
                        <div>
                            <label className="block text-sm font-bold text-brand-charcoal mb-1">About Yourself</label>
                            <textarea className="w-full border border-gray-300 rounded p-3 focus:outline-none focus:border-brand-navy h-32" placeholder="Tell us a bit about your experience and skills..."></textarea>
                        </div>
                        <Button fullWidth variant="secondary" type="submit">Register With Us</Button>
                        <p className="text-xs text-center text-brand-gray mt-2">No agency fees for helpers.</p>
                    </form>
                )}
            </div>
        </div>
    </div>
  );
};