import React from 'react';
import { ShieldCheck, Heart, Users, FileText, Check } from 'lucide-react';

export const About: React.FC = () => {
  const teamImages = [
    "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=400&q=80", // Professional Asian woman
    "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=400&q=80", // Professional Asian man
    "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80"  // Professional Asian woman
  ];

  return (
    <div className="w-full">
        {/* Header */}
        <div className="bg-brand-navy py-16 px-4">
            <div className="max-w-7xl mx-auto text-center">
                <h1 className="font-serif text-4xl font-bold text-white mb-4">A Singapore Agency Built on Trust and Heart</h1>
            </div>
        </div>

        {/* Narrative */}
        <section className="py-16 bg-white">
            <div className="max-w-4xl mx-auto px-4 text-center sm:text-left">
                <p className="text-lg text-brand-charcoal leading-relaxed mb-6">
                    We are a Singapore-registered domestic helper agency with one simple mission: connect exceptional Indonesian helpers with families who deserve genuine care and support.
                </p>
                <p className="text-lg text-brand-charcoal leading-relaxed mb-6">
                    We understand that bringing a helper into your home is a big decision. It's personal. It's about trust. That's why we don't cut corners—we invest time in truly understanding both families and helpers, ensuring every match feels right for both sides.
                </p>
                <p className="text-lg text-brand-charcoal leading-relaxed">
                    Our team is here every step of the way, from the very first conversation through years of support. We handle the paperwork, the logistics, and the complexity—so you can focus on welcoming someone special into your home.
                </p>
            </div>
        </section>

        {/* Credentials */}
        <section className="py-16 bg-brand-cream">
            <div className="max-w-7xl mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="font-serif text-3xl font-bold text-brand-navy mb-4">Registered, Licensed, and Committed</h2>
                    <p className="text-brand-gray">Operating under License: 12C3456</p>
                </div>
                
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                     {[
                         { icon: ShieldCheck, text: "Singapore-registered agency" },
                         { icon: FileText, text: "Compliant with MOM regulations" },
                         { icon: Check, text: "Transparent pricing—no hidden fees" },
                         { icon: Heart, text: "2-year mandatory insurance & bond" }
                     ].map((item, i) => (
                        <div key={i} className="bg-white p-6 rounded-lg shadow-sm flex flex-col items-center text-center">
                            <item.icon className="text-brand-gold mb-4" size={40} />
                            <p className="font-semibold text-brand-navy">{item.text}</p>
                        </div>
                     ))}
                </div>
            </div>
        </section>

         {/* Team Section */}
         <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="font-serif text-3xl font-bold text-brand-navy mb-4">Meet the People Behind the Service</h2>
                    <p className="text-brand-charcoal max-w-2xl mx-auto">
                        Our team members have years of experience in helping families. We speak your language, understand Singapore life, and genuinely care about getting the match right.
                    </p>
                </div>
                <div className="grid md:grid-cols-3 gap-8">
                     {teamImages.map((img, i) => (
                         <div key={i} className="group">
                             <div className="h-64 bg-gray-200 rounded-lg overflow-hidden mb-4 relative">
                                <img src={img} alt="Team member" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
                             </div>
                             <h3 className="font-bold text-xl text-brand-navy">Team Member {i + 1}</h3>
                             <p className="text-brand-gold font-medium">Placement Consultant</p>
                         </div>
                     ))}
                </div>
            </div>
         </section>
    </div>
  );
};