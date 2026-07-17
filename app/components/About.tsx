import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check, ArrowRight } from "lucide-react";

export default function About() {
  const businessTypes = [
    {
      title: "Startups",
      description: "Build your first product",
      services: [
        "MVP Development",
        "SaaS Platforms",
        "Product Prototypes",
        "AI Features",
      ],
    },
    {
      title: "Small Businesses",
      description: "Modernize your operations",
      services: [
        "Business Websites",
        "Customer Portals",
        "Automation Systems",
        "Internal Tools",
      ],
    },
    {
      title: "Growing Companies",
      description: "Scale confidently",
      services: [
        "Process Automation",
        "System Integration",
        "AI Adoption",
      ],
    },
  ];

  return (
    <section className="w-full py-16 px-6 sm:px-16 lg:py-32 bg-neutral-950 text-neutral-100">
      {/* Container Track */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-stretch">
        
        {/* Sticky Left Column (Intro) */}
        <div className="relative w-full">
          {/* h-fit stops this element from expanding to full row height, allowing sticky to work */}
          <div className="lg:sticky lg:top-28 flex flex-col gap-6 h-fit w-full">
            <div className="space-y-6">
              <span className="text-sm font-semibold tracking-wider uppercase">
                What We Do
              </span>
              <h2 className="text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight">
                We build technology for...
              </h2>
              <p className="text-lg text-neutral-400 leading-relaxed max-w-md">
                Whether you're launching your first product, modernizing your business, or scaling operations, we create software that grows with you.
              </p>
            </div>
            
            <div className="pt-4 hidden lg:block">
              <Button size="lg" className="rounded-none font-semibold  px-6 py-6 group transition-all cursor-pointer border-none">
                Contact us
                <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>
          </div>
        </div>

        {/* Right Column (Staggered Cards) */}
        <div className="flex flex-col gap-6 w-full">
          {businessTypes.map((businessType, index) => (
            <Card 
              key={index} 
              className="w-full rounded-2xl border border-neutral-800 bg-neutral-900/40 backdrop-blur-sm shadow-xl transition-all duration-300 hover:border-neutral-700 group"
            >
              <CardHeader className="pb-4">
                <CardTitle className="text-2xl font-bold text-white transition-colors ">
                  {businessType.title}
                </CardTitle>
                <CardDescription className="text-base text-neutral-400">
                  {businessType.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {businessType.services.map((service, indx) => (
                    <li key={indx} className="flex items-center gap-2.5 text-[16px] text-neutral-300">
                      <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full  border border-amber-500/20">
                        <Check className="w-3 h-3 text-green-700 " />
                      </div>
                      <span>{service}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Mobile-only CTA button */}
        <div className="w-full flex justify-center lg:hidden pt-4">
          <Button size="lg" className="w-full sm:w-auto rounded-full bg-amber-500 text-black font-semibold hover:bg-amber-400 px-6 py-6 transition-all cursor-pointer border-none">
            Contact us
          </Button>
        </div>

      </div>
    </section>
  );
}