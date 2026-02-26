import React from 'react';
import { ShieldCheck, Heart, Users } from 'lucide-react';

// Gold circle checkmark
const GoldCheck: React.FC = () => (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" className="flex-shrink-0 mt-0.5" aria-hidden="true">
        <circle cx="9" cy="9" r="8.25" stroke="#C9A84C" strokeWidth="1.25" />
        <path d="M5.5 9.5L7.5 11.5L12.5 6.5" stroke="#C9A84C" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);

interface LeaderProps {
    imageSrc: string;
    imageAlt: string;
    name: string;
    title: string;
    regNo: string;
    bio: string;
    quote: string;
    trustHighlights: string[];
}

const LeaderCard: React.FC<LeaderProps> = ({
    imageSrc, imageAlt, name, title, regNo, bio, quote, trustHighlights,
}) => (
    <div className="flex flex-col gap-6 max-w-2xl mx-auto w-full h-full">
        {/* ── Main Profile Card ── */}
        <div className="bg-white rounded-3xl px-8 py-12 lg:px-16 lg:py-14 shadow-[0_2px_24px_rgba(0,0,0,0.06)] flex flex-col items-center text-center w-full flex-grow">

            {/* ── Circle Portrait ── */}
            <div className="mb-8 flex-shrink-0">
                <div
                    className="rounded-full overflow-hidden border-[7px] border-brand-navy shadow-[0_8px_40px_rgba(15,40,85,0.18)]"
                    style={{ width: '200px', height: '200px' }}
                >
                    <img
                        src={imageSrc}
                        alt={imageAlt}
                        className="w-full h-full object-cover object-top"
                    />
                </div>
            </div>

            {/* ── Name ── */}
            <h3 className="font-serif font-bold text-brand-navy tracking-wide"
                style={{ fontSize: 'clamp(24px, 2.2vw, 30px)', lineHeight: 1.2 }}>
                {name}
            </h3>

            {/* ── Gold rule ── */}
            <div className="mt-3 mb-3 w-10 h-[2px] rounded-full bg-[#C9A84C] mx-auto" />

            {/* ── Title + Reg No ── */}
            <div className="flex flex-col gap-1 mb-6">
                <p className="text-[#C9A84C] text-[11px] font-bold tracking-[0.2em] uppercase">
                    {title}
                </p>
                <p className="text-brand-navy text-[13.5px] font-semibold">
                    EA Registration No:&nbsp;
                    <span className="font-bold">{regNo}</span>
                </p>
            </div>

            {/* ── Bio ── */}
            <p className="text-[#2E2E2E] leading-[1.7] mb-6 max-w-lg"
                style={{ fontSize: 'clamp(15px, 1vw, 16.5px)' }}>
                {bio}
            </p>

            {/* ── Trust Highlights ── */}
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-3 mb-7 text-left w-full max-w-sm mx-auto">
                {trustHighlights.map((h, i) => (
                    <li key={i} className="flex items-start gap-2.5">
                        <GoldCheck />
                        <span className="text-[14px] font-medium text-[#2E2E2E] leading-snug">{h}</span>
                    </li>
                ))}
            </ul>

            {/* ── Signature Quote ── */}
            <blockquote className="border-t border-[#e5e5e5] pt-5 mt-1 w-full max-w-sm">
                <p className="italic text-[#999] text-[14px] leading-relaxed">
                    &#8220;{quote}&#8221;
                </p>
            </blockquote>
        </div>

        {/* ── Official Registration Block ── */}
        <div className="bg-[#f2f4f7] border-t-[3px] border-[#C9A84C] rounded-2xl p-6 lg:p-8 text-center w-full shadow-sm">
            <p className="text-[#888] text-[10px] font-bold tracking-[0.22em] uppercase mb-3">
                Official Registration
            </p>
            <p className="text-[#2E2E2E] text-[15px] leading-relaxed mb-4">
                <span className="font-bold text-brand-navy block text-[17px] uppercase tracking-wide mb-1.5">{name}</span>
                is registered as a Key Appointment Holder<br />
                on behalf of <strong>ADEL Employment Agency</strong>.
            </p>
            <p className="text-brand-navy text-[15px] font-medium">
                EA Registration No: <span className="font-bold tracking-wide">{regNo}</span>
            </p>
        </div>
    </div>
);

