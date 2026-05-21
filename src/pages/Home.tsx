import { useState, useEffect } from 'react'
import { Linkedin, Github, Download, Mail, MapPin, ExternalLink, ChevronDown, Users, Code, Trophy, Gamepad, Activity, ArrowRight } from 'lucide-react'
import { FaReact, FaPython, FaAws, FaDatabase, FaNodeJs } from 'react-icons/fa'
import { SiTypescript, SiRuby, SiApacheairflow } from 'react-icons/si'
import WorldMap from '../components/WorldMap'
import SectionHeader from '../components/SectionHeader'
import HeroBackground from '../components/HeroBackground'

interface Experience {
  year: string
  title: string
  company: string
  location: string
  description: string[]
  website?: string
}

const companyLogos: Record<string, string> = {
  'Shopify': '/assets/logos/shopify.svg',
  'Pivotal Life Sciences': '/assets/logos/pivotal.png',
  'MoneyLion': '/assets/logos/moneylion.png',
  'The Cansbridge Fellowship': '/assets/logos/cansbridge.png',
}

interface Education {
  year: string
  degree: string
  school: string
  location: string
  description: string
}

interface Extracurricular {
  id: string
  title: string
  category: 'sports' | 'music' | 'leadership' | 'academic' | 'community' | 'hobbies' | 'technical'
  icon: React.ReactNode
  year: string
  description: string
  achievements: string[]
  skills: string[]
  expanded?: boolean
}

interface Technologies {
  frontend: string[]
  backend: string[]
  dataLayer: string[]
}

interface Project {
  title: string
  description: string
  image: string
  url: string
  technologies?: string[]
  githubUrl?: string
}

const fetchExperienceData = () => new Promise(resolve => setTimeout(() => resolve([
  {
    year: 'Nov 2025 – Present',
    title: 'Software Engineer',
    location: 'Toronto, CA',
    company: 'Shopify',
    website: 'https://www.shopify.com',
    description: [
      'Software Engineer on the Financial Services team, building products that power merchant payments, money movement, and financial tooling at global scale.',
      'Ship full-stack features and services with a focus on reliability, performance, and clear APIs for internal and merchant-facing workflows.',
    ],
  },
  {
    year: 'Jun 2025 – Aug 2025',
    title: 'Full Stack Engineer I',
    location: 'San Francisco, California',
    company: 'Pivotal Life Sciences',
    website: 'https://pivotallifesciences.com',
    description: [
      'Developed a biotech AI investment platform (React, Next.js, TypeScript, Python, AWS) enabling onboarding of 35+ users.',
      'Co-led development of an AI-powered natural language search feature trained using private warehouse data, significantly improving search relevance and reducing investor research time; used in 75% of company workflows.',
      'Architected low-latency RESTful APIs, optimizing payload chunking and reducing average response time by 35%.',
      'Designed warehouse schemas and engineered Airflow ETL pipelines to move structured research data to the app DB.',
    ],
  },
  {
    year: 'Sept 2024 – Jun 2025',
    title: 'Junior Full Stack Engineer',
    location: 'San Francisco, California',
    company: 'Pivotal Life Sciences',
    website: 'https://pivotallifesciences.com',
    description: [
      'Owned platform reliability as one of two full-stack engineers. Implemented monitoring and alert systems (Datadog) to maintain 99.9% uptime. On call for 14-day periods.',
      'Worked with cross-functional teams (biologists, statisticians) to scope, & ship data-rich features used in >80% of workflows.',
    ],
  },
  {
    year: 'May 2023 – Aug 2023',
    title: 'Full Stack Engineer - Internship',
    location: 'San Francisco, California',
    company: 'Pivotal Life Sciences',
    website: 'https://pivotallifesciences.com',
    description: [
      'Selected by senior leadership as the sole intern to continue post-internship with a new contract with an 80%+ pay increase to continue work throughout my final year of university.',
      'Personally led & executed the development of Pivotal\'s first AI-enabled investment platform used daily by a team of 35+ people to make investment decisions.',
      'Optimized application layer efficiency with a comprehensive architecture comparison & analysis. Deployed architecture that minimized cost and maintained max performance (response latency of < 100ms).',
      'Built a robust application layer with a Python backend (AWS CDK, Lambda, RDS, DynamoDB, Cognito) and a React frontend using REST APIs and Material UI.',
    ],
  },
  {
    year: 'Jun 2022 – Aug 2022',
    title: 'Artificial Intelligence Engineer',
    location: 'Kuala Lumpur, Malaysia',
    company: 'MoneyLion',
    website: 'https://moneylion.com',
    description: [
      'Developed an ETL pipeline for the automation of sanity testing and profiling on MoneyLion\'s core AI models.',
      'Developed a Python program for automatic data extraction and profiling from S3, enabling data-driven testing conditions. The data was then integrated with Snowflake, backing marketing funnel KPIs to boost campaign performance.',
    ],
  },
  {
    year: 'Jan 2022 – Aug 2022',
    title: 'Fellow',
    location: 'San Francisco, California',
    company: 'The Cansbridge Fellowship',
    website: 'https://cansbridgefellowship.com',
    description: [
      'Selected as one of 27 students out of 1000+ applicants (~3% acceptance rate) awarded a $10,000 grant and invited to become a Fellow. Used the grant to pursue an engineering internship in Asia.',
    ]
  },
]), 250))

