import React from 'react';
import { ShieldCheck, Heart, Users } from 'lucide-react';

export const About: React.FC = () => {
    return (
        <div className="w-full">
            {/* Header */}
            <div className="bg-brand-navy py-16 px-4">
                <div className="max-w-7xl mx-auto text-center">
                    <h1 className="font-serif text-4xl font-bold text-white mb-4">About ADEL — Trusted Connections, Meaningful Placements</h1>
                    <p className="text-brand-beige text-lg max-w-3xl mx-auto mt-6 leading-relaxed">
                        ADEL Employment Agency is dedicated to helping families rediscover balance and peace of mind through reliable domestic helper and caregiving solutions in Singapore.
                    </p>
                </div>
            </div>

            {/* Introduction */}
            <section className="py-16 bg-white">
                <div className="max-w-4xl mx-auto px-4 text-center">
                    <p className="text-xl text-brand-charcoal leading-relaxed font-medium">
                        Built on strong values and a people-first approach, ADEL focuses on understanding each family’s unique needs and providing carefully matched domestic workers who support daily household responsibilities with professionalism and care.
                    </p>
                </div>
            </section>

            {/* Core Values & Services */}
            <section className="py-16 bg-brand-cream">
                <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6">
                        <div className="flex items-center gap-4 mb-4">
                            <div className="bg-white p-3 rounded-full shadow-sm">
                                <ShieldCheck className="text-brand-navy" size={24} />
                            </div>
                            <h2 className="font-serif text-2xl font-bold text-brand-navy">Experience, Transparency, and Genuine Service</h2>
                        </div>
                        <p className="text-brand-charcoal leading-relaxed">
                            At ADEL, every placement is guided by experience, transparency, and genuine service. From childcare and elderly care to housekeeping and household support, the agency ensures that each domestic worker is carefully selected and prepared to meet specific job requirements.
                        </p>
                        <p className="text-brand-charcoal leading-relaxed italic border-l-4 border-brand-gold pl-4">
                            The goal is simple — to make family life easier, reduce daily stress, and allow clients to focus on what truly matters.
                        </p>
                    </div>

                    <div className="bg-white p-8 rounded-lg shadow-sm">
                        <div className="flex items-center gap-4 mb-4">
                            <div className="bg-brand-cream p-3 rounded-full">
                                <Heart className="text-brand-navy" size={24} />
                            </div>
                            <h3 className="font-serif text-2xl font-bold text-brand-navy">Meaningful Relationships</h3>
                        </div>
                        <p className="text-brand-charcoal leading-relaxed mb-4">
                            Beyond placement services, ADEL believes in creating meaningful relationships between employers and helpers. Through guidance, counselling support, and continuous follow-ups, the agency promotes a positive and respectful environment that benefits both families and domestic workers.
                        </p>
                        <div className="flex items-center gap-4">
                            <div className="bg-brand-cream p-3 rounded-full">
                                <Users className="text-brand-navy" size={24} />
                            </div>
                            <p className="text-brand-charcoal font-medium">
                                This commitment to service quality and trust has made ADEL a reliable partner for households seeking dependable manpower solutions.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Gallery Section */}
            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="font-serif text-3xl font-bold text-brand-navy mb-4">Our Community & Training</h2>
                        <p className="text-brand-charcoal max-w-2xl mx-auto">
                            Glimpses of our rigorous training sessions, community building, and the dedicated individuals who make ADEL special.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {/* Large featured item */}
                        <div className="md:col-span-2 lg:col-span-2 row-span-2 relative group overflow-hidden rounded-xl shadow-md h-96">
                            <img
                                src="/gallery-group-outdoor.png"
                                alt="ADEL Community Group Photo"
                                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                                <p className="text-white font-medium">Building a supportive community</p>
                            </div>
                        </div>

                        {/* Standard items */}
                        <div className="relative group overflow-hidden rounded-xl shadow-md h-64 md:h-96">
                            <img
                                src="/gallery-training-baby.png"
                                alt="Infant Care Training"
                                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                                <p className="text-white font-medium"> specialized Infant Care Training</p>
                            </div>
                        </div>

                        <div className="relative group overflow-hidden rounded-xl shadow-md h-64">
                            <img
                                src="/gallery-training-patient.png"
                                alt="Patient Care Training"
                                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                                <p className="text-white font-medium">Professional Elderly & Patient Care</p>
                            </div>
                        </div>

                        <div className="relative group overflow-hidden rounded-xl shadow-md h-64">
                            <img
                                src="/gallery-cleaning.png"
                                alt="Housekeeping Training"
                                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                                <p className="text-white font-medium">Meticulous Housekeeping Standards</p>
                            </div>
                        </div>

                        <div className="relative group overflow-hidden rounded-xl shadow-md h-64">
                            <img
                                src="/gallery-classroom.png"
                                alt="Classroom Training"
                                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                                <p className="text-white font-medium">Comprehensive Classroom Education</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Closing */}
            <section className="py-20 bg-white">
                <div className="max-w-4xl mx-auto px-4 text-center">
                    <p className="text-xl text-brand-charcoal leading-relaxed font-medium mb-6">
                        ADEL is more than an employment agency — it is a community built to support homes, strengthen relationships, and bring confidence to every hiring journey.
                    </p>
                    <h2 className="font-serif text-3xl md:text-4xl font-bold text-brand-navy italic">“ADEL — Trusted Connections, Meaningful Placements.”</h2>
                </div>
            </section>
        </div>
    );
};