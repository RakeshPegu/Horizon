import { Button } from "@/components/ui/button";
import {ChevronDown} from 'lucide-react'
import { useState } from "react";
import { FaF } from "react-icons/fa6";

export default function Faq() {
  const [openIdex, setOpenIndex]  = useState<number|null>(0)
  const faqs =[
    {
      question:"How much does a project cost?",
      answer:" Pricing depends on your project's scope, features, and  complexity. Once we understand your requirements, we'll provide  a clear, fixed quote with no hidden costs."
    },
    {
      question:"How long does a project take?",
      answer:"Most projects are completed within 2–8 weeks, depending on their size and complexity. We'll provide a detailed timeline  before development begins."
    },
    {
      question:"Can you work with my existing website or software?",
      answer:"Yes. We can redesign websites, improve existing software,automate workflows, integrate AI, or add new features without rebuilding everything from scratch."

    },
    {
      question:"Can you integrate AI into my business?",
      answer:" Absolutely. We build AI-powered solutions such as chatbots,virtual assistants, intelligent search, document processing, and workflow automation tailored to your business needs."
    },
    {
      question:"Do you provide support after launch?",
      answer:" Yes. We provide ongoing maintenance, bug fixes, feature enhancements, security updates, and technical support to ensure your solution continues to perform reliably."

    },{
      question:"How do we get started?",
      answer:" Simply contact us through the form below or book a free consultation. We'll discuss your goals, prepare a proposal, and begin development once everything is approved."
    }

  ]
  return (
    <section className="flex flex-col py-20 gap-4  sm:py-40 sm:gap-20">
      {/* Section Heading */}
      <div className="flex  md:justify-end  md:pr-10 gap-2 ">
        <div className="max-w-3xl px-4  mb-12 lg:mb-20 space-y-4">
        <span className="text-sm font-semibold lg:pl-2 tracking-wider uppercase text-muted-foreground">F.A.Q</span>
        <h2 className="text-4xl lg:text-5xl font-bold ">Frequently Asked Questions</h2>

        <p className="text-lg text-muted-foreground leading-relaxed">
          Answers to the most common questions about our services and how we
          work.
        </p>
        </div>
      </div>

      <div className="flex ">
        {/* Left Side */}
        <div className="hidden sm:flex flex-col  items-center sm:px-6  gap-8 sm:flex-1/2 ">
          <h2 className="text-4xl lg:text-5xl font-bold  ">Let's Build Something Great Together</h2>

          <p>
            Whether you're launching a startup, growing your business, or
            exploring AI automation, we're here to help. Tell us about your
            goals, and we'll recommend the right solution for your business.
          </p>

          <Button className={'px-6 py-6'}>Book a Free Consultation</Button>
        </div>

        {/* Right Side */}
        <div className="flex flex-col gap-2 pl-5 sm:px-6  sm:flex-1/2">
          {faqs.map((faq, index)=>{
            const isOpen = openIdex  === index ;
            return (
              <div key={faq.question} className="overflow-hidden rounded-xl  border-2">
               <button
                onClick={()=> setOpenIndex( isOpen ? null : index)}
                 className="flex w-full items-center justify-between p-4 text-left"
                >
                  <span className="text-lg font-medium">
                    {faq.question}
                  </span>
                  <ChevronDown className={`h-5 w-5 transition-transform ${isOpen ? "rotate-180":""}`}/>
                </button>
                {isOpen && (
                  <div className="border-t border-gray-700 px-6 pb-6 pt-4">
                    <p >
                      {faq.answer}
                    </p>
                  </div>
                )}

              </div>
            )
          })}




        </div>
      </div>
    </section>
  );
}