const fetchEducationData = () => new Promise(resolve => setTimeout(() => resolve([
  {
    year: '2020 - 2024',
    degree: 'Bachelor of Applied Science in Computer Engineering',
    school: `Queen's University`,
    location: 'Kingston, ON',
    description: `Graduated with Dean's List Honors, specialized in Software Engineering`
  },
]), 250))

const fetchTechnologiesData = () => new Promise(resolve => setTimeout(() => resolve({
  frontend: ['React', 'Next.js', 'TypeScript', 'JavaScript', 'MaterialUI', 'Auth0', 'Datadog', 'Dependabot'],
  backend: ['Python', 'Ruby', 'SQL', 'Node.js', 'AWS CDK', 'AWS Lambda', 'API Gateway', 'RDS', 'CodePipeline'],
  dataLayer: ['Apache Airflow', 'AWS Athena', 'Warehouse']
}), 250))

const fetchExtracurricularData = () => new Promise(resolve => setTimeout(() => resolve([
  {
    id: '1',
    title: 'District All-Star & Team Captain',
    category: 'sports' as const,
    icon: <Trophy />,
    year: '2016 - 2020',
    description: 'Led my basketball team to multiple provincial championships while maintaining academic excellence.',
    achievements: [
      'Team Captain for 4 consecutive years',
      'Led team to 2 provincial championships',
      '4 time District All-Star selection',
      '4 time Team Captain',
    ],
    skills: ['Leadership', 'Team Management', 'Communication', 'Time Management']
  },
  {
    id: '2',
    title: 'All-Star & Team Captain',
    category: 'sports' as const,
    icon: <Trophy />,
    year: '2021 - 2024',
    description: 'Led my volleyball team to multiple district and provincial championships while maintaining academic excellence.',
    achievements: [
      'Placed 3rd in the province',
      'District All-Star selection',
      'Team Captain for 2 consecutive years',
    ],
    skills: ['Leadership', 'Team Management', 'Communication', 'Time Management']
  },
  {
    id: '3',
    title: 'Brazilian Jiu-Jitsu Club',
    category: 'sports' as const,
    icon: <Activity />,
    year: '2022 - 2024',
    description: 'Participated in Brazilian Jiu-Jitsu club for 2 years, achieving a white belt.',
    achievements: [
      'Achieved a white belt',
      'Competed in 2 tournaments',
    ],
    skills: ['Skill Adoption', 'Eagerness to Learn']
  },
  {
    id: '4',
    title: 'Advanced Open Water Scuba Diver',
    category: 'hobbies' as const,
    icon: <Gamepad />,
    year: '2021 - 2024',
    description: 'Completed the Advanced Open Water Scuba Diver course, achieving a certification to dive up to 100 feet.',
    achievements: [
      'Completed the Advanced Open Water Scuba Diver course',
      'Achieved a maximum dive depth of 100 feet',
    ],
    skills: ['Skill Adoption', 'Adventure']
  },
  {
    id: '5',
    title: `Queen's Technology and Media Club President`,
    category: 'technical' as const,
    icon: <Code />,
    year: '2023 - 2024',
    description: `Directly manage 50 students and a $20,000 budget, directing 4 cross-functional product teams building and launching software products.`,
    achievements: [
      'Managed 40+ students and a $20,000 budget',
      'Directed 4 cross-functional product teams',
      'Successfully launched 2 software products',
      'Partnered with local businesses to build software products for the university community',
    ],
    skills: ['Project Management', 'Technical Mentoring', 'Event Planning', 'Networking']
  },
]), 250))

