import React from 'react';
import { ShieldCheck, Heart, FileText, Lightbulb, Users } from 'lucide-react';

export const About: React.FC = () => {
    return (
        <div className="w-full">
            {/* Header */}
            <div className="bg-brand-navy py-16 px-4">
                <div className="max-w-7xl mx-auto text-center">
                    <h1 className="font-serif text-4xl font-bold text-white mb-4">About I.RK — Intelligence, Integrity, Inspiration</h1>
                    <p className="text-brand-beige text-lg max-w-3xl mx-auto mt-6 leading-relaxed">
                        Founded by R.K. (Roshan Khan), I.RK is built on values that guide every placement, every connection, and every interaction.
                    </p>
                </div>
            </div>

            {/* Narrative */}
            <section className="py-16 bg-white">
                <div className="max-w-4xl mx-auto px-4 text-center">
                    <p className="text-xl text-brand-charcoal leading-relaxed font-medium">
                        At I.RK, we believe the right match changes everything. From domestic helpers and caregivers to corporate talent and international manpower, our mission is to deliver intelligent hiring solutions you can trust.
                    </p>
                </div>
            </section>

            {/* Core Values */}
            <section className="py-16 bg-brand-cream">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="font-serif text-3xl font-bold text-brand-navy mb-4">Our Core Values</h2>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="bg-white p-8 rounded-lg shadow-sm flex flex-col items-center text-center hover:shadow-md transition-shadow">
                            <div className="bg-brand-cream p-4 rounded-full mb-6">
                                <Lightbulb className="text-brand-navy" size={32} />
                            </div>
                            <h3 className="font-serif text-2xl font-bold text-brand-navy mb-3">Intelligence</h3>
                            <p className="text-brand-charcoal leading-relaxed">Smart solutions, thoughtful matching, and expert guidance.</p>
                        </div>
                        <div className="bg-white p-8 rounded-lg shadow-sm flex flex-col items-center text-center hover:shadow-md transition-shadow">
                            <div className="bg-brand-cream p-4 rounded-full mb-6">
                                <ShieldCheck className="text-brand-navy" size={32} />
                            </div>
                            <h3 className="font-serif text-2xl font-bold text-brand-navy mb-3">Integrity</h3>
                            <p className="text-brand-charcoal leading-relaxed">Every placement handled with honesty, transparency, and respect.</p>
                        </div>
                        <div className="bg-white p-8 rounded-lg shadow-sm flex flex-col items-center text-center hover:shadow-md transition-shadow">
                            <div className="bg-brand-cream p-4 rounded-full mb-6">
                                <Users className="text-brand-navy" size={32} />
                            </div>
                            <h3 className="font-serif text-2xl font-bold text-brand-navy mb-3">Inspiration</h3>
                            <p className="text-brand-charcoal leading-relaxed">Empowering families and workers, creating meaningful opportunities.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Closing */}
            <section className="py-20 bg-white">
                <div className="max-w-4xl mx-auto px-4 text-center">
                    <h2 className="font-serif text-3xl md:text-4xl font-bold text-brand-navy italic">“I.RK — Where Integrity Meets Care.”</h2>
                </div>
            </section>
        </div>
    );
};