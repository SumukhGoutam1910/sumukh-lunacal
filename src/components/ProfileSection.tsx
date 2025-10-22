import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Plus, HelpCircle } from "lucide-react";
import { ScrollArea } from "@/components/ui/scroll-area";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";

const ProfileSection = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  const galleryImages = [gallery1, gallery2, gallery3];

  const handlePrevImage = () => {
    setCurrentImageIndex((prev) => (prev === 0 ? galleryImages.length - 1 : prev - 1));
  };

  const handleNextImage = () => {
    setCurrentImageIndex((prev) => (prev === galleryImages.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="min-h-screen bg-background p-8">
      <div className="w-full max-w-6xl mx-auto space-y-6">
        {/* Top Placeholder Section */}
        <div className="w-full h-[500px] bg-gradient-to-b from-[hsl(0,0%,45%)] to-[hsl(0,0%,40%)] rounded-[28px] shadow-[0_20px_60px_-15px_rgba(0,0,0,0.6)] border border-[hsl(210,20%,50%)]" />

        {/* Bottom Widgets Grid */}
        <div className="grid grid-cols-2 gap-6">
          {/* Gallery Widget */}
          <div className="bg-gradient-to-b from-[hsl(210,15%,25%)] to-[hsl(210,15%,20%)] p-6 rounded-[28px] shadow-[0_20px_60px_-15px_rgba(0,0,0,0.6)]">
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <Button variant="dark" className="px-8 py-3 text-base font-semibold">
                  Gallery
                </Button>
                
                <div className="flex items-center gap-4">
                  <Button variant="dark-outline" className="gap-2 px-6 py-3 text-sm font-semibold">
                    <Plus className="h-4 w-4" />
                    ADD IMAGE
                  </Button>
                  
                  <div className="flex gap-2">
                    <Button 
                      variant="ghost" 
                      size="icon" 
                      className="rounded-full bg-gradient-to-br from-[hsl(0,0%,28%)] to-[hsl(0,0%,22%)] hover:from-[hsl(0,0%,32%)] hover:to-[hsl(0,0%,26%)] shadow-[0_6px_12px_-3px_rgba(0,0,0,0.4)] hover:shadow-[0_8px_16px_-4px_rgba(0,0,0,0.5)] transition-all hover:translate-y-[-2px]"
                      onClick={handlePrevImage}
                    >
                      <ChevronLeft className="h-5 w-5" />
                    </Button>
                    <Button 
                      variant="ghost" 
                      size="icon" 
                      className="rounded-full bg-gradient-to-br from-[hsl(0,0%,28%)] to-[hsl(0,0%,22%)] hover:from-[hsl(0,0%,32%)] hover:to-[hsl(0,0%,26%)] shadow-[0_6px_12px_-3px_rgba(0,0,0,0.4)] hover:shadow-[0_8px_16px_-4px_rgba(0,0,0,0.5)] transition-all hover:translate-y-[-2px]"
                      onClick={handleNextImage}
                    >
                      <ChevronRight className="h-5 w-5" />
                    </Button>
                  </div>
                </div>
              </div>

              {/* Gallery Images - Vertical Stack */}
              <div className="space-y-4">
                {galleryImages.map((image, index) => (
                  <div 
                    key={index}
                    className="aspect-[16/10] rounded-[20px] overflow-hidden bg-accent transition-all duration-300 hover:scale-105 hover:shadow-[0_12px_24px_-6px_rgba(0,0,0,0.6)] cursor-pointer shadow-[0_8px_16px_-4px_rgba(0,0,0,0.4)]"
                  >
                    <img 
                      src={image} 
                      alt={`Gallery image ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Tabs Widget */}
          <div className="bg-gradient-to-b from-[hsl(210,15%,25%)] to-[hsl(210,15%,20%)] p-6 rounded-[28px] shadow-[0_20px_60px_-15px_rgba(0,0,0,0.6)]">
            <Tabs defaultValue="about" className="w-full h-full flex flex-col">
              <div className="relative">
                {/* Help Icon */}
                <Button 
                  variant="ghost" 
                  size="icon" 
                  className="absolute left-2 top-2 z-20 rounded-full bg-gradient-to-br from-[hsl(0,0%,28%)] to-[hsl(0,0%,22%)] hover:from-[hsl(0,0%,32%)] hover:to-[hsl(0,0%,26%)] shadow-[0_4px_12px_-2px_rgba(0,0,0,0.5)]"
                >
                  <HelpCircle className="h-5 w-5 text-muted-foreground" />
                </Button>
                
                <TabsList className="w-full">
                  <TabsTrigger value="about">About Me</TabsTrigger>
                  <TabsTrigger value="experiences">Experiences</TabsTrigger>
                  <TabsTrigger value="recommended">Recommended</TabsTrigger>
                </TabsList>
              </div>

              <TabsContent value="about" className="mt-6 flex-1 animate-in fade-in-50 slide-in-from-bottom-2 duration-300">
                <div className="bg-gradient-to-b from-[hsl(0,0%,20%)] to-[hsl(0,0%,18%)] rounded-[24px] p-6 shadow-[0_4px_12px_-2px_rgba(0,0,0,0.3)] h-full">
                  <ScrollArea className="h-full pr-4">
                    <div className="space-y-4 text-foreground">
                      <p className="leading-relaxed">
                        Hello! I'm Dave, your sales rep here from Salesforce. I've been working at this awesome company for 3 years now.
                      </p>
                      <p className="leading-relaxed">
                        I was born and raised in Albany, NY & have been living in Santa Carla for the past 10 years with my wife Tiffany and my 4 year old twin daughters- Emma and Ella. Both of them are just starting school, so my calendar is usually blocked between 9-10 AM. This is...
                      </p>
                    </div>
                  </ScrollArea>
                </div>
              </TabsContent>

              <TabsContent value="experiences" className="mt-6 flex-1 animate-in fade-in-50 slide-in-from-bottom-2 duration-300">
                <div className="bg-gradient-to-b from-[hsl(0,0%,20%)] to-[hsl(0,0%,18%)] rounded-[24px] p-6 shadow-[0_4px_12px_-2px_rgba(0,0,0,0.3)] h-full">
                  <ScrollArea className="h-full pr-4">
                    <div className="space-y-4 text-foreground">
                      <p className="leading-relaxed">
                        My professional journey includes various roles and accomplishments across different companies and industries.
                      </p>
                    </div>
                  </ScrollArea>
                </div>
              </TabsContent>

              <TabsContent value="recommended" className="mt-6 flex-1 animate-in fade-in-50 slide-in-from-bottom-2 duration-300">
                <div className="bg-gradient-to-b from-[hsl(0,0%,20%)] to-[hsl(0,0%,18%)] rounded-[24px] p-6 shadow-[0_4px_12px_-2px_rgba(0,0,0,0.3)] h-full">
                  <ScrollArea className="h-full pr-4">
                    <div className="space-y-4 text-foreground">
                      <p className="leading-relaxed">
                        Here are some recommendations and testimonials from colleagues and clients I've worked with.
                      </p>
                    </div>
                  </ScrollArea>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileSection;