const fetchProjectsData = (): Promise<Project[]> => new Promise(resolve => setTimeout(() => resolve([
  {
    title: 'BlackCat Bio',
    description: 'AI platform for clinical trials—drafts statistical analysis plans in days with FDA-grounded, source-traced outputs and expert statistician review.',
    image: '/assets/blackcat_bio.png',
    url: 'https://blackcatbio.ai/',
    technologies: ['AI', 'Full-Stack', 'Biotech', 'Regulatory'],
  },
  {
    title: 'Trackaroo',
    description: 'A one stop shop for your job application journey built with React in TypeScript, Supabase, and Netlify.',
    image: './assets/trackaroo_logo.jpeg',
    url: 'https://trackaroo.netlify.app/',
    technologies: ['React', 'TypeScript', 'Supabase', 'Netlify'],
    // githubUrl: 'https://github.com/mattmac02/trackaroo'
  },
  {
    title: 'SalarySignal',
    description: 'A negotiation platform that simulates recruiter conversations, analyzes job offers, and generates personalized counteroffers through an interactive interface',
    image: '/assets/salary_signal.jpeg',
    url: 'https://salarysignal.netlify.app/',
    technologies: ['React', 'TypeScript', 'OpenAI', 'Netlify'],
    // githubUrl: 'https://github.com/mattmac02/SalarySignal'
  },
  {
    title: 'Coin Beam',
    description: 'A cryptocurrency tracking and portfolio management platform with real-time price updates, portfolio analytics, and market insights.',
    image: '/assets/coinbeam.png',
    url: 'https://coinbeam.netlify.app/',
    technologies: ['React', 'TypeScript', 'CoinGecko API', 'Netlify'],
    // githubUrl: 'https://github.com/mattmac02/coinbeam'
  },
]), 250))

