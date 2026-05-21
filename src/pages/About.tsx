import { Linkedin, Github, Download, Mail, MapPin } from 'lucide-react'
import { useState, useEffect } from 'react'
import { FaReact, FaPython, FaAws, FaDatabase, FaNodeJs } from 'react-icons/fa'
import { SiRuby } from 'react-icons/si'
import WorldMap from '../components/WorldMap'

const About = () => {
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
    }, 250)
    return () => clearTimeout(timer)
  }, [])

  const skills = [
    { name: 'React', icon: <FaReact />, color: 'blue' as const },
    { name: 'Python', icon: <FaPython />, color: 'green' as const },
    { name: 'Ruby', icon: <SiRuby />, color: 'red' as const },
    { name: 'AWS', icon: <FaAws />, color: 'gray' as const },
    { name: 'Node.js', icon: <FaNodeJs />, color: 'blue' as const },
    { name: 'Databases', icon: <FaDatabase />, color: 'green' as const },
  ]

  const visitedCountries = [
    'MY', 'CA', 'US', 'ID', 'KE', 'TZ', 'SG', 'TH', 'AT', 'HR', 'CZ', 'DE', 'GR', 'HU', 'IE', 'IT', 'NL', 'BQ', 'PL', 'PT', 'SK', 'ES', 'GB', 'BS', 'BZ', 'CR', 'DO', 'MX', 'PA', 'PE'
  ]

  return (
    <div className="section-padding">
      <div className="container-max">
        {/* Hero Section */}
        <div className="text-center mb-12 sm:mb-16 px-4">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 tracking-tight">
            About Me
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Software Engineer passionate about building impactful software
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-start">
          {/* Profile Image */}
          <div className="order-2 lg:order-1 px-4 lg:px-0">
            {loading ? (
              <div className="w-full max-w-sm sm:max-w-md mx-auto">
                <div className="aspect-square bg-gray-200 rounded-2xl sm:rounded-3xl animate-pulse"></div>
              </div>
            ) : (
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-green-400 rounded-2xl sm:rounded-3xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity duration-300"></div>
                <img
                src="/assets/headshot.jpeg"
                  alt="Matthew MacEachern"
                  className="relative w-full max-w-sm sm:max-w-md mx-auto rounded-2xl sm:rounded-3xl shadow-lg object-cover aspect-square"
              />
              </div>
            )}
          </div>

          {/* Content Section */}
          <div className="order-1 lg:order-2 space-y-8 px-4 lg:px-0">
            {loading ? (
              <div className="space-y-6">
                <div className="h-12 bg-gray-200 rounded-xl animate-pulse"></div>
                <div className="h-8 bg-gray-200 rounded-lg animate-pulse w-3/4"></div>
                <div className="space-y-3">
                  <div className="h-4 bg-gray-200 rounded animate-pulse"></div>
                  <div className="h-4 bg-gray-200 rounded animate-pulse w-5/6"></div>
                  <div className="h-4 bg-gray-200 rounded animate-pulse w-4/6"></div>
                </div>
              </div>
            ) : (
              <>
                {/* Introduction */}
                <div className="space-y-4">
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 tracking-tight">
                  Hi there! I'm Matthew
                  </h2>
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3 text-lg text-blue-600 font-semibold">
                    <span>Software Engineer</span>
                    <div className="flex items-center gap-1 text-gray-500">
                      <MapPin size={16} />
                      <span className="text-sm">Toronto, CA</span>
                    </div>
                  </div>
                </div>

                {/* Bio */}
                <div className="space-y-4 text-gray-600 leading-relaxed">
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

                {/* Skills Section */}
                <div className="space-y-4">
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-900">Core Technologies</h3>
                  <div className="flex flex-wrap gap-2 sm:gap-3">
                    {skills.map((skill) => (
                      <div
                        key={skill.name}
                        className={`px-3 sm:px-4 py-2 rounded-xl font-medium text-xs sm:text-sm border-2 transition-all duration-200 hover:scale-105 cursor-pointer
                          ${skill.color === 'blue' 
                            ? 'border-blue-200 text-blue-700 bg-blue-50 hover:bg-blue-100 hover:border-blue-300' 
                            : skill.color === 'green'
                            ? 'border-green-200 text-green-700 bg-green-50 hover:bg-green-100 hover:border-green-300'
                            : skill.color === 'red'
                            ? 'border-red-200 text-red-700 bg-red-50 hover:bg-red-100 hover:border-red-300'
                            : 'border-gray-200 text-gray-700 bg-gray-50 hover:bg-gray-100 hover:border-gray-300'
                          }`}
                      >
                        <div className="flex items-center gap-1 sm:gap-2">
                          <span className="text-sm sm:text-base">{skill.icon}</span>
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
                      className="p-3 bg-gray-100 hover:bg-gray-200 rounded-xl transition-all duration-200 hover:scale-105 group"
                    >
                      <Github size={18} className="text-gray-700 group-hover:text-gray-900" />
                    </a>
                    <a
                      href="https://www.linkedin.com/in/matthew-maceachern/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-gray-100 hover:bg-gray-200 rounded-xl transition-all duration-200 hover:scale-105 group"
                    >
                      <Linkedin size={18} className="text-gray-700 group-hover:text-gray-900" />
                    </a>
                    <a
                      href="mailto:mattmac743@gmail.com"
                      className="p-3 bg-gray-100 hover:bg-gray-200 rounded-xl transition-all duration-200 hover:scale-105 group"
                    >
                      <Mail size={18} className="text-gray-700 group-hover:text-gray-900" />
                    </a>
                  </div>

                  {/* Resume Button */}
                  <a
                    href="/assets/Matthew_Resume.pdf"
                    download="Matthew_Resume.pdf"
                    className="button-primary inline-flex items-center gap-2 w-full sm:w-auto justify-center"
                  >
                    <Download size={18} />
                    Download Resume
                  </a>
                </div>
              </>
            )}
          </div>
        </div>

        {/* World Map Section */}
        <div className="mt-16 sm:mt-20">
          <div className="text-center mb-8 sm:mb-12 px-4">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-4">Places I've Been</h3>
            <p className="text-gray-600 max-w-2xl mx-auto text-sm sm:text-base">
              I love traveling and experiencing different cultures. Here are some of the countries I've visited.
            </p>
          </div>
          <div className="bg-white rounded-2xl sm:rounded-3xl shadow-md p-4 sm:p-6 lg:p-8 mx-4 sm:mx-0">
            <WorldMap visitedCountries={visitedCountries} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
