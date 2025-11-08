import { ArrowDown, Mail, Linkedin } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import profileImage from "@/assets/profile-1.png";

export const Hero = () => {
  const { t } = useLanguage();

  const scrollToContact = () => {
    const element = document.querySelector("#contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center section-padding pt-24 md:pt-32"
    >
      <div className="max-width-content w-full">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-6 animate-fade-in">
            <div className="space-y-2">
              <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
                {t("hero.greeting")}
              </p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                {t("hero.name")}
              </h1>
              <h2 className="text-2xl md:text-3xl font-semibold text-accent">
                {t("hero.role")}
              </h2>
              <p className="text-sm text-muted-foreground flex items-center gap-2">
                <span className="inline-block w-2 h-2 bg-accent rounded-full animate-pulse" />
                {t("hero.location")}
              </p>
            </div>

            <p className="text-lg text-muted-foreground leading-relaxed max-w-xl">
              {t("hero.bio")}
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <Button
                size="lg"
                onClick={scrollToContact}
                className="bg-accent hover:bg-accent/90"
              >
                <Mail className="mr-2 h-4 w-4" />
                {t("hero.cta")}
              </Button>
              <Button
                size="lg"
                variant="outline"
                asChild
              >
                <a
                  href="https://linkedin.com/in/marcusvbassalobre"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin className="mr-2 h-4 w-4" />
                  LinkedIn
                </a>
              </Button>
            </div>

            <div className="pt-8 animate-bounce">
              <a
                href="#about"
                onClick={(e) => {
                  e.preventDefault();
                  const element = document.querySelector("#about");
                  if (element) {
                    element.scrollIntoView({ behavior: "smooth" });
                  }
                }}
                className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                <ArrowDown className="h-4 w-4" />
                {t("hero.scrollDown")}
              </a>
            </div>
          </div>

          {/* Profile Image */}
          <div className="relative animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <div className="relative w-full aspect-square max-w-md mx-auto">
              <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-secondary/20 rounded-3xl blur-2xl" />
              <img
                src={profileImage}
                alt="Marcus Vinicius Bassalobre"
                className="relative rounded-3xl object-cover w-full h-full shadow-2xl hover-lift"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