export const About: React.FC = () => {
    return (
        <div className="w-full">

            {/* ── Page Header ── */}
            <div className="bg-brand-navy py-16 px-4">
                <div className="max-w-7xl mx-auto text-center">
                    <h1 className="font-serif text-4xl font-bold text-white mb-4">
                        About ADEL — Trusted Connections, Meaningful Placements
                    </h1>
                    <p className="text-brand-beige text-lg max-w-3xl mx-auto mt-6 leading-relaxed">
                        ADEL Employment Agency is dedicated to helping families rediscover balance and peace of mind through reliable domestic helper and caregiving solutions in Singapore.
                    </p>
                </div>
            </div>

            {/* ── Introduction ── */}
            <section className="py-16 bg-white">
                <div className="max-w-4xl mx-auto px-4 text-center">
                    <p className="text-[18px] text-[#2E2E2E] leading-[1.7] font-medium">
                        Built on strong values and a people-first approach, ADEL focuses on understanding each family's unique needs and providing carefully matched domestic workers who support daily household responsibilities with professionalism and care.
                    </p>
                </div>
            </section>

            {/* ── Leadership & Trust ── */}
            <section className="py-20 bg-[#f8f7f4] border-t border-brand-cream">
                <div className="max-w-6xl mx-auto px-4 lg:px-8">

                    {/* Section Label */}
                    <div className="text-center mb-14">
                        <p className="text-[#C9A84C] text-[11px] font-bold tracking-[0.22em] uppercase mb-2">
                            Meet the Team
                        </p>
                        <h2 className="font-serif text-[36px] font-bold text-brand-navy mb-3">
                            Leadership &amp; Trust
                        </h2>
                        <p className="text-[#555] max-w-md mx-auto text-[15px] leading-relaxed">
                            Dedicated professionals behind ADEL — bringing decades of experience, integrity, and genuine care to every placement.
                        </p>
                        <div className="mt-5 flex items-center justify-center gap-2">
                            <div className="w-10 h-px bg-[#C9A84C]/40" />
                            <div className="w-1.5 h-1.5 rounded-full bg-[#C9A84C]/60" />
                            <div className="w-10 h-px bg-[#C9A84C]/40" />
                        </div>
                    </div>

                    {/* Two-column card grid on desktop, stacked on mobile */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
                        <LeaderCard
                            imageSrc="/founder-1.png"
                            imageAlt="Nilfer Begum — Key Appointment Holder, ADEL Employment Agency"
                            name="Nilfer Begum"
                            title="Key Appointment Holder"
                            regNo="R23115892"
                            bio="A certified social worker with a Bachelor of Social Work and extensive experience supporting families, young children, the elderly, and those with special needs. At ADEL, she ensures every placement reflects genuine professionalism, ethical standards, and compassionate care."
                            quote="Every home deserves dependable and compassionate support."
                            trustHighlights={[
                                'Singapore Licensed Agency',
                                'Ethical Recruitment',
                                'Structured Screening',
                                'Family-Focused Matching',
                            ]}
                        />
                        <LeaderCard
                            imageSrc="/founder-2.png?v=2"
                            imageAlt="Roshan Khan — Key Appointment Holder, ADEL Employment Agency"
                            name="Roshan Khan"
                            title="Key Appointment Holder"
                            regNo="R26160321"
                            bio="A seasoned civil servant with over 15 years of public service experience, Diplomas in Security & Fire Safety Studies and Legal Executive Studies, and a background as a Senior Combat Medic. He brings structured discipline and a service-first mindset to every engagement."
                            quote="Safety, structure, and trust — the foundation of every great placement."
                            trustHighlights={[
                                'Operational Discipline',
                                'Safety-First Approach',
                                'Transparent Process',
                                'Reliable Aftercare Support',
                            ]}
                        />
                    </div>
                </div>
            </section>

            {/* ── Core Values ── */}
            <section className="py-16 bg-brand-cream">
                <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6">
                        <div className="flex items-center gap-4 mb-4">
                            <div className="bg-white p-3 rounded-full shadow-sm">
                                <ShieldCheck className="text-brand-navy" size={24} />
                            </div>
                            <h2 className="font-serif text-2xl font-bold text-brand-navy">
                                Experience, Transparency, and Genuine Service
                            </h2>
                        </div>
                        <p className="text-[#2E2E2E] leading-[1.7] text-[16px]">
                            At ADEL, every placement is guided by experience, transparency, and genuine service. From childcare and elderly care to housekeeping and household support, the agency ensures that each domestic worker is carefully selected and prepared to meet specific job requirements.
                        </p>
                        <p className="text-[#2E2E2E] leading-[1.7] text-[16px] italic border-l-4 border-brand-gold pl-4">
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
                        <p className="text-[#2E2E2E] leading-[1.7] text-[16px] mb-4">
                            Beyond placement services, ADEL believes in creating meaningful relationships between employers and helpers. Through guidance, counselling support, and continuous follow-ups, the agency promotes a positive and respectful environment that benefits both families and domestic workers.
                        </p>
                        <div className="flex items-center gap-4">
                            <div className="bg-brand-cream p-3 rounded-full">
                                <Users className="text-brand-navy" size={24} />
                            </div>
                            <p className="text-[#2E2E2E] text-[15px] font-medium leading-snug">
                                This commitment to service quality and trust has made ADEL a reliable partner for households seeking dependable manpower solutions.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── Gallery ── */}
            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="font-serif text-3xl font-bold text-brand-navy mb-4">Our Community &amp; Training</h2>
                        <p className="text-[#555] max-w-2xl mx-auto text-[15px] leading-relaxed">
                            Glimpses of our rigorous training sessions, community building, and the dedicated individuals who make ADEL special.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        <div className="md:col-span-2 lg:col-span-2 row-span-2 relative group overflow-hidden rounded-xl shadow-md h-96">
                            <img src="/gallery-group-outdoor.png" alt="ADEL Community Group Photo"
                                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                                <p className="text-white font-medium">Building a supportive community</p>
                            </div>
                        </div>
                        <div className="relative group overflow-hidden rounded-xl shadow-md h-64 md:h-96">
                            <img src="/gallery-training-baby.png" alt="Infant Care Training"
                                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                                <p className="text-white font-medium">Specialized Infant Care Training</p>
                            </div>
                        </div>
                        <div className="relative group overflow-hidden rounded-xl shadow-md h-64">
                            <img src="/gallery-training-patient.png" alt="Patient Care Training"
                                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                                <p className="text-white font-medium">Professional Elderly &amp; Patient Care</p>
                            </div>
                        </div>
                        <div className="relative group overflow-hidden rounded-xl shadow-md h-64">
                            <img src="/gallery-cleaning.png" alt="Housekeeping Training"
                                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                                <p className="text-white font-medium">Meticulous Housekeeping Standards</p>
                            </div>
                        </div>
                        <div className="relative group overflow-hidden rounded-xl shadow-md h-64">
                            <img src="/gallery-classroom.png" alt="Classroom Training"
                                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                                <p className="text-white font-medium">Comprehensive Classroom Education</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── Closing ── */}
            <section className="py-20 bg-white">
                <div className="max-w-4xl mx-auto px-4 text-center">
                    <p className="text-[18px] text-[#2E2E2E] leading-[1.7] font-medium mb-6">
                        ADEL is more than an employment agency — it is a community built to support homes, strengthen relationships, and bring confidence to every hiring journey.
                    </p>
                    <h2 className="font-serif text-3xl md:text-4xl font-bold text-brand-navy italic">
                        &#8220;ADEL — Trusted Connections, Meaningful Placements.&#8221;
                    </h2>
                </div>
            </section>
        </div>
    );
};