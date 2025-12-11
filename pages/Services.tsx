import React, { useState } from 'react';
import { Check, X, Plane, FileText, UserCheck, RefreshCw, Minus, Users, FileCheck, Stethoscope, GraduationCap, PlaneTakeoff, Shield, Heart, SearchCheck, ChevronDown } from 'lucide-react';
import { Button } from '../components/Button';
import { Link } from 'react-router-dom';

interface ServiceCardProps {
  id: string;
  title: string;
  icon: any;
  desc: string;
  price: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ id, title, icon: Icon, desc, price }) => (
  <div id={id} className="scroll-mt-32 bg-white rounded-lg shadow-sm border border-brand-beige p-8 flex flex-col h-full hover:shadow-md transition-shadow">
    <div className="bg-brand-cream w-14 h-14 rounded-full flex items-center justify-center mb-6">
      <Icon size={28} className="text-brand-navy" />
    </div>
    <h3 className="font-serif text-2xl font-bold text-brand-navy mb-2">{title}</h3>
    <p className="text-brand-charcoal text-sm mb-6 flex-grow">{desc}</p>

    <div className="mt-auto">
      <p className="text-brand-navy font-bold text-lg mb-4">{price}</p>
      <Link to="/contact">
        <Button fullWidth variant="outline">Enquire Now</Button>
      </Link>
    </div>
  </div>
);

interface AccordionItemProps {
  title: string;
  icon: any;
  items: string[];
  isOpen: boolean;
  onToggle: () => void;
}

