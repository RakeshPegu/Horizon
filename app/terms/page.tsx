
import type{ Metadata } from "next";
import Link from "next/link";
export const metadata: Metadata = {
  title: 'Terms and Conditions | InnovHubs',
  description: 'Review the Terms and Conditions governing your use of InnovHubs websites, workflow automation tools, and AI-powered business solutions.',
  robots: {
    index: true,
    follow: true,
  },
};
export default function TermsAndConditions() {
  return (
    <main className="min-h-screen bg-white px-6 py-20 text-gray-800">
      <div className="mx-auto max-w-3xl">
        {/* Header */}
        <div className="mb-12 border-b border-gray-200 pb-8">
          <p className="mb-3 text-sm font-medium uppercase tracking-widest text-gray-700">
            Legal
          </p>

          <h1 className="mb-4 text-4xl font-bold tracking-tight text-gray-950 sm:text-5xl">
            Terms & Conditions
          </h1>

          <p className="text-sm text-gray-500">
            Last Updated: November 18, 2026
          </p>
        </div>

        <div className="space-y-10 text-[15px] leading-7 text-gray-600">
          {/* Introduction */}
          <section>
            <p>
              Welcome to <strong className="text-gray-900">InnovHubs</strong>.
              These Terms & Conditions govern your access to and use of our
              website and services. By accessing our website or engaging with
              our services, you agree to these terms.
            </p>
            <p className="mt-4">
              If you do not agree with any part of these terms, please
              discontinue using our website and services.
            </p>
          </section>

          {/* Section 1 */}
          <section>
            <h2 className="mb-4 text-xl font-semibold text-gray-950">
              1. About InnovHubs
            </h2>
            <p>
              InnovHubs is a digital solutions agency providing services such
              as website development, custom web applications, dashboards,
              business automation, and related technology solutions.
            </p>
            <p className="mt-4">
              The availability, scope, and delivery of services depend on
              individual project requirements and mutually agreed terms.
            </p>
          </section>

          {/* Section 2 */}
          <section>
            <h2 className="mb-4 text-xl font-semibold text-gray-950">
              2. Use of Our Website
            </h2>
            <p>You agree to use our website only for lawful purposes. You must not:</p>
            <ul className="mt-4 list-disc space-y-2 pl-6">
              <li>Use the website for fraudulent or unlawful activities.</li>
              <li>Attempt to gain unauthorized access to our systems.</li>
              <li>Disrupt or interfere with the website's functionality.</li>
              <li>Submit false, misleading, or harmful information.</li>
              <li>Copy or misuse our website content without permission.</li>
            </ul>
          </section>

          {/* Section 3 */}
          <section>
            <h2 className="mb-4 text-xl font-semibold text-gray-950">
              3. Consultations and Meeting Scheduling
            </h2>
            <p>
              Our website may allow visitors to schedule consultations or
              meetings with our team.
            </p>
            <ul className="mt-4 list-disc space-y-2 pl-6">
              <li>
                You are responsible for providing an accurate email address
                when scheduling a meeting.
              </li>
              <li>
                Meeting requests are subject to availability and confirmation.
              </li>
              <li>
                We may contact you regarding your scheduled meeting or
                consultation request.
              </li>
              <li>
                Scheduling a consultation does not create a contractual
                obligation to purchase our services.
              </li>
            </ul>
          </section>

          {/* Section 4 */}
          <section>
            <h2 className="mb-4 text-xl font-semibold text-gray-950">
              4. Services and Project Agreements
            </h2>
            <p>
              All project-related services are subject to a separate agreement
              between InnovHubs and the client.
            </p>
            <p className="mt-4">
              Project scope, deliverables, timelines, revisions, pricing, and
              payment terms will be discussed and agreed upon before work
              begins.
            </p>
            <p className="mt-4">
              Any additional features or changes outside the agreed project
              scope may require additional charges and revised delivery
              timelines.
            </p>
          </section>

          {/* Section 5 */}
          <section>
            <h2 className="mb-4 text-xl font-semibold text-gray-950">
              5. Payments and Refunds
            </h2>
            <p>
              Payment terms, project costs, and payment schedules will be
              communicated and mutually agreed upon before a project begins.
            </p>
            <p className="mt-4">
              Any applicable advance payments, milestone payments, refunds,
              or cancellation conditions will be governed by the individual
              project agreement.
            </p>
          </section>

          {/* Section 6 */}
          <section>
            <h2 className="mb-4 text-xl font-semibold text-gray-950">
              6. Intellectual Property
            </h2>
            <p>
              Unless otherwise agreed in writing, all original content,
              branding, designs, code, and materials displayed on the InnovHubs
              website belong to InnovHubs or their respective owners.
            </p>
            <p className="mt-4">
              Clients' ownership and usage rights for project deliverables
              will be defined in the applicable project agreement.
            </p>
            <p className="mt-4">
              You may not reproduce, distribute, modify, or commercially
              exploit our website content without prior written permission.
            </p>
          </section>

          {/* Section 7 */}
          <section>
            <h2 className="mb-4 text-xl font-semibold text-gray-950">
              7. Third-Party Services
            </h2>
            <p>
              Our services may involve third-party platforms, APIs, hosting
              providers, software, or integrations.
            </p>
            <p className="mt-4">
              InnovHubs is not responsible for interruptions, changes, pricing
              modifications, or service failures caused by independent
              third-party providers, except where applicable law provides
              otherwise.
            </p>
          </section>

          {/* Section 8 */}
          <section>
            <h2 className="mb-4 text-xl font-semibold text-gray-950">
              8. Limitation of Liability
            </h2>
            <p>
              To the extent permitted by applicable law, InnovHubs shall not
              be liable for indirect, incidental, or consequential damages
              arising from the use of our website or services.
            </p>
            <p className="mt-4">
              Nothing in these terms excludes or limits liability that cannot
              legally be excluded or limited under applicable law.
            </p>
          </section>

          {/* Section 9 */}
          <section>
            <h2 className="mb-4 text-xl font-semibold text-gray-950">
              9. Changes to These Terms
            </h2>
            <p>
              We reserve the right to update or modify these Terms & Conditions
              at any time. Changes will become effective once published on
              this page.
            </p>
            <p className="mt-4">
              Continued use of our website after changes are published
              constitutes acceptance of the updated terms, to the extent
              permitted by applicable law.
            </p>
          </section>

          {/* Section 10 */}
          <section>
            <h2 className="mb-4 text-xl font-semibold text-gray-950">
              10. Governing Law
            </h2>
            <p>
              These Terms & Conditions shall be governed by the laws of India.
              Any disputes arising in connection with these terms shall be
              subject to the jurisdiction of the competent courts in India,
              subject to applicable law.
            </p>
          </section>

          {/* Section 11 */}
          <section>
            <h2 className="mb-4 text-xl font-semibold text-gray-950">
              11. Contact Us
            </h2>
            <p className="mb-5">
              If you have any questions regarding these Terms & Conditions,
              you can contact us:
            </p>

            <div className="space-y-2 rounded-xl border border-gray-200 bg-gray-50 p-6">
              <p>
                <strong className="text-gray-900">Company:</strong> InnovHubs
              </p>
              <p>
                <strong className="text-gray-900">Website:</strong>{" "}
                <Link
                  href="https://www.innovhubs.com"
                  className="text-blue-600 hover:underline"
                >
                  www.innovhubs.com
                </Link>
              </p>
              <p>
                <strong className="text-gray-900">Email:</strong>{" "}
                <a
                  href="mailto:YOUR_EMAIL@example.com"
                  className="text-blue-600 hover:underline"
                >
                  YOUR_EMAIL@example.com
                </a>
              </p>
            </div>
          </section>

          {/* Footer */}
          <p className="border-t border-gray-200 pt-8 text-sm text-gray-500">
            Thank you for choosing InnovHubs. We look forward to working with
            you.
          </p>
        </div>
      </div>
    </main>
  );
}
