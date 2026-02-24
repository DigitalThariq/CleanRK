import React from 'react';
import { ShieldCheck, Heart, Users, Check } from 'lucide-react';

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

            {/* Founder Profile Section */}
            <section className="py-20 bg-white border-t border-brand-cream">
                <div className="max-w-7xl mx-auto px-4">
                    {/* First Founder */}
                    <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20 mb-20">
                        {/* Founder Photo - Left */}
                        <div className="w-full lg:w-5/12 max-w-sm lg:max-w-none mx-auto">
                            <div className="relative mt-8 lg:mt-0">
                                {/* Blue frame behind image to match reference */}
                                <div className="absolute inset-0 border-[3px] border-[#1e78b7] rounded-xl transform translate-x-4 translate-y-4 bg-gradient-to-br from-transparent to-blue-50/50"></div>
                                <img
                                    src="/founder-1.png"
                                    alt="Nilfer Begum"
                                    className="relative z-10 w-full aspect-[4/5] object-cover object-top rounded-xl shadow-lg border-4 border-white"
                                />

                                {/* Floating Card 1: Name Badge */}
                                <div className="absolute top-1/4 -translate-y-1/2 -left-4 lg:-left-12 z-20 bg-white px-5 py-3 rounded-xl shadow-xl border border-brand-cream flex items-center gap-3">
                                    <div className="bg-[#1e78b7] rounded-full p-1 text-white">
                                        <Check size={16} strokeWidth={4} />
                                    </div>
                                    <div>
                                        <p className="font-bold text-brand-navy text-sm">Nilfer Begum</p>
                                        <p className="text-xs text-brand-charcoal/70">Founder & CEO</p>
                                    </div>
                                </div>

                                {/* Floating Card 2: Experience Bars */}
                                <div className="absolute bottom-8 -right-4 lg:-right-8 z-20 bg-white p-5 rounded-xl shadow-xl border border-brand-cream hidden sm:block w-72">
                                    <p className="font-bold text-brand-charcoal text-sm mb-4">Social Work Experience</p>
                                    <div className="space-y-3">
                                        <div className="flex items-center gap-3">
                                            <span className="text-xs font-medium text-brand-charcoal w-24">Young Children</span>
                                            <div className="h-2.5 w-full bg-blue-100 rounded-full overflow-hidden">
                                                <div className="h-full bg-[#1e78b7] w-[90%] rounded-full"></div>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-3">
                                            <span className="text-xs font-medium text-brand-charcoal w-24">Elderly</span>
                                            <div className="h-2.5 w-full bg-blue-100 rounded-full overflow-hidden">
                                                <div className="h-full bg-[#1e78b7] w-[95%] rounded-full"></div>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-3">
                                            <span className="text-xs font-medium text-brand-charcoal w-24">Special Needs</span>
                                            <div className="h-2.5 w-full bg-blue-100 rounded-full overflow-hidden">
                                                <div className="h-full bg-[#1e78b7] w-[85%] rounded-full"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Text - Right */}
                        <div className="w-full lg:w-7/12">
                            <p className="text-[#1e78b7] font-bold tracking-[0.15em] text-sm uppercase mb-3">
                                Meet the Founder
                            </p>
                            <h2 className="font-serif text-4xl lg:text-5xl font-bold text-brand-navy mb-8">
                                Nilfer Begum
                            </h2>

                            <div className="space-y-6 text-brand-charcoal leading-relaxed mb-8 text-lg">
                                <p>
                                    A certified social worker with a Bachelor of Social Work. Her extensive experience working with families with young children, the elderly, and those with special needs informs her deep understanding of the challenges such families face.
                                </p>
                                <p>
                                    With ADEL Employment, Nilfer has created a service that not only supports household chores but significantly improves family dynamics.
                                </p>
                            </div>

                            <ul className="space-y-3">
                                <li className="flex items-center gap-3">
                                    <div className="bg-brand-navy p-1 rounded-full text-white flex-shrink-0">
                                        <Check size={16} strokeWidth={3} />
                                    </div>
                                    <span className="text-brand-navy font-medium">Singapore Licensed Agency</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <div className="bg-brand-navy p-1 rounded-full text-white flex-shrink-0">
                                        <Check size={16} strokeWidth={3} />
                                    </div>
                                    <span className="text-brand-navy font-medium">Ethical Recruitment</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <div className="bg-brand-navy p-1 rounded-full text-white flex-shrink-0">
                                        <Check size={16} strokeWidth={3} />
                                    </div>
                                    <span className="text-brand-navy font-medium">Client-Focused Service</span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Co-Founder Profile Section */}
                    <div className="flex flex-col lg:flex-row-reverse items-center gap-12 lg:gap-20 mt-28 pt-20 border-t border-brand-cream/50">
                        {/* Co-Founder Photo - Right */}
                        <div className="w-full lg:w-5/12 max-w-sm lg:max-w-none mx-auto">
                            <div className="relative mt-8 lg:mt-0">
                                {/* Blue frame behind image to match design */}
                                <div className="absolute inset-0 border-[3px] border-[#1e78b7] rounded-xl transform -translate-x-4 translate-y-4 bg-gradient-to-bl from-transparent to-blue-50/50"></div>
                                <img
                                    src="/founder-2.png?v=2"
                                    alt="Roshan"
                                    className="relative z-10 w-full aspect-[4/5] object-cover object-top rounded-xl shadow-lg border-4 border-white"
                                />

                                {/* Floating Card 1: Name Badge */}
                                <div className="absolute top-1/4 -translate-y-1/2 -right-4 lg:-right-12 z-20 bg-white px-5 py-3 rounded-xl shadow-xl border border-brand-cream flex items-center gap-3">
                                    <div className="bg-[#1e78b7] rounded-full p-1 text-white">
                                        <Check size={16} strokeWidth={4} />
                                    </div>
                                    <div>
                                        <p className="font-bold text-brand-navy text-sm">Roshan</p>
                                        <p className="text-xs text-brand-charcoal/70">Co-Founder</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Text - Left */}
                        <div className="w-full lg:w-7/12">
                            <p className="text-[#1e78b7] font-bold tracking-[0.15em] text-sm uppercase mb-3">
                                Meet the Co-Founder
                            </p>
                            <h2 className="font-serif text-4xl lg:text-5xl font-bold text-brand-navy mb-8">
                                Roshan
                            </h2>

                            <div className="space-y-6 text-brand-charcoal leading-relaxed cursor-default text-lg">
                                <p>
                                    A public service professional with over 15 years of experience in the civil service, supported by Diplomas in Security & Fire Safety Studies and Legal Executive Studies. Former Combat Medic and Senior Medic trained in SAF medical institutions.
                                </p>
                                <p>
                                    Throughout my career, I have been guided by a simple principle: service above self. My journey began in the SAF Medical Training Institute, where serving as a Senior Combat Medic taught me the value of composure and precision under pressure. These lessons followed me into a 15-year career as a civil servant, where I was honored to receive commendations for efficiency and excellence.
                                </p>
                                <p>
                                    Bridging my public service experience with ADEL Employment Agency, I apply this same operational discipline to ensure that families receive reliable, well-trained domestic helpers. It isn't just about placements—it's about ensuring every family receives the order, safety, and dedicated support they truly deserve.
                                </p>
                            </div>
                        </div>
                    </div>
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