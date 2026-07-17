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
      icon: Globe
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
      icon: Workflow
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
      icon: Bot
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
      icon: Code2
    },
  ];

  const ActiveIcon = services[activeTab].icon;

  return (
    <section className="container w-full px-4 md:px-10  py-16 lg:py-32">
      {/* Header section */}
      <div className="max-w-3xl mb-12 lg:mb-20 space-y-4 ">
        <span className="text-sm font-semibold tracking-wider uppercase text-muted-foreground ">Services</span>
        <h2 className="text-4xl lg:text-5xl font-bold tracking-tight">What We Build</h2>
        <p className="text-lg text-muted-foreground leading-relaxed ">
          We create custom digital solutions that solve real business problems, 
          improve efficiency, and help companies grow with confidence.
        </p>
      </div>

      {/* Main Interactive Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12  gap-8  lg:gap-24 items-center">
        
        {/* Left Column: Interactive Tab Selectors */}
        <div className="lg:col-span-5  flex flex-col gap-3">
          {services.map((service, index) => {
            const Icon = service.icon;
            const isActive = activeTab === index;
            return (
              <button
                key={index}
                onClick={() => setActiveTab(index)}
                className={`w-full  flex items-center gap-4 p-5 text-left border-l-2 transition-all duration-300 ${
                  isActive
                    ? "bg-primary/10"
                    : "border-transparent text-muted-foreground hover:border-primary hover:text-muted"
                }`}
              >
                <div className={`p-2 rounded-md ${isActive ? 'bg-primary/5 ' : 'text-muted-foreground'}`}>
                  <Icon className="w-5 h-5 " />
                </div>
                <div className="flex-1 font-serif font-semibold">
                  <h3 className="text-[16px] leading-tight">{service.title}</h3>
                </div>
                <ArrowRight className={`w-4 h-4 transition-transform duration-300 ${
                  isActive ? "translate-x-0 opacity-100" : "-translate-x-2 opacity-0"
                }`} />
              </button>
            );
          })}
        </div>

        {/* Right Column: Dynamic Feature Display Panel */}
        <div className="lg:col-span-6 rounded-2xl bg-foreground  border shadow-2xl border-border/40 p-8 lg:p-12 min-h-95 flex flex-col justify-between transition-all duration-300">
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <ActiveIcon className="w-6 h-6 text-gray-50" />
              </div>
              <h3 className="text-2xl font-bold tracking-tight">
                {services[activeTab].title}
              </h3>
            </div>

            <p className="text-lg text-muted-foreground leading-relaxed">
              {services[activeTab].description}
            </p>

            <div className="h-px bg-border/60 w-full my-6" />

            <ul className="grid grid-cols-1 sm:grid-cols-2   gap-4">
              {services[activeTab].features.map((feature, index) => (
                <li key={index} className="flex items-center text-gray-50 gap-3 text-lg ">
                  <CircleCheck className="w-4 h-4 text-primary shrink-0" />
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