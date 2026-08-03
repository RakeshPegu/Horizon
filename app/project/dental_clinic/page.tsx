import {
  Target,
  Search,
  PenTool,
  Code2,
  TriangleAlert,
  BarChart3,
  CheckCircle2,
} from "lucide-react";
import { PortableText } from "@portabletext/react";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";

const PROJECT_QUERY = `*[
  _type == "project"
]{_id, title, header,industry,duration,techs,visual,image, name, role,techStack, description, overview, problem, goal, discover, decision, technologies, features, keychallenge, conclusion }`;

export default async function CaseStudy() {
  const projects = await client.fetch(PROJECT_QUERY);
  
  return (
    <>
      {projects.map((project: any) => (
        <div key={project._id} className="bg-gray-200 md:pb-40 text-gray-900">
          {/* Hero Section */}
          <section className="max-w-7xl mx-auto px-6 py-24">
            <span className="text-muted-foreground font-semibold uppercase tracking-widest">
              Case Study
            </span>

            <h1 className="text-5xl font-bold mt-4">
              {project.header}
            </h1>
 
            <p className="text-xl text-gray-600 mt-6 max-w-3xl">
              A modern, SEO-optimized website built to help a local dental clinic
              generate more patient inquiries while providing a smooth booking
              experience across every device.
            </p>

            <div className="grid md:grid-cols-4 gap-6 mt-16">
              <div>
                <p className="text-sm text-gray-500">Industry</p>
                <h3 className="font-semibold mt-1">{project.industry}</h3>
              </div>

              <div>
                <p className="text-sm text-gray-500">Duration</p>
                <h3 className="font-semibold mt-1">{project.duration}</h3>
              </div>

              <div>
                <p className="text-sm text-gray-500">Role</p>
                <h3 className="font-semibold mt-1">{project.role}</h3>
              </div>

              <div>
                <p className="text-sm text-gray-500">Tech Stack</p>
                <h3 className="font-semibold mt-1">
                  {project.techs}
                </h3>
              </div>
            </div>

            <div className="mt-16 rounded-3xl   flex items-center justify-center">
              <img src={urlFor(project.image).url()}
                alt={`${project.title} interface preview`}
                className="rounded-3xl object-cover "
              />
            </div>
    

          </section>

          {/* Client Overview Section */}
          <section className="max-w-5xl mx-auto px-6 py-20">
            <h2 className="text-3xl font-bold mb-6">Client Overview</h2>

            <div className="text-gray-600 leading-8">
              <PortableText value={project.overview} />
       
            </div>
          </section>

          {/* Problem Section */}
          <section className="bg-gray-50">
            <div className="max-w-6xl mx-auto px-6 py-20">
              <div className="flex items-center gap-3 mb-8">
                <TriangleAlert className="text-red-500" />
                <h2 className="text-3xl font-bold">The Challenge</h2>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="p-8 bg-white rounded-xl border">
                  <h3 className="font-semibold text-xl mb-4">Existing Problems</h3>

                  <ul className="space-y-4 text-gray-600">
                   {project.problem.map((prob:any, index:number)=>(
                    <li key={index}>• {prob}</li>
                   ))}

                  </ul>
                </div>

                <div className="p-8 bg-white rounded-xl border">
                  <h3 className="font-semibold text-xl mb-4">Project Goals</h3>

                  <ul className="space-y-4 text-gray-600">
                    {project.goal.map((goal:any, index:number)=>(
                      <li key={index}>• {goal}</li>

                    ))}
                    
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Discovery Section */}
          <section className="max-w-6xl mx-auto px-6 py-20">
            <div className="flex gap-3 items-center mb-6">
              <Search className="text-blue-600" />
              <h2 className="text-3xl font-bold">Discovery & Research</h2>
            </div>            
              <PortableText value={project.discover}/>            
          </section>

          {/* Design Section */}
          <section className="bg-gray-50">
            <div className="max-w-6xl mx-auto px-6 py-20">
              <div className="flex gap-3 items-center mb-8">
                <PenTool className="text-purple-600" />
                <h2 className="text-3xl font-bold">Design Decisions</h2>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                <div className="border rounded-xl p-6 bg-white">
                  <h3 className="font-semibold mb-3">Visual Identity</h3>

                  <p className="text-gray-600">
                   {project.visual}
                  </p>
                </div>

                <div className="border rounded-xl p-6 bg-white">
                  <h3 className="font-semibold mb-3">Mobile First</h3>

                  <p className="text-gray-600">
                    Every section was designed to provide an excellent experience on
                    phones, tablets, and desktops.
                  </p>
                </div>

                <div className="border rounded-xl p-6 bg-white">
                  <h3 className="font-semibold mb-3">Conversion Focus</h3>

                  <p className="text-gray-600">
                    Clear CTAs, simplified navigation, and trust indicators encourage
                    visitors to schedule appointments.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Development Section */}
          <section className="max-w-6xl mx-auto px-6 py-20">
            <div className="flex gap-3 items-center mb-8">
              <Code2 className="text-green-600" />
              <h2 className="text-3xl font-bold">Development</h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-semibold text-xl mb-4">Technologies</h3>

                <ul className="space-y-3 text-gray-600">
                  {project.technologies.map((technology:any, index:number)=>(
                    <li key={index}>{technology}</li>

                  ))}
                 </ul>
              </div>

              <div>
                <h3 className="font-semibold text-xl mb-4">Features</h3>

                <ul className="space-y-3 text-gray-600">
                  {project.features.map((feature:any, index:number)=>(
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          {/* Key Challenge Section */}
          <section className="bg-gray-50">
            <div className="max-w-5xl mx-auto px-6 py-20">
              <div className="flex items-center gap-3 mb-6">
                <Target className="text-orange-500" />
                <h2 className="text-3xl font-bold">Key Challenge</h2>
              </div>

              <div className="border rounded-xl p-8 bg-white">
                <h3 className="font-semibold text-xl mb-3">
                  Simplifying Appointment Booking
                </h3>

                <div className="text-gray-600 leading-8">
                  <PortableText value={project.keychallenge}/>

                </div>
              </div>
            </div>
          </section>

          {/* Outcomes Section */}
          <section className="max-w-6xl mx-auto px-6 py-20">
            <div className="flex gap-3 items-center mb-10">
              <BarChart3 className="text-blue-600" />
              <h2 className="text-3xl font-bold">Project Outcomes</h2>
            </div>

            <div className="grid md:grid-cols-4 gap-6">
              <div className="border rounded-xl p-8">
                <h3 className="text-4xl font-bold">95+</h3>
                <p className="mt-3 text-gray-600">Lighthouse Performance</p>
              </div>

              <div className="border rounded-xl p-8">
                <h3 className="text-4xl font-bold">100%</h3>
                <p className="mt-3 text-gray-600">Mobile Responsive</p>
              </div>

              <div className="border rounded-xl p-8">
                <h3 className="text-4xl font-bold">SEO</h3>
                <p className="mt-3 text-gray-600">Search Optimized</p>
              </div>

              <div className="border rounded-xl p-8">
                <h3 className="text-4xl font-bold">Fast</h3>
                <p className="mt-3 text-gray-600">Optimized User Experience</p>
              </div>
            </div>
          </section>

          {/* Tech Stack Section */}
          <section className="bg-gray-50">
            <div className="max-w-6xl mx-auto px-6 py-20">
              <h2 className="text-3xl font-bold mb-10">Technology Stack</h2>

              <div className="flex flex-wrap gap-4">
                {project.techStack.map((tech:any) => (
                  <span
                    key={tech}
                    className="px-5 py-3 rounded-full border bg-white"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </section>

          {/* Conclusion Section */}
          <section className="max-w-5xl mx-auto px-6 py-20">
            <div className="flex gap-3 items-center mb-6">
              <CheckCircle2 className="text-green-600" />
              <h2 className="text-3xl font-bold">Conclusion</h2>
            </div>

            <div className="text-gray-600 leading-8">
              <PortableText value={project.conclusion}/>
       
            </div>
          </section>
        </div>
      ))}
    </>
  );
}