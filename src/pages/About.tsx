import { Linkedin, Github, Download, Mail, MapPin } from 'lucide-react'
import { useState, useEffect } from 'react'
import { FaReact, FaPython, FaAws, FaDatabase, FaNodeJs, FaDocker } from 'react-icons/fa'
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
    { name: 'AWS', icon: <FaAws />, color: 'gray' as const },
    { name: 'Node.js', icon: <FaNodeJs />, color: 'blue' as const },
    { name: 'Databases', icon: <FaDatabase />, color: 'green' as const },
    { name: 'Docker', icon: <FaDocker />, color: 'gray' as const }
  ]

  const visitedCountries = [
    'MY', 'CA', 'US', 'ID', 'KE', 'TZ', 'SG', 'TH', 'AT', 'HR', 'CZ', 'DE', 'GR', 'HU', 'IE', 'IT', 'NL', 'BQ', 'PL', 'PT', 'SK', 'ES', 'GB', 'BS', 'BZ', 'CR', 'DO', 'MX', 'PA', 'PE'
  ]

  return (
    <div className="section-padding">
      <div className="container-max">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4 tracking-tight">
            About Me
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Full-Stack Engineer passionate about building impactful software
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Profile Image */}
          <div className="order-2 lg:order-1">
            {loading ? (
              <div className="w-full max-w-md mx-auto">
                <div className="aspect-square bg-gray-200 rounded-3xl animate-pulse"></div>
              </div>
            ) : (
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-green-400 rounded-3xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity duration-300"></div>
                <img
                src="/assets/headshot.jpeg"
                  alt="Matthew MacEachern"
                  className="relative w-full max-w-md mx-auto rounded-3xl shadow-lg object-cover aspect-square"
              />
              </div>
            )}
          </div>

          {/* Content Section */}
          <div className="order-1 lg:order-2 space-y-8">
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
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight">
                  Hi there! I'm Matthew
                  </h2>
                  <div className="flex items-center gap-3 text-lg text-blue-600 font-semibold">
                    <span>Full-Stack Engineer</span>
                    <div className="flex items-center gap-1 text-gray-500">
                      <MapPin size={16} />
                      <span className="text-sm">San Francisco, CA</span>
                    </div>
                  </div>
                </div>

                {/* Bio */}
                <div className="space-y-4 text-gray-600 leading-relaxed">
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
                  <h3 className="text-xl font-semibold text-gray-900">Core Technologies</h3>
                  <div className="flex flex-wrap gap-3">
                    {skills.map((skill) => (
                      <div
                        key={skill.name}
                        className={`px-4 py-2 rounded-xl font-medium text-sm border-2 transition-all duration-200 hover:scale-105 cursor-pointer
                          ${skill.color === 'blue' 
                            ? 'border-blue-200 text-blue-700 bg-blue-50 hover:bg-blue-100 hover:border-blue-300' 
                            : skill.color === 'green'
                            ? 'border-green-200 text-green-700 bg-green-50 hover:bg-green-100 hover:border-green-300'
                            : 'border-gray-200 text-gray-700 bg-gray-50 hover:bg-gray-100 hover:border-gray-300'
                          }`}
                      >
                        <div className="flex items-center gap-2">
                          <span className="text-base">{skill.icon}</span>
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
                      <Github size={20} className="text-gray-700 group-hover:text-gray-900" />
                    </a>
                    <a
                      href="https://www.linkedin.com/in/matthew-maceachern/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-gray-100 hover:bg-gray-200 rounded-xl transition-all duration-200 hover:scale-105 group"
                    >
                      <Linkedin size={20} className="text-gray-700 group-hover:text-gray-900" />
                    </a>
                    <a
                      href="mailto:19mam37@queensu.ca"
                      className="p-3 bg-gray-100 hover:bg-gray-200 rounded-xl transition-all duration-200 hover:scale-105 group"
                    >
                      <Mail size={20} className="text-gray-700 group-hover:text-gray-900" />
                    </a>
                  </div>

                  {/* Resume Button */}
                  <a
                    href="/assets/Matthew_Resume.pdf"
                    download="Matthew_Resume.pdf"
                    className="button-primary inline-flex items-center gap-2"
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
        <div className="mt-20">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Places I've Been</h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              I love traveling and experiencing different cultures. Here are some of the countries I've visited.
            </p>
          </div>
          <div className="bg-white rounded-3xl shadow-md p-8">
            <WorldMap visitedCountries={visitedCountries} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
