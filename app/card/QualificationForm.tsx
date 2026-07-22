import { Button } from "@/components/ui/button";
import { X } from "lucide-react";

type HandleFormState = {
  formState: boolean;
  handleFormState: () => void;
};

export default function QualificationForm({
  formState,
  handleFormState,
}: HandleFormState) {

  return (
    <section
      className={`
        fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-8
        bg-black/70 backdrop-blur-sm
        transition-all duration-500 ease-in-out
        ${
          formState
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }
      `}
    >
      <div
        className={`
          relative w-full max-w-6xl max-h-[85vh] top-4 my-auto overflow-y-auto rounded-3xl
          bg-white shadow-2xl
          transition-all duration-500 ease-in-out
          ${
            formState
              ? "translate-y-0 scale-100"
              : "translate-y-8 scale-95"
          }
        `}
      >
        {/* Close Button - Fixed position inside modal scroll boundary */}
        <button
          onClick={handleFormState}
          aria-label="Close modal"
          className="sticky  top-2   z-20 float-right -mb-10 mr-4 rounded-full bg-zinc-800/80 p-2 text-white backdrop-blur-md transition hover:bg-zinc-900 sm:top-2  md:top-4 sm:mr-6 lg:bg-zinc-100 lg:text-zinc-600 lg:hover:bg-zinc-200"
        >
          <X className="h-5 w-5 sm:h-6 sm:w-6" />
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-2">
          {/* Left Side (Info) */}
          <div className=" hidden lg:flex  flex-col justify-center bg-zinc-900 p-6 sm:p-8 lg:p-12 text-white">
            <span className="mb-3 text-xs sm:text-sm uppercase tracking-[0.2em] text-zinc-400 font-semibold">
              Let's Build Something Great
            </span>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
              Book a <br className="hidden sm:inline" /> Free Consultation
            </h2>

            <p className="mt-4 sm:mt-6 text-base sm:text-lg leading-relaxed text-zinc-300">
              Tell me about your business and your goals. We'll discuss your
              website, AI integrations, automation, timeline, and budget.
            </p>

            <div className="mt-8 lg:mt-12 space-y-6">
              <div className="flex items-start gap-4">
                <div className="h-3 w-3 rounded-full bg-green-500 mt-1.5 shrink-0" />
                <div>
                  <h3 className="font-semibold text-zinc-100">
                    30-minute strategy session
                  </h3>
                  <p className="text-sm text-zinc-400">
                    Completely free with no obligations.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="h-3 w-3 rounded-full bg-green-500 mt-1.5 shrink-0" />
                <div>
                  <h3 className="font-semibold text-zinc-100">
                    Response within 24 hours
                  </h3>
                  <p className="text-sm text-zinc-400">
                    You'll hear back quickly.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="h-3 w-3 rounded-full bg-green-500 mt-1.5 shrink-0" />
                <div>
                  <h3 className="font-semibold text-zinc-100">
                    Personalized recommendations
                  </h3>
                  <p className="text-sm text-zinc-400">
                    Based on your business goals.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side (Form) */}
          <div className="flex items-center justify-center p-6 sm:p-8 lg:p-10 bg-white">
            <form className="w-full max-w-xl space-y-5 sm:space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid gap-5 sm:grid-cols-2">
                {/* Name */}
                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="name"
                    className="text-sm font-medium text-zinc-700"
                  >
                    Name *
                  </label>
                  <input
                    id="name"
                    type="text"
                    placeholder="John Smith"
                    required
                    className="rounded-xl border border-zinc-300 bg-zinc-50 px-4 py-3 text-zinc-900 placeholder:text-zinc-400 outline-none transition  focus:bg-white focus:ring-1 "
                  />
                </div>

                {/* Email */}
                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="email"
                    className="text-sm font-medium text-zinc-700"
                  >
                    Work Email *
                  </label>
                  <input
                    id="email"
                    type="email"
                    placeholder="john@company.com"
                    required
                    className="rounded-xl border border-zinc-300 bg-zinc-50 px-4 py-3 text-zinc-900 placeholder:text-zinc-400 outline-none transition  focus:bg-white focus:ring-1 "
                  />
                </div>

                {/* Company */}
                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="organization"
                    className="text-sm font-medium text-zinc-700"
                  >
                    Company / Startup
                  </label>
                  <input
                    id="organization"
                    type="text"
                    placeholder="Horizon"
                    className="rounded-xl border border-zinc-300 bg-zinc-50 px-4 py-3 text-zinc-900 placeholder:text-zinc-400 outline-none transition  focus:bg-white focus:ring-1 "
                  />
                </div>

                {/* Budget */}
                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="budget"
                    className="text-sm font-medium text-zinc-700"
                  >
                    Budget Range
                  </label>
                  <select
                    id="budget"
                    defaultValue=""
                    className={`rounded-xl border border-zinc-300 bg-zinc-50 px-4 py-3 text-zinc-900 outline-none transition focus:border-none focus:bg-white focus:ring-1 focus:ring-zinc-900`}
                  >
                    <option value=""  disabled hidden>
                      Select budget
                    </option>
                    <option value="1k-3k">$1k - $3k</option>
                    <option value="3k-5k">$3k - $5k</option>
                    <option value="5k-10k">$5k - $10k</option>
                    <option value="10k+">$10k+</option>
                  </select>
                </div>
              </div>

              {/* Message */}
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="need"
                  className="text-sm font-medium text-zinc-700"
                >
                  What do you need?
                </label>
                <textarea
                  id="need"
                  rows={4}
                  placeholder="Describe your website, AI solution, automation, or any ideas you'd like to discuss..."
                  className="resize-none rounded-xl border border-zinc-300 bg-zinc-50 px-4 py-3 text-zinc-900 placeholder:text-zinc-400 outline-none transition  focus:bg-white focus:ring-1 "
                />
              </div>

              {/* Checkbox */}
              <div className="flex items-start gap-3">
                <input
                  id="agree"
                  type="checkbox"
                  className="mt-1 h-4 w-4 rounded border-zinc-300 text-zinc-900 focus:ring-zinc-900 cursor-pointer"
                />
                <label
                  htmlFor="agree"
                  className="text-sm text-zinc-600 cursor-pointer select-none"
                >
                  I agree to be contacted regarding my project.
                </label>
              </div>

              {/* Submit */}
              <Button className="h-12 w-full rounded-xl text-base font-medium bg-zinc-900  text-white hover:bg-zinc-800 transition ">
                Continue to Schedule →
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}