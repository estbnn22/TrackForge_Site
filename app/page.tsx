import Image from "next/image";

const APP_STORE_URL = "https://apps.apple.com/us/app/trackforge/id6759009365";

const screenshots = {
  home: "/home-screen.png",
  progress: "/progress-screen.png",
  cards: "/cards-screen.png",
  sessions: "/sessions-screen.png",
  insights: "/insights-screen.png",
};

const quickStats = [
  {
    value: "Fast logging",
    label: "Capture sets, sessions, and rest days without friction.",
  },
  {
    value: "Built for lifters",
    label: "PRs, workload, streaks, cards, and gym-specific insights.",
  },
  {
    value: "One clean system",
    label: "Home, sessions, progress, and profile all stay connected.",
  },
];

const features = [
  {
    title: "See what is ready to train",
    description:
      "Body-part readiness, recent workload, and ideal rest windows give you a simple signal before you start your next lift.",
  },
  {
    title: "Keep sessions organized",
    description:
      "Workouts and rest days live in one timeline, so your weekly training history stays easy to scan and hard to forget.",
  },
  {
    title: "Make progress visual",
    description:
      "Trends, balance charts, streaks, and collectible cards turn consistency into something you can actually feel.",
  },
];

const workflow = [
  "Open the dashboard and see streaks, activity, and the next action instantly.",
  "Log workouts or rest days, then review volume, duration, and work done by session.",
  "Check progress insights to decide what to push, what to rest, and where your training load is drifting.",
];

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#06070d] text-white">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-x-0 top-0 h-[34rem] bg-[radial-gradient(circle_at_top,rgba(244,63,94,0.28),transparent_52%)]" />
        <div className="absolute right-[-12rem] top-[18rem] h-[28rem] w-[28rem] rounded-full bg-cyan-500/10 blur-3xl" />
        <div className="absolute left-[-8rem] top-[32rem] h-[24rem] w-[24rem] rounded-full bg-pink-600/12 blur-3xl" />
      </div>

      <section className="mx-auto max-w-7xl px-6 pb-16 pt-20 md:px-10 lg:pb-24 lg:pt-24">
        <div className="grid gap-16 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.06] px-4 py-2 text-sm text-white/[0.72] backdrop-blur">
              <span className="h-2 w-2 rounded-full bg-rose-500" />
              iPhone workout tracker
            </div>

            <h1 className="max-w-3xl text-5xl font-semibold leading-none tracking-[-0.05em] text-white md:text-6xl lg:text-7xl">
              A sharper way to run your training.
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/70 md:text-xl">
              TrackForge gives lifters one place to log workouts, manage rest
              days, monitor training load, protect streaks, and turn progress
              into something visible every week.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a
                href={APP_STORE_URL}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-2xl bg-gradient-to-r from-rose-500 via-pink-500 to-orange-500 px-6 py-3.5 text-base font-semibold text-white shadow-[0_18px_40px_rgba(244,63,94,0.28)] transition hover:scale-[1.01] hover:brightness-110"
              >
                Download on the App Store
              </a>
              <a
                href="#screens"
                className="inline-flex items-center justify-center rounded-2xl border border-white/12 bg-white/[0.05] px-6 py-3.5 text-base font-medium text-white/[0.86] backdrop-blur transition hover:bg-white/10"
              >
                Explore the app
              </a>
            </div>

            <div className="mt-10 grid gap-4 md:grid-cols-3">
              {quickStats.map((stat) => (
                <div
                  key={stat.value}
                  className="rounded-3xl border border-white/10 bg-white/[0.04] p-5 backdrop-blur"
                >
                  <p className="text-sm font-semibold uppercase tracking-[0.18em] text-rose-300/90">
                    {stat.value}
                  </p>
                  <p className="mt-3 text-sm leading-6 text-white/[0.64]">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative mx-auto flex w-full max-w-[42rem] items-center justify-center py-6">
            <div className="absolute h-72 w-72 rounded-full bg-rose-500/18 blur-3xl" />
            <div className="relative z-10 w-[16.5rem] sm:w-[18rem] lg:w-[19rem]">
              <PhoneShot
                src={screenshots.home}
                alt="TrackForge dashboard overview"
                priority
              />
            </div>
            <div className="absolute left-0 top-0 hidden w-[11.5rem] rotate-[-9deg] sm:block lg:w-[13rem]">
              <PhoneShot
                src={screenshots.sessions}
                alt="TrackForge session history"
              />
            </div>
            <div className="absolute bottom-2 right-0 hidden w-[11.5rem] rotate-[10deg] sm:block lg:w-[13rem]">
              <PhoneShot
                src={screenshots.cards}
                alt="TrackForge unlockable cards"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-10 md:px-10">
        <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-7 backdrop-blur">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-rose-300/85">
              Why it feels different
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-[-0.04em] text-white">
              More than a workout log.
            </h2>
            <p className="mt-4 max-w-xl text-base leading-7 text-white/[0.68]">
              TrackForge is structured like an app you actually want to come
              back to: a clear dashboard, actionable progress data, structured
              session history, and a reward layer that makes consistency more
              engaging.
            </p>

            <div className="mt-8 space-y-5">
              {features.map((feature, index) => (
                <div
                  key={feature.title}
                  className="rounded-2xl border border-white/8 bg-black/20 p-5"
                >
                  <div className="flex items-center gap-3">
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-rose-500/18 text-sm font-semibold text-rose-200">
                      0{index + 1}
                    </span>
                    <h3 className="text-lg font-semibold text-white">
                      {feature.title}
                    </h3>
                  </div>
                  <p className="mt-3 text-sm leading-6 text-white/[0.64]">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            <div className="rounded-[2rem] border border-white/10 bg-gradient-to-b from-white/[0.06] to-white/[0.03] p-5">
              <p className="mb-4 text-sm font-medium text-white/[0.62]">
                Weekly decision-making
              </p>
              <PhoneShot
                src={screenshots.progress}
                alt="TrackForge progress readiness screen"
              />
            </div>
            <div className="rounded-[2rem] border border-white/10 bg-gradient-to-b from-white/[0.06] to-white/[0.03] p-5">
              <p className="mb-4 text-sm font-medium text-white/[0.62]">
                Muscle balance at a glance
              </p>
              <PhoneShot
                src={screenshots.insights}
                alt="TrackForge insights chart screen"
              />
            </div>
          </div>
        </div>
      </section>

      <section
        id="screens"
        className="mx-auto max-w-7xl px-6 py-10 md:px-10 lg:py-16"
      >
        <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-rose-300/85">
              Inside the app
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-[-0.04em] text-white md:text-4xl">
              Every key screen has a job.
            </h2>
          </div>
          <p className="max-w-2xl text-sm leading-6 text-white/[0.64] md:text-base">
            Dashboard, session history, progress, and unlockables are designed
            to work together instead of feeling like disconnected tabs.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-6">
            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <PhoneShot
                  src={screenshots.home}
                  alt="TrackForge home screen with streaks and activity"
                />
              </div>
              <div className="flex flex-col justify-between rounded-[1.75rem] border border-white/8 bg-black/20 p-6">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan-300/80">
                    Daily flow
                  </p>
                  <h3 className="mt-3 text-2xl font-semibold tracking-[-0.04em] text-white">
                    Open, decide, train.
                  </h3>
                </div>
                <div className="space-y-4">
                  {workflow.map((step, index) => (
                    <div
                      key={step}
                      className="rounded-2xl border border-white/8 bg-white/[0.03] p-4"
                    >
                      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/42">
                        Step {index + 1}
                      </p>
                      <p className="mt-2 text-sm leading-6 text-white/[0.66]">
                        {step}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="grid gap-6">
            <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-5">
              <p className="mb-4 text-sm font-medium text-white/[0.62]">
                Structured training history
              </p>
              <PhoneShot
                src={screenshots.sessions}
                alt="TrackForge sessions tab"
              />
            </div>
            <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-5">
              <p className="mb-4 text-sm font-medium text-white/[0.62]">
                Rewards that reinforce consistency
              </p>
              <PhoneShot
                src={screenshots.cards}
                alt="TrackForge collectible cards screen"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-20 pt-8 md:px-10 lg:pb-24">
        <div className="rounded-[2.25rem] border border-rose-400/20 bg-[linear-gradient(135deg,rgba(244,63,94,0.18),rgba(14,18,32,0.8))] px-7 py-10 shadow-[0_28px_80px_rgba(0,0,0,0.28)] md:px-10 md:py-12">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-rose-200/88">
            Ready to lift with more clarity
          </p>
          <div className="mt-4 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div>
              <h2 className="max-w-2xl text-3xl font-semibold tracking-[-0.05em] text-white md:text-4xl">
                Give your workouts a system that looks as focused as your
                training.
              </h2>
              <p className="mt-4 max-w-2xl text-base leading-7 text-white/70">
                TrackForge is built for lifters who want less clutter, faster
                logging, and clearer insight into what to train next.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <a
                href={APP_STORE_URL}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-2xl bg-red-500 px-6 py-3.5 text-base font-semibold text-white transition hover:bg-red-400"
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

type PhoneShotProps = {
  src: string;
  alt: string;
  priority?: boolean;
};

function PhoneShot({ src, alt, priority = false }: PhoneShotProps) {
  return (
    <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-[#0c1020] shadow-[0_25px_70px_rgba(0,0,0,0.45)]">
      <Image
        src={src}
        alt={alt}
        width={430}
        height={932}
        priority={priority}
        className="h-auto w-full"
      />
    </div>
  );
}
