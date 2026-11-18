
import type{ Metadata } from "next";
import Link from "next/link";
export const metadata: Metadata = {
  title: 'Privacy Policy | InnovHubs',
  description: 'Read our privacy policy to understand how we collect, use, and protect your personal information.',
  robots: {
    index: true,
    follow: true,
  },
};
export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen bg-white px-6 py-20 text-gray-800">
      <div className="mx-auto max-w-3xl">
        {/* Header */}
        <div className="mb-12 border-b border-gray-200 pb-8">
          <p className="mb-3 text-sm font-medium uppercase tracking-widest text-gray-600">
            Legal
          </p>

          <h1 className="mb-4 text-4xl font-bold tracking-tight text-gray-950 sm:text-5xl">
            Privacy Policy
          </h1>

          <p className="text-sm text-gray-500">
            Last Updated: November 18, 2026
          </p>
        </div>

        {/* Introduction */}
        <div className="space-y-10 text-[15px] leading-7 text-gray-600">
          <p>
            At <strong className="text-gray-900">InnovHubs</strong>, we respect
            your privacy and are committed to protecting your personal
            information. This Privacy Policy explains what information we
            collect, why we collect it, and how we use and protect it when you
            visit our website or schedule a meeting with us.
          </p>

          {/* Section 1 */}
          <section>
            <h2 className="mb-4 text-xl font-semibold text-gray-950">
              1. Information We Collect
            </h2>

            <p className="mb-4">
              We collect minimal personal information to communicate with
              potential clients and schedule meetings.
            </p>

            <p className="mb-3">
              The information we may collect includes:
            </p>

            <ul className="list-disc space-y-2 pl-6">
              <li>
                <strong className="text-gray-900">Email Address:</strong> When
                you schedule a meeting or request a consultation through our
                website, we collect your email address to communicate with you.
              </li>
            </ul>

            <p className="mt-4">
              We do not intentionally collect sensitive personal information
              through our meeting scheduling process.
            </p>
          </section>

          {/* Section 2 */}
          <section>
            <h2 className="mb-4 text-xl font-semibold text-gray-950">
              2. How We Use Your Information
            </h2>

            <p className="mb-4">
              We use your email address only for legitimate business
              communication, including:
            </p>

            <ul className="list-disc space-y-2 pl-6">
              <li>Scheduling and confirming meetings.</li>
              <li>Sending meeting-related updates or reminders.</li>
              <li>Following up on your inquiries or consultation requests.</li>
              <li>
                Communicating about our services when relevant to your inquiry.
              </li>
            </ul>

            <p className="mt-4">
              We do not use your email address for unrelated marketing
              campaigns without an appropriate basis or consent where required
              by law.
            </p>
          </section>

          {/* Section 3 */}
          <section>
            <h2 className="mb-4 text-xl font-semibold text-gray-950">
              3. Sharing of Information
            </h2>

            <p className="mb-4">
              We respect your privacy and do not sell, rent, or trade your
              personal information to third parties.
            </p>

            <p className="mb-4">
              Your email address may be processed by trusted third-party
              service providers when necessary to operate our website, manage
              meeting bookings, or send communications.
            </p>

            <p>
              These providers are expected to handle your information securely
              and only for the purposes for which they are engaged.
            </p>
          </section>

          {/* Section 4 */}
          <section>
            <h2 className="mb-4 text-xl font-semibold text-gray-950">
              4. Data Storage and Security
            </h2>

            <p className="mb-4">
              We take reasonable measures to protect your email address
              against unauthorized access, disclosure, alteration, or misuse.
            </p>

            <p>
              We retain your information only for as long as necessary to
              manage your meeting requests, follow-up communications, and
              legitimate business requirements, unless a longer retention
              period is required by law.
            </p>
          </section>

          {/* Section 5 */}
          <section>
            <h2 className="mb-4 text-xl font-semibold text-gray-950">
              5. Cookies and Website Data
            </h2>

            <p className="mb-4">
              Our website may use essential cookies or similar technologies
              required for its functionality and security.
            </p>

            <p>
              Our hosting or infrastructure providers may also process basic
              technical information, such as IP addresses and browser
              information, as part of normal website operations.
            </p>
          </section>

          {/* Section 6 */}
          <section>
            <h2 className="mb-4 text-xl font-semibold text-gray-950">
              6. Your Privacy Rights
            </h2>

            <p className="mb-4">You have the right to:</p>

            <ul className="list-disc space-y-2 pl-6">
              <li>Request access to the personal information we hold about you.</li>
              <li>Request correction of inaccurate information.</li>
              <li>
                Request deletion of your email address, subject to applicable
                legal requirements.
              </li>
              <li>
                Withdraw your consent to further email communications where
                applicable.
              </li>
              <li>
                Ask questions about how your information is being used.
              </li>
            </ul>

            <p className="mt-4">
              To exercise these rights, contact us using the email address
              below.
            </p>
          </section>

          {/* Section 7 */}
          <section>
            <h2 className="mb-4 text-xl font-semibold text-gray-950">
              7. Third-Party Services
            </h2>

            <p className="mb-4">
              Our website may use third-party tools to facilitate meeting
              scheduling, website hosting, and email communication.
            </p>

            <p>
              These services may process information according to their own
              privacy policies. We encourage you to review their policies
              when using their services.
            </p>
          </section>

          {/* Section 8 */}
          <section>
            <h2 className="mb-4 text-xl font-semibold text-gray-950">
              8. Changes to This Privacy Policy
            </h2>

            <p className="mb-4">
              We may update this Privacy Policy from time to time to reflect
              changes in our business practices, website functionality, or
              applicable legal requirements.
            </p>

            <p>
              Any updates will be published on this page along with the
              revised "Last Updated" date.
            </p>
          </section>

          {/* Section 9 */}
          <section>
            <h2 className="mb-4 text-xl font-semibold text-gray-950">
              9. Contact Us
            </h2>

            <p className="mb-5">
              If you have questions, concerns, or requests regarding this
              Privacy Policy or how we handle your personal information,
              please contact us:
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
                  innovhubs722@gmail.com
                </a>
              </p>
            </div>
          </section>

          <p className="border-t border-gray-200 pt-8 text-sm text-gray-500">
            We appreciate your trust in InnovHubs and are committed to
            respecting your privacy.
          </p>
        </div>
      </div>
    </main>
  );
}
