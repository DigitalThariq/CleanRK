import React from 'react';
import { BookOpen, UserCheck, Heart, Smile } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '../components/Button';

export const Helpers: React.FC = () => {
  return (
    <div className="w-full">
         <section className="relative bg-brand-navy py-20 px-4">
             <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
                 <div className="md:w-1/2 text-white">
                     <h1 className="font-serif text-4xl font-bold mb-6">Meet the Heart of Our Agency</h1>
                     <p className="text-brand-beige text-lg leading-relaxed mb-6">
                         Our helpers aren't just employees. They're hardworking individuals with real stories, real families back home, and real passion for their work.
                     </p>
                     <p className="text-brand-beige text-lg leading-relaxed">
                         Most of all, they work with real passion — it’s not just a job, it’s about making families smile.
                     </p>
                 </div>
                 <div className="md:w-1/2">
                     <img 
                       src="https://images.unsplash.com/photo-1595273670150-bd0c3c392e46?auto=format&fit=crop&w=800&q=80" 
                       alt="Smiling Helper" 
                       className="rounded-lg shadow-xl border-4 border-brand-gold/20" 
                     />
                 </div>
             </div>
         </section>

         {/* Process Section */}
         <section className="py-20 bg-white">
             <div className="max-w-7xl mx-auto px-4">
                 <h2 className="font-serif text-3xl font-bold text-brand-navy text-center mb-16">How We Find & Prepare Our Helpers</h2>
                 
                 <div className="grid md:grid-cols-3 gap-8">
                     <div className="bg-brand-cream p-8 rounded-lg relative overflow-hidden">
                         <div className="absolute top-0 right-0 p-4 opacity-10"><UserCheck size={100} /></div>
                         <h3 className="font-bold text-xl text-brand-navy mb-4 relative z-10">1. Careful Selection</h3>
                         <ul className="space-y-3 relative z-10 text-sm text-brand-charcoal">
                             <li>• In-depth interviews and background verification</li>
                             <li>• Character assessment and reference checks</li>
                             <li>• Health and medical screening</li>
                             <li>• Honest conversations about expectations</li>
                         </ul>
                     </div>

                     <div className="bg-brand-cream p-8 rounded-lg relative overflow-hidden">
                         <div className="absolute top-0 right-0 p-4 opacity-10"><BookOpen size={100} /></div>
                         <h3 className="font-bold text-xl text-brand-navy mb-4 relative z-10">2. Professional Training</h3>
                         <ul className="space-y-3 relative z-10 text-sm text-brand-charcoal">
                             <li>• Household management and cooking</li>
                             <li>• Childcare and eldercare best practices</li>
                             <li>• Cultural orientation to Singapore life</li>
                             <li>• Practical scenarios and problem-solving</li>
                         </ul>
                     </div>

                     <div className="bg-brand-cream p-8 rounded-lg relative overflow-hidden">
                         <div className="absolute top-0 right-0 p-4 opacity-10"><Heart size={100} /></div>
                         <h3 className="font-bold text-xl text-brand-navy mb-4 relative z-10">3. Final Preparation</h3>
                         <ul className="space-y-3 relative z-10 text-sm text-brand-charcoal">
                             <li>• Pre-departure health check</li>
                             <li>• Briefing on Singapore's expectations</li>
                             <li>• Confidence-building</li>
                             <li>• Continued support after arrival</li>
                         </ul>
                     </div>
                 </div>
             </div>
         </section>

         {/* Differentiators */}
         <section className="py-20 bg-brand-navy text-white">
             <div className="max-w-7xl mx-auto px-4">
                 <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                     <div className="p-4 border border-brand-gold/30 rounded">
                         <h4 className="text-brand-gold font-bold text-lg mb-2">Real Passion</h4>
                         <p className="text-sm text-brand-beige">It's not just a job. They genuinely care about making your home run smoothly.</p>
                     </div>
                     <div className="p-4 border border-brand-gold/30 rounded">
                         <h4 className="text-brand-gold font-bold text-lg mb-2">Cultural Bridge</h4>
                         <p className="text-sm text-brand-beige">Our helpers bring warmth and strong family values, adapting quickly to Singapore.</p>
                     </div>
                     <div className="p-4 border border-brand-gold/30 rounded">
                         <h4 className="text-brand-gold font-bold text-lg mb-2">Thoroughly Trained</h4>
                         <p className="text-sm text-brand-beige">Equipped with practical skills and confidence to handle real-life situations.</p>
                     </div>
                     <div className="p-4 border border-brand-gold/30 rounded">
                         <h4 className="text-brand-gold font-bold text-lg mb-2">Continuously Supported</h4>
                         <p className="text-sm text-brand-beige">We don't disappear. We check in to ensure both you and your helper feel supported.</p>
                     </div>
                 </div>
             </div>
         </section>

         {/* Helper CTA */}
         <section className="py-20 bg-brand-gold/10">
             <div className="max-w-4xl mx-auto px-4 text-center">
                 <h2 className="font-serif text-3xl font-bold text-brand-navy mb-6">Are You a Helper? We Want to Hear From You</h2>
                 <p className="text-lg text-brand-charcoal mb-8">
                     If you're Indonesian and interested in working in Singapore, we'd love to connect. We offer fair terms, professional training, and no agency fees for helpers.
                 </p>
                 <Link to="/contact?type=helper">
                     <Button variant="primary">Register as a Helper</Button>
                 </Link>
             </div>
         </section>
    </div>
  );
};