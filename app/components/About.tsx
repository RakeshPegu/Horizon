import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check, ArrowRight, Rocket, Building2, TrendingUp } from "lucide-react";

export default function About() {
  const businessTypes = [
    {
      title: "Startups",
      description: "Build your first product",
      icon: Rocket,
      accentColor: "from-sky-500/20 to-blue-600/5",
      borderColor: "hover:border-sky-500/40",
      textColor: "group-hover:text-sky-400",
      iconColor: "text-sky-400 bg-sky-500/10 border-sky-500/20",
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
      icon: Building2,
      accentColor: "from-emerald-500/20 to-teal-600/5",
      borderColor: "hover:border-emerald-500/40",
      textColor: "group-hover:text-emerald-400",
      iconColor: "text-emerald-400 bg-emerald-500/10 border-emerald-500/20",
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
      icon: TrendingUp,
      accentColor: "from-violet-500/20 to-purple-600/5",
      borderColor: "hover:border-violet-500/40",
      textColor: "group-hover:text-violet-400",
      iconColor: "text-violet-400 bg-violet-500/10 border-violet-500/20",
      services: [
        "Process Automation",
        "System Integration",
        "AI Adoption",
      ],
    },
  ];

  return (
    <section id="about" className="w-full  py-16 px-6 sm:px-16 lg:py-32  ">
      {/* Container Track */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start max-w-7xl mx-auto">
        
        {/* Left Column (Sticky Desktop Layout) */}
        <div className="w-full lg:col-span-5 lg:sticky lg:top-32 flex flex-col gap-6">
          <div className="space-y-6">
            <span className="text-xs font-semibold tracking-widest uppercase text-neutral-500">
              What We Do
            </span>
            <h2 className="text-4xl lg:text-5xl font-bold tracking-tight leading-tight">
              We build technology for...
            </h2>
            <p className="text-lg text-neutral-400 leading-relaxed max-w-md">
              Whether you're launching your first product, modernizing your business, or scaling operations, we create software that grows with you.
            </p>
          </div>
          
          <div className="pt-4 hidden lg:block">
            <Button size="lg" className="font-semibold px-6 py-6 group transition-all cursor-pointer border-none  ">
              Contact us
              <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
        </div>

        {/* Right Column (Asymmetric Interactive Bento Grid) */}
        <div className="w-full lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4 auto-rows-fr">
          {businessTypes.map((businessType, index) => {
            const Icon = businessType.icon;
            // The last item spans full width on desktop grids to create layout asymmetry
            const isFullWidth = index === 2;

            return (
              <Card 
                key={index} 
                className={`w-full rounded-3xl border border-neutral-900 bg-neutral-950/40 backdrop-blur-xl transition-all duration-500 shadow-xl group overflow-hidden relative flex flex-col justify-between ${businessType.borderColor} ${isFullWidth ? 'sm:col-span-2' : ''}`}
              >
                {/* Dynamic Contextual Gradient Glow on Hover */}
                <div className={`absolute -inset-px bg-linear-to-br ${businessType.accentColor} opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none blur-xl`} />

                <div>
                  <CardHeader className="p-6 pb-4 relative z-10 flex flex-row items-start justify-between gap-4">
                    <div className="space-y-2">
                      <CardTitle className={`text-xl font-bold text-white transition-colors duration-300 ${businessType.textColor}`}>
                        {businessType.title}
                      </CardTitle>
                      <CardDescription className="text-sm text-neutral-400 leading-snug">
                        {businessType.description}
                      </CardDescription>
                    </div>
                    {/* Semantic Icon Header Container */}
                    <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border transition-transform duration-500 group-hover:scale-110 ${businessType.iconColor}`}>
                      <Icon className="w-5 h-5" />
                    </div>
                  </CardHeader>
                  
                  <CardContent className="p-6 pt-0 relative z-10">
                    <ul className={`grid gap-2.5 ${isFullWidth ? 'grid-cols-1 sm:grid-cols-2' : 'grid-cols-1'}`}>
                      {businessType.services.map((service, indx) => (
                        <li key={indx} className="flex items-center gap-3 text-sm text-neutral-400 transition-colors duration-300 group-hover:text-neutral-300">
                          <Check className="w-4 h-4 text-neutral-600 shrink-0 transition-colors duration-300 group-hover:text-neutral-400" />
                          <span>{service}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </div>

                {/* Micro-interaction footer border line */}
                <div className="h-1 w-full bg-linear-to-r from-transparent via-neutral-800 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left" />
              </Card>
            );
          })}
        </div>

        {/* Mobile-only CTA button */}
        <div className="w-full flex justify-center lg:hidden pt-4">
          <Button size="lg" className="w-full font-semibold py-6 ">
            Contact us
          </Button>
        </div>

      </div>
    </section>
  );
}