const Home = () => {
  const [loading, setLoading] = useState(true)
  const [experiences, setExperiences] = useState<Experience[] | null>(null)
  const [education, setEducation] = useState<Education[] | null>(null)
  const [technologies, setTechnologies] = useState<Technologies | null>(null)
  const [extracurriculars, setExtracurriculars] = useState<Extracurricular[] | null>(null)
  const [projects, setProjects] = useState<Project[]>([])
  const [selectedCategory, setSelectedCategory] = useState<string>('all')
  const [visibleSections, setVisibleSections] = useState<Set<string>>(new Set(['hero']))
  const [expandedExperiences, setExpandedExperiences] = useState<Set<number>>(new Set([0]))

  const skills = [
    { name: 'React', icon: <FaReact />, color: 'blue' as const },
    { name: 'TypeScript', icon: <SiTypescript />, color: 'blue' as const },
    { name: 'Python', icon: <FaPython />, color: 'green' as const },
    { name: 'AWS', icon: <FaAws />, color: 'orange' as const },
    { name: 'Node.js', icon: <FaNodeJs />, color: 'blue' as const },
    { name: 'Databases', icon: <FaDatabase />, color: 'green' as const },
    { name: 'Apache Airflow', icon: <SiApacheairflow />, color: 'green' as const },
    { name: 'Material UI', icon: <span className="text-lg font-bold">M</span>, color: 'purple' as const },
    { name: 'Ruby', icon: <SiRuby />, color: 'red' as const }
  ]

  const visitedCountries = [
    'MY', 'CA', 'US', 'ID', 'KE', 'TZ', 'SG', 'TH', 'AT', 'HR', 'CZ', 'DE', 'GR', 'HU', 'IE', 'IT', 'NL', 'BQ', 'PL', 'PT', 'SK', 'ES', 'GB', 'BS', 'BZ', 'CR', 'DO', 'MX', 'PA', 'PE'
  ]

  const categories = [
    { key: 'all', label: 'All Activities', icon: <Users /> },
    { key: 'technical', label: 'Technical', icon: <Code /> },
    { key: 'sports', label: 'Sports', icon: <Activity /> },
    { key: 'hobbies', label: 'Hobbies', icon: <Gamepad /> }
  ]

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
    }, 250)

    Promise.all([
      fetchExperienceData(), 
      fetchEducationData(), 
      fetchTechnologiesData(), 
      fetchExtracurricularData(),
      fetchProjectsData()
    ]).then(([expData, eduData, techData, extracurricularsData, projectsData]) => {
      setExperiences(expData as Experience[])
      setEducation(eduData as Education[])
      setTechnologies(techData as Technologies)
      setExtracurriculars(extracurricularsData as Extracurricular[])
      setProjects(projectsData)
    })

    return () => clearTimeout(timer)
  }, [])

  // Intersection Observer for fade-in animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSections(prev => new Set(prev).add(entry.target.id))
          }
        })
      },
      { threshold: 0.1, rootMargin: '-50px 0px' }
    )

    const sections = document.querySelectorAll('section[id]')
    sections.forEach(section => observer.observe(section))

    return () => observer.disconnect()
  }, [])

  const handleExtracurricularToggle = (id: string) => {
    if (extracurriculars) {
      setExtracurriculars(extracurriculars.map(item =>
        item.id === id ? { ...item, expanded: !item.expanded } : item
      ))
    }
  }

  const handleExperienceToggle = (index: number) => {
    setExpandedExperiences(prev => {
      const newSet = new Set(prev)
      if (newSet.has(index)) {
        newSet.delete(index)
      } else {
        newSet.add(index)
      }
      return newSet
    })
  }

  const filteredExtracurriculars = extracurriculars?.filter(item =>
    selectedCategory === 'all' || item.category === selectedCategory
  )

  const sectionClass = (id: string) =>
    `section-reveal ${visibleSections.has(id) ? 'section-reveal-visible' : 'section-reveal-hidden'}`

  const skillClassMap: Record<string, string> = {
    blue: 'skill-blue',
    green: 'skill-green',
    orange: 'skill-orange',
    red: 'skill-red',
    purple: 'skill-purple',
  }

  const getTechTagClass = (tech: string): string => {
    const t = tech.toLowerCase()
    if (['react', 'typescript', 'javascript', 'next', 'material', 'netlify', 'full-stack', 'node'].some((k) => t.includes(k)))
      return 'tag-blue'
    if (['python', 'ruby', 'supabase', 'biotech', 'regulatory', 'sql', 'airflow', 'warehouse'].some((k) => t.includes(k)))
      return 'tag-green'
    if (['aws', 'openai', 'ai', 'lambda', 'cdk', 'athena', 'datadog', 'auth'].some((k) => t.includes(k)))
      return 'tag-violet'
    if (['coin', 'api', 'pipeline', 'dependabot'].some((k) => t.includes(k)))
      return 'tag-amber'
    return 'tag-sky'
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        <HeroBackground />

        <div className="container-max relative z-10 px-4 sm:px-6 lg:px-8 text-center">
          <div className={sectionClass('hero')}>
            <p className="section-label justify-center mb-6 animate-fade-up">
              <span className="text-blue-400">Hello, I&apos;m</span>
            </p>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 animate-fade-up animate-delay-100">
              <span className="bg-gradient-to-r from-white via-blue-100 to-emerald-300 bg-clip-text text-transparent">
                Matthew MacEachern
              </span>
            </h1>

            <p className="text-lg sm:text-xl text-zinc-300 max-w-2xl mx-auto leading-relaxed mb-4 animate-fade-up animate-delay-200 text-pretty">
              Software Engineer at Shopify — building financial products at global scale.
            </p>

            <div className="flex items-center justify-center gap-2 text-sm text-zinc-400 mb-12 animate-fade-up animate-delay-300">
              <MapPin size={14} className="text-emerald-400" />
              <span>Toronto, CA</span>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 max-w-3xl mx-auto mb-12 animate-fade-up animate-delay-400">
              {[
                { value: '2+', label: 'Years Experience', color: 'text-blue-400', card: 'stat-card-blue' },
                { value: '150K+', label: 'Lines of Code', color: 'text-emerald-400', card: 'stat-card-green' },
                { value: '10+', label: 'Technologies', color: 'text-violet-400', card: 'stat-card-purple' },
                { value: '30+', label: 'Countries Visited', color: 'text-cyan-400', card: 'stat-card-cyan' },
              ].map((stat) => (
                <div key={stat.label} className={`${stat.card} text-center`}>
                  <div className={`text-2xl sm:text-3xl font-bold tabular-nums ${stat.color}`}>{stat.value}</div>
                  <div className="text-xs text-zinc-400 mt-1">{stat.label}</div>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-3 justify-center animate-fade-up animate-delay-500">
              <a href="#projects" className="button-primary group">
                View Projects
                <ArrowRight size={16} className="transition-transform group-hover:translate-x-0.5" />
              </a>
              <a
                href="/assets/Matthew_Resume.pdf"
                download="Matthew_Resume.pdf"
                className="button-secondary"
              >
                <Download size={16} />
                Resume
              </a>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-blue-400/50 animate-bounce">
          <span className="text-[10px] uppercase tracking-widest">Scroll</span>
          <ChevronDown size={16} />
        </div>
      </section>

      <div className="divider max-w-6xl mx-auto" />

      {/* About Section */}
      <section id="about" className="section-padding relative">
        <div className="container-max">
          <div className={sectionClass('about')}>
            <SectionHeader
              label="About"
              title="Building software that matters"
              description="Software Engineer passionate about shipping reliable, user-focused products."
            />

            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
              {/* Profile Image */}
              <div className="order-2 lg:order-1 px-4 lg:px-0">
                {loading ? (
                  <div className="w-full max-w-sm sm:max-w-md mx-auto">
                    <div className="aspect-square bg-gray-700 rounded-3xl animate-pulse"></div>
                  </div>
                ) : (
                  <div className="relative group max-w-md mx-auto">
                    <div className="absolute -inset-2 rounded-[28px] bg-gradient-to-br from-blue-400/40 via-violet-400/25 to-emerald-400/35 blur-2xl opacity-80 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="relative liquid-glass p-1.5 rounded-[24px]">
                      <img
                        src="/assets/headshot.jpeg"
                        alt="Matthew MacEachern"
                        className="w-full rounded-[18px] object-cover aspect-square relative z-[1]"
                      />
                    </div>
                  </div>
                )}
              </div>

              {/* Content Section */}
              <div className="order-1 lg:order-2 space-y-8 px-4 lg:px-0">
                {loading ? (
                  <div className="space-y-6">
                    <div className="h-12 bg-gray-700 rounded-xl animate-pulse"></div>
                    <div className="h-8 bg-gray-700 rounded-lg animate-pulse w-3/4"></div>
                    <div className="space-y-3">
                      <div className="h-4 bg-gray-700 rounded animate-pulse"></div>
                      <div className="h-4 bg-gray-700 rounded animate-pulse w-5/6"></div>
                      <div className="h-4 bg-gray-700 rounded animate-pulse w-4/6"></div>
                    </div>
                  </div>
                ) : (
                  <>
                    {/* Introduction */}
                    <div className="space-y-3">
                      <h3 className="text-2xl sm:text-3xl font-semibold text-white tracking-tight">
                        Hi, I'm Matthew
                      </h3>
                      <div className="flex flex-wrap items-center gap-3">
                        <span className="text-blue-400 font-medium">Software Engineer @ Shopify</span>
                        <span className="text-zinc-600">·</span>
                        <span className="flex items-center gap-1 text-sm text-zinc-500">
                          <MapPin size={14} />
                          Toronto, CA
                        </span>
                      </div>
                    </div>

                    <div className="space-y-4 text-zinc-400 leading-relaxed">
                      <p className="text-base sm:text-lg">
                        I'm a Software Engineer at Shopify on the Financial Services team, building merchant-facing payments and financial products at global scale.
                      </p>
                      <p className="text-base sm:text-lg">
                        Before Shopify, I was a Full Stack Engineer at Pivotal Life Sciences, where I built AI-driven investment tools used daily by investors and researchers. I thrive at the intersection of product and engineering—shipping reliable systems, collaborating across disciplines, and turning complex domains into software people actually use.
                      </p>
                      <p className="text-base sm:text-lg">
                        I'm passionate about building systems that make a real difference—whether that's moving money for millions of merchants or helping teams make better decisions with data.
                      </p>
                    </div>

                    <div className="space-y-3 pt-2">
                      <h4 className="text-sm font-semibold uppercase tracking-wider text-zinc-500">Core Technologies</h4>
                      <div className="flex flex-wrap gap-2">
                        {skills.map((skill) => (
                          <span key={skill.name} className={skillClassMap[skill.color]}>
                            <span className="w-4 h-4 flex items-center justify-center">{skill.icon}</span>
                            {skill.name}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="flex gap-3 pt-2">
                      <a href="https://github.com/mattmac02" target="_blank" rel="noopener noreferrer" className="button-ghost" aria-label="GitHub">
                        <Github size={18} />
                      </a>
                      <a href="https://www.linkedin.com/in/matthew-maceachern/" target="_blank" rel="noopener noreferrer" className="button-ghost" aria-label="LinkedIn">
                        <Linkedin size={18} />
                      </a>
                      <a href="mailto:mattmac743@gmail.com" className="button-ghost" aria-label="Email">
                        <Mail size={18} />
                      </a>
                    </div>
                  </>
                )}
              </div>
            </div>

            <div className="mt-20 sm:mt-24">
              <SectionHeader
                label="Travel"
                title="Places I've been"
                description="Exploring cultures across the globe."
                align="center"
              />

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
                {[
                  { value: visitedCountries.length, label: 'Countries Visited' },
                  { value: `${Math.round((visitedCountries.length / 195) * 100)}%`, label: 'Of World Countries' },
                  { value: '5/7', label: 'Continents' },
                ].map((stat, i) => {
                  const styles = [
                    { card: 'stat-card-blue', color: 'text-blue-400' },
                    { card: 'stat-card-green', color: 'text-emerald-400' },
                    { card: 'stat-card-purple', color: 'text-violet-400' },
                  ]
                  const s = styles[i] ?? styles[0]
                  return (
                    <div key={stat.label} className={`${s.card} text-center`}>
                      <div className={`text-2xl font-bold tabular-nums ${s.color}`}>{stat.value}</div>
                      <div className="text-xs text-zinc-400 mt-1">{stat.label}</div>
                    </div>
                  )
                })}
              </div>

              <div className="card p-4 sm:p-6 lg:p-8">
                <WorldMap visitedCountries={visitedCountries} />
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="divider max-w-6xl mx-auto" />

      {/* Projects Section */}
      <section id="projects" className="section-padding relative">
        <div className="container-max">
          <div className={sectionClass('projects')}>
            <SectionHeader
              label="Work"
              title="Selected projects"
              description="Products and tools I've built across biotech, fintech, and developer tooling."
            />

            <div className="grid sm:grid-cols-2 gap-6">
              {loading ? (
                // Loading skeletons
                Array.from({ length: 4 }).map((_, index) => (
                  <div key={index} className="card overflow-hidden animate-pulse">
                    <div className="h-52 bg-zinc-800/50" />
                    <div className="p-6 space-y-3">
                      <div className="h-5 bg-zinc-800 rounded w-2/3" />
                      <div className="h-4 bg-zinc-800 rounded w-full" />
                      <div className="h-4 bg-zinc-800 rounded w-4/5" />
                    </div>
                  </div>
                ))
              ) : (
                projects.map((project, index) => (
                  <article
                    key={index}
                    className="group card overflow-hidden relative"
                  >
                    <div className="relative overflow-hidden aspect-[16/10]">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                      <div className="absolute top-4 right-4 p-2 rounded-full liquid-glass-pill opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-1 group-hover:translate-y-0">
                        <ExternalLink size={14} className="text-zinc-300" />
                      </div>
                    </div>

                    <div className="p-6 space-y-4">
                      <div>
                        <h3 className="text-lg font-semibold text-white group-hover:text-blue-300 transition-colors">
                          {project.title}
                        </h3>
                        <p className="mt-2 text-sm text-zinc-400 leading-relaxed line-clamp-3">
                          {project.description}
                        </p>
                      </div>

                      {project.technologies && (
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.map((tech) => (
                            <span key={tech} className={getTechTagClass(tech)}>{tech}</span>
                          ))}
                        </div>
                      )}
                    </div>

                    <a
                      href={project.url}
                      target={project.url.startsWith('http') ? '_blank' : undefined}
                      rel={project.url.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="absolute inset-0 z-10"
                      aria-label={`View ${project.title} project`}
                    />
                  </article>
                ))
              )}
            </div>

            <div className="mt-16 text-center">
              <div className="card max-w-2xl mx-auto p-8 sm:p-10">
                <h3 className="text-xl font-semibold text-white mb-2">Have a project in mind?</h3>
                <p className="text-zinc-400 text-sm mb-6">
                  I'm always open to interesting opportunities and collaborations.
                </p>
                <a href="mailto:mattmac743@gmail.com" className="button-primary">
                  Get in Touch
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="divider max-w-6xl mx-auto" />

      {/* Experience Section */}
      <section id="experience" className="section-padding relative">
        <div className="container-max">
          <div className={sectionClass('experience')}>
            <SectionHeader
              label="Career"
              title="Experience & background"
              description="Professional journey, education, and what I do outside of work."
            />

            <div className="grid lg:grid-cols-3 gap-8 lg:gap-10">
              {/* Main Experience Section */}
              <div className="lg:col-span-2 space-y-6 lg:space-y-8">
                {/* Professional Experience */}
                <div className="card p-6 sm:p-8">
                  <h3 className="text-lg font-semibold text-white mb-6">Professional Experience</h3>
                  <div className="space-y-6">
                    {experiences === null ? (
                      // Loading skeleton
                      Array.from({ length: 3 }).map((_, index) => (
                        <div key={index} className="card p-6 animate-pulse">
                          <div className="h-6 bg-gray-700 rounded w-3/4 mb-3"></div>
                          <div className="h-4 bg-gray-700 rounded w-1/2 mb-4"></div>
                          <div className="space-y-2">
                            <div className="h-4 bg-gray-700 rounded"></div>
                            <div className="h-4 bg-gray-700 rounded w-5/6"></div>
                          </div>
                        </div>
                      ))
                    ) : (
                      experiences.map((exp, index) => {
                        const isSameCompany = index > 0 && experiences[index - 1].company === exp.company

                        return (
                          <div key={index}>
                            <div className="card-interactive p-5 sm:p-6" onClick={() => handleExperienceToggle(index)}>
                              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-2">
                                <div className="flex-1 min-w-0">
                                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-2">
                                    <h4 className="text-base sm:text-lg font-semibold text-white">{exp.title}</h4>
                                    <p
                                      className={`text-sm font-semibold shrink-0 sm:text-right ${
                                        exp.year.includes('Present')
                                          ? 'text-emerald-300'
                                          : 'text-zinc-200'
                                      }`}
                                    >
                                      {exp.year}
                                    </p>
                                  </div>
                                  <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                                    <div className="flex items-center gap-2">
                                      {companyLogos[exp.company] && (
                                        <img src={companyLogos[exp.company]} alt="" className="company-logo" />
                                      )}
                                      {exp.website ? (
                                        <a href={exp.website} target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-blue-300 hover:text-blue-200 flex items-center gap-1" onClick={(e) => e.stopPropagation()}>
                                          {exp.company}<ExternalLink size={11} />
                                        </a>
                                      ) : (
                                        <span className="text-sm font-medium text-blue-300">{exp.company}</span>
                                      )}
                                    </div>
                                    <span className="text-sm text-zinc-400">{exp.location}</span>
                                  </div>
                                </div>
                                <div className="flex items-center gap-2 shrink-0">
                                  {isSameCompany && <span className="tag text-[10px] !py-1 !px-2 text-emerald-400/90 border-emerald-500/20 bg-emerald-500/5">Promotion</span>}
                                  <div className={`p-1.5 rounded-lg bg-white/[0.04] transition-transform duration-300 ${expandedExperiences.has(index) ? 'rotate-180' : ''}`}>
                                    <ChevronDown size={16} className="text-zinc-500" />
                                  </div>
                                </div>
                              </div>
                              <div className={`overflow-hidden transition-all duration-400 ease-out ${expandedExperiences.has(index) ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}>
                                <ul className="space-y-3 pt-4 border-t border-white/10">
                                  {exp.description.map((desc, descIndex) => (
                                    <li key={descIndex} className="flex gap-3 text-[15px] sm:text-base text-zinc-200 leading-relaxed">
                                      <span className="mt-2.5 shrink-0 w-1.5 h-1.5 rounded-full bg-blue-400" />{desc}
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            </div>
                          </div>
                        )
                      })
                    )}
                  </div>
                </div>

                <div className="card p-6 sm:p-8">
                  <h3 className="text-lg font-semibold text-white mb-6">Education</h3>
                  <div className="space-y-4">
                    {education === null ? (
                      <div className="card p-6 animate-pulse">
                        <div className="h-5 bg-zinc-800 rounded w-3/4 mb-3" />
                        <div className="h-4 bg-zinc-800 rounded w-1/2" />
                      </div>
                    ) : (
                      education.map((edu, index) => (
                        <div
                          key={index}
                          className="p-5 rounded-[18px] liquid-glass-tint"
                          style={{
                            background: 'linear-gradient(145deg, rgba(34, 197, 94, 0.15) 0%, rgba(255,255,255,0.04) 100%)',
                          }}
                        >
                          <h4 className="text-base font-semibold text-emerald-100 mb-1">{edu.degree}</h4>
                          <p className="text-sm text-emerald-400 font-medium">{edu.school}</p>
                          <p className="text-xs text-zinc-500 mt-1">{edu.location} · {edu.year}</p>
                          <p className="text-sm text-zinc-400 mt-3 leading-relaxed">{edu.description}</p>
                        </div>
                      ))
                    )}
                  </div>
                </div>
              </div>

              {/* Sidebar */}
              <div className="space-y-6 lg:space-y-8">
                <div className="card p-6 sm:p-8">
                  <h3 className="text-lg font-semibold text-white mb-6">Technologies</h3>
                  {technologies === null ? (
                    <div className="space-y-3 animate-pulse">
                      <div className="h-4 bg-zinc-800 rounded w-full" />
                      <div className="h-4 bg-zinc-800 rounded w-5/6" />
                    </div>
                  ) : (
                    <div className="space-y-6">
                      {[
                        { label: 'Frontend', items: technologies.frontend },
                        { label: 'Backend', items: technologies.backend },
                        { label: 'Data Layer', items: technologies.dataLayer },
                      ].map((group) => (
                        <div key={group.label}>
                          <h4 className="text-xs font-semibold uppercase tracking-wider text-zinc-500 mb-3">{group.label}</h4>
                          <div className="flex flex-wrap gap-2">
                            {group.items.map((tech) => (
                              <span key={tech} className={getTechTagClass(tech)}>{tech}</span>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                <div className="card p-6 sm:p-8">
                  <h3 className="text-lg font-semibold text-white mb-6">Beyond work</h3>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {categories.map((category) => (
                      <button
                        key={category.key}
                        type="button"
                        onClick={() => setSelectedCategory(category.key)}
                        className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all duration-200 flex items-center gap-1.5
                          ${selectedCategory === category.key
                            ? 'bg-blue-500/20 text-blue-200 border border-blue-400/30'
                            : 'text-zinc-400 border border-white/5 hover:text-blue-200 hover:bg-white/[0.06]'
                          }`}
                      >
                        {category.icon}
                        <span className="hidden sm:inline">{category.label}</span>
                        <span className="sm:hidden">{category.label.split(' ')[0]}</span>
                      </button>
                    ))}
                  </div>

                  <div className="space-y-4">
                    {extracurriculars === null ? (
                      Array.from({ length: 3 }).map((_, index) => (
                        <div key={index} className="bg-gray-800 rounded-2xl shadow-2xl p-4 animate-pulse border border-gray-700">
                          <div className="h-5 bg-gray-700 rounded w-3/4 mb-2"></div>
                          <div className="h-4 bg-gray-700 rounded w-1/2"></div>
                        </div>
                      ))
                    ) : (
                      filteredExtracurriculars?.map((activity) => (
                        <div
                          key={activity.id}
                          className="card-interactive p-4"
                          onClick={() => handleExtracurricularToggle(activity.id)}
                        >
                          <div className="flex items-start justify-between gap-2">
                            <div className="flex items-center gap-3">
                              <div className="liquid-glass-pill p-2 text-blue-300 w-9 h-9 flex items-center justify-center !rounded-xl">
                                {activity.icon}
                              </div>
                              <div>
                                <h4 className="font-medium text-white text-sm">{activity.title}</h4>
                                <p className="text-xs text-zinc-500">{activity.year}</p>
                              </div>
                            </div>
                            <div className={`p-1 transition-transform duration-300 ${activity.expanded ? 'rotate-180' : ''}`}>
                              <ChevronDown size={14} className="text-zinc-500" />
                            </div>
                          </div>

                          <p className="text-zinc-400 text-xs mt-3 leading-relaxed">{activity.description}</p>

                          {activity.expanded && (
                            <div className="mt-4 space-y-3 border-t border-white/[0.06] pt-4">
                              <div>
                                <h5 className="text-xs font-semibold uppercase tracking-wider text-zinc-500 mb-2">Achievements</h5>
                                <ul className="space-y-1.5">
                                  {activity.achievements.map((achievement, i) => (
                                    <li key={i} className="text-xs text-zinc-400 flex gap-2">
                                      <span className="text-blue-400">·</span>{achievement}
                                    </li>
                                  ))}
                                </ul>
                              </div>
                              <div>
                                <h5 className="text-xs font-semibold uppercase tracking-wider text-zinc-500 mb-2">Skills</h5>
                                <div className="flex flex-wrap gap-1.5">
                                  {activity.skills.map((skill) => (
                                    <span key={skill} className={`${getTechTagClass(skill)} text-[10px] !py-1 !px-2`}>{skill}</span>
                                  ))}
                                </div>
                              </div>
                            </div>
                          )}
                        </div>
                      ))
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="divider max-w-6xl mx-auto" />

      {/* Contact Section */}
      <section id="contact" className="section-padding pb-32 relative">
        <div className="container-max">
          <div className={sectionClass('contact')}>
            <SectionHeader
              label="Contact"
              title="Let's connect"
              description="Open to new opportunities, collaborations, and conversations about engineering."
            />

            <div className="card max-w-xl mx-auto p-8 sm:p-10 text-center">
              <div className="flex items-center justify-center gap-4 mb-8">
                <a href="https://github.com/mattmac02" target="_blank" rel="noopener noreferrer" className="button-ghost" aria-label="GitHub">
                  <Github size={20} />
                </a>
                <a href="https://www.linkedin.com/in/matthew-maceachern/" target="_blank" rel="noopener noreferrer" className="button-ghost" aria-label="LinkedIn">
                  <Linkedin size={20} />
                </a>
                <a href="mailto:mattmac743@gmail.com" className="button-ghost" aria-label="Email">
                  <Mail size={20} />
                </a>
              </div>
              <a href="mailto:mattmac743@gmail.com" className="button-primary">
                Send a message
                <ArrowRight size={16} />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home 
