import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Plus, HelpCircle } from "lucide-react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
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
    <div className="min-h-screen bg-background p-8 flex items-center justify-center">
      <div className="w-full max-w-2xl space-y-6 bg-gradient-to-b from-[hsl(0,0%,18%)] to-[hsl(0,0%,16%)] p-8 rounded-3xl shadow-[0_20px_60px_-15px_rgba(0,0,0,0.6)]">
        {/* Help Icon */}
        <div className="flex justify-start">
          <Button variant="ghost" size="icon" className="rounded-full">
            <HelpCircle className="h-5 w-5 text-muted-foreground" />
          </Button>
        </div>

        {/* Tabs Section */}
        <Tabs defaultValue="about" className="w-full">
          <TabsList className="w-full">
            <TabsTrigger value="about">About Me</TabsTrigger>
            <TabsTrigger value="experiences">Experiences</TabsTrigger>
            <TabsTrigger value="recommended">Recommended</TabsTrigger>
          </TabsList>

          <TabsContent value="about" className="mt-6 animate-in fade-in-50 slide-in-from-bottom-2 duration-300">
            <div className="bg-gradient-to-b from-[hsl(0,0%,20%)] to-[hsl(0,0%,18%)] rounded-3xl p-6 shadow-[0_4px_12px_-2px_rgba(0,0,0,0.3)]">
              <ScrollArea className="h-48 pr-4">
                <div className="space-y-4 text-foreground">
                  <p className="leading-relaxed">
                    Hello! I'm Dave, your sales rep here from Salesforce. I've been working at this awesome company for 3 years now.
                  </p>
                  <p className="leading-relaxed">
                    I was born and raised in Albany, NY & have been living in Santa Carla for the past 10 years my wife Tiffany and my 4 year old twin daughters- Emma and Ella. Both of them are just starting school, so my calendar is usually blocked between 9-10 AM. This is a...
                  </p>
                </div>
              </ScrollArea>
            </div>
          </TabsContent>

          <TabsContent value="experiences" className="mt-6 animate-in fade-in-50 slide-in-from-bottom-2 duration-300">
            <div className="bg-gradient-to-b from-[hsl(0,0%,20%)] to-[hsl(0,0%,18%)] rounded-3xl p-6 shadow-[0_4px_12px_-2px_rgba(0,0,0,0.3)]">
              <ScrollArea className="h-48 pr-4">
                <div className="space-y-4 text-foreground">
                  <p className="leading-relaxed">
                    My professional journey includes various roles and accomplishments across different companies and industries.
                  </p>
                </div>
              </ScrollArea>
            </div>
          </TabsContent>

          <TabsContent value="recommended" className="mt-6 animate-in fade-in-50 slide-in-from-bottom-2 duration-300">
            <div className="bg-gradient-to-b from-[hsl(0,0%,20%)] to-[hsl(0,0%,18%)] rounded-3xl p-6 shadow-[0_4px_12px_-2px_rgba(0,0,0,0.3)]">
              <ScrollArea className="h-48 pr-4">
                <div className="space-y-4 text-foreground">
                  <p className="leading-relaxed">
                    Here are some recommendations and testimonials from colleagues and clients I've worked with.
                  </p>
                </div>
              </ScrollArea>
            </div>
          </TabsContent>
        </Tabs>

        {/* Divider */}
        <Separator className="bg-border/40" />

        {/* Gallery Section */}
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
                  className="rounded-full bg-accent/60 hover:bg-accent shadow-[0_6px_12px_-3px_rgba(0,0,0,0.4)] hover:shadow-[0_8px_16px_-4px_rgba(0,0,0,0.5)] transition-all hover:translate-y-[-2px]"
                  onClick={handlePrevImage}
                >
                  <ChevronLeft className="h-5 w-5" />
                </Button>
                <Button 
                  variant="ghost" 
                  size="icon" 
                  className="rounded-full bg-accent/60 hover:bg-accent shadow-[0_6px_12px_-3px_rgba(0,0,0,0.4)] hover:shadow-[0_8px_16px_-4px_rgba(0,0,0,0.5)] transition-all hover:translate-y-[-2px]"
                  onClick={handleNextImage}
                >
                  <ChevronRight className="h-5 w-5" />
                </Button>
              </div>
            </div>
          </div>

          {/* Gallery Images */}
          <div className="grid grid-cols-3 gap-4">
            {galleryImages.map((image, index) => (
              <div 
                key={index}
                className="aspect-square rounded-3xl overflow-hidden bg-accent transition-all duration-300 hover:scale-105 hover:shadow-[0_12px_24px_-6px_rgba(0,0,0,0.6)] cursor-pointer shadow-[0_8px_16px_-4px_rgba(0,0,0,0.4)]"
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
    </div>
  );
};

export default ProfileSection;
