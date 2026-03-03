import type { Metadata } from "next";
import Link from "next/link";

const SUPPORT_EMAIL = "support@trackforge.app";
const SUPPORT_MAILTO = `mailto:${SUPPORT_EMAIL}`;

export const metadata: Metadata = {
  title: "Privacy Policy | TrackForge",
  description:
    "Read the TrackForge privacy policy, including what information is collected, how it is used, and how to contact us.",
};

const sections = [
  {
    id: "overview",
    title: "Overview",
    content: (
      <>
        <p>
          TrackForge is a fitness tracking app. We collect only the information
          needed to provide the app experience, such as workout logs and
          progress stats.
        </p>
        <p>
          We do not sell your personal information and we do not share your data
          with advertisers.
        </p>
      </>
    ),
  },
  {
    id: "information-we-collect",
    title: "Information We Collect",
    content: (
      <ul className="space-y-3">
        <li>
          <strong>Account and identifiers:</strong> basic identifiers used to
          sign in and associate your data with your account.
        </li>
        <li>
          <strong>Fitness data you provide:</strong> workouts, exercises,
          sets/reps/weight, notes, routines, and similar training details.
        </li>
        <li>
          <strong>Progress data:</strong> computed stats like streaks, PR
          counts, and charts derived from your logs.
        </li>
        <li>
          <strong>Device and diagnostics:</strong> basic app diagnostics such as
          crash logs to improve reliability.
        </li>
        <li>
          <strong>Optional:</strong> if you choose to track bodyweight, that
          information is stored with your account.
        </li>
      </ul>
    ),
  },
  {
    id: "how-we-use-information",
    title: "How We Use Information",
    content: (
      <ul className="space-y-3">
        <li>Provide core features like logging, routines, and analytics.</li>
        <li>Personalize your experience, such as showing recent sessions.</li>
        <li>Maintain app security, prevent abuse, and debug issues.</li>
        <li>Communicate with you about support requests.</li>
      </ul>
    ),
  },
  {
    id: "sharing",
    title: "Sharing",
    content: (
      <>
        <p>
          We do not sell your personal information. We share data only in the
          limited cases below:
        </p>
        <ul className="mt-4 space-y-3">
          <li>
            Service providers that help run the app, such as infrastructure,
            analytics, and customer support providers.
          </li>
          <li>
            Legal disclosures if required to comply with law or protect users
            and the service.
          </li>
          <li>
            With your consent, when you explicitly choose to share something.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: "subscriptions",
    title: "Subscriptions",
    content: (
      <>
        <p>
          TrackForge may offer optional paid subscriptions. Purchases are
          processed by Apple through the App Store.
        </p>
        <p>
          We use RevenueCat to help manage subscriptions. RevenueCat may process
          transaction-related information, such as product identifiers and
          purchase status, to validate entitlements.
        </p>
        <p>
          Payment details are handled by Apple. We do not receive your full
          payment card information.
        </p>
      </>
    ),
  },
  {
    id: "security",
    title: "Security",
    content: (
      <p>
        We use reasonable administrative, technical, and physical safeguards to
        protect your information. No method of transmission or storage is 100%
        secure, but we work to protect your data.
      </p>
    ),
  },
  {
    id: "data-retention",
    title: "Data Retention",
    content: (
      <p>
        We retain your information for as long as your account is active or as
        needed to provide the service. You may request deletion of your account
        data, if the app provides this feature, or contact us for help.
      </p>
    ),
  },
  {
    id: "your-choices",
    title: "Your Choices",
    content: (
      <ul className="space-y-3">
        <li>Access and update your workout data within the app.</li>
        <li>Request deletion of your account or data where available.</li>
        <li>Uninstall the app to stop data collection on your device.</li>
      </ul>
    ),
  },
  {
    id: "children",
    title: "Children",
    content: (
      <p>
        TrackForge is not directed to children under 13. We do not knowingly
        collect personal information from children.
      </p>
    ),
  },
  {
    id: "changes",
    title: "Changes",
    content: (
      <p>
        We may update this policy from time to time. If we make material
        changes, we will update the effective date above.
      </p>
    ),
  },
  {
    id: "contact",
    title: "Contact",
    content: (
      <p>
        If you have questions about this policy, contact us at{" "}
        <a
          href={SUPPORT_MAILTO}
          className="font-medium text-rose-300 underline decoration-rose-400/50 underline-offset-4"
        >
          {SUPPORT_EMAIL}
        </a>
        .
      </p>
    ),
  },
];

export default function PrivacyPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#06070d] text-white">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-x-0 top-0 h-[26rem] bg-[radial-gradient(circle_at_top,rgba(244,63,94,0.22),transparent_55%)]" />
        <div className="absolute left-[-8rem] top-36 h-72 w-72 rounded-full bg-pink-500/10 blur-3xl" />
      </div>

      <section className="mx-auto max-w-5xl px-6 py-16 md:px-10 lg:py-20">
        <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-7 shadow-[0_25px_80px_rgba(0,0,0,0.28)] backdrop-blur md:p-10">
          <Link
            href="/"
            className="inline-flex items-center rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-white/70 transition hover:bg-white/[0.08]"
          >
            Back to home
          </Link>

          <div className="mt-8 border-b border-white/10 pb-8">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-rose-300/85">
              Privacy Policy
            </p>
            <h1 className="mt-3 text-4xl font-semibold tracking-[-0.05em] text-white md:text-5xl">
              TrackForge Privacy Policy
            </h1>
            <p className="mt-4 text-base text-white/72">
              Effective date: February 13, 2026
            </p>
            <p className="mt-4 max-w-3xl text-base leading-7 text-white/68">
              This policy explains what information TrackForge collects, how it
              is used, and the choices you have. If you have questions, contact
              us at{" "}
              <a
                href={SUPPORT_MAILTO}
                className="font-medium text-rose-300 underline decoration-rose-400/50 underline-offset-4"
              >
                {SUPPORT_EMAIL}
              </a>
              .
            </p>
          </div>

          <div className="mt-8 grid gap-8 lg:grid-cols-[18rem_1fr]">
            <aside className="rounded-[1.5rem] border border-white/10 bg-black/20 p-5 lg:sticky lg:top-8 lg:self-start">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-white/60">
                On This Page
              </p>
              <nav className="mt-4 space-y-3">
                {sections.map((section) => (
                  <a
                    key={section.id}
                    href={`#${section.id}`}
                    className="block text-sm text-white/68 transition hover:text-white"
                  >
                    {section.title}
                  </a>
                ))}
              </nav>
            </aside>

            <div className="space-y-6">
              {sections.map((section) => (
                <section
                  key={section.id}
                  id={section.id}
                  className="rounded-[1.5rem] border border-white/10 bg-white/[0.03] p-6"
                >
                  <h2 className="text-2xl font-semibold tracking-[-0.03em] text-white">
                    {section.title}
                  </h2>
                  <div className="mt-4 space-y-4 text-base leading-7 text-white/68">
                    {section.content}
                  </div>
                </section>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
