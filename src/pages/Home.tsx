import { useState, useEffect } from 'react'
import { Linkedin, Github, Download, Mail, MapPin, ExternalLink, ChevronDown, ChevronUp, Users, Code, Trophy, Gamepad, Activity } from 'lucide-react'
import { FaReact, FaPython, FaAws, FaDatabase, FaNodeJs } from 'react-icons/fa'
import { SiTypescript, SiHeroku, SiApacheairflow } from 'react-icons/si'
import WorldMap from '../components/WorldMap'

interface Experience {
  year: string
  title: string
  company: string
  location: string
  description: string[]
  website?: string
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
    year: 'Jun 2025 – Present',
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
  frontend: ['React', 'Next.js', 'TypeScript', 'JavaScript', 'MaterialUI', 'Auth0', 'Datadog', 'Heroku', 'Dependabot'],
  backend: ['Python', 'SQL', 'Node.js', 'AWS CDK', 'AWS Lambda', 'API Gateway', 'RDS', 'CodePipeline'],
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
    title: 'Trackaroo',
    description: 'A one stop shop for your job application journey built with React in TypeScript, Supabase, and Netlify.',
    image: './assets/trackaroo_logo.jpeg',
    url: 'https://trackaroo.netlify.app/',
    technologies: ['React', 'TypeScript', 'Supabase', 'Netlify'],
    githubUrl: 'https://github.com/mattmac02/trackaroo'
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
  const [visibleSections, setVisibleSections] = useState<Set<string>>(new Set())

