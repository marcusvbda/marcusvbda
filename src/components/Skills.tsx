import { useLanguage } from "@/contexts/LanguageContext";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code2, Server, Wrench, Lightbulb } from "lucide-react";

export const Skills = () => {
  const { t } = useLanguage();

  const skillCategories = [
    {
      category: "frontend",
      icon: Code2,
      skills: [
        "React",
        "Next.js",
        "TypeScript",
        "Vue.js",
        "Tailwind CSS",
        "Redux",
        "React Query",
        "Styled Components",
      ],
    },
    {
      category: "backend",
      icon: Server,
      skills: [
        "Laravel",
        "NestJS",
        "Node.js",
        "PHP",
        "PostgreSQL",
        "MySQL",
        "Redis",
        "Prisma",
      ],
    },
    {
      category: "tools",
      icon: Wrench,
      skills: [
        "Docker",
        "Git",
        "AWS",
        "Vercel",
        "CI/CD",
        "Linux",
        "Supabase",
        "Firebase",
      ],
    },
    {
      category: "other",
      icon: Lightbulb,
      skills: [
        "n8n",
        "Agile/Scrum",
        "REST APIs",
        "GraphQL",
        "Microservices",
        "Testing",
        "System Design",
        "Team Leadership",
      ],
    },
  ];

  return (
    <section id="skills" className="section-padding">
      <div className="max-width-content">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{t("skills.title")}</h2>
          <p className="text-lg text-muted-foreground">{t("skills.subtitle")}</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <Card
                key={category.category}
                className="hover-lift animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Icon className="h-5 w-5 text-accent" />
                    {t(`skills.categories.${category.category}`)}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <Badge key={skill} variant="secondary">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};
