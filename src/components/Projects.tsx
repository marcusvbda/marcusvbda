import { useLanguage } from "@/contexts/LanguageContext";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import investidor10Light from "@/assets/project-investidor10-light.jpeg";
import vegaLight from "@/assets/project-vega-light.jpeg";
import intelbras from "@/assets/project-intelbras.jpeg";
import parceiro from "@/assets/project-parceiro.jpeg";

export const Projects = () => {
  const { t } = useLanguage();

  const projects = [
    { id: "investidor10", image: investidor10Light },
    { id: "vega", image: vegaLight },
    { id: "intelbras", image: intelbras },
    { id: "parceiro", image: parceiro },
  ];

  return (
    <section id="projects" className="section-padding bg-muted/30">
      <div className="max-width-content">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{t("projects.title")}</h2>
          <p className="text-lg text-muted-foreground">{t("projects.subtitle")}</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card
              key={project.id}
              className="overflow-hidden hover-lift animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="aspect-video overflow-hidden bg-muted">
                <img
                  src={project.image}
                  alt={t(`projects.items.${project.id}.title`)}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-xl">
                  {t(`projects.items.${project.id}.title`)}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  {t(`projects.items.${project.id}.description`)}
                </p>
                <div className="flex flex-wrap gap-2">
                  {t(`projects.items.${project.id}.tech`)
                    .split(", ")
                    .map((tech) => (
                      <Badge key={tech} variant="secondary">
                        {tech}
                      </Badge>
                    ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
