import { ExternalLink, Github, Code, Database, Palette } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useI18n } from '@/contexts/I18nContext';

const Projects = () => {
  const { translations } = useI18n();
  
  const projects = [
    {
      title: "SFCL Platform",
      description: translations.projects.projectDescriptions.sfcl,
      url: "https://sfcl.sa",
      category: "Platform",
      tech: ["PHP", "MySQL", "JavaScript", "CSS"],
      color: "primary",
      icon: <Database className="w-5 h-5" />
    },
    {
      title: "Admin SFCL",
      description: translations.projects.projectDescriptions.adminSfcl,
      url: "https://adminsfcl.net", 
      category: "Backend",
      tech: ["Laravel", "Microservices", "MySQL", "API"],
      color: "accent",
      icon: <Code className="w-5 h-5" />
    },
    {
      title: "Segam - Expert Dental Care",
      description: translations.projects.projectDescriptions.segam,
      category: "Frontend",
      tech: ["React", "Tailwind CSS", "TypeScript", "Bootstrap"],
      color: "primary-glow",
      icon: <Palette className="w-5 h-5" />
    },
    {
      title: "SegamDashboard",
      description: translations.projects.projectDescriptions.segamDashboard,
      category: "Full Stack",
      tech: ["Node.js", "React", "MongoDB", "Express.js"],
      color: "primary",
      icon: <Code className="w-5 h-5" />
    },
    {
      title: "ALNejum Contracting",
      description: translations.projects.projectDescriptions.alnејum,
      category: "Business",
      tech: ["Laravel", "MySQL", "Bootstrap", "jQuery"],
      color: "accent",
      icon: <Database className="w-5 h-5" />
    },
    {
      title: "Schengen Visa App",
      description: translations.projects.projectDescriptions.schengen,
      url: "https://schengen-visa-app.com",
      category: "Web App", 
      tech: ["Flask", "Python", "SQLite", "JavaScript"],
      color: "primary-glow",
      icon: <Code className="w-5 h-5" />
    }
  ];

  const categories = ["All", "Platform", "Backend", "Frontend", "Full Stack", "Business", "Web App"];

  return (
    <section id="projects" className="py-20 px-6 bg-muted/20">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            {translations.projects.title}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-primary-glow mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {translations.projects.subtitle}
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {translations.projects.categories.map((category) => (
            <button
              key={category}
              className="px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 border border-primary/20 hover:border-primary/40 hover:bg-primary/10 text-muted-foreground hover:text-primary"
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="glass-card p-6 group hover:shadow-xl transition-all duration-500 hover:-translate-y-2">
              {/* Project Header */}
              <div className="flex items-start justify-between mb-4">
                <div className={`w-12 h-12 rounded-lg bg-${project.color}/10 flex items-center justify-center text-${project.color} group-hover:scale-110 transition-transform duration-300`}>
                  {project.icon}
                </div>
                <span className={`px-3 py-1 text-xs font-medium rounded-full bg-${project.color}/10 text-${project.color}`}>
                  {project.category}
                </span>
              </div>

              {/* Project Title */}
              <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                {project.title}
              </h3>

              {/* Project Description */}
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                {project.description}
              </p>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((tech, techIndex) => (
                  <span 
                    key={techIndex}
                    className="px-2 py-1 text-xs bg-muted/50 text-muted-foreground rounded border"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Project Links */}
              <div className="flex gap-3">
                {project.url && (
                  <Button
                    size="sm"
                    className={`bg-${project.color}/10 hover:bg-${project.color}/20 text-${project.color} border-${project.color}/20 hover:border-${project.color}/40`}
                    variant="outline"
                    asChild
                  >
                    <a href={project.url} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      {translations.projects.liveDemo}
                    </a>
                  </Button>
                )}
                
                <Button
                  size="sm"
                  variant="outline"
                  className="border-muted-foreground/20 hover:border-muted-foreground/40 text-muted-foreground hover:text-foreground"
                >
                  <Github className="w-4 h-4 mr-2" />
                  {translations.projects.code}
                </Button>
              </div>

              {/* Hover Effects */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl pointer-events-none"></div>
            </div>
          ))}
        </div>

        {/* More Projects CTA */}
        <div className="text-center mt-16">
          <div className="glass-card p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-foreground mb-4">{translations.projects.moreProjectsTitle}</h3>
            <p className="text-muted-foreground mb-6">
              {translations.projects.moreProjectsDesc}
            </p>
            <Button 
              size="lg"
              className="bg-primary hover:bg-primary-glow text-primary-foreground"
              asChild
            >
              <a href="https://github.com/ashmawymidxd" target="_blank" rel="noopener noreferrer">
                <Github className="w-5 h-5 mr-2" />
                {translations.projects.viewGithub}
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;