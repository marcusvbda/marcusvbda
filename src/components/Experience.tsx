import { useLanguage } from "@/contexts/LanguageContext";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Briefcase } from "lucide-react";

export const Experience = () => {
  const { t } = useLanguage();

  const experiences = [
    "investidor10",
    "vega",
    "diwe",
    "otimize",
    "unimar",
  ];

  return (
    <section id="experience" className="section-padding">
      <div className="max-width-content">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{t("experience.title")}</h2>
          <p className="text-lg text-muted-foreground">{t("experience.subtitle")}</p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <Card
              key={exp}
              className="hover-lift animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <div className="flex items-start justify-between gap-4">
                  <div className="space-y-1 flex-1">
                    <CardTitle className="text-2xl flex items-center gap-2">
                      <Briefcase className="h-5 w-5 text-accent" />
                      {t(`experience.companies.${exp}.company`)}
                    </CardTitle>
                    <p className="text-lg font-semibold text-accent">
                      {t(`experience.companies.${exp}.role`)}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {t(`experience.companies.${exp}.period`)}
                    </p>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  {t(`experience.companies.${exp}.description`)}
                </p>
                <div className="flex flex-wrap gap-2">
                  {t(`experience.companies.${exp}.tech`)
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
