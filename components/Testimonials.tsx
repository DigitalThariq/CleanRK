import React from 'react';
import { Star, Quote } from 'lucide-react';

const reviews = [
    {
        name: "Aishah Feroz",
        text: "Nilfer managed to find a good FDW fit to care for my Mom in the 1st call, after taking into consideration our requirements. Nilfer guided me step by step on the documents required and submissions that I had to do at my end and she also updated her progress regularly. She is very quick to respond to all of my endless queries and managed to expedite the whole process to enable my FDW to arrive 8 days later. It was an overall a very smooth and clear process by Nilfer from ADEL Employment Agency. Thank you very much Nilfer for everything!"
    },
    {
        name: "Hairun",
        text: "Honestly, I was a bit hesitant at first because i have dealt with many mdw agencies and even direct hire agencies based in overseas. I've seen many bad ones so it took me very long to build my trust on you. The way u handled the mdw issues we had, how you selflessly absorbed charges just so that my mum could settle with a good helper , touched my heart. You are definitely one agent that isn't out there to do business but to change lives. Thank you for all you've done!"
    },
    {
        name: "Latchman & Family",
        text: "First time engaging Ms Nilfer from Adel Employment Agency for an MDW to look after my elderly mum and sister. She not only provided a professional service to identified the potential helper to able meet our request. They quoted a very reasonable price and furthermore gave us a discount and also devised an installment plan which was really a great relief for us. Keep up your good spirit and will always happy to work with you."
    },
    {
        name: "Ibtisam",
        text: "Nilfer was very helpful in finding a helper that suits our family. She is very prompt at replying to our questions and goes above and beyond to find a suitable one for us. The process has been easy with Adel agency. Everything was fast and efficient."
    },
    {
        name: "Madeline & Stephen",
        text: "Adel emplyment agency is very responsible and trustworthy agency which we will definitely recommend to others. Nilfer has been very helpful and going extra mile to ensure our entire process was smooth. Not only tht, her after service and follow ups were excellent"
    },
    {
        name: "Diana Annuar",
        text: "Nilfer is a very understanding and earnest agent, she tries very hard to match you with the best possible helper and assists you greatly in the process. I have very strong trust and confidence in her throughout the process"
    },
    {
        name: "Thasleema",
        text: "Adel Agency was able to meet my requirements and provide me with good helpers according to my needs. The agent work very closely with myself and as well as the helpers. This enables both of us to be more comfortable with the agent"
    },
    {
        name: "Kevin Wee & Serene",
        text: "With a baby on the way, we definitely didn't want the added stress of finding the right domestic helper. Nilfer was meticulous in understanding and accommodating to our prioritues and needs. This made the process such a restful and pleasant experience. Thank you for allowing us to focus on what's important - preparing for the arrival of our bundle of joy! ❤"
    },
    {
        name: "Sophia",
        text: "Adel Employment is run by a very dedicated and driven business owner. Nilfer was very patient, attentive and responsive in helping my neighbours find a good helper and also guiding them on how to recruit the right person, how to set expectations and how to manage well. She believes in maintaining standards and was thorough in her search. Her personalised touch and dedicated service is much appreciated."
    },
    {
        name: "Rokhaiya",
        text: "An employment agency with a heart and cares for the relationship between employer and the helper. ADEL employment agency is the go to agency for all your needs!"
    },
    {
        name: "Syazwana",
        text: "From the start to the end, Nilfer has been nothing but very helpful, detailed and meticulous in her work. She ensures that every step is taken care of and we as client are updated regularly on the helper status. She is also understanding and cater to our needs and criteria on what kind of helper we require. She provides training for the helper to ensure that they are capable before sending them to our home. She also provided with the welcome pack which helps alot for the helper to have the basic necessities. She does monthly checkup with the helper to ensure that all is good. Thank u so much so far you give very good service 💯😊 I’m very very happy with the whole experience and I would definitely reccomend to my family and friends!"
    },
    {
        name: "Zhang Jing & Antony",
        text: "Nilfer is very responsible, assisting us in finding a helper and guiding us on how to communicate with her. So far, Nilfer is the most dedicated agent I have encountered. Whenever we have questions, she answers the phone, advises us on how to handle issues, and proposes reasonable solutions that consider both parties. Nilfer also treats the maid kindly; Cares for their well-being. when our helper was in financial trouble, she even offered to contribute SGD400 to help her through the difficult situation. All of this has earned my trust in her, and I am willing to recommend her to everyone. I believe she will help others find a suitable helper. Nilfer is a very responsible and reliable agent, and I am still using her services. I trust her completely, and our family greatly appreciates her help. No matter the time or situation, she is always available whenever I call. I no longer have any worries about my maid. Nilfer has her own effective methods for counseling helpers. She is fair and impartial, never favoring any side. I have recommended her to my friends because I believe she can assist many more people who need good helpers."
    }
];

export const Testimonials: React.FC = () => {
    return (
        <section className="py-20 bg-brand-cream border-t border-brand-beige">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="font-serif text-3xl md:text-4xl font-bold text-brand-navy mb-4">What Our Families Say</h2>
                    <p className="text-brand-gray max-w-2xl mx-auto">
                        Real stories from families who found the right help with ADEL.
                    </p>
                </div>

                <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
                    {reviews.map((review, index) => (
                        <div key={index} className="break-inside-avoid bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300 border border-brand-beige/30 relative mb-8">
                            <Quote className="absolute top-6 right-6 text-brand-gold/20" size={40} />
                            <div className="flex gap-1 mb-4">
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} size={16} className="fill-brand-gold text-brand-gold" />
                                ))}
                            </div>
                            <p className="text-brand-charcoal leading-relaxed mb-6 text-sm md:text-base italic relative z-10">
                                "{review.text}"
                            </p>
                            <div className="flex items-center gap-3 border-t border-brand-beige pt-4">
                                <div className="w-10 h-10 rounded-full bg-brand-navy text-white flex items-center justify-center font-bold font-serif text-lg shrink-0">
                                    {review.name.charAt(0)}
                                </div>
                                <div>
                                    <h4 className="font-bold text-brand-navy text-sm">{review.name}</h4>
                                    <span className="text-xs text-brand-gold font-medium">Verified Customer</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