  const skills = [
    { name: 'React', icon: <FaReact />, color: 'blue' as const },
    { name: 'TypeScript', icon: <SiTypescript />, color: 'blue' as const },
    { name: 'Python', icon: <FaPython />, color: 'green' as const },
    { name: 'AWS', icon: <FaAws />, color: 'orange' as const },
    { name: 'Node.js', icon: <FaNodeJs />, color: 'blue' as const },
    { name: 'Databases', icon: <FaDatabase />, color: 'green' as const },
    { name: 'Apache Airflow', icon: <SiApacheairflow />, color: 'green' as const },
    { name: 'Material UI', icon: <span className="text-lg font-bold">M</span>, color: 'blue' as const },
    { name: 'Heroku', icon: <SiHeroku />, color: 'purple' as const }
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

  const filteredExtracurriculars = extracurriculars?.filter(item =>
    selectedCategory === 'all' || item.category === selectedCategory
  )

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section id="hero" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-gray-900 to-gray-800 relative overflow-hidden">
        {/* Smooth transition overlay */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-gray-800 to-transparent pointer-events-none"></div>
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-green-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl animate-pulse delay-500"></div>
          
          {/* Floating tech icons */}
          <div className="absolute top-20 right-20 text-blue-400/20 animate-float">
            <FaReact size={40} />
          </div>
          <div className="absolute bottom-32 left-20 text-green-400/20 animate-float" style={{ animationDelay: '1s' }}>
            <FaPython size={40} />
          </div>
          <div className="absolute top-1/3 left-10 text-purple-400/20 animate-float" style={{ animationDelay: '2s' }}>
            <FaNodeJs size={40} />
          </div>
          <div className="absolute bottom-1/3 right-10 text-yellow-400/20 animate-float" style={{ animationDelay: '1.5s' }}>
            <FaAws size={40} />
          </div>
          
          {/* Particle effects */}
          <div className="absolute w-2 h-2 bg-blue-400/30 rounded-full animate-particle" style={{ left: '10%', animationDelay: '0s' }}></div>
          <div className="absolute w-1 h-1 bg-green-400/30 rounded-full animate-particle" style={{ left: '20%', animationDelay: '1s' }}></div>
          <div className="absolute w-1.5 h-1.5 bg-purple-400/30 rounded-full animate-particle" style={{ left: '30%', animationDelay: '2s' }}></div>
          <div className="absolute w-1 h-1 bg-yellow-400/30 rounded-full animate-particle" style={{ left: '40%', animationDelay: '3s' }}></div>
          <div className="absolute w-2 h-2 bg-blue-400/20 rounded-full animate-particle" style={{ left: '70%', animationDelay: '0.5s' }}></div>
          <div className="absolute w-1 h-1 bg-green-400/20 rounded-full animate-particle" style={{ left: '80%', animationDelay: '1.5s' }}></div>
          <div className="absolute w-1.5 h-1.5 bg-purple-400/20 rounded-full animate-particle" style={{ left: '90%', animationDelay: '2.5s' }}></div>
        </div>

        <div className="container-max text-center px-4 sm:px-6 lg:px-8 relative z-10">
          <div className={`transition-all duration-1000 ${visibleSections.has('hero') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            {/* Animated greeting */}
            <div className="mb-8">
              <span className="text-lg md:text-xl text-blue-400 font-medium animate-fade-in">
                Hello, I'm
              </span>
            </div>

            {/* Main name with enhanced animation */}
            <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight relative">
              <span className="bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent animate-gradient-x">
                Matthew MacEachern
              </span>
              {/* Animated underline */}
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-1 bg-gradient-to-r from-blue-400 to-green-400 animate-expand-width"></div>
            </h1>

            {/* Animated subtitle */}
            <div className="mb-8">
              <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed animate-fade-in-delay">
                Full-Stack Engineer passionate about building impactful software
              </p>
              <p className="text-lg text-gray-400 mt-4 animate-fade-in-delay-2">
                Based in San Francisco, CA • Available for opportunities
              </p>
            </div>

            {/* Animated stats */}
            <div className="flex justify-center gap-8 mb-12 animate-fade-in-delay-3">
              <div className="text-center animate-float" style={{ animationDelay: '0s' }}>
                <div className="text-2xl font-bold text-white bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">2+</div>
                <div className="text-sm text-gray-400">Years Experience</div>
              </div>
              <div className="text-center animate-float" style={{ animationDelay: '0.5s' }}>
                <div className="text-2xl font-bold text-white bg-gradient-to-r from-green-400 to-green-600 bg-clip-text text-transparent">150K+</div>
                <div className="text-sm text-gray-400">Lines of Code</div>
              </div>
              <div className="text-center animate-float" style={{ animationDelay: '0.5s' }}>
                <div className="text-2xl font-bold text-white bg-gradient-to-r from-green-400 to-green-600 bg-clip-text text-transparent">10+</div>
                <div className="text-sm text-gray-400">Languages/Frameworks</div>
              </div>
            </div>

            {/* Enhanced CTA buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-delay-4">
              <a
                href="#about"
                className="button-primary inline-flex items-center gap-2 group"
              >
                <span>Learn More</span>
                <div className="transform group-hover:translate-x-1 transition-transform duration-200">
                  →
                </div>
              </a>
              <a
                href="/assets/Matthew_Resume.pdf"
                download="Matthew_Resume.pdf"
                className="button-secondary inline-flex items-center gap-2 group"
              >
                <Download size={18} className="group-hover:animate-bounce" />
                Download Resume
              </a>
            </div>


          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gradient-to-b from-gray-800 via-gray-800/95 to-gray-900 relative">
        {/* Smooth transition overlay */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-gray-900 to-transparent pointer-events-none"></div>
        <div className="container-max px-4 sm:px-6 lg:px-8">
          <div className={`transition-all duration-1000 ${visibleSections.has('about') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            {/* Header */}
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
                About Me
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
                Full-Stack Engineer passionate about building impactful software
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
              {/* Profile Image */}
              <div className="order-2 lg:order-1">
                {loading ? (
                  <div className="w-full max-w-md mx-auto">
                    <div className="aspect-square bg-gray-700 rounded-3xl animate-pulse"></div>
                  </div>
                ) : (
                  <div className="relative group">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-green-400 rounded-3xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity duration-300"></div>
                    <img
                      src="/assets/headshot.jpeg"
                      alt="Matthew MacEachern"
                      className="relative w-full max-w-md mx-auto rounded-3xl shadow-2xl object-cover aspect-square"
                    />
                  </div>
                )}
              </div>

              {/* Content Section */}
              <div className="order-1 lg:order-2 space-y-8">
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
                    <div className="space-y-4">
                      <h3 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
                        Hi there! I'm Matthew
                      </h3>
                      <div className="flex items-center gap-3 text-lg text-blue-400 font-semibold">
                        <span>Full-Stack Engineer</span>
                        <div className="flex items-center gap-1 text-gray-400">
                          <MapPin size={16} />
                          <span className="text-sm">San Francisco, CA</span>
                        </div>
                      </div>
                    </div>

                    {/* Bio */}
                    <div className="space-y-4 text-gray-300 leading-relaxed">
                      <p className="text-lg">
                        I'm a Computer Engineering graduate from Queen's University and currently a Full-Stack Engineer at Pivotal Life Sciences, where I develop AI-driven products to streamline the VC investment process.
                      </p>
                      <p className="text-lg">
                        I thrive at the intersection of engineering and data, bringing ideas to life through end-to-end development and close collaboration with cross-functional teams. Previously, I worked as an AI Engineer at MoneyLion, focusing on data infrastructure and model reliability.
                      </p>
                      <p className="text-lg">
                        I'm passionate about building and improving systems that make a difference in people's everyday lives through innovative software solutions.
                      </p>
                    </div>

                    {/* Skills Section */}
                    <div className="space-y-4">
                      <h4 className="text-xl font-semibold text-white">Core Technologies</h4>
                      <div className="flex flex-wrap gap-3">
                        {skills.map((skill) => (
                          <div
                            key={skill.name}
                            className={`px-4 py-2 rounded-xl font-medium text-sm border-2 transition-all duration-200 hover:scale-105 cursor-pointer
                              ${skill.color === 'blue' 
                                ? 'border-blue-500/30 text-blue-400 bg-blue-500/10 hover:bg-blue-500/20 hover:border-blue-500/50' 
                                : skill.color === 'green'
                                ? 'border-green-500/30 text-green-400 bg-green-500/10 hover:bg-green-500/20 hover:border-green-500/50'
                                : skill.color === 'orange'
                                ? 'border-orange-500/30 text-orange-400 bg-orange-500/10 hover:bg-orange-500/20 hover:border-orange-500/50'
                                : skill.color === 'purple'
                                ? 'border-purple-500/30 text-purple-400 bg-purple-500/10 hover:bg-purple-500/20 hover:border-purple-500/50'
                                : 'border-gray-500/30 text-gray-300 bg-gray-500/10 hover:bg-gray-500/20 hover:border-gray-500/50'
                              }`}
                          >
                            <div className="flex items-center gap-2">
                              <span className="text-base flex items-center justify-center w-5 h-5">{skill.icon}</span>
                              {skill.name}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Contact & Resume Section */}
                    <div className="flex flex-col sm:flex-row gap-4 pt-4">
                      {/* Social Links */}
                      <div className="flex gap-3">
                        <a
                          href="https://github.com/mattmac02"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-3 bg-gray-800 hover:bg-gray-700 rounded-xl transition-all duration-200 hover:scale-105 group border border-gray-700"
                        >
                          <Github size={20} className="text-gray-300 group-hover:text-white" />
                        </a>
                        <a
                          href="https://www.linkedin.com/in/matthew-maceachern/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-3 bg-gray-800 hover:bg-gray-700 rounded-xl transition-all duration-200 hover:scale-105 group border border-gray-700"
                        >
                          <Linkedin size={20} className="text-gray-300 group-hover:text-white" />
                        </a>
                        <a
                          href="mailto:19mam37@queensu.ca"
                          className="p-3 bg-gray-800 hover:bg-gray-700 rounded-xl transition-all duration-200 hover:scale-105 group border border-gray-700"
                        >
                          <Mail size={20} className="text-gray-300 group-hover:text-white" />
                        </a>
                      </div>
                    </div>
                  </>
                )}
              </div>
            </div>

            {/* World Map Section */}
            <div className="mt-20">
              <div className="text-center mb-12">
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">Places I've Been</h3>
                <p className="text-gray-300 max-w-2xl mx-auto">
                  I love traveling and experiencing different cultures. Here are some of the countries I've visited.
                </p>
              </div>
              
              {/* Travel Statistics */}
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="bg-gradient-to-br from-blue-500/10 to-blue-600/10 rounded-2xl p-6 border border-blue-500/20 text-center">
                  <div className="text-3xl font-bold text-blue-400 mb-2">{visitedCountries.length}</div>
                  <div className="text-gray-300 text-sm">Countries Visited</div>
                </div>
                <div className="bg-gradient-to-br from-green-500/10 to-green-600/10 rounded-2xl p-6 border border-green-500/20 text-center">
                  <div className="text-3xl font-bold text-green-400 mb-2">
                    {Math.round((visitedCountries.length / 195) * 100)}%
                  </div>
                  <div className="text-gray-300 text-sm">Of World Countries</div>
                </div>
                <div className="bg-gradient-to-br from-purple-500/10 to-purple-600/10 rounded-2xl p-6 border border-purple-500/20 text-center">
                  <div className="text-3xl font-bold text-purple-400 mb-2">
                    5/7
                  </div>
                  <div className="text-gray-300 text-sm">World Continents</div>
                </div>
              </div>
              
              <div className="bg-gray-800 rounded-3xl shadow-2xl p-8 border border-gray-700">
                <WorldMap visitedCountries={visitedCountries} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-gradient-to-b from-gray-900 via-black to-black">
        <div className="container-max px-4 sm:px-6 lg:px-8">
          <div className={`transition-all duration-1000 ${visibleSections.has('projects') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            {/* Header Section */}
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
                Projects
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
                Showcasing my work in software development and technology
              </p>
            </div>

            {/* Projects Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {loading ? (
                // Loading skeletons
                Array.from({ length: 3 }).map((_, index) => (
                  <div key={index} className="bg-gray-800 rounded-3xl shadow-2xl overflow-hidden animate-pulse border border-gray-700">
                    <div className="h-48 bg-gray-700"></div>
                    <div className="p-6 space-y-4">
                      <div className="h-6 bg-gray-700 rounded w-3/4"></div>
                      <div className="space-y-2">
                        <div className="h-4 bg-gray-700 rounded"></div>
                        <div className="h-4 bg-gray-700 rounded w-5/6"></div>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        <div className="h-6 bg-gray-700 rounded w-16"></div>
                        <div className="h-6 bg-gray-700 rounded w-20"></div>
                        <div className="h-6 bg-gray-700 rounded w-14"></div>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                projects.map((project, index) => (
                  <div
                    key={index}
                    className="group bg-gray-800 rounded-3xl shadow-2xl overflow-hidden border border-gray-700 relative transition-all duration-500 ease-out hover:shadow-3xl hover:-translate-y-1 hover:rounded-3xl"
                  >
                    {/* Project Image */}
                    <div className="relative overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-48 object-cover transition-transform duration-500 ease-out group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      
                      {/* External Link Icon */}
                      <div className="absolute top-4 right-4 p-2 bg-gray-800/95 backdrop-blur-sm rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0 border border-gray-600 shadow-lg">
                        {project.url.startsWith('http') ? (
                          <ExternalLink size={16} className="text-gray-300" />
                        ) : (
                          <Code size={16} className="text-gray-300" />
                        )}
                      </div>
                    </div>

                    {/* Project Content */}
                    <div className="p-6 space-y-4 relative z-20 bg-gray-800">
                      {/* Title and Description */}
                      <div className="space-y-3">
                        <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors duration-300">
                          {project.title}
                        </h3>
                        <p className="text-gray-300 leading-relaxed">
                          {project.description}
                        </p>
                      </div>

                      {/* Technologies */}
                      {project.technologies && (
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.map((tech) => (
                            <span
                              key={tech}
                              className="px-3 py-1 bg-gray-700 text-gray-300 text-sm font-medium rounded-full border border-gray-600 hover:bg-blue-500/20 hover:text-blue-400 hover:border-blue-500/50 transition-all duration-300"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      )}

                      {/* GitHub Link */}
                      {project.githubUrl && (
                        <div className="flex items-center gap-2 pt-2">
                          <Github size={16} className="text-gray-400" />
                          <span className="text-sm text-gray-400 font-medium">View on GitHub</span>
                        </div>
                      )}
                    </div>

                    {/* Clickable Overlay */}
                    <a
                      href={project.url}
                      target={project.url.startsWith('http') ? '_blank' : undefined}
                      rel={project.url.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="absolute inset-0 z-10"
                      aria-label={`View ${project.title} project`}
                    />
                  </div>
                ))
              )}
            </div>

            {/* Call to Action */}
            <div className="text-center mt-16">
              <div className="p-8">
                <h3 className="text-2xl font-bold text-white mb-4">
                  Have a project in mind?
                </h3>
                <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                  I'm always interested in new opportunities and exciting projects. Let's discuss how we can work together.
                </p>
                <a
                  href="mailto:19mam37@queensu.ca"
                  className="button-primary inline-flex items-center gap-2"
                >
                  Get in Touch
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 bg-gradient-to-b from-black via-gray-900 to-gray-800 relative">
        {/* Smooth transition overlay */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-gray-800 to-transparent pointer-events-none"></div>
        <div className="container-max px-4 sm:px-6 lg:px-8">
          <div className={`transition-all duration-1000 ${visibleSections.has('experience') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            {/* Header */}
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-6xl font-bold text-white mb-4 tracking-tight">
                Experience
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
                My professional journey, education, and extracurricular activities
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-12">
              {/* Main Experience Section */}
              <div className="lg:col-span-2 space-y-8">
                {/* Professional Experience */}
                <div className="bg-gradient-to-br from-gray-800/20 to-gray-700/20 rounded-3xl p-8 border border-gray-700/30 shadow-2xl">
                  <h3 className="text-3xl font-bold text-white mb-8">Professional Experience</h3>
                  <div className="space-y-6">
                    {experiences === null ? (
                      // Loading skeleton
                      Array.from({ length: 3 }).map((_, index) => (
                        <div key={index} className="bg-gray-800 rounded-2xl shadow-2xl p-6 animate-pulse border border-gray-700">
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
                        const isLastInCompany = index === experiences.length - 1 || experiences[index + 1].company !== exp.company
                        
                        return (
                          <div key={index} className="relative">
                            {/* Connecting line for same company progression */}
                            {isSameCompany && (
                              <div className="absolute left-6 top-[-16px] w-0.5 h-4 bg-gradient-to-b from-blue-500 to-blue-400 z-10"></div>
                            )}

                            {/* Continuation line for ongoing progression */}
                            {!isLastInCompany && exp.company === experiences[index + 1].company && (
                              <div className="absolute left-6 bottom-[-16px] w-0.5 h-4 bg-gradient-to-b from-blue-400 to-blue-500 z-10"></div>
                            )}

                            <div className={`bg-gray-800 rounded-2xl shadow-2xl p-6 border-l-4 transition-all duration-300 hover:shadow-2xl group cursor-pointer
                              ${isSameCompany ? 'border-blue-500 bg-gradient-to-r from-gray-800/50 to-gray-800' : 'border-blue-400'}
                              hover:transform hover:-translate-y-1 hover:border-blue-300 hover:bg-gray-750`}
                              style={{
                                background: isSameCompany
                                  ? 'linear-gradient(145deg, #1f2937 0%, #374151 50%, #1f2937 100%)'
                                  : 'linear-gradient(145deg, #1f2937 0%, #374151 50%, #1f2937 100%)',
                                position: 'relative',
                                overflow: 'visible',
                                border: '1px solid rgba(59, 130, 246, 0.2)'
                              }}
                            >
                              {/* Top border gradient */}
                              <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500 to-blue-400 rounded-t-2xl"></div>

                              {/* Header */}
                              <div className="flex items-start justify-between mb-4">
                                <div className="flex-1">
                                  <h4 className="text-xl font-bold text-blue-100 mb-2 group-hover:text-blue-200 transition-colors">
                                    {exp.title}
                                  </h4>
                                  <div className="flex items-center gap-3 mb-2">
                                    {exp.website ? (
                                      <a
                                        href={exp.website}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-blue-300 font-semibold hover:text-blue-200 flex items-center gap-1 transition-colors"
                                      >
                                        {exp.company}
                                        <ExternalLink size={14} />
                                      </a>
                                    ) : (
                                      <span className="text-blue-300 font-semibold">{exp.company}</span>
                                    )}
                                    <div className="flex items-center gap-1 text-gray-300 text-sm">
                                      <span className="text-blue-400">•</span>
                                      {exp.location}
                                    </div>
                                  </div>
                                  <div className="text-blue-400 text-sm font-semibold">
                                    {exp.year}
                                  </div>
                                </div>

                                {/* Career progression indicator */}
                                {isSameCompany && (
                                  <div className="px-3 py-1 bg-green-500/20 text-green-300 text-xs font-semibold rounded-lg border border-green-500/30">
                                    ↑ Promotion
                                  </div>
                                )}
                              </div>

                              {/* Description */}
                              <div className="space-y-3">
                                {exp.description.map((desc, descIndex) => (
                                  <div key={descIndex} className="flex items-start gap-3">
                                    <span className="text-blue-400 font-bold mt-1 text-lg">•</span>
                                    <p className="text-gray-200 leading-relaxed text-sm">
                                      {desc}
                                    </p>
                                  </div>
                                ))}
                              </div>
                            </div>
                          </div>
                        )
                      })
                    )}
                  </div>
                </div>

                {/* Education */}
                <div className="bg-gradient-to-br from-gray-800/20 to-gray-700/20 rounded-3xl p-8 border border-gray-700/30 shadow-2xl">
                  <h3 className="text-3xl font-bold text-white mb-8">Education</h3>
                  <div className="space-y-6">
                    {education === null ? (
                      <div className="bg-gray-800 rounded-2xl shadow-2xl p-6 animate-pulse border border-gray-700">
                        <div className="h-6 bg-gray-700 rounded w-3/4 mb-3"></div>
                        <div className="h-4 bg-gray-700 rounded w-1/2 mb-4"></div>
                        <div className="h-4 bg-gray-700 rounded w-5/6"></div>
                      </div>
                    ) : (
                      education.map((edu, index) => (
                        <div key={index} className="bg-gray-800 rounded-2xl shadow-2xl p-6 border-l-4 border-green-500 transition-all duration-300 hover:shadow-2xl hover:transform hover:-translate-y-1 hover:border-green-400"
                          style={{
                            background: 'linear-gradient(145deg, #1f2937 0%, #374151 50%, #1f2937 100%)',
                            border: '1px solid rgba(34, 197, 94, 0.2)'
                          }}
                                                  >
                          <h4 className="text-xl font-bold text-green-100 mb-2">{edu.degree}</h4>
                          <div className="flex items-center gap-3 mb-2">
                            <span className="text-green-300 font-semibold">{edu.school}</span>
                            <div className="flex items-center gap-1 text-gray-300 text-sm">
                              <span className="text-green-400">•</span>
                              {edu.location}
                            </div>
                          </div>
                          <div className="text-green-400 text-sm font-semibold mb-3">
                            {edu.year}
                          </div>
                          <div className="flex items-start gap-3">
                            <span className="text-green-400 font-bold text-lg leading-none">•</span>
                            <p className="text-gray-200 text-sm">{edu.description}</p>
                          </div>
                        </div>
                      ))
                    )}
                  </div>
                </div>
              </div>

              {/* Sidebar */}
              <div className="space-y-8">
                {/* Technologies */}
                <div className="bg-gradient-to-br from-gray-800/20 to-gray-700/20 rounded-3xl p-8 border border-gray-700/30 shadow-2xl">
                  <h3 className="text-2xl font-bold text-white mb-6">Technologies</h3>
                  {technologies === null ? (
                    <div className="bg-gray-800 rounded-2xl shadow-2xl p-6 animate-pulse space-y-4 border border-gray-700">
                      <div className="h-4 bg-gray-700 rounded"></div>
                      <div className="h-4 bg-gray-700 rounded w-5/6"></div>
                      <div className="h-4 bg-gray-700 rounded w-4/6"></div>
                    </div>
                  ) : (
                    <div className="bg-gray-800 rounded-2xl shadow-2xl p-6 space-y-6 border border-gray-700"
                      style={{
                        background: 'linear-gradient(145deg, #1f2937 0%, #374151 50%, #1f2937 100%)'
                      }}
                    >
                      <div>
                        <h4 className="text-lg font-semibold text-white mb-3">Frontend</h4>
                        <div className="flex flex-wrap gap-2">
                          {technologies.frontend.map((tech) => (
                            <span key={tech} className="px-3 py-1 bg-gray-700 text-gray-300 text-sm font-medium rounded-full border border-gray-600 hover:bg-gray-600 hover:scale-105 transition-all duration-200">
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-white mb-3">Backend</h4>
                        <div className="flex flex-wrap gap-2">
                          {technologies.backend.map((tech) => (
                            <span key={tech} className="px-3 py-1 bg-gray-700 text-gray-300 text-sm font-medium rounded-full border border-gray-600 hover:bg-gray-600 hover:scale-105 transition-all duration-200">
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-white mb-3">Data Layer</h4>
                        <div className="flex flex-wrap gap-2">
                          {technologies.dataLayer.map((tech) => (
                            <span key={tech} className="px-3 py-1 bg-gray-700 text-gray-300 text-sm font-medium rounded-full border border-gray-600 hover:bg-gray-600 hover:scale-105 transition-all duration-200">
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {/* Extracurricular Activities */}
                <div className="bg-gradient-to-br from-gray-800/20 to-gray-700/20 rounded-3xl p-8 border border-gray-700/30 shadow-2xl">
                  <h3 className="text-2xl font-bold text-white mb-6">Extracurricular Activities</h3>
                  
                  {/* Category Filter */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {categories.map((category) => (
                      <button
                        key={category.key}
                        onClick={() => setSelectedCategory(category.key)}
                        className={`px-3 py-1 rounded-full text-sm font-medium transition-all duration-200 flex items-center gap-1
                          ${selectedCategory === category.key
                            ? 'bg-gray-600 text-white border border-gray-500'
                            : 'bg-gray-700 text-gray-300 hover:bg-gray-600 border border-gray-600'
                          }`}
                      >
                        {category.icon}
                        {category.label}
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
                        <div key={activity.id} className="bg-gray-800 rounded-2xl shadow-2xl p-4 transition-all duration-300 hover:shadow-2xl hover:transform hover:-translate-y-1 cursor-pointer border border-gray-700"
                          style={{
                            background: 'linear-gradient(145deg, #1f2937 0%, #374151 50%, #1f2937 100%)',
                            position: 'relative',
                            overflow: 'visible'
                          }}
                          onClick={() => handleExtracurricularToggle(activity.id)}
                        >


                          <div className="flex items-start justify-between">
                            <div className="flex items-center gap-3 mb-2">
                              <div className="p-2 bg-gray-700 rounded-xl text-gray-300 w-10 h-10 flex items-center justify-center">
                                {activity.icon}
                              </div>
                              <div>
                                <h4 className="font-semibold text-white">{activity.title}</h4>
                                <p className="text-sm text-gray-400">{activity.year}</p>
                              </div>
                            </div>
                            <button
                              className="p-1 hover:bg-gray-700 rounded-lg transition-colors"
                            >
                              {activity.expanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                            </button>
                          </div>
                          
                          <p className="text-gray-300 text-sm mb-3">{activity.description}</p>
                          
                          {activity.expanded && (
                            <div className="mt-4 space-y-3 animate-fade-in border-t border-gray-600 pt-4 bg-gray-700 rounded-lg p-3">
                              <div>
                                <h5 className="font-medium text-white text-sm mb-2 flex items-center gap-1">
                                  <Trophy size={14} className="text-gray-400" />
                                  Key Achievements:
                                </h5>
                                <ul className="list-none space-y-1">
                                  {activity.achievements.map((achievement, index) => (
                                    <li key={index} className="text-sm text-gray-300 flex items-start gap-2">
                                      <span className="text-gray-400 font-bold mt-0.5">•</span>
                                      {achievement}
                                    </li>
                                  ))}
                                </ul>
                              </div>
                              <div>
                                <h5 className="font-medium text-white text-sm mb-2 flex items-center gap-1">
                                  <Code size={14} className="text-gray-400" />
                                  Skills Developed:
                                </h5>
                                <div className="flex flex-wrap gap-1">
                                  {activity.skills.map((skill) => (
                                    <span key={skill} className="px-2 py-1 bg-gray-600 text-gray-300 text-xs rounded-full border border-gray-500">
                                      {skill}
                                    </span>
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

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gradient-to-b from-gray-800 via-black to-black">
        <div className="container-max px-4 sm:px-6 lg:px-8">
          <div className={`transition-all duration-1000 ${visibleSections.has('contact') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="text-center">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
                Get In Touch
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-12 leading-relaxed">
                I'm always interested in new opportunities and exciting projects. Let's discuss how we can work together.
              </p>
              
              <div className="p-8 max-w-2xl mx-auto">
                <div className="space-y-6">
                  <div className="flex items-center justify-center gap-4">
                    <a
                      href="https://github.com/mattmac02"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-4 bg-gray-700 hover:bg-gray-600 rounded-xl transition-all duration-200 hover:scale-105 group border border-gray-600"
                    >
                      <Github size={24} className="text-gray-300 group-hover:text-white" />
                    </a>
                    <a
                      href="https://www.linkedin.com/in/matthew-maceachern/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-4 bg-gray-700 hover:bg-gray-600 rounded-xl transition-all duration-200 hover:scale-105 group border border-gray-600"
                    >
                      <Linkedin size={24} className="text-gray-300 group-hover:text-white" />
                    </a>
                    <a
                      href="mailto:19mam37@queensu.ca"
                      className="p-4 bg-gray-700 hover:bg-gray-600 rounded-xl transition-all duration-200 hover:scale-105 group border border-gray-600"
                    >
                      <Mail size={24} className="text-gray-300 group-hover:text-white" />
                    </a>
                  </div>
                  
                  <div className="pt-4">
                    <a
                      href="mailto:19mam37@queensu.ca"
                      className="button-primary inline-flex items-center gap-2"
                    >
                      Send Message
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home 