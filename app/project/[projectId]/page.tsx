import {
  Target,
  Search,
  PenTool,
  Code2,
  TriangleAlert,
  BarChart3,
  CheckCircle2,
} from "lucide-react";

export default function CaseStudy() {
  return (
    <main className="bg-white text-gray-900">

      {/* Hero */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <span className="text-blue-600 font-semibold uppercase tracking-widest">
          Case Study
        </span>

        <h1 className="text-5xl font-bold mt-4">
          DentalCare Clinic Website
        </h1>

        <p className="text-xl text-gray-600 mt-6 max-w-3xl">
          A modern, SEO-optimized website built to help a local dental clinic
          generate more patient inquiries while providing a smooth booking
          experience across every device.
        </p>

        <div className="grid md:grid-cols-4 gap-6 mt-16">
          <div>
            <p className="text-sm text-gray-500">Industry</p>
            <h3 className="font-semibold mt-1">Healthcare</h3>
          </div>

          <div>
            <p className="text-sm text-gray-500">Duration</p>
            <h3 className="font-semibold mt-1">3 Weeks</h3>
          </div>

          <div>
            <p className="text-sm text-gray-500">Role</p>
            <h3 className="font-semibold mt-1">
              Full Stack Developer
            </h3>
          </div>

          <div>
            <p className="text-sm text-gray-500">Tech Stack</p>
            <h3 className="font-semibold mt-1">
              Next.js • TypeScript • Tailwind
            </h3>
          </div>
        </div>

        <div className="mt-16 h-[550px] rounded-3xl bg-gray-200 flex items-center justify-center">
          Project Screenshot
        </div>
      </section>

      {/* Client */}
      <section className="max-w-5xl mx-auto px-6 py-20">

        <h2 className="text-3xl font-bold mb-6">
          Client Overview
        </h2>

        <p className="text-gray-600 leading-8">
          DentalCare Clinic is a growing dental practice offering preventive,
          cosmetic, orthodontic, and emergency dental services. Their goal was
          to establish a stronger online presence, build trust with new
          patients, and make appointment booking easier.
        </p>

      </section>

      {/* Problem */}
      <section className="bg-gray-50">

        <div className="max-w-6xl mx-auto px-6 py-20">

          <div className="flex items-center gap-3 mb-8">
            <TriangleAlert className="text-red-500" />
            <h2 className="text-3xl font-bold">
              The Challenge
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">

            <div className="p-8 bg-white rounded-xl border">

              <h3 className="font-semibold text-xl mb-4">
                Existing Problems
              </h3>

              <ul className="space-y-4 text-gray-600">
                <li>• Outdated visual design.</li>
                <li>• Poor mobile responsiveness.</li>
                <li>• Slow loading pages.</li>
                <li>• No online appointment booking.</li>
                <li>• Weak SEO structure.</li>
                <li>• Difficult navigation.</li>
              </ul>

            </div>

            <div className="p-8 bg-white rounded-xl border">

              <h3 className="font-semibold text-xl mb-4">
                Project Goals
              </h3>

              <ul className="space-y-4 text-gray-600">
                <li>• Improve user experience.</li>
                <li>• Increase patient inquiries.</li>
                <li>• Build trust through modern branding.</li>
                <li>• Optimize search engine visibility.</li>
                <li>• Deliver a responsive experience.</li>
                <li>• Simplify appointment booking.</li>
              </ul>

            </div>

          </div>

        </div>

      </section>

      {/* Discovery */}
      <section className="max-w-6xl mx-auto px-6 py-20">

        <div className="flex gap-3 items-center mb-6">
          <Search className="text-blue-600" />
          <h2 className="text-3xl font-bold">
            Discovery & Research
          </h2>
        </div>

        <p className="text-gray-600 leading-8">
          Before development, I analyzed competing dental websites, identified
          common user expectations, and mapped the patient's journey from
          landing on the homepage to booking an appointment. This research
          helped prioritize trust-building elements, service clarity, and a
          frictionless booking experience.
        </p>

      </section>

      {/* Design */}
      <section className="bg-gray-50">

        <div className="max-w-6xl mx-auto px-6 py-20">

          <div className="flex gap-3 items-center mb-8">
            <PenTool className="text-purple-600" />
            <h2 className="text-3xl font-bold">
              Design Decisions
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">

            <div className="border rounded-xl p-6 bg-white">
              <h3 className="font-semibold mb-3">
                Visual Identity
              </h3>

              <p className="text-gray-600">
                Clean typography, calming colors, and generous spacing create a
                trustworthy and professional appearance.
              </p>
            </div>

            <div className="border rounded-xl p-6 bg-white">
              <h3 className="font-semibold mb-3">
                Mobile First
              </h3>

              <p className="text-gray-600">
                Every section was designed to provide an excellent experience on
                phones, tablets, and desktops.
              </p>
            </div>

            <div className="border rounded-xl p-6 bg-white">
              <h3 className="font-semibold mb-3">
                Conversion Focus
              </h3>

              <p className="text-gray-600">
                Clear CTAs, simplified navigation, and trust indicators encourage
                visitors to schedule appointments.
              </p>
            </div>

          </div>

        </div>

      </section>

      {/* Development */}
      <section className="max-w-6xl mx-auto px-6 py-20">

        <div className="flex gap-3 items-center mb-8">
          <Code2 className="text-green-600" />
          <h2 className="text-3xl font-bold">
            Development
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">

          <div>

            <h3 className="font-semibold text-xl mb-4">
              Technologies
            </h3>

            <ul className="space-y-3 text-gray-600">
              <li>Next.js</li>
              <li>TypeScript</li>
              <li>Tailwind CSS</li>
              <li>Responsive Design</li>
              <li>SEO Optimization</li>
              <li>Performance Optimization</li>
            </ul>

          </div>

          <div>

            <h3 className="font-semibold text-xl mb-4">
              Features
            </h3>

            <ul className="space-y-3 text-gray-600">
              <li>Appointment Booking</li>
              <li>Service Pages</li>
              <li>Contact Form</li>
              <li>Google Maps Integration</li>
              <li>Fast Loading Pages</li>
              <li>Optimized Images</li>
            </ul>

          </div>

        </div>

      </section>

      {/* Challenge */}
      <section className="bg-gray-50">

        <div className="max-w-5xl mx-auto px-6 py-20">

          <div className="flex items-center gap-3 mb-6">
            <Target className="text-orange-500" />
            <h2 className="text-3xl font-bold">
              Key Challenge
            </h2>
          </div>

          <div className="border rounded-xl p-8 bg-white">

            <h3 className="font-semibold text-xl mb-3">
              Simplifying Appointment Booking
            </h3>

            <p className="text-gray-600 leading-8">
              The clinic wanted an appointment booking experience that was
              simple for patients while remaining easy to manage. The solution
              streamlined the booking process, reduced unnecessary steps, and
              made scheduling intuitive across desktop and mobile devices.
            </p>

          </div>

        </div>

      </section>

      {/* Results */}
      <section className="max-w-6xl mx-auto px-6 py-20">

        <div className="flex gap-3 items-center mb-10">
          <BarChart3 className="text-blue-600" />
          <h2 className="text-3xl font-bold">
            Project Outcomes
          </h2>
        </div>

        <div className="grid md:grid-cols-4 gap-6">

          <div className="border rounded-xl p-8">
            <h3 className="text-4xl font-bold">95+</h3>
            <p className="mt-3 text-gray-600">
              Lighthouse Performance
            </p>
          </div>

          <div className="border rounded-xl p-8">
            <h3 className="text-4xl font-bold">100%</h3>
            <p className="mt-3 text-gray-600">
              Mobile Responsive
            </p>
          </div>

          <div className="border rounded-xl p-8">
            <h3 className="text-4xl font-bold">SEO</h3>
            <p className="mt-3 text-gray-600">
              Search Optimized
            </p>
          </div>

          <div className="border rounded-xl p-8">
            <h3 className="text-4xl font-bold">Fast</h3>
            <p className="mt-3 text-gray-600">
              Optimized User Experience
            </p>
          </div>

        </div>

      </section>

      {/* Tech Stack */}
      <section className="bg-gray-50">

        <div className="max-w-6xl mx-auto px-6 py-20">

          <h2 className="text-3xl font-bold mb-10">
            Technology Stack
          </h2>

          <div className="flex flex-wrap gap-4">

            {[
              "Next.js",
              "TypeScript",
              "Tailwind CSS",
              "React",
              "Vercel",
              "Figma",
            ].map((tech) => (
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

      {/* Conclusion */}
      <section className="max-w-5xl mx-auto px-6 py-20">

        <div className="flex gap-3 items-center mb-6">
          <CheckCircle2 className="text-green-600" />
          <h2 className="text-3xl font-bold">
            Conclusion
          </h2>
        </div>

        <p className="text-gray-600 leading-8">
          This project demonstrates how thoughtful design, modern web
          technologies, and performance optimization can help a healthcare
          business build trust online and provide a better experience for
          potential patients. The result is a scalable, maintainable, and
          conversion-focused website built to support future business growth.
        </p>

      </section>

    </main>
  );
}