import {
  ArrowRight,
  BadgeCheck,
  BarChart3,
  BriefcaseBusiness,
  Building2,
  CheckCircle2,
  Code2,
  Globe2,
  Layers3,
  Mail,
  MapPin,
  Megaphone,
  Phone,
  Search,
  ShieldCheck,
  Sparkles,
  Star,
  Target,
  TrendingUp,
  UsersRound,
} from "lucide-react";

const services = [
  {
    icon: Code2,
    title: "Web Development",
    text: "Fast, responsive websites built with modern stacks, clean UX, and conversion-first architecture.",
  },
  {
    icon: Search,
    title: "SEO Growth",
    text: "Technical SEO, content planning, and local visibility systems that help buyers find you first.",
  },
  {
    icon: Megaphone,
    title: "Paid Campaigns",
    text: "Google, Meta, and remarketing campaigns structured around measurable leads and revenue.",
  },
  {
    icon: BarChart3,
    title: "Analytics & CRO",
    text: "Tracking, funnels, landing pages, and data-led improvements that turn attention into action.",
  },
];

const industries = [
  "Real Estate",
  "Healthcare",
  "Education",
  "Retail & Ecommerce",
  "Hospitality",
  "Professional Services",
  "Manufacturing",
  "Local Businesses",
];

const portfolio = [
  {
    title: "Astra Homes",
    category: "Real estate website + lead funnel",
    result: "3.4x more qualified enquiries",
  },
  {
    title: "Nexa Clinic",
    category: "Healthcare SEO + booking UX",
    result: "68% lift in appointment requests",
  },
  {
    title: "Urban Cart",
    category: "Ecommerce storefront + paid ads",
    result: "41% lower cost per purchase",
  },
];

const testimonials = [
  {
    quote:
      "Jay Ambe Works brought strategy, design, and execution together. The new site immediately felt sharper and started producing better leads.",
    name: "Riya Shah",
    role: "Founder, Astra Homes",
  },
  {
    quote:
      "Their audit showed us exactly where growth was leaking. Within weeks, our campaigns were cleaner and our reporting finally made sense.",
    name: "Karan Patel",
    role: "Director, Nexa Clinic",
  },
  {
    quote:
      "Premium work without confusion. They understood the business goals first, then built the digital system around them.",
    name: "Meera Joshi",
    role: "Owner, Urban Cart",
  },
];

