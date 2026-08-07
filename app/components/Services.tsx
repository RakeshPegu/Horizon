import { useState } from "react";
import { Globe, Workflow, Bot, Code2, CircleCheck, ArrowRight } from "lucide-react";

export default function Service() {
  const [activeTab, setActiveTab] = useState(0);

  const services = [
    {
      title: "Custom Websites",
      description: "Modern websites designed to attract customers and convert visitors.",
      features: [
        "Business websites",
        "Landing pages",
        "Web portals",
        "E-commerce",
      ],
      
    },
    {
      title: "Business Automation",
      description: "Remove repetitive work through intelligent workflows.",
      features: [
        "CRM automation",
        "Email automation",
        "Data processing",
        "Internal tools",
      ],
      
    },
    {
      title: "AI Solutions",
      description: "Bring AI into your existing business.",
      features: [
        "AI chatbots",
        "AI assistants",
        "Document analysis",
        "AI search systems",
      ],
      
    },
    {
      title: "Custom Software Development",
      description: "Turn your ideas into scalable products.",
      features: [
        "MVPs",
        "SaaS platforms",
        "Dashboards",
        "Mobile apps",
      ],
      
    },
  ];



  return (
    <section id="service" className="bg-card/85 w-full px-6 sm:px-16 py-16 lg:py-32">
      {/* Header section */}
      <div className="max-w-3xl mb-12 lg:mb-20 space-y-4">
        <span className="text-xs font-semibold tracking-widest uppercase text-muted-foreground">
          Services
        </span>
        <h2 className="text-4xl lg:text-5xl font-bold tracking-tight text-black">
          What We Build
        </h2>
        <p className="text-lg text-muted-foreground leading-relaxed">
          We create custom digital solutions that solve real business problems, 
          improve efficiency, and help companies grow with confidence.
        </p>
      </div>

      {/* Main Interactive Grid Container */}
      <div className="grid w-full rounded-3xl border-2 border-slate-200 p-6 md:p-10 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch max-w-7xl mx-auto shadow-md">
        
        {/* Left Column: High-Contrast Tab Selectors */}
        <div className="lg:col-span-5 flex flex-col gap-3 justify-center">
          {services.map((service, index) => {
             const isActive = activeTab === index;
            return (
              <button
                key={index}
                onClick={() => setActiveTab(index)}
                className={`w-full cursor-pointer flex items-center gap-4 p-5 text-left rounded-2xl  transition-all duration-200 group ${
                  isActive
                    ? "bg-foreground/80  text-white shadow-md shadow-slate-900/20"
                    : "bg-slate-50 border-slate-100 text-slate-700 hover:text-slate-950 hover:bg-slate-100/80 hover:border-slate-200"
                }`}
              >

                
                <div className="flex-1 font-semibold">
                  <h3 className="text-[16px] tracking-tight">{service.title}</h3>
                </div>

                <ArrowRight className={`w-4 h-4 transition-all duration-300 ${
                  isActive 
                    ? "translate-x-0 opacity-100 text-white" 
                    : "-translate-x-2 opacity-0 text-slate-400 group-hover:opacity-100 group-hover:translate-x-0"
                }`} />
              </button>
            );
          })}
        </div>

  
        <div className="lg:col-span-7 rounded-2xl border-2 shadow-2xl  border-foreground/20 bg-card p-8 lg:p-10 flex flex-col justify-between text-slate-900">
          <div className="space-y-6">
            <div className="flex items-center gap-4">
     
              <h3 className="text-2xl font-bold tracking-tight text-slate-950">
                {services[activeTab].title}
              </h3>
            </div>

            <p className="text-base text-slate-600 leading-relaxed max-w-xl font-medium">
              {services[activeTab].description}
            </p>

            <div className="h-0.5 bg-slate-200 w-full my-6" />

            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {services[activeTab].features.map((feature, index) => (
                <li key={index} className="flex items-center  text-slate-800
                   gap-3 text-sm font-semibold">
                  <CircleCheck className="w-5 h-5  text-accent shrink-0" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

      </div>
    </section>
  );
}