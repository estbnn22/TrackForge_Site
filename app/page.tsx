import Image from "next/image";
import Link from "next/link";

const APP_STORE_URL = "https://apps.apple.com/us/app/trackforge/id6759009365";
const SUPPORT_EMAIL = "support@trackforge.app";
const SUPPORT_MAILTO = `mailto:${SUPPORT_EMAIL}`;

const proofPoints = [
  "Log workouts and rest days without breaking flow.",
  "See readiness, streaks, and load before your next session.",
  "Keep routines, rewards, and progress inside one system.",
];

const showcaseShots = [
  {
    src: "/trackforge/1.png",
    alt: "TrackForge dashboard poster highlighting streaks and daily activity",
    title: "Momentum on one screen",
    detail: "Open to the exact signal you need before you train.",
    className: "sm:row-span-2 sm:translate-y-10",
    priority: true,
  },
  {
    src: "/trackforge/3.png",
    alt: "TrackForge progress poster showing charts and muscle balance",
    title: "Progress made obvious",
    detail: "Charts and focus data turn recent training into a clear read.",
    className: "sm:-translate-x-4",
  },
  {
    src: "/trackforge/5.png",
    alt: "TrackForge cards poster showing unlockable rewards",
    title: "Consistency gets reinforced",
    detail: "Rewards make the routine feel earned instead of repetitive.",
    className: "sm:translate-x-5 sm:-translate-y-3",
  },
];

const featureCards = [
  {
    eyebrow: "Sessions",
    title: "Track your week without the usual clutter.",
    description:
      "Workouts and recovery live in the same timeline, so you can scan a full week of training without jumping between disconnected views.",
    src: "/trackforge/2.png",
    alt: "TrackForge sessions poster showing workouts and rest days",
  },
  {
    eyebrow: "Insights",
    title: "Know when to push and when to back off.",
    description:
      "Recent workload, body-part readiness, and recovery cues make the next training decision easier to trust.",
    src: "/trackforge/6.png",
    alt: "TrackForge recovery poster showing readiness insights",
  },
  {
    eyebrow: "Routines",
    title: "Reuse what works and get back under the bar faster.",
    description:
      "Saved templates keep repeatable training blocks ready to go, so you spend less time rebuilding sessions from scratch.",
    src: "/trackforge/4.png",
    alt: "TrackForge routines poster showing reusable workout templates",
  },
];

