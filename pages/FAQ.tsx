import React from 'react';
import { Reveal } from '../components/Reveal';

const FAQ: React.FC = () => {
  return (
    <div className="pt-32 pb-24 px-6 md:px-12 max-w-4xl mx-auto min-h-screen">
        <Reveal>
            <h1 className="font-display text-5xl text-brand-dark text-center mb-16">Frequently Asked Questions</h1>
        </Reveal>
        
        <div className="space-y-12">
            {[
                { 
                    cat: 'For Individuals', 
                    items: [
                        { 
                            q: 'How can I access support through Manovratha?', 
                            a: 'We connect you with a curated network of verified, empathetic mental health professionals. You can browse profiles to find experts specializing in your specific needs—whether it’s anxiety, trauma, relationship issues, or personal growth. We offer flexible options including online video consultations and offline sessions where available, ensuring support fits your lifestyle comfortably.' 
                        },
                        { 
                            q: 'Is my personal information and data truly safe?', 
                            a: 'Your privacy is our absolute priority. We strictly adhere to the Mental Healthcare Act 2017 and global data protection standards. All your personal data and session records are encrypted. We ensure that your journey remains confidential, and no information is shared without your explicit, informed consent.' 
                        },
                        { 
                            q: 'What is the cost of therapy or consultation?', 
                            a: 'We believe in accessible care while respecting the expertise of professionals. Fees are determined by individual professionals based on their experience and specialization. We strive to offer a range of options to suit different financial capabilities. You will always see transparent pricing for each professional before you book a session.' 
                        },
                        {
                            q: 'Do you offer emergency support?',
                            a: 'Manovratha is primarily a platform for scheduled therapy, counseling, and long-term wellness support. We are not an emergency service. If you are in crisis, feeling unsafe, or experiencing a medical emergency, please contact national emergency helplines immediately or visit the nearest hospital.'
                        }
                    ] 
                },
                { 
                    cat: 'For Professionals', 
                    items: [
                        { 
                            q: 'How do I register as a professional on Manovratha?', 
                            a: 'You can begin your journey with us by clicking the "Register as a Professional" button on our homepage. We have a rigorous vetting process to ensure quality and safety. Once you submit your credentials (RCI registration, degrees, etc.), our team verifies them before onboarding you into the ecosystem.' 
                        },
                        { 
                            q: 'What kind of supervision and support is available?', 
                            a: 'We understand that caregivers need care too. We provide structured peer supervision groups, case discussion forums, and access to senior mentors. This helps you navigate complex cases, share burdens, and prevent burnout in a supportive, non-judgmental environment.' 
                        },
                        { 
                            q: 'How does the community aspect work?', 
                            a: 'Our community is a safe, closed network exclusively for verified professionals. It serves as a space to discuss clinical challenges, share evidence-based resources, find referrals, and offer emotional support to one another, fostering a culture of collaboration over competition.' 
                        }
                    ] 
                },
                { 
                    cat: 'For Institutions', 
                    items: [
                        { 
                            q: 'How are your institutional programs designed?', 
                            a: 'Our programs are not one-size-fits-all. We custom-design mental health frameworks based on evidence-based practices tailored to the specific culture and needs of your school, college, or corporate environment. We focus on systemic change rather than just one-off sessions.' 
                        },
                        { 
                            q: 'How do you handle implementation and continuity?', 
                            a: 'We handle end-to-end implementation. This includes initial needs assessment, sensitization workshops, setting up ongoing support structures, and providing a counselor dashboard. We ensure continuity so that support doesn’t end after a workshop; we build pathways for long-term care.' 
                        },
                        { 
                            q: 'Is the program compliant with Indian laws?', 
                            a: 'Yes, absolutely. All our institutional programs and protocols are fully compliant with the Mental Healthcare Act 2017, POSH (Prevention of Sexual Harassment) guidelines, and other relevant Indian regulations and ethical guidelines.' 
                        }
                    ] 
                }
            ].map((section, i) => (
                <Reveal key={i} delay={i * 0.1}>
                    <div className="bg-white p-10 rounded-[2.5rem] shadow-card border border-brand-light">
                        <h2 className="font-display text-3xl text-[#6B8E5E] mb-8 border-b border-brand-light pb-4">{section.cat}</h2>
                        <div className="space-y-8">
                            {section.items.map((item, j) => (
                                <div key={j} className="group">
                                    <h3 className="font-bold text-brand-dark mb-3 text-xl">{item.q}</h3>
                                    <p className="text-brand-dark/70 text-lg leading-relaxed">{item.a}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </Reveal>
            ))}
        </div>
    </div>
  );
};

export default FAQ;