const stats = [
  ["45+", "websites launched"],
  ["8", "core industries served"],
  ["92%", "client retention"],
  ["30 days", "to clearer growth data"],
];

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden">
      <header className="fixed left-0 right-0 top-0 z-50 border-b border-white/20 bg-navy-950/86 text-white backdrop-blur-xl">
        <nav
          aria-label="Main navigation"
          className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-6 lg:px-8"
        >
          <a href="#home" className="flex items-center gap-3">
            <span className="grid h-10 w-10 place-items-center rounded bg-gold text-sm font-black text-navy-950">
              JA
            </span>
            <span className="text-base font-bold tracking-wide">
              Jay Ambe Works
            </span>
          </a>
          <div className="hidden items-center gap-7 text-sm font-medium text-white/78 lg:flex">
            {["Services", "Industries", "Portfolio", "About", "Audit"].map(
              (item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="transition hover:text-gold"
                >
                  {item}
                </a>
              ),
            )}
          </div>
          <a
            href="#contact"
            className="focus-ring inline-flex items-center gap-2 rounded bg-white px-4 py-2.5 text-sm font-bold text-navy-950 shadow-lg shadow-black/10 transition hover:bg-gold"
          >
            <Phone className="h-4 w-4" />
            Contact
          </a>
        </nav>
      </header>

      <section id="home" className="relative bg-navy-950 pt-28 text-white">
        <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(216,180,93,0.22),transparent_32%,rgba(23,54,95,0.62))]" />
        <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-white to-transparent" />
        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-5 pb-24 pt-10 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:px-8 lg:pb-32 lg:pt-20">
          <div className="animate-rise">
            <p className="section-kicker">Digital marketing and web development</p>
            <h1 className="mt-5 max-w-4xl text-5xl font-black leading-[1.02] tracking-normal sm:text-6xl lg:text-7xl">
              Growth-ready websites and campaigns for serious businesses.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/78 sm:text-xl">
              Jay Ambe Works creates premium websites, SEO systems, paid ads,
              and conversion funnels that help brands look credible and win
              more customers online.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a
                href="#audit"
                className="focus-ring inline-flex items-center justify-center gap-2 rounded bg-gold px-6 py-4 text-sm font-black uppercase tracking-wide text-navy-950 shadow-glow transition hover:bg-white"
              >
                Get Free Audit
                <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="#portfolio"
                className="focus-ring inline-flex items-center justify-center gap-2 rounded border border-white/24 px-6 py-4 text-sm font-bold text-white transition hover:border-gold hover:text-gold"
              >
                View Work
              </a>
            </div>
          </div>

          <div className="relative animate-float lg:pl-4">
            <div className="rounded-[2rem] border border-white/12 bg-white/8 p-4 shadow-2xl shadow-black/30 backdrop-blur">
              <div className="rounded-[1.5rem] bg-white p-5 text-navy-950">
                <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.18em] text-slate-400">
                      Growth Dashboard
                    </p>
                    <p className="mt-1 text-xl font-black">Campaign Health</p>
                  </div>
                  <span className="rounded bg-emerald-50 px-3 py-1 text-xs font-bold text-emerald-700">
                    Live
                  </span>
                </div>
                <div className="mt-5 grid grid-cols-2 gap-3">
                  {[
                    ["SEO Traffic", "+126%"],
                    ["Lead Quality", "+58%"],
                    ["Page Speed", "98/100"],
                    ["Ad ROI", "4.7x"],
                  ].map(([label, value]) => (
                    <div
                      key={label}
                      className="rounded border border-slate-100 bg-slate-50 p-4"
                    >
                      <p className="text-xs font-semibold text-slate-500">
                        {label}
                      </p>
                      <p className="mt-2 text-2xl font-black">{value}</p>
                    </div>
                  ))}
                </div>
                <div className="mt-5 rounded bg-navy-950 p-5 text-white">
                  <div className="flex items-center gap-3">
                    <Sparkles className="h-5 w-5 text-gold" />
                    <p className="font-bold">Next step recommendation</p>
                  </div>
                  <p className="mt-3 text-sm leading-6 text-white/72">
                    Rebuild landing page hierarchy, tighten service keywords,
                    and launch retargeting for high-intent visitors.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-10">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-4 px-5 sm:px-6 md:grid-cols-4 lg:px-8">
          {stats.map(([value, label]) => (
            <div key={label} className="border-l border-slate-200 pl-4">
              <p className="text-3xl font-black text-navy-950">{value}</p>
              <p className="mt-1 text-sm font-semibold text-slate-500">
                {label}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section id="services" className="bg-slate-50 py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="section-kicker">Services</p>
            <h2 className="mt-4 text-4xl font-black tracking-normal text-navy-950 sm:text-5xl">
              Digital systems built to attract, convert, and scale.
            </h2>
          </div>
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {services.map(({ icon: Icon, title, text }) => (
              <article
                key={title}
                className="group rounded border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-gold hover:shadow-premium"
              >
                <div className="grid h-12 w-12 place-items-center rounded bg-navy-950 text-gold transition group-hover:bg-gold group-hover:text-navy-950">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mt-6 text-xl font-black text-navy-950">{title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="industries" className="bg-white py-24">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
          <div>
            <p className="section-kicker">Industries Served</p>
            <h2 className="mt-4 text-4xl font-black tracking-normal text-navy-950 sm:text-5xl">
              Strategy adapted to your market, audience, and sales cycle.
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate-600">
              We combine brand clarity, performance marketing, and technical
              execution for businesses that need more than a pretty website.
            </p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {industries.map((industry) => (
              <div
                key={industry}
                className="flex items-center gap-3 rounded border border-slate-200 bg-slate-50 p-4"
              >
                <Building2 className="h-5 w-5 text-gold" />
                <span className="font-bold text-navy-950">{industry}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="portfolio" className="bg-navy-950 py-24 text-white">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div className="max-w-3xl">
              <p className="section-kicker">Portfolio</p>
              <h2 className="mt-4 text-4xl font-black tracking-normal sm:text-5xl">
                Selected growth projects.
              </h2>
            </div>
            <a
              href="#contact"
              className="focus-ring inline-flex w-fit items-center gap-2 rounded border border-white/20 px-5 py-3 text-sm font-bold transition hover:border-gold hover:text-gold"
            >
              Start a project
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
          <div className="mt-12 grid gap-5 lg:grid-cols-3">
            {portfolio.map((item, index) => (
              <article
                key={item.title}
                className="min-h-80 rounded border border-white/12 bg-white/[0.06] p-6 transition hover:-translate-y-1 hover:bg-white/[0.09]"
              >
                <div className="flex items-center justify-between">
                  <span className="text-sm font-black text-gold">
                    0{index + 1}
                  </span>
                  <Globe2 className="h-5 w-5 text-white/50" />
                </div>
                <div className="mt-24">
                  <p className="text-sm font-semibold text-white/60">
                    {item.category}
                  </p>
                  <h3 className="mt-3 text-2xl font-black">{item.title}</h3>
                  <p className="mt-5 inline-flex rounded bg-gold px-3 py-1 text-sm font-black text-navy-950">
                    {item.result}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="testimonials" className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="section-kicker">Testimonials</p>
            <h2 className="mt-4 text-4xl font-black tracking-normal text-navy-950 sm:text-5xl">
              Trusted by founders and teams who want measurable growth.
            </h2>
          </div>
          <div className="mt-12 grid gap-5 lg:grid-cols-3">
            {testimonials.map((item) => (
              <article
                key={item.name}
                className="rounded border border-slate-200 bg-slate-50 p-6"
              >
                <div className="flex gap-1 text-gold" aria-hidden="true">
                  {[...Array(5)].map((_, index) => (
                    <Star key={index} className="h-4 w-4 fill-current" />
                  ))}
                </div>
                <p className="mt-5 text-base leading-8 text-slate-700">
                  "{item.quote}"
                </p>
                <div className="mt-6 border-t border-slate-200 pt-5">
                  <p className="font-black text-navy-950">{item.name}</p>
                  <p className="mt-1 text-sm font-semibold text-slate-500">
                    {item.role}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="bg-slate-50 py-24">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-6 lg:grid-cols-[1fr_0.9fr] lg:px-8">
          <div>
            <p className="section-kicker">About Us</p>
            <h2 className="mt-4 text-4xl font-black tracking-normal text-navy-950 sm:text-5xl">
              A compact agency with senior thinking and hands-on execution.
            </h2>
            <p className="mt-6 text-lg leading-8 text-slate-600">
              Jay Ambe Works partners with growing businesses to turn scattered
              online efforts into a clear digital engine. We build the website,
              sharpen the message, launch the campaigns, and measure what moves.
            </p>
          </div>
          <div className="rounded bg-navy-950 p-6 text-white shadow-premium">
            {[
              [Target, "Business-first strategy"],
              [Layers3, "Premium responsive design"],
              [ShieldCheck, "Reliable technical foundations"],
              [TrendingUp, "Performance reporting"],
            ].map(([Icon, label]) => {
              const TypedIcon = Icon as typeof Target;
              return (
                <div
                  key={label as string}
                  className="flex items-center gap-4 border-b border-white/10 py-5 last:border-0"
                >
                  <TypedIcon className="h-6 w-6 text-gold" />
                  <span className="font-bold">{label as string}</span>
                  <CheckCircle2 className="ml-auto h-5 w-5 text-emerald-300" />
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section id="audit" className="bg-white py-24">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-6 lg:grid-cols-[0.85fr_1.15fr] lg:px-8">
          <div>
            <p className="section-kicker">Free Business Audit</p>
            <h2 className="mt-4 text-4xl font-black tracking-normal text-navy-950 sm:text-5xl">
              Find the clearest path to more leads.
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate-600">
              Share a few details and we will review your website, visibility,
              and funnel opportunities.
            </p>
            <div className="mt-8 space-y-4">
              {["Website and SEO review", "Campaign opportunity map", "Priority action list"].map(
                (item) => (
                  <div key={item} className="flex items-center gap-3">
                    <BadgeCheck className="h-5 w-5 text-gold" />
                    <span className="font-bold text-navy-950">{item}</span>
                  </div>
                ),
              )}
            </div>
          </div>
          <form className="rounded border border-slate-200 bg-slate-50 p-5 shadow-premium sm:p-8">
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                ["Full name", "text"],
                ["Business email", "email"],
                ["Phone number", "tel"],
                ["Website URL", "url"],
              ].map(([label, type]) => (
                <label key={label} className="block">
                  <span className="text-sm font-bold text-navy-950">{label}</span>
                  <input
                    type={type}
                    className="focus-ring mt-2 w-full rounded border border-slate-200 bg-white px-4 py-3 text-navy-950"
                    placeholder={label}
                  />
                </label>
              ))}
            </div>
            <label className="mt-4 block">
              <span className="text-sm font-bold text-navy-950">
                What do you want to improve?
              </span>
              <textarea
                className="focus-ring mt-2 min-h-32 w-full rounded border border-slate-200 bg-white px-4 py-3 text-navy-950"
                placeholder="More leads, better website, SEO, paid ads, tracking..."
              />
            </label>
            <button
              type="submit"
              className="focus-ring mt-6 inline-flex w-full items-center justify-center gap-2 rounded bg-navy-950 px-6 py-4 text-sm font-black uppercase tracking-wide text-white transition hover:bg-gold hover:text-navy-950"
            >
              Request Free Audit
              <ArrowRight className="h-4 w-4" />
            </button>
          </form>
        </div>
      </section>

      <section id="contact" className="bg-navy-950 py-24 text-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-6 lg:grid-cols-[1fr_0.9fr] lg:px-8">
          <div>
            <p className="section-kicker">Contact</p>
            <h2 className="mt-4 text-4xl font-black tracking-normal sm:text-5xl">
              Ready to build a stronger digital presence?
            </h2>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-white/70">
              Tell us what you are building, where you want to grow, and what is
              getting in the way. We will help you map the next move.
            </p>
          </div>
          <div className="grid gap-4">
            {[
              [Mail, "dhruvpatel7810@gmail.com"],
              [Phone, "+91 9558951959"],
              [MapPin, "Serving clients worldwide"],
              [UsersRound, "Strategy calls available this week"],
            ].map(([Icon, text]) => {
              const TypedIcon = Icon as typeof Mail;
              return (
                <a
                  key={text as string}
                  href="#audit"
                  className="flex items-center gap-4 rounded border border-white/12 bg-white/[0.06] p-5 transition hover:border-gold hover:bg-white/[0.09]"
                >
                  <TypedIcon className="h-5 w-5 text-gold" />
                  <span className="font-bold">{text as string}</span>
                </a>
              );
            })}
          </div>
        </div>
      </section>

      <footer className="border-t border-slate-200 bg-white py-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-5 text-sm font-semibold text-slate-500 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
          <p>© 2026 Jay Ambe Works. All rights reserved.</p>
          <div className="flex gap-5">
            <a href="#services" className="hover:text-navy-950">
              Services
            </a>
            <a href="#audit" className="hover:text-navy-950">
              Free Audit
            </a>
            <a href="#contact" className="hover:text-navy-950">
              Contact
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