const AccordionItem: React.FC<AccordionItemProps> = ({ title, icon: Icon, items, isOpen, onToggle }) => (
  <div className="border-b border-brand-beige last:border-b-0">
    <button
      onClick={onToggle}
      className="w-full flex items-center justify-between p-4 hover:bg-brand-cream/30 transition-colors text-left"
      aria-expanded={isOpen}
    >
      <div className="flex items-center gap-3">
        <Icon size={18} className="text-brand-gold flex-shrink-0" />
        <h4 className="font-semibold text-brand-navy text-sm">{title}</h4>
      </div>
      <ChevronDown
        size={20}
        className={`text-brand-navy transition-transform duration-250 ${isOpen ? 'rotate-180' : ''}`}
      />
    </button>
    <div
      className={`overflow-hidden transition-all duration-250 ${isOpen ? 'max-h-96' : 'max-h-0'}`}
    >
      <ul className="px-4 pb-4 space-y-2">
        {items.map((item, i) => (
          <li key={i} className="flex items-start text-sm text-brand-gray leading-relaxed">
            <Check size={16} className="text-brand-gold mt-0.5 mr-2 flex-shrink-0" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  </div>
);

const IncludedServicesPanel: React.FC = () => {
  // Detect if mobile on initial load
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 1024;

  const [openSections, setOpenSections] = useState<{ [key: string]: boolean }>({
    recruitment: !isMobile,
    documentation: !isMobile,
    medical: !isMobile,
    training: !isMobile,
    travel: !isMobile,
    insurance: !isMobile,
    settling: !isMobile,
    verification: !isMobile,
  });

  const toggleSection = (key: string) => {
    setOpenSections(prev => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <div className="bg-white rounded-lg shadow-sm border border-brand-beige lg:sticky lg:top-[88px] overflow-hidden">
      <div className="p-6 border-b border-brand-beige">
        <h3 className="font-serif text-2xl font-bold text-brand-navy mb-2">Included Services</h3>
        <span className="inline-block bg-brand-gold/20 text-brand-navy text-xs font-semibold px-3 py-1 rounded-full">
          Flexible progressive payment available
        </span>
      </div>

      <div className="max-h-[calc(100vh-300px)] overflow-y-auto">
        <AccordionItem
          title="Recruitment & Matching"
          icon={Users}
          items={["Overseas recruitment", "Matching with suitable helper"]}
          isOpen={openSections.recruitment}
          onToggle={() => toggleSection('recruitment')}
        />
        <AccordionItem
          title="Documentation & Legal Processing"
          icon={FileCheck}
          items={[
            "Paperwork and documentation handling",
            "Work permit application (processing & transfer)",
            "Embassy liaison",
            "Employment contract preparation or updates"
          ]}
          isOpen={openSections.documentation}
          onToggle={() => toggleSection('documentation')}
        />
        <AccordionItem
          title="Medical Requirements"
          icon={Stethoscope}
          items={["Pre-departure medical examination", "Arrival medical check-up"]}
          isOpen={openSections.medical}
          onToggle={() => toggleSection('medical')}
        />
        <AccordionItem
          title="Training"
          icon={GraduationCap}
          items={["Pre-departure training", "Refresher training"]}
          isOpen={openSections.training}
          onToggle={() => toggleSection('training')}
        />
        <AccordionItem
          title="Travel & Accommodations"
          icon={PlaneTakeoff}
          items={["Airfare", "Initial lodging on arrival"]}
          isOpen={openSections.travel}
          onToggle={() => toggleSection('travel')}
        />
        <AccordionItem
          title="Insurance"
          icon={Shield}
          items={["Insurance arrangement/setup"]}
          isOpen={openSections.insurance}
          onToggle={() => toggleSection('insurance')}
        />
        <AccordionItem
          title="Settling & Aftercare"
          icon={Heart}
          items={["Settling-In Programme (SIP)", "Post-placement support (ongoing guidance)"]}
          isOpen={openSections.settling}
          onToggle={() => toggleSection('settling')}
        />
        <AccordionItem
          title="Background Verification"
          icon={SearchCheck}
          items={["Verification of past experience"]}
          isOpen={openSections.verification}
          onToggle={() => toggleSection('verification')}
        />
      </div>

      <div className="p-6 border-t border-brand-beige">
        <Link to="/contact">
          <Button fullWidth>Enquire Now</Button>
        </Link>
      </div>
    </div>
  );
};

export const Services: React.FC = () => {
  return (
    <div className="w-full bg-brand-cream">
      {/* Header */}
      <div className="bg-brand-navy py-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="font-serif text-4xl font-bold text-white mb-4">Services Tailored to Your Needs</h1>
          <p className="text-brand-beige max-w-2xl mx-auto text-lg">
            Our expertise lies in Indonesian domestic helpers. Every family's situation is unique—we handle it all with care and clarity, welcoming helpers of all nationalities.
          </p>
        </div>
      </div>

      {/* Quick Navigation Buttons */}
      <div className="bg-white border-b border-brand-beige sticky top-[73px] z-40 shadow-sm overflow-x-auto">
        <div className="max-w-7xl mx-auto px-4 py-4 flex gap-4 md:justify-center min-w-max">
          {[
            { label: 'Fresh Maid', id: 'fresh-maid' },
            { label: 'Ex-Singapore', id: 'ex-singapore' },
            { label: 'Transfer Maid', id: 'transfer-maid' },
            { label: 'Direct Hire', id: 'direct-hire' },
            { label: 'Renewal', id: 'renewal' },
            { label: 'Comparison', id: 'service-comparison' },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => {
                const element = document.getElementById(item.id);
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="px-4 py-2 rounded-full bg-brand-cream text-brand-navy font-medium text-sm hover:bg-brand-navy hover:text-white transition-colors whitespace-nowrap border border-brand-beige"
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>

      {/* Main Service Cards */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 -mt-8">
        <div className="grid lg:grid-cols-[2fr,1fr] gap-8">
          {/* Service Cards Column */}
          <div className="grid md:grid-cols-2 gap-8">
            <ServiceCard
              id="fresh-maid"
              title="Fresh Maid"
              icon={UserCheck}
              desc="Perfect for families needing a new helper for the first time. Start fresh with a helper trained specifically for your needs."
              price="Affordable Rate"
            />
            <ServiceCard
              id="ex-singapore"
              title="Ex-Singapore"
              icon={RefreshCw}
              desc="For helpers with previous Singapore experience returning to work. They understand the lifestyle and need less training."
              price="Affordable Rate"
            />
            <ServiceCard
              id="transfer-maid"
              title="Transfer Maid"
              icon={Plane}
              desc="Find a new helper who is already in Singapore. No waiting for flights, faster deployment."
              price="Affordable Rate"
            />
            <ServiceCard
              id="direct-hire"
              title="Direct Hire"
              icon={FileText}
              desc="You found her, we handle the rest. We manage the bureaucracy while you focus on the relationship."
              price="Affordable Rate"
            />
            <ServiceCard
              id="renewal"
              title="Work Permit Renewal"
              icon={RefreshCw}
              desc="Guidance for families renewing an existing helper's permit. Expert help at no extra cost."
              price="Complimentary Guidance"
            />
          </div>

          {/* Included Services Panel */}
          <div className="lg:row-span-1">
            <IncludedServicesPanel />
          </div>
        </div>
      </div>

      {/* Comparison Table */}
      <section id="service-comparison" className="scroll-mt-32 bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl font-bold text-brand-navy mb-4">Service Comparison</h2>
            <p className="text-brand-gray">A clear look at what is included in each package.</p>
          </div>

          <div className="overflow-x-auto border border-brand-beige rounded-lg shadow-sm">
            <table className="w-full text-sm text-left">
              <thead className="bg-brand-navy text-white text-xs uppercase font-bold tracking-wider">
                <tr>
                  <th className="px-6 py-4">Feature</th>
                  <th className="px-6 py-4">Fresh Maid</th>
                  <th className="px-6 py-4">Ex-Singapore</th>
                  <th className="px-6 py-4">Transfer</th>
                  <th className="px-6 py-4">Direct Hire</th>
                  <th className="px-6 py-4">Renewal</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-brand-beige">
                {[
                  { name: "All-in-One Pricing", fresh: true, ex: true, trans: true, direct: true, renew: "Guidance" },
                  { name: "Recruitment", fresh: true, ex: true, trans: true, direct: false, renew: "N/A" },
                  { name: "Airfare & Lodging", fresh: true, ex: true, trans: false, direct: true, renew: false },
                  { name: "Work Permit", fresh: true, ex: true, trans: true, direct: true, renew: "Guidance" },
                  { name: "Medical Check", fresh: true, ex: true, trans: true, direct: true, renew: "Guidance" },
                  { name: "Insurance", fresh: true, ex: true, trans: true, direct: true, renew: "Guidance" },
                  { name: "SIP Training", fresh: true, ex: false, trans: false, direct: true, renew: false },
                  { name: "Post-Placement Support", fresh: true, ex: true, trans: true, direct: false, renew: false },
                ].map((row, idx) => (
                  <tr key={idx} className={idx % 2 === 0 ? 'bg-brand-cream/30' : 'bg-white'}>
                    <td className="px-6 py-4 font-bold text-brand-navy">{row.name}</td>
                    <td className="px-6 py-4">{renderCell(row.fresh)}</td>
                    <td className="px-6 py-4">{renderCell(row.ex)}</td>
                    <td className="px-6 py-4">{renderCell(row.trans)}</td>
                    <td className="px-6 py-4">{renderCell(row.direct)}</td>
                    <td className="px-6 py-4">{renderCell(row.renew)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-6 text-center">
            <p className="text-brand-gray text-sm italic">
              * We also offer flexible progressive payment options to make the hiring process easier and more convenient for our clients.
            </p>
          </div>

          <div className="mt-12 text-center bg-brand-cream p-8 rounded-lg flex flex-col items-center max-w-4xl mx-auto shadow-sm">
            <h4 className="font-bold text-brand-navy text-xl mb-3">Still unsure which service is right for you?</h4>
            <p className="text-brand-charcoal mb-6 max-w-2xl">That's completely normal. Contact us for a <span className="font-semibold text-brand-navy">free consultation</span> and we'll ask a few simple questions to recommend the perfect fit.</p>
            <Link to="/contact">
              <Button variant="secondary">Get Free Consultation</Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

const renderCell = (value: boolean | string) => {
  if (value === true) return <Check className="text-green-600 mx-auto md:mx-0" size={20} />;
  if (value === false) return <Minus className="text-gray-300 mx-auto md:mx-0" size={20} />;
  return <span className="font-medium text-brand-charcoal">{value}</span>;
};