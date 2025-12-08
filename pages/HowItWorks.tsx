import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/Button';

export const HowItWorks: React.FC = () => {
    const steps = [
        { title: "First Conversation", desc: "Contact us with your needs. We listen and recommend the best service option." },
        { title: "Service Starts", desc: "You choose your package (Fresh, Ex-Singapore, etc.). We begin matching." },
        { title: "Meet Your Candidate", desc: "Video interviews with potential helpers. Ask questions and find the right fit." },
        { title: "Paperwork & Prep", desc: "We handle all MOM applications, contracts, and medical checks." },
        { title: "Travel & Training", desc: "Helper arrives in Singapore, completes SIP, and receives orientation." },
        { title: "Welcome Home", desc: "Helper joins your family. We help with the settling-in period." },
        { title: "Ongoing Support", desc: "Regular check-ins and support whenever you need it." },
    ];

    return (
        <div className="w-full bg-white">
            <div className="bg-brand-navy py-16 px-4">
                <div className="max-w-7xl mx-auto text-center">
                    <h1 className="font-serif text-4xl font-bold text-white mb-4">Your Journey: From Searching to Welcoming</h1>
                </div>
            </div>

            <div className="max-w-4xl mx-auto px-4 py-20">
                <div className="relative border-l-4 border-brand-gold ml-4 md:ml-0 space-y-12">
                    {steps.map((step, index) => (
                        <div key={index} className="relative pl-8 md:pl-12">
                            {/* Dot */}
                            <div className="absolute -left-[9px] top-0 w-5 h-5 rounded-full bg-brand-gold border-4 border-white"></div>

                            <div className="bg-brand-cream p-6 rounded-lg shadow-sm">
                                {/* <span className="text-xs font-bold text-brand-gold uppercase tracking-wider mb-1 block">{step.week}</span> */}
                                <h3 className="text-xl font-bold text-brand-navy mb-2">{step.title}</h3>
                                <p className="text-brand-charcoal">{step.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="text-center mt-16">
                    <Link to="/contact">
                        <Button variant="primary" className="text-lg px-10">Start Your Journey Today</Button>
                    </Link>
                </div>
            </div>
        </div>
    );
};