import { useState, useEffect } from 'react'
import { ExternalLink, Github, Code } from 'lucide-react'

interface Project {
  title: string
  description: string
  image: string
  url: string
  technologies?: string[]
  githubUrl?: string
}

const fetchProjectsData = (): Promise<Project[]> => new Promise(resolve => setTimeout(() => resolve([
  {
    title: 'Trackaroo',
    description: 'A one stop shop for your job application journey built with React in TypeScript, Supabase, and Netlify.',
    image: './assets/trackaroo_logo.jpeg',
    url: 'https://trackaroo.netlify.app/',
    technologies: ['React', 'TypeScript', 'Supabase', 'Netlify'],
    githubUrl: 'https://github.com/mattmac02/trackaroo'
  },
  // {
  //   title: 'AI Investment Platform',
  //   description: 'Full-stack AI-enabled investment platform with real-time data processing and predictive analytics.',
  //   image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&q=80',
  //   url: '/projects/ai-platform',
  //   technologies: ['Python', 'React', 'AWS', 'Machine Learning']
  // },
  // {
  //   title: 'Portfolio Website',
  //   description: 'Modern, responsive portfolio website built with React and Material-UI.',
  //   image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80',
  //   url: '/projects/portfolio',
  //   technologies: ['React', 'TypeScript', 'Material-UI', 'Vite']
  // }
]), 250))

const Projects = () => {
  const [projects, setProjects] = useState<Project[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Simulate data fetching
    fetchProjectsData().then((data) => {
      setProjects(data)
      setLoading(false)
    })
  }, [])

  return (
    <div className="section-padding">
      <div className="container-max">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4 tracking-tight">
            Projects
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Showcasing my work in software development and technology
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {loading ? (
            // Loading skeletons
            Array.from({ length: 3 }).map((_, index) => (
              <div key={index} className="bg-white rounded-3xl shadow-md overflow-hidden animate-pulse">
                <div className="h-48 bg-gray-200"></div>
                <div className="p-6 space-y-4">
                  <div className="h-6 bg-gray-200 rounded w-3/4"></div>
                  <div className="space-y-2">
                    <div className="h-4 bg-gray-200 rounded"></div>
                    <div className="h-4 bg-gray-200 rounded w-5/6"></div>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <div className="h-6 bg-gray-200 rounded w-16"></div>
                    <div className="h-6 bg-gray-200 rounded w-20"></div>
                    <div className="h-6 bg-gray-200 rounded w-14"></div>
                  </div>
                </div>
              </div>
            ))
          ) : (
            projects.map((project, index) => (
              <div
                key={index}
                className="group bg-white rounded-3xl shadow-md overflow-hidden card-hover border border-gray-100"
              >
                {/* Project Image */}
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                        alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  {/* External Link Icon */}
                  <div className="absolute top-4 right-4 p-2 bg-white/90 backdrop-blur-sm rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                    {project.url.startsWith('http') ? (
                      <ExternalLink size={16} className="text-gray-700" />
                    ) : (
                      <Code size={16} className="text-gray-700" />
                    )}
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6 space-y-4">
                  {/* Title and Description */}
                  <div className="space-y-3">
                    <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-200">
                            {project.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                          {project.description}
                    </p>
                  </div>

                  {/* Technologies */}
                        {project.technologies && (
                    <div className="flex flex-wrap gap-2">
                            {project.technologies.map((tech) => (
                        <span
                                key={tech}
                          className="px-3 py-1 bg-gray-100 text-gray-700 text-sm font-medium rounded-full border border-gray-200 hover:bg-blue-100 hover:text-blue-700 hover:border-blue-200 transition-all duration-200"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  )}

                  {/* GitHub Link */}
                        {project.githubUrl && (
                    <div className="flex items-center gap-2 pt-2">
                      <Github size={16} className="text-gray-500" />
                      <span className="text-sm text-gray-500 font-medium">View on GitHub</span>
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
          <div className="bg-gradient-to-r from-blue-50 to-green-50 rounded-3xl p-8 border border-blue-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Have a project in mind?
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
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
  )
}

export default Projects
