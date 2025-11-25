import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, Heart, Shield, ArrowRight, Star } from 'lucide-react';
import { Button } from '../components/Button';

const ServiceCardShort = ({ title, desc, link }: { title: string, desc: string, link: string }) => (
  <Link to={link} className="block group">
    <div className="bg-white p-6 rounded-lg shadow-sm border border-transparent hover:border-brand-gold hover:shadow-md transition-all h-full flex flex-col justify-between">
      <div>
        <h3 className="font-serif text-xl font-bold text-brand-navy mb-2 group-hover:text-brand-gold transition-colors">{title}</h3>
        <p className="text-brand-charcoal text-sm leading-relaxed mb-4">{desc}</p>
      </div>
      <div className="flex items-center text-brand-gold font-semibold text-sm">
        Learn More <ArrowRight size={16} className="ml-1 group-hover:translate-x-1 transition-transform" />
      </div>
    </div>
  </Link>
);

export const Home: React.FC = () => {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative bg-brand-navy text-white overflow-hidden">
        {/* Abstract Background Overlay */}
        <div className="absolute inset-0 bg-brand-navy/80 z-10"></div>
        <div 
            className="absolute inset-0 bg-cover bg-center z-0" 
            style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1920&q=80")' }} // Modern Singapore-style apartment
        ></div>
        
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-block bg-brand-gold/20 text-brand-gold border border-brand-gold/30 rounded-full px-4 py-1 text-sm font-semibold mb-6">
              Singapore Registered & Credible
            </span>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Trusted Indonesian Helpers for Singapore Families
            </h1>
            <p className="text-lg text-brand-beige mb-8 max-w-lg leading-relaxed">
              We connect compassionate helpers with families who deserve the very best. Transparent pricing. Real people. Real care.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/services">
                <Button variant="secondary" className="w-full sm:w-auto">Find Your Perfect Helper</Button>
              </Link>
              <Link to="/contact?type=helper">
                <Button variant="outline" className="w-full sm:w-auto border-white text-white hover:bg-white hover:text-brand-navy">
                  Are You a Helper? Join Us
                </Button>
              </Link>
            </div>
          </div>
          {/* Hero Image Card */}
          <div className="hidden md:block relative">
            <div className="absolute -inset-4 bg-brand-gold/30 rounded-lg transform rotate-3"></div>
            <img 
              src="https://images.unsplash.com/photo-1528740561666-dc24705f08a7?auto=format&fit=crop&w=800&q=80" 
              alt="Helper meticulously organizing clothes" 
              className="relative rounded-lg shadow-2xl object-cover w-full h-[500px]"
            />
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-12 text-center md:text-left">
            {/* Value 1 */}
            <div className="flex flex-col items-center md:items-start">
              <div className="bg-brand-cream p-4 rounded-full mb-6">
                <Shield size={32} className="text-brand-navy" />
              </div>
              <h3 className="font-serif text-2xl font-bold text-brand-navy mb-3">Singapore Registered</h3>
              <p className="text-brand-charcoal leading-relaxed">
                We're a licensed, fully transparent agency operating in Singapore with proper credentials. Your confidence matters to us.
              </p>
            </div>
            {/* Value 2 */}
            <div className="flex flex-col items-center md:items-start">
              <div className="bg-brand-cream p-4 rounded-full mb-6">
                <CheckCircle size={32} className="text-brand-navy" />
              </div>
              <h3 className="font-serif text-2xl font-bold text-brand-navy mb-3">One Clear Price</h3>
              <p className="text-brand-charcoal leading-relaxed">
                All-inclusive packages mean you see exactly what you're getting. No hidden fees. No last-minute surprises.
              </p>
            </div>
            {/* Value 3 */}
            <div className="flex flex-col items-center md:items-start">
              <div className="bg-brand-cream p-4 rounded-full mb-6">
                <Heart size={32} className="text-brand-navy" />
              </div>
              <h3 className="font-serif text-2xl font-bold text-brand-navy mb-3">People First</h3>
              <p className="text-brand-charcoal leading-relaxed">
                We don't just match helpers to families—we match them thoughtfully. Both sides deserve to feel respected and valued.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-brand-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-brand-navy mb-4">Services Tailored to Your Needs</h2>
            <p className="text-brand-gray max-w-2xl mx-auto">Flexible options to match your family's situation, all with our transparent, stress-free promise.</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <ServiceCardShort 
              title="Fresh Maid" 
              desc="New Indonesian helper + all setup. Includes full recruitment, training, and SIP." 
              link="/services"
            />
            <ServiceCardShort 
              title="Ex-Singapore" 
              desc="Experienced helpers returning to work. Familiar with Singapore lifestyle." 
              link="/services"
            />
            <ServiceCardShort 
              title="Transfer Maid" 
              desc="Helpers already in Singapore seeking a new employer. Faster deployment." 
              link="/services"
            />
            <ServiceCardShort 
              title="Direct Hire" 
              desc="Found your own helper? We handle the paperwork, permits, and bureaucracy." 
              link="/services"
            />
          </div>
          <div className="text-center mt-10">
            <Link to="/services">
              <Button variant="primary">Explore All Services</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Trust/Testimonial Teaser */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-brand-navy rounded-2xl p-8 md:p-12 text-white flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
               <h2 className="font-serif text-3xl font-bold mb-6">Why Families Choose Us</h2>
               <div className="space-y-4">
                 <div className="flex items-start gap-4">
                   <div className="bg-brand-gold/20 p-2 rounded-full mt-1"><CheckCircle size={20} className="text-brand-gold" /></div>
                   <div>
                     <h4 className="font-bold text-lg">Peace of Mind</h4>
                     <p className="text-brand-beige text-sm">From matching to ongoing support, we're with you.</p>
                   </div>
                 </div>
                 <div className="flex items-start gap-4">
                   <div className="bg-brand-gold/20 p-2 rounded-full mt-1"><CheckCircle size={20} className="text-brand-gold" /></div>
                   <div>
                     <h4 className="font-bold text-lg">Genuine Passion</h4>
                     <p className="text-brand-beige text-sm">Our helpers treat this as a calling, not just a job.</p>
                   </div>
                 </div>
               </div>
            </div>
            <div className="md:w-1/2 bg-white/10 p-8 rounded-xl backdrop-blur-sm border border-white/10">
              <div className="flex gap-1 mb-4">
                {[1,2,3,4,5].map(i => <Star key={i} size={16} className="text-brand-gold fill-brand-gold" />)}
              </div>
              <p className="italic text-lg mb-6 leading-relaxed">
                "Working with Clean RK was a breath of fresh air. They listened to our needs and found us a helper who feels like family. No hidden costs, just honest service."
              </p>
              <div>
                <p className="font-bold">Sarah Tan</p>
                <p className="text-sm text-brand-beige">Mother of two, Singapore</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-brand-cream border-t border-brand-beige">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-brand-navy mb-6">Ready to get started?</h2>
          <p className="text-lg text-brand-charcoal mb-8">
            Let's find your perfect helper. It starts with a simple conversation.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
             <Link to="/contact">
               <Button variant="primary" className="w-full sm:w-auto text-lg px-8">Get Started Today</Button>
             </Link>
             <a href="https://wa.me/6512345678" target="_blank" rel="noreferrer">
               <Button variant="outline" className="w-full sm:w-auto text-lg px-8">WhatsApp Us</Button>
             </a>
          </div>
          <p className="mt-6 text-sm text-brand-gray">
            Or call us directly: <span className="font-bold text-brand-navy">+65 1234 5678</span>
          </p>
        </div>
      </section>
    </div>
  );
};