const workflow = [
  {
    step: "01",
    title: "Open with context",
    description:
      "See streak health, activity, and what is ready to train before you log anything.",
  },
  {
    step: "02",
    title: "Capture the work",
    description:
      "Store sessions, rest days, and routines in one system that stays readable later.",
  },
  {
    step: "03",
    title: "Adjust the next week",
    description:
      "Use progress and readiness views to decide what needs more load and what needs recovery.",
  },
];

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden text-white">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-x-0 top-0 h-[34rem] bg-[radial-gradient(circle_at_top,rgba(255,59,91,0.24),transparent_54%)]" />
        <div className="absolute right-[-10rem] top-24 h-[30rem] w-[30rem] rounded-full bg-[#ff4d6d]/10 blur-3xl" />
        <div className="absolute left-[-8rem] top-[30rem] h-[24rem] w-[24rem] rounded-full bg-[#7a0f24]/30 blur-3xl" />
      </div>

      <section className="mx-auto max-w-7xl px-6 pb-14 pt-8 md:px-10 lg:pb-24 lg:pt-10">
        <div className="flex items-center justify-between rounded-full border border-white/10 bg-white/[0.04] px-4 py-3 shadow-[0_12px_40px_rgba(0,0,0,0.2)] backdrop-blur">
          <Link
            href="/"
            className="text-sm font-semibold uppercase tracking-[0.24em] text-white/84"
          >
            TrackForge
          </Link>
          <div className="flex items-center gap-3">
            <a
              href="/privacy"
              className="hidden text-sm text-white/62 transition hover:text-white md:block"
            >
              Privacy
            </a>
            <a
              href={SUPPORT_MAILTO}
              className="hidden rounded-full border border-white/12 bg-white/[0.05] px-4 py-2 text-sm font-medium text-white/84 transition hover:bg-white/[0.09] md:inline-flex"
            >
              Support
            </a>
            <a
              href={APP_STORE_URL}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-full border border-[#ff6b84]/30 bg-[#ff4d6d] px-4 py-2 text-sm font-semibold text-white transition hover:bg-[#ff5d7a]"
            >
              Download
            </a>
          </div>
        </div>

        <div className="mt-10 grid gap-12 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
          <div>
            <p className="inline-flex items-center gap-2 rounded-full border border-[#ff6a86]/20 bg-[#ff6a86]/10 px-4 py-2 text-sm font-medium text-[#ffd9e0]">
              <span className="h-2 w-2 rounded-full bg-[#ff546f]" />
              Workout tracking for lifters who want signal, not noise
            </p>

            <h1 className="mt-6 max-w-3xl text-5xl font-semibold leading-[0.92] tracking-[-0.06em] text-white md:text-6xl lg:text-7xl">
              Training software that looks as sharp as the work you put in.
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/68 md:text-xl">
              TrackForge turns your lifting week into something you can read at a
              glance: sessions, recovery, readiness, streaks, routines, and
              progress all kept in one focused flow.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a
                href={APP_STORE_URL}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-2xl bg-[linear-gradient(135deg,#ff4d6d_0%,#ff7849_100%)] px-6 py-3.5 text-base font-semibold text-white shadow-[0_22px_45px_rgba(255,77,109,0.32)] transition hover:translate-y-[-1px] hover:brightness-105"
              >
                Download on the App Store
              </a>
              <a
                href="#product"
                className="inline-flex items-center justify-center rounded-2xl border border-white/12 bg-white/[0.05] px-6 py-3.5 text-base font-medium text-white/84 backdrop-blur transition hover:bg-white/[0.09]"
              >
                See the product
              </a>
            </div>

            <div className="mt-10 grid gap-3">
              {proofPoints.map((point) => (
                <div
                  key={point}
                  className="flex items-start gap-3 rounded-2xl border border-white/8 bg-black/20 px-4 py-4 backdrop-blur"
                >
                  <span className="mt-1 h-2.5 w-2.5 rounded-full bg-[#ff5a75]" />
                  <p className="text-sm leading-6 text-white/68 md:text-base">
                    {point}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-x-[12%] top-[12%] h-[22rem] rounded-full bg-[#ff556f]/14 blur-3xl" />
            <div className="rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.06),rgba(255,255,255,0.02))] p-4 shadow-[0_30px_90px_rgba(0,0,0,0.34)] backdrop-blur md:p-5">
              <div className="grid gap-4 sm:grid-cols-[1.05fr_0.95fr]">
                <div className={showcaseShots[0].className}>
                  <ShowcaseShot
                    src={showcaseShots[0].src}
                    alt={showcaseShots[0].alt}
                    title={showcaseShots[0].title}
                    detail={showcaseShots[0].detail}
                    priority={showcaseShots[0].priority}
                  />
                </div>
                <div className="grid gap-4">
                  {showcaseShots.slice(1).map((shot) => (
                    <div key={shot.src} className={shot.className}>
                      <ShowcaseShot
                        src={shot.src}
                        alt={shot.alt}
                        title={shot.title}
                        detail={shot.detail}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="product"
        className="mx-auto max-w-7xl px-6 py-10 md:px-10 lg:py-16"
      >
        <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#ffb7c4]">
              Product Tour
            </p>
            <h2 className="mt-3 max-w-3xl text-3xl font-semibold tracking-[-0.05em] text-white md:text-4xl lg:text-5xl">
              Built around the parts of training that actually matter.
            </h2>
          </div>
          <p className="max-w-2xl text-sm leading-7 text-white/62 md:text-base">
            The app is structured to support a real lifting week: log the work,
            recover on purpose, reuse strong routines, and keep progress visible
            enough to act on.
          </p>
        </div>

        <div className="mt-8 grid gap-6 lg:grid-cols-3">
          {featureCards.map((card) => (
            <article
              key={card.title}
              className="group rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.06),rgba(255,255,255,0.025))] p-5 shadow-[0_20px_70px_rgba(0,0,0,0.26)] transition hover:border-white/16 hover:bg-white/[0.065]"
            >
              <div className="flex items-center justify-between">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#ffb2c0]">
                  {card.eyebrow}
                </p>
                <span className="rounded-full border border-white/10 px-3 py-1 text-xs text-white/45">
                  TrackForge
                </span>
              </div>
              <h3 className="mt-4 text-2xl font-semibold tracking-[-0.04em] text-white">
                {card.title}
              </h3>
              <p className="mt-3 text-sm leading-7 text-white/64 md:text-base">
                {card.description}
              </p>
              <div className="mt-6">
                <PosterShot src={card.src} alt={card.alt} />
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-10 md:px-10 lg:py-16">
        <div className="grid gap-6 lg:grid-cols-[0.88fr_1.12fr]">
          <div className="rounded-[2rem] border border-white/10 bg-[linear-gradient(160deg,rgba(255,89,117,0.16),rgba(255,255,255,0.04))] p-7 shadow-[0_24px_70px_rgba(0,0,0,0.28)]">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#ffe0e7]">
              Why It Lands
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-[-0.05em] text-white md:text-4xl">
              Less tab-hopping. Better training decisions.
            </h2>
            <p className="mt-4 text-base leading-7 text-white/72">
              Most fitness apps stop at logging. TrackForge keeps going by
              connecting the dashboard, sessions, progress, and rewards so your
              recent work changes what you do next.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="rounded-[1.5rem] border border-white/12 bg-black/20 p-5">
                <p className="text-3xl font-semibold tracking-[-0.05em] text-white">
                  1 flow
                </p>
                <p className="mt-2 text-sm leading-6 text-white/64">
                  Dashboard to insights without feeling like separate tools.
                </p>
              </div>
              <div className="rounded-[1.5rem] border border-white/12 bg-black/20 p-5">
                <p className="text-3xl font-semibold tracking-[-0.05em] text-white">
                  6 views
                </p>
                <p className="mt-2 text-sm leading-6 text-white/64">
                  Enough depth to guide the week without burying the signal.
                </p>
              </div>
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            {workflow.map((item) => (
              <div
                key={item.step}
                className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 backdrop-blur"
              >
                <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#ffadbc]">
                  {item.step}
                </p>
                <h3 className="mt-4 text-2xl font-semibold tracking-[-0.04em] text-white">
                  {item.title}
                </h3>
                <p className="mt-4 text-sm leading-7 text-white/64 md:text-base">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-20 pt-8 md:px-10 lg:pb-24">
        <div className="rounded-[2.25rem] border border-[#ff7b92]/20 bg-[linear-gradient(135deg,rgba(255,88,116,0.18),rgba(15,18,30,0.88))] px-7 py-10 shadow-[0_28px_80px_rgba(0,0,0,0.32)] md:px-10 md:py-12">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#ffdbe3]">
            Ready To Train With More Clarity
          </p>
          <div className="mt-4 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div>
              <h2 className="max-w-2xl text-3xl font-semibold tracking-[-0.05em] text-white md:text-4xl">
                Give your workouts a system that feels deliberate from the first
                tap.
              </h2>
              <p className="mt-4 max-w-2xl text-base leading-7 text-white/72">
                Fast logging, better visibility, and a sharper visual language
                than the usual generic fitness dashboard.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <a
                href={APP_STORE_URL}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-2xl bg-[#ff4d6d] px-6 py-3.5 text-base font-semibold text-white transition hover:bg-[#ff5d7a]"
              >
                Get the app
              </a>
              <a
                href="/privacy"
                className="inline-flex items-center justify-center rounded-2xl border border-white/14 bg-white/[0.06] px-6 py-3.5 text-base font-medium text-white transition hover:bg-white/[0.1]"
              >
                Privacy Policy
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

type PosterShotProps = {
  src: string;
  alt: string;
  priority?: boolean;
};

function PosterShot({ src, alt, priority = false }: PosterShotProps) {
  return (
    <div className="overflow-hidden rounded-[1.7rem] border border-white/10 bg-[#090b14] shadow-[0_22px_60px_rgba(0,0,0,0.4)]">
      <Image
        src={src}
        alt={alt}
        width={1260}
        height={2736}
        priority={priority}
        className="h-auto w-full"
      />
    </div>
  );
}

type ShowcaseShotProps = PosterShotProps & {
  title: string;
  detail: string;
};

function ShowcaseShot({
  src,
  alt,
  title,
  detail,
  priority = false,
}: ShowcaseShotProps) {
  return (
    <div className="rounded-[1.8rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.05),rgba(255,255,255,0.02))] p-3 shadow-[0_24px_70px_rgba(0,0,0,0.32)] backdrop-blur">
      <PosterShot src={src} alt={alt} priority={priority} />
      <div className="px-1 pb-1 pt-4">
        <p className="text-lg font-semibold tracking-[-0.03em] text-white">
          {title}
        </p>
        <p className="mt-2 text-sm leading-6 text-white/60">{detail}</p>
      </div>
    </div>
  );
}
