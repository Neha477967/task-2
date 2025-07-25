import { Card } from "@/components/ui/card";

const DeviceDemo = () => {
  return (
    <section className="py-20 px-4 bg-background">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Perfect on Every Device
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Watch how our design seamlessly adapts from mobile to tablet to desktop.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Desktop View */}
          <div className="mb-12">
            <h3 className="text-xl font-semibold mb-4 text-center text-muted-foreground">Desktop (1200px+)</h3>
            <Card className="p-8 shadow-card border-border/50">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2">
                  <div className="bg-gradient-hero p-6 rounded-lg mb-4">
                    <h4 className="font-bold text-xl mb-2">Main Content Area</h4>
                    <p className="text-muted-foreground">
                      On desktop, content spreads across multiple columns for optimal reading experience.
                    </p>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-muted p-4 rounded-lg">
                      <div className="h-4 bg-primary/20 rounded mb-2"></div>
                      <div className="h-3 bg-primary/10 rounded mb-1"></div>
                      <div className="h-3 bg-primary/10 rounded w-3/4"></div>
                    </div>
                    <div className="bg-muted p-4 rounded-lg">
                      <div className="h-4 bg-primary/20 rounded mb-2"></div>
                      <div className="h-3 bg-primary/10 rounded mb-1"></div>
                      <div className="h-3 bg-primary/10 rounded w-2/3"></div>
                    </div>
                  </div>
                </div>
                <div className="bg-secondary p-6 rounded-lg">
                  <h4 className="font-bold mb-4">Sidebar</h4>
                  <div className="space-y-3">
                    <div className="h-3 bg-primary/20 rounded"></div>
                    <div className="h-3 bg-primary/10 rounded w-4/5"></div>
                    <div className="h-3 bg-primary/10 rounded w-3/5"></div>
                  </div>
                </div>
              </div>
            </Card>
          </div>

          {/* Tablet View */}
          <div className="mb-12">
            <h3 className="text-xl font-semibold mb-4 text-center text-muted-foreground">Tablet (768px - 1199px)</h3>
            <div className="max-w-2xl mx-auto">
              <Card className="p-6 shadow-card border-border/50">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-gradient-hero p-6 rounded-lg">
                    <h4 className="font-bold text-lg mb-2">Adapted Layout</h4>
                    <p className="text-muted-foreground text-sm">
                      Content reflows into two columns on tablet screens.
                    </p>
                  </div>
                  <div className="bg-secondary p-6 rounded-lg">
                    <h4 className="font-bold text-lg mb-2">Flexible Sidebar</h4>
                    <div className="space-y-2">
                      <div className="h-2 bg-primary/20 rounded"></div>
                      <div className="h-2 bg-primary/10 rounded w-3/4"></div>
                    </div>
                  </div>
                </div>
                <div className="mt-6 grid grid-cols-2 gap-4">
                  <div className="bg-muted p-4 rounded-lg">
                    <div className="h-3 bg-primary/20 rounded mb-2"></div>
                    <div className="h-2 bg-primary/10 rounded"></div>
                  </div>
                  <div className="bg-muted p-4 rounded-lg">
                    <div className="h-3 bg-primary/20 rounded mb-2"></div>
                    <div className="h-2 bg-primary/10 rounded"></div>
                  </div>
                </div>
              </Card>
            </div>
          </div>

          {/* Mobile View */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-center text-muted-foreground">Mobile (0px - 767px)</h3>
            <div className="max-w-sm mx-auto">
              <Card className="p-4 shadow-card border-border/50">
                <div className="space-y-4">
                  <div className="bg-gradient-hero p-4 rounded-lg">
                    <h4 className="font-bold mb-2">Mobile First</h4>
                    <p className="text-muted-foreground text-sm">
                      Single column layout optimized for touch.
                    </p>
                  </div>
                  <div className="bg-secondary p-4 rounded-lg">
                    <h4 className="font-bold mb-2">Stacked Content</h4>
                    <div className="space-y-2">
                      <div className="h-2 bg-primary/20 rounded"></div>
                      <div className="h-2 bg-primary/10 rounded"></div>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 gap-3">
                    <div className="bg-muted p-3 rounded-lg">
                      <div className="h-2 bg-primary/20 rounded mb-2"></div>
                      <div className="h-2 bg-primary/10 rounded"></div>
                    </div>
                    <div className="bg-muted p-3 rounded-lg">
                      <div className="h-2 bg-primary/20 rounded mb-2"></div>
                      <div className="h-2 bg-primary/10 rounded"></div>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DeviceDemo;