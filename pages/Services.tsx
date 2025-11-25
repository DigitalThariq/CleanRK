import React from 'react';
import { Check, X, Plane, FileText, UserCheck, RefreshCw } from 'lucide-react';
import { Button } from '../components/Button';
import { Link } from 'react-router-dom';

const ServiceCard = ({ title, icon: Icon, desc, features, price }: any) => (
  <div className="bg-white rounded-lg shadow-sm border border-brand-beige p-8 flex flex-col h-full hover:shadow-md transition-shadow">
    <div className="bg-brand-cream w-14 h-14 rounded-full flex items-center justify-center mb-6">
      <Icon size={28} className="text-brand-navy" />
    </div>
    <h3 className="font-serif text-2xl font-bold text-brand-navy mb-2">{title}</h3>
    <p className="text-brand-charcoal text-sm mb-6 flex-grow">{desc}</p>
    
    <div className="bg-brand-cream/50 p-4 rounded mb-6">
      <p className="font-bold text-brand-navy mb-2">What's Included:</p>
      <ul className="space-y-2">
        {features.map((f: string, i: number) => (
          <li key={i} className="flex items-start text-sm text-brand-gray">
            <Check size={16} className="text-brand-gold mt-0.5 mr-2 flex-shrink-0" />
            <span>{f}</span>
          </li>
        ))}
      </ul>
    </div>
    
    <div className="mt-auto">
        <p className="text-brand-navy font-bold text-lg mb-4">{price}</p>
        <Link to="/contact">
            <Button fullWidth variant="outline">Enquire Now</Button>
        </Link>
    </div>
  </div>
);

export const Services: React.FC = () => {
  return (
    <div className="w-full bg-brand-cream">
      {/* Header */}
      <div className="bg-brand-navy py-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="font-serif text-4xl font-bold text-white mb-4">Services Tailored to Your Needs</h1>
          <p className="text-brand-beige max-w-2xl mx-auto text-lg">
            Every family's situation is unique. Whether you need a fresh start or a quick transfer, we handle it all with care and clarity.
          </p>
        </div>
      </div>

      {/* Main Service Cards */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 -mt-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ServiceCard 
                title="Fresh Maid"
                icon={UserCheck}
                desc="Perfect for families needing a new helper for the first time. Start fresh with a helper trained specifically for your needs."
                price="Competitive Market Rate"
                features={[
                    "Full overseas recruitment",
                    "Pre-departure medical & training",
                    "Airfare & initial lodging",
                    "Work permit & Embassy endorsement",
                    "Settling-In Programme (SIP)",
                    "6 months post-placement support"
                ]}
            />
            <ServiceCard 
                title="Ex-Singapore"
                icon={RefreshCw}
                desc="For helpers with previous Singapore experience returning to work. They understand the lifestyle and need less training."
                price="Contact for Quote"
                features={[
                    "Verification of past experience",
                    "Refresher training",
                    "Airfare & lodging",
                    "Work permit processing",
                    "Arrival medical check-up",
                    "Post-placement support"
                ]}
            />
            <ServiceCard 
                title="Transfer Maid"
                icon={Plane}
                desc="Find a new helper who is already in Singapore. No waiting for flights, faster deployment."
                price="Contact for Quote"
                features={[
                    "Matching with available helper",
                    "Work permit transfer",
                    "Employment contract update",
                    "Medical check-up",
                    "Insurance arrangement"
                ]}
            />
             <ServiceCard 
                title="Direct Hire"
                icon={FileText}
                desc="You found her, we handle the rest. We manage the bureaucracy while you focus on the relationship."
                price="Low Processing Fee"
                features={[
                    "Paperwork & documentation",
                    "Work permit application",
                    "Contract preparation",
                    "Insurance setup",
                    "Post-placement guidance"
                ]}
            />
            <ServiceCard 
                title="Work Permit Renewal"
                icon={RefreshCw}
                desc="Guidance for families renewing an existing helper's permit. Expert help at no extra cost."
                price="FREE Guidance"
                features={[
                    "Renewal guidance steps",
                    "Pre-renewal medical check info",
                    "MOM submission follow-up",
                    "Insurance renewal assistance",
                    "No agency fees"
                ]}
            />
        </div>
      </div>

      {/* Comparison Table */}
      <section className="bg-white py-20">
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
                        { name: "All-in-One Pricing", fresh: true, ex: true, trans: true, direct: true, renew: "Free" },
                        { name: "Recruitment", fresh: "Full", ex: "Verify", trans: "Match", direct: false, renew: "N/A" },
                        { name: "Airfare & Lodging", fresh: true, ex: true, trans: false, direct: true, renew: false },
                        { name: "Work Permit", fresh: "Full", ex: "Full", trans: "Transfer", direct: "Submit", renew: "Guidance" },
                        { name: "Medical Check", fresh: "Pre+Arr", ex: "Pre+Arr", trans: "Arrival", direct: "Required", renew: "Guidance" },
                        { name: "Insurance", fresh: true, ex: true, trans: true, direct: "Mandatory", renew: "Guidance" },
                        { name: "SIP Training", fresh: true, ex: false, trans: false, direct: "If new", renew: false },
                        { name: "Post-Placement Support", fresh: true, ex: true, trans: true, direct: true, renew: true },
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
          <div className="mt-8 text-center bg-brand-cream p-6 rounded-lg">
             <h4 className="font-bold text-brand-navy mb-2">Still unsure which service is right for you?</h4>
             <p className="text-brand-charcoal mb-4">That's completely normal. Contact us and we'll ask a few simple questions to recommend the perfect fit.</p>
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
    if (value === false) return <X className="text-red-400 mx-auto md:mx-0" size={20} />;
    return <span className="font-medium text-brand-charcoal">{value}</span>;
};