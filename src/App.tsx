import { useEffect, useState } from "react";
import { profile } from "@/data/profile";
import { Dock, DockIcon } from "@/components/ui/dock";
import { ModeToggle } from "@/components/mode-toggle";
import { ThemeProvider, useTheme } from "@/components/theme-provider";
import { cn } from "@/lib/utils";
import { ExternalLink, Github } from "lucide-react";

import { FlickeringGrid } from "@/components/ui/flickering-grid";
import { Section } from "@/components/Section";

function App() {
  const [activeSection, setActiveSection] = useState("home");
  const { theme } = useTheme();

  // Compute grid color directly from theme to avoid cascading renders
  const gridColor = theme === "dark" ? "#6B7280" : "#9CA3AF";

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-20% 0px -35% 0px",
        threshold: 0.2
      }
    );

    document.querySelectorAll("section[id]").forEach((section) => {
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div className="min-h-screen w-full flex bg-background text-foreground relative overflow-hidden">
        {/* Background Grid */}
        <div className="absolute inset-0 fixed">
          <FlickeringGrid
            className="z-0 absolute inset-0 size-full"
            squareSize={4}
            gridGap={6}
            color={gridColor}
            maxOpacity={0.2}
            flickerChance={0.1}
          />
        </div>

        {/* Left Panel - 15% */}
        <div className="w-[15%] hidden lg:block border-r border-border/10 z-10"></div>

        {/* Main Content - 70% */}
        <main className="w-full lg:w-[70%] flex flex-col relative z-10">

          {/* Header/Nav */}
          <div className="flex-1 container max-w-4xl mx-auto px-4 py-8 space-y-16">

            {/* Hero Section */}
            <section id="home" className="flex flex-col items-center text-center gap-6 py-12">
              <div className="relative h-64 w-64 rounded-full overflow-hidden border-4 border-primary/20 shadow-xl">
                <img src={profile.personal.avatar} alt={profile.personal.name} className="object-cover w-full h-full" />
              </div>
              <div className="space-y-2">
                <h1 className="text-5xl font-extrabold tracking-tight lg:text-6xl">{profile.personal.name}</h1>
                <p className="text-2xl text-muted-foreground">{profile.personal.role}</p>
              </div>
              <p className="max-w-[600px] text-lg text-muted-foreground">{profile.personal.bio}</p>
              <div className="flex gap-6 mt-4">
                {profile.personal.socials.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors transform hover:scale-110"
                    title={social.name}
                  >
                    <social.icon className="h-8 w-8" />
                  </a>
                ))}
              </div>
            </section>

            <div className="shrink-0 bg-border h-[1px] w-full" />

            {/* Education */}
            <Section id="education" title="Education">
              <div className="grid gap-8">
                {profile.education.map((edu, index) => (
                  <div key={index} className="flex flex-col gap-2 border-l-2 border-primary/20 pl-6 relative">
                    <span className="absolute -left-[9px] top-0 h-4 w-4 rounded-full bg-background border-2 border-primary" />
                    <h3 className="font-bold text-xl">{edu.school}</h3>
                    <div className="text-sm font-medium text-muted-foreground">{edu.degree} | {edu.year}</div>
                    <p className="text-base mt-2 text-muted-foreground">{edu.description}</p>
                  </div>
                ))}
              </div>
            </Section>

            {/* Experience */}
            <Section id="experience" title="Experience">
              <div className="grid gap-8">
                {profile.experience.map((exp, index) => (
                  <div key={index} className="group relative grid gap-2 pb-1 pl-6 transition-all hover:pl-8 border-l border-border hover:border-primary">
                    <div className="absolute -left-[5px] top-0 h-2.5 w-2.5 rounded-full bg-muted-foreground group-hover:bg-primary transition-colors" />
                    <h3 className="font-bold text-xl leading-none">{exp.role}</h3>
                    <div className="text-sm font-medium text-muted-foreground">{exp.company} | {exp.year}</div>
                    <p className="text-base mt-2 text-muted-foreground">{exp.description}</p>
                  </div>
                ))}
              </div>
            </Section>

            {/* Skills */}
            <Section id="skills" title="Tech Stack">
              <div className="space-y-8">
                <div>
                  <h4 className="text-sm font-medium mb-4 text-muted-foreground uppercase tracking-wider">Languages</h4>
                  <div className="flex flex-wrap gap-4">
                    {profile.skills.languages.map(skill => (
                      <div key={skill.name} className="flex flex-col items-center gap-2 p-3 rounded-lg border bg-card hover:bg-accent/50 transition-colors min-w-[80px]">
                        <skill.icon className="h-8 w-8 text-foreground" />
                        <span className="text-xs font-medium">{skill.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="text-sm font-medium mb-4 text-muted-foreground uppercase tracking-wider">Tools</h4>
                  <div className="flex flex-wrap gap-4">
                    {profile.skills.tools.map(skill => (
                      <div key={skill.name} className="flex flex-col items-center gap-2 p-3 rounded-lg border bg-card hover:bg-accent/50 transition-colors min-w-[80px]">
                        <skill.icon className="h-8 w-8 text-foreground" />
                        <span className="text-xs font-medium">{skill.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="text-sm font-medium mb-4 text-muted-foreground uppercase tracking-wider">Cloud</h4>
                  <div className="flex flex-wrap gap-4">
                    {profile.skills.cloud.map(skill => (
                      <div key={skill.name} className="flex flex-col items-center gap-2 p-3 rounded-lg border bg-card hover:bg-accent/50 transition-colors min-w-[80px]">
                        <skill.icon className="h-8 w-8 text-foreground" />
                        <span className="text-xs font-medium">{skill.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="text-sm font-medium mb-4 text-muted-foreground uppercase tracking-wider">Software</h4>
                  <div className="flex flex-wrap gap-4">
                    {profile.skills.softwares.map(skill => (
                      <div key={skill.name} className="flex flex-col items-center gap-2 p-3 rounded-lg border bg-card hover:bg-accent/50 transition-colors min-w-[80px]">
                        <skill.icon className="h-8 w-8 text-foreground" />
                        <span className="text-xs font-medium">{skill.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Section>

            {/* Projects */}
            <Section id="projects" title="Projects">
              <div className="grid gap-6 md:grid-cols-2">
                {profile.projects.map((project, index) => (
                  <div
                    key={index}
                    className="flex flex-col rounded-xl border bg-card text-card-foreground shadow-sm overflow-hidden hover:shadow-lg transition-all hover:-translate-y-1 relative"
                  >
                    <div className="p-6 flex flex-col flex-1 gap-4 w-full">
                      <div className="space-y-2">
                        <h3 className="text-xl font-bold">{project.title}</h3>
                        <p className="text-sm text-muted-foreground line-clamp-3">{project.description}</p>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map(t => (
                          <span key={t} className="text-[10px] font-medium bg-secondary text-secondary-foreground px-2 py-1 rounded-full">{t}</span>
                        ))}
                      </div>
                      <div className="flex gap-3 mt-auto pt-4">
                        {project.liveUrl && (
                          <a href={project.liveUrl} target="_blank" rel="noreferrer" className="flex-1 inline-flex items-center justify-center gap-2 rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-9 px-4 py-2">
                            <ExternalLink className="h-4 w-4" /> Live Demo
                          </a>
                        )}
                        {project.repoUrl && (
                          <a href={project.repoUrl} target="_blank" rel="noreferrer" className="flex-1 inline-flex items-center justify-center gap-2 rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-9 px-4 py-2">
                            <Github className="h-4 w-4" /> Source
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </Section>

            {/* Achievements */}
            <Section id="certifications" title="Certifications">
              <div className="grid gap-6 md:grid-cols-2">
                {profile.achievements.map((ach, index) => (
                  <div
                    key={index}
                    className="flex flex-col justify-between rounded-xl border bg-card p-6 shadow-sm hover:shadow-md transition-all relative overflow-hidden"
                  >
                    <div className="space-y-2 w-full">
                      <div className="flex items-start justify-between">
                        <h3 className="font-bold text-lg">{ach.title}</h3>
                        <span className="text-xs font-medium bg-muted px-2 py-1 rounded">{ach.year}</span>
                      </div>
                      <p className="text-sm font-medium text-primary">{ach.issuer}</p>
                      <p className="text-sm text-muted-foreground">{ach.description}</p>
                      {/* Certificate Image */}
                      <div className="mt-4 aspect-video w-full bg-muted rounded-md overflow-hidden border border-border/50">
                        <img
                          src={ach.image}
                          alt={ach.title}
                          className="w-full h-full object-contain p-2 bg-background/50"
                        />
                      </div>
                    </div>
                    <a href={ach.url} target="_blank" rel="noreferrer" className="mt-4 inline-flex items-center text-sm font-medium text-primary hover:underline underline-offset-4">
                      Verify Credential <ExternalLink className="ml-1 h-3 w-3" />
                    </a>
                  </div>
                ))}
              </div>
            </Section>

            {/* Spacer for Dock */}
            <div className="h-32"></div>

          </div>

          {/* Dock and Theme Switcher */}
          <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 flex items-center gap-4">
            <Dock className="bg-background/80 border-border shadow-2xl mt-0">
              {profile.dockItems.map((item, idx) => {
                const isActive = activeSection === item.href.substring(1);
                const isExternal = item.href.startsWith("/");
                return (
                  <DockIcon key={idx} magnification={60} distance={100} className={cn(isActive && "bg-primary/10 rounded-full")}>
                    <a
                      href={item.href}
                      target={isExternal ? "_blank" : undefined}
                      rel={isExternal ? "noopener noreferrer" : undefined}
                      className={cn(
                        "flex items-center justify-center w-full h-full transition-colors",
                        isActive ? "text-primary" : "text-muted-foreground hover:text-foreground"
                      )}
                      title={item.title}
                    >
                      <item.icon className="w-5 h-5" />
                    </a>
                  </DockIcon>
                );
              })}
            </Dock>
            <ModeToggle />
          </div>

        </main>

        {/* Right Panel - 15% */}
        <div className="w-[15%] hidden lg:block border-l border-border/10 z-10"></div>
      </div>
    </ThemeProvider>
  );
}

export default App;
