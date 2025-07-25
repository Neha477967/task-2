import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const ResponsiveShowcase = () => {
  const features = [
    {
      title: "Mobile First",
      description: "Designed from the ground up for mobile devices, then enhanced for larger screens.",
      icon: "📱",
      gradient: "from-pink-500 to-purple-600"
    },
    {
      title: "Fluid Grids",
      description: "CSS Grid and Flexbox create layouts that adapt seamlessly to any screen size.",
      icon: "🎯",
      gradient: "from-blue-500 to-cyan-600"
    },
    {
      title: "Smart Typography",
      description: "Text scales beautifully using responsive units and fluid typography.",
      icon: "✍️",
      gradient: "from-green-500 to-emerald-600"
    },
    {
      title: "Touch Optimized",
      description: "Interactive elements sized perfectly for touch interfaces on any device.",
      icon: "👆",
      gradient: "from-orange-500 to-red-600"
    }
  ];

  return (
    <section className="py-20 px-4 bg-gradient-secondary">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4 px-4 py-2 text-sm font-medium">
            Responsive Features
          </Badge>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Adaptability in Every Detail
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Our responsive design principles ensure perfect functionality across all devices and screen sizes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="group p-6 hover:shadow-elegant transition-all duration-300 hover:-translate-y-2 bg-card/80 backdrop-blur-sm border-border/50"
            >
              <div className="text-center">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="font-semibold text-lg mb-3 text-card-foreground">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResponsiveShowcase;