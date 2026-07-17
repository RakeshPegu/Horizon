import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";



export default function Proccess(){
const steps = [
  {
    title: "Discover",
    content:
      "We start by understanding your business, target audience, challenges, and long-term goals. Through research and discussion, we identify opportunities and define the best solution for your needs.",
  },
  {
    title: "Plan",
    content:
      "Based on our findings, we create a clear project roadmap, define milestones, choose the right technologies, and establish a development strategy that keeps your project on track.",
  },
  {
    title: "Build",
    content:
      "Our team designs intuitive interfaces, develops scalable applications, performs rigorous testing, and ensures every feature meets high standards before launch.",
  },
  {
    title: "Improve",
    content:
      "After launch, we continue monitoring performance, fixing issues, implementing new features, and optimizing your product to support your business as it grows.",
  },
];
    return(
        <section className="container w-full px-4 md:px-10 py-16 lg:py-32 " >
          <div className="max-w-3xl mb-12 lg:mb-20 space-y-4 ">
           <span className="text-sm font-semibold tracking-wider uppercase text-muted-foreground ">PROCESS</span>
           <h2 className="text-4xl lg:text-5xl font-bold tracking-tight">How It Works</h2>
           <p className="text-xl text-muted-foreground leading-relaxed ">
            We create custom digital solutions that solve real business problems, 
            improve efficiency, and help companies grow with confidence.
            </p>
            </div>
            <div className="relative mt-20 w-full ">
            <div className="absolute left-1/2 top-0 hidden h-full w-1 -translate-x-1/2 rounded-full bg-gray-700 md:block"/>
            
           <div className="space-y-12  ">
            {steps.map((step, index) => (
              <div
                key={index}
                className={`flex items-center ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Content */}
                <div className="w-full  md:w-1/2">
                  
                  <Card
                    className={`rounded-xl bg-transparent ring-0 p-8 mx-8  shadow-xs${
                      index % 2 === 0 ? " md:mr-12 md:ml-10 lg:mr-12 lg:ml-30" : "md:ml-10 md:mr-12 lg:ml-12 lg:mr-30"
                    }`}
                  >
                    <CardHeader className="text-gray-50">
                        <span className="text-lg w-8 text-center  rounded-full h-8 md:hidden">{index+1}</span>
                        <CardTitle className="sm:text-3xl  font-serif">{step.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-lg text-gray-50">
                        {step.content}
                        </p>
                    </CardContent>
                  </Card>
                </div>

                {/* Timeline Dot */}
                <div className="relative hidden md:flex">
                  <div className="absolute left-1/2 top-1/2 h-10 w-10 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 bg-transparent backdrop-blur-md text-xl flex justify-center items-center shadow-lg " >{index+1}</div>
                </div>

                {/* Empty Side */}
                <div className="hidden md:block md:w-1/2" />
              </div>
            ))}
          </div>

    

            </div>
        </section>
    )
}