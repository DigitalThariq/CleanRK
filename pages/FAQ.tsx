import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { FAQItem } from '../types';

const faqData: FAQItem[] = [
    { category: "Service & Pricing", question: "What does 'all-in-one pricing' actually mean?", answer: "It means no surprises. The price you see includes everything: recruitment, airfare, medical checks, work permit, insurance, training, and our service fees. No hidden costs." },
    { category: "Service & Pricing", question: "What's the difference between Fresh Maid and Ex-Singapore?", answer: "A Fresh Maid is new to Singapore and undergoes full training + SIP. An Ex-Singapore helper has worked here before, requiring only refresher training." },
    { category: "Service & Pricing", question: "How long does the process take?", answer: "Most placements are completed within 2–8 weeks, depending on the helper’s availability, your preferences, and MOM’s processing time." },
    { category: "About Helpers", question: "Do your helpers speak English?", answer: "Most have basic to conversational English. We always discuss language expectations when matching families." },
    { category: "About Helpers", question: "Can I request a helper from a nationality other than Indonesian?", answer: "Our core expertise is in Indonesian helpers; however, we are happy to support clients who require helpers from other nationalities." },
    { category: "Contracts", question: "Is there a contract?", answer: "Yes. We prepare a clear employment contract outlining terms, benefits, and responsibilities. It protects everyone." },
    {
        category: "Contracts",
        question: "What if it doesn't work out?",
        answer: (
            <>
                <strong className="block mb-2 text-brand-navy">Your Peace of Mind, Guaranteed</strong>
                If things don’t work out in the first 6 months, we offer a replacement helper or a 50% service fee refund, following MOM guidelines. We handle every step — paperwork, transfer, or repatriation — so you can focus on what matters.
            </>
        )
    },
];

const AccordionItem = ({ item }: { item: FAQItem }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="border-b border-brand-beige last:border-0">
            <button
                className="w-full flex justify-between items-center py-6 text-left focus:outline-none"
                onClick={() => setIsOpen(!isOpen)}
            >
                <span className="font-bold text-brand-navy text-lg pr-4">{item.question}</span>
                <span className="text-brand-gold flex-shrink-0">
                    {isOpen ? <Minus size={20} /> : <Plus size={20} />}
                </span>
            </button>
            <div className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-96 opacity-100 mb-6' : 'max-h-0 opacity-0'}`}>
                <div className="text-brand-charcoal leading-relaxed">{item.answer}</div>
            </div>
        </div>
    );
};

export const FAQ: React.FC = () => {
    return (
        <div className="w-full bg-white">
            <div className="bg-brand-navy py-16 px-4">
                <div className="max-w-7xl mx-auto text-center">
                    <h1 className="font-serif text-4xl font-bold text-white mb-4">Frequently Asked Questions</h1>
                    <p className="text-brand-beige">Clear answers for families and helpers.</p>
                </div>
            </div>

            <div className="max-w-3xl mx-auto px-4 py-20">
                <div className="bg-white rounded-xl shadow-sm border border-brand-beige px-6 md:px-10">
                    {faqData.map((item, idx) => (
                        <AccordionItem key={idx} item={item} />
                    ))}
                </div>
            </div>
        </div>
    );
};