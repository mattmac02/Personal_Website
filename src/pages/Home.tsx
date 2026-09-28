import { useState } from 'react'
import {
  ArrowRight,
  ChevronDown,
  Download,
  ExternalLink,
  Github,
  Linkedin,
  Mail,
  MapPin,
} from 'lucide-react'
import WorldMap from '../components/WorldMap'

const projects = [
  {
    title: 'Trackaroo',
    type: 'Productivity platform',
    description: 'A single, organized workspace for managing every stage of the job application journey.',
    image: '/assets/trackaroo_logo.jpeg',
    url: 'https://trackaroo.netlify.app/',
    technologies: ['React', 'TypeScript', 'Supabase', 'Netlify'],
  },
  {
    title: 'SalarySignal',
    type: 'AI negotiation tool',
    description: 'A guided platform that analyzes offers, simulates recruiter conversations, and builds personalized counteroffers.',
    image: '/assets/salary_signal.jpeg',
    url: 'https://salarysignal.netlify.app/',
    technologies: ['React', 'TypeScript', 'OpenAI', 'Netlify'],
  },
  {
    title: 'Coin Beam',
    type: 'Financial dashboard',
    description: 'A cryptocurrency portfolio platform with real-time pricing, analytics, and concise market insights.',
    image: '/assets/coinbeam.png',
    url: 'https://coinbeam.netlify.app/',
    technologies: ['React', 'TypeScript', 'CoinGecko API', 'Netlify'],
  },
]

const experiences = [
  {
    period: 'Jun 2025 — Present',
    title: 'Full Stack Engineer I',
    company: 'Pivotal Life Sciences',
    location: 'San Francisco, CA',
    website: 'https://pivotallifesciences.com',
    highlights: [
      'Developed a biotech AI investment platform with React, Next.js, TypeScript, Python, and AWS, onboarding 35+ users.',
      'Co-led an AI-powered natural language search experience used in 75% of company workflows.',
      'Architected low-latency REST APIs and reduced average response time by 35%.',
    ],
  },
  {
    period: 'Sep 2024 — Jun 2025',
    title: 'Junior Full Stack Engineer',
    company: 'Pivotal Life Sciences',
    location: 'San Francisco, CA',
    website: 'https://pivotallifesciences.com',
    highlights: [
      'Owned platform reliability as one of two full-stack engineers and maintained 99.9% uptime.',
      'Partnered with biologists and statisticians to ship data-rich features used in more than 80% of workflows.',
    ],
  },
  {
    period: 'May 2023 — Aug 2023',
    title: 'Full Stack Engineer Intern',
    company: 'Pivotal Life Sciences',
    location: 'San Francisco, CA',
    website: 'https://pivotallifesciences.com',
    highlights: [
      'Led development of the firm’s first AI-enabled investment platform, used daily by a 35+ person team.',
      'Built a Python and AWS application layer with sub-100ms response latency and a React frontend.',
    ],
  },
  {
    period: 'Jun 2022 — Aug 2022',
    title: 'Artificial Intelligence Engineer',
    company: 'MoneyLion',
    location: 'Kuala Lumpur, Malaysia',
    website: 'https://moneylion.com',
    highlights: [
      'Developed an ETL pipeline to automate sanity testing and profiling for core AI models.',
      'Integrated automated S3 data profiling with Snowflake to support marketing funnel KPIs.',
    ],
  },
]

const skills = ['React', 'Next.js', 'TypeScript', 'Python', 'Node.js', 'AWS', 'SQL', 'Airflow', 'Datadog']
const visitedCountries = ['MY', 'CA', 'US', 'ID', 'KE', 'TZ', 'SG', 'TH', 'AT', 'HR', 'CZ', 'DE', 'GR', 'HU', 'IE', 'IT', 'NL', 'BQ', 'PL', 'PT', 'SK', 'ES', 'GB', 'BS', 'BZ', 'CR', 'DO', 'MX', 'PA', 'PE']

const Home = () => {
  const [expandedExperience, setExpandedExperience] = useState(0)

  return (
    <div className="bg-surface text-ink">
      <section id="hero" className="section-shell border-b border-border pt-32 md:pt-40">
        <div className="page-grid items-end">
          <div className="col-span-12 lg:col-span-8">
            <p className="eyebrow">Full-stack engineer · San Francisco</p>
            <h1 className="display-title mt-6 max-w-4xl">I build dependable software for complex, data-rich work.</h1>
            <p className="mt-8 max-w-2xl text-lg leading-8 text-muted md:text-xl">
              I’m Matthew MacEachern, an engineer focused on useful AI products, reliable systems, and clear user experiences.
            </p>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <a href="#projects" className="button-primary">View selected work <ArrowRight size={17} /></a>
              <a href="/assets/Matthew_Resume.pdf" download className="button-secondary"><Download size={17} /> Download résumé</a>
            </div>
          </div>
          <dl className="col-span-12 mt-16 grid grid-cols-2 border-y border-border lg:col-span-4 lg:mt-0">
            {[
              ['3+', 'Years building products'],
              ['99.9%', 'Platform uptime'],
              ['35+', 'Active platform users'],
              ['30', 'Countries visited'],
            ].map(([value, label]) => (
              <div key={label} className="border-b border-r border-border p-5 last:border-b-0 even:border-r-0 sm:p-6">
                <dt className="text-sm leading-5 text-muted">{label}</dt>
                <dd className="mt-2 text-2xl font-semibold tracking-tight text-ink">{value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section id="about" className="section-shell border-b border-border">
        <div className="section-heading page-grid">
          <div className="col-span-12 md:col-span-4"><p className="eyebrow">01 / About</p></div>
          <div className="col-span-12 mt-4 md:col-span-8 md:mt-0">
            <h2 className="section-title">Engineering with product context.</h2>
            <p className="section-intro">I turn ambiguous business needs into maintainable products, collaborating closely with domain experts from discovery through delivery.</p>
          </div>
        </div>
        <div className="page-grid mt-12 md:mt-16">
          <div className="col-span-12 md:col-span-4">
            <img src="/assets/headshot.jpeg" alt="Matthew MacEachern" className="aspect-[4/5] w-full max-w-sm border border-border object-cover" />
          </div>
          <div className="col-span-12 mt-10 md:col-span-8 md:mt-0">
            <div className="max-w-2xl space-y-5 text-base leading-7 text-muted md:text-lg md:leading-8">
              <p>I’m a Computer Engineering graduate from Queen’s University and a Full Stack Engineer at Pivotal Life Sciences, where I develop AI-driven products for venture investment workflows.</p>
              <p>I work across frontend, backend, and data infrastructure. Previously, I built AI model reliability tooling at MoneyLion and led multidisciplinary student product teams.</p>
            </div>
            <div className="mt-10">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-ink">Core technologies</h3>
              <ul className="mt-4 flex flex-wrap gap-2" aria-label="Core technologies">
                {skills.map(skill => <li key={skill} className="tag">{skill}</li>)}
              </ul>
            </div>
            <div className="mt-10 flex flex-wrap gap-3">
              <a href="https://github.com/mattmac02" target="_blank" rel="noreferrer" className="button-tertiary"><Github size={17} /> GitHub</a>
              <a href="https://www.linkedin.com/in/matthew-maceachern/" target="_blank" rel="noreferrer" className="button-tertiary"><Linkedin size={17} /> LinkedIn</a>
              <a href="mailto:mattmac743@gmail.com" className="button-tertiary"><Mail size={17} /> Email</a>
            </div>
          </div>
        </div>
      </section>

      <section id="projects" className="section-shell border-b border-border bg-panel">
        <div className="section-heading page-grid">
          <div className="col-span-12 md:col-span-4"><p className="eyebrow">02 / Selected work</p></div>
          <div className="col-span-12 mt-4 md:col-span-8 md:mt-0">
            <h2 className="section-title">Products designed around real tasks.</h2>
            <p className="section-intro">A selection of end-to-end applications spanning productivity, financial tools, and AI-assisted workflows.</p>
          </div>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-6 md:mt-16 md:grid-cols-3">
          {projects.map(project => (
            <article key={project.title} className="project-card">
              <img src={project.image} alt="" className="h-48 w-full border-b border-border object-cover" />
              <div className="flex flex-1 flex-col p-6">
                <p className="text-xs font-semibold uppercase tracking-wider text-primary">{project.type}</p>
                <h3 className="mt-3 text-2xl font-semibold tracking-tight">{project.title}</h3>
                <p className="mt-3 flex-1 text-sm leading-6 text-muted">{project.description}</p>
                <ul className="mt-6 flex flex-wrap gap-2" aria-label={`${project.title} technologies`}>
                  {project.technologies.map(tech => <li key={tech} className="tag">{tech}</li>)}
                </ul>
                <a href={project.url} target="_blank" rel="noreferrer" className="mt-6 inline-flex items-center gap-2 border-t border-border pt-5 text-sm font-semibold text-ink hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent">
                  Visit project <ExternalLink size={15} aria-hidden="true" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="experience" className="section-shell border-b border-border">
        <div className="section-heading page-grid">
          <div className="col-span-12 md:col-span-4"><p className="eyebrow">03 / Experience</p></div>
          <div className="col-span-12 mt-4 md:col-span-8 md:mt-0">
            <h2 className="section-title">A record of measurable delivery.</h2>
            <p className="section-intro">Roles focused on reliable systems, cross-functional execution, and translating complex data into practical software.</p>
          </div>
        </div>
        <div className="page-grid mt-12 md:mt-16">
          <div className="col-span-12 md:col-span-4">
            <div className="border-l-2 border-primary pl-5">
              <p className="text-sm font-semibold text-ink">B.A.Sc. Computer Engineering</p>
              <p className="mt-1 text-sm text-muted">Queen’s University · 2024</p>
              <p className="mt-1 text-sm text-muted">Dean’s List Honours</p>
            </div>
          </div>
          <div className="col-span-12 mt-10 divide-y divide-border border-y border-border md:col-span-8 md:mt-0">
            {experiences.map((experience, index) => {
              const open = expandedExperience === index
              return (
                <article key={`${experience.company}-${experience.title}`}>
                  <button type="button" onClick={() => setExpandedExperience(open ? -1 : index)} className="flex w-full items-start justify-between gap-6 py-6 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-4">
                    <div className="grid flex-1 gap-3 sm:grid-cols-[10rem_1fr]">
                      <span className="text-sm text-muted">{experience.period}</span>
                      <span>
                        <strong className="block text-lg font-semibold text-ink">{experience.title}</strong>
                        <span className="mt-1 flex flex-wrap items-center gap-2 text-sm text-muted">
                          {experience.company} <span aria-hidden="true">·</span> {experience.location}
                        </span>
                      </span>
                    </div>
                    <ChevronDown size={20} className={`mt-1 shrink-0 text-muted transition-transform ${open ? 'rotate-180' : ''}`} />
                  </button>
                  {open && (
                    <div className="pb-7 sm:pl-[11.5rem]">
                      <ul className="space-y-3 text-sm leading-6 text-muted">
                        {experience.highlights.map(item => <li key={item} className="flex gap-3"><span className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-primary" />{item}</li>)}
                      </ul>
                      <a href={experience.website} target="_blank" rel="noreferrer" className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:underline">Company website <ExternalLink size={14} /></a>
                    </div>
                  )}
                </article>
              )
            })}
          </div>
        </div>
      </section>

      <section className="section-shell border-b border-border bg-panel" aria-labelledby="travel-title">
        <div className="page-grid items-end">
          <div className="col-span-12 md:col-span-8">
            <p className="eyebrow">Beyond the desk</p>
            <h2 id="travel-title" className="section-title mt-5">Perspective shaped by 30 countries.</h2>
          </div>
          <p className="col-span-12 mt-5 text-base leading-7 text-muted md:col-span-4 md:mt-0">Travel keeps me curious, adaptable, and attentive to how people navigate different systems.</p>
        </div>
        <div className="mt-12 border border-border bg-surface p-3 md:mt-16 md:p-6"><WorldMap visitedCountries={visitedCountries} /></div>
      </section>

      <section id="contact" className="section-shell bg-ink text-white">
        <div className="page-grid items-end">
          <div className="col-span-12 md:col-span-8">
            <p className="eyebrow !text-accent">04 / Contact</p>
            <h2 className="mt-5 text-4xl font-semibold tracking-tight md:text-5xl">Let’s build something useful.</h2>
            <p className="mt-5 max-w-xl text-lg leading-8 text-slate-300">I’m always interested in thoughtful product teams and technically ambitious problems.</p>
          </div>
          <div className="col-span-12 mt-8 md:col-span-4 md:mt-0 md:text-right">
            <a href="mailto:mattmac743@gmail.com" className="button-primary !bg-white !text-ink hover:!bg-slate-100">Start a conversation <ArrowRight size={17} /></a>
          </div>
        </div>
        <div className="mt-16 flex flex-col justify-between gap-4 border-t border-slate-700 pt-6 text-sm text-slate-400 sm:flex-row">
          <p>© {new Date().getFullYear()} Matthew MacEachern</p>
          <p className="inline-flex items-center gap-1.5"><MapPin size={14} /> San Francisco, California</p>
        </div>
      </section>
    </div>
  )
}

export default Home
