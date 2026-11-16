import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata = {
  title: "Privacy Policy | Kivo",
  description: "Privacy policy and data handling practices for Kivo.",
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-[#050505] text-white selection:bg-white/20">
      <div className="max-w-3xl mx-auto px-6 py-20">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-neutral-400 hover:text-white transition-colors mb-12"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </Link>

        <h1 className="text-4xl font-medium tracking-tight mb-4">Privacy Policy</h1>
        <p className="text-sm text-neutral-400 mb-12">Last updated: November 2026</p>

        <div className="space-y-8 text-neutral-300 leading-relaxed font-light">
          <section>
            <h2 className="text-xl font-medium text-white mb-3">1. Information We Collect</h2>
            <p>
              We collect information you provide directly to us when creating an account, building workflows,
              or configuring custom integration endpoints. This includes your name, email address, and encrypted
              API configurations.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-medium text-white mb-3">2. How We Use Your Information</h2>
            <p>
              We use the collected information solely to provide, maintain, and optimize your workflow executions,
              deliver email alerts if configured, and safeguard platform security.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-medium text-white mb-3">3. API Credentials Security</h2>
            <p>
              Any API keys you supply (such as Gemini, OpenAI, or Resend) are encrypted at rest using industry-standard
              AES encryption. Credentials are only decrypted in memory during the execution of your designated workflow tasks.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-medium text-white mb-3">4. Third-Party Model Providers</h2>
            <p>
              When your workflows execute steps targeting third-party AI models (e.g. Google Gemini), data payloads are
              transmitted directly to those providers via their respective secure APIs in accordance with their privacy policies.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-medium text-white mb-3">5. Data Retention & Control</h2>
            <p>
              You maintain full authority over your data. You may delete execution logs, workflow definitions, or your entire
              account at any time directly through your dashboard settings.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-medium text-white mb-3">6. Inquiries</h2>
            <p>
              For privacy inquiries or data requests, please email{" "}
              <a href="mailto:privacy@kivo.codes" className="text-white underline underline-offset-4">
                privacy@kivo.codes
              </a>.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
