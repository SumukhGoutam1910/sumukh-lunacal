import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Plus, HelpCircle } from "lucide-react";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";

const ProfileSection = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [activeTab, setActiveTab] = useState("about");
  
  const galleryImages = [gallery1, gallery2, gallery3];

  const handlePrevImage = () => {
    setCurrentImageIndex((prev) => (prev === 0 ? galleryImages.length - 1 : prev - 1));
  };

  const handleNextImage = () => {
    setCurrentImageIndex((prev) => (prev === galleryImages.length - 1 ? 0 : prev + 1));
  };

  const getTabPosition = () => {
    switch(activeTab) {
      case "about": return 0;
      case "experiences": return 1;
      case "recommended": return 2;
      default: return 0;
    }
  };

  return (
    <div className="min-h-screen bg-[#1E1E1E] p-12 flex items-center justify-center">
      <div className="w-full max-w-[720px] space-y-6">
        {/* Top Container - Tabs Section */}
        <div className="bg-[#363C43] rounded-[27px] shadow-[0_4px_8px_rgba(0,0,0,0.4)] p-8 pl-1 flex gap-3">
          {/* Left Column - Question Mark Icon */}
          <div className="flex flex-col pt-1">
            <div className="h-12 w-12 flex items-center justify-center">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <linearGradient id="silverGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#E8EBED" />
                    <stop offset="25%" stopColor="#F5F7F8" />
                    <stop offset="50%" stopColor="#C8CDD1" />
                    <stop offset="75%" stopColor="#6B7279" />
                    <stop offset="90%" stopColor="#3A3F45" />
                    <stop offset="100%" stopColor="#252A2E" />
                  </linearGradient>
                </defs>
                <circle cx="12" cy="12" r="10" stroke="url(#silverGradient)" strokeWidth="2" fill="none"/>
                <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3M12 17h.01" stroke="url(#silverGradient)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          </div>

          {/* Right Column - Tabs Content */}
          <div className="flex-1">
            <Tabs defaultValue="about" value={activeTab} onValueChange={setActiveTab} className="w-full">
              <TabsList className="w-full mb-6 relative overflow-hidden">
                {/* Sliding background indicator */}
                <div 
                  className="absolute top-[6px] left-[6px] h-[calc(100%-12px)] w-[calc(33.333%-6px)] bg-[#28292F] rounded-[16px] shadow-[0_8px_24px_rgba(0,0,0,0.6),inset_0_0_0_0.5px_rgba(255,255,255,0.08),0_4px_12px_rgba(0,0,0,0.4)] transition-all duration-300 ease-in-out z-0"
                  style={{ transform: `translateX(calc(${getTabPosition()} * 100%))` }}
                />
                <TabsTrigger value="about" className="data-[state=active]:bg-transparent data-[state=active]:shadow-none">About Me</TabsTrigger>
                <TabsTrigger value="experiences" className="data-[state=active]:bg-transparent data-[state=active]:shadow-none">Experiences</TabsTrigger>
                <TabsTrigger value="recommended" className="data-[state=active]:bg-transparent data-[state=active]:shadow-none">Recommended</TabsTrigger>
              </TabsList>

              <TabsContent value="about" className="animate-in fade-in-50 duration-300">
                <div className="space-y-4 text-[#969696] text-[15px] leading-[1.6] p-2">
                  <p>
                    Hello! I'm Dave, your sales rep here from Salesforce. I've been working at this awesome company for 3 years now.
                  </p>
                  <p>
                    I was born and raised in Albany, NY & have been living in Santa Carla for the past 10 years my wife Tiffany and my 4 year old twin daughters- Emma and Ella. Both of them are just starting school, so my calendar is usually blocked between 9-10 AM. This is a...
                  </p>
                </div>
              </TabsContent>

              <TabsContent value="experiences" className="animate-in fade-in-50 duration-300">
                <div className="space-y-4 text-[#969696] text-[15px] leading-[1.6] p-2">
                  <p>
                    My professional journey includes various roles and accomplishments across different companies and industries.
                  </p>
                </div>
              </TabsContent>

              <TabsContent value="recommended" className="animate-in fade-in-50 duration-300">
                <div className="space-y-4 text-[#969696] text-[15px] leading-[1.6] p-2">
                  <p>
                    Here are some recommendations and testimonials from colleagues and clients I've worked with.
                  </p>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>

        {/* Divider */}
        <div className="h-1 bg-gradient-to-r from-[#888989] via-[#4A4E54] to-[#888989] rounded-full shadow-[0_4px_4px_rgba(0,0,0,0.33)]" />

        {/* Bottom Container - Gallery Section */}
        <div className="bg-[#363C43] rounded-[27px] shadow-[0_4px_8px_rgba(0,0,0,0.4)] p-8 pl-1 flex gap-3">
          {/* Left Column - Question Mark Icon */}
          <div className="flex flex-col pt-1">
            <div className="h-12 w-12 flex items-center justify-center">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="12" cy="12" r="10" stroke="url(#silverGradient)" strokeWidth="2" fill="none"/>
                <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3M12 17h.01" stroke="url(#silverGradient)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          </div>

          {/* Right Column - Gallery Content */}
          <div className="flex-1 space-y-6">
            <div className="flex items-center justify-between">
              <Button 
                variant="ghost" 
                className="bg-[#171717] hover:bg-[#2A2A2A] text-white px-9 py-3.5 text-[18px] font-medium rounded-[18px] shadow-[0_4px_10px_rgba(0,0,0,0.5),inset_0_1px_0_rgba(255,255,255,0.05)] h-auto"
              >
                Gallery
              </Button>
              
              <div className="flex items-center gap-6">
                <Button 
                  variant="ghost" 
                  className="gap-2 px-7 py-3.5 text-[13px] font-semibold bg-[#FFFFFF]/[0.02] hover:bg-[#FFFFFF]/[0.08] text-white rounded-[104px] shadow-[0_0_0_1.8px_rgba(255,255,255,0.1),0_4px_10px_rgba(0,0,0,0.5),inset_0_0_48px_rgba(255,255,255,0.05)] h-auto uppercase tracking-wide"
                >
                  <Plus className="h-3.5 w-3.5" />
                  ADD IMAGE
                </Button>
                
                <div className="flex gap-3">
                  <Button 
                    variant="ghost" 
                    size="icon" 
                    className="h-11 w-11 rounded-full bg-gradient-to-b from-[#313539] to-[#1A1D1F] hover:from-[#3A3E43] hover:to-[#1E2022] shadow-[0_4px_10px_rgba(0,0,0,0.6),inset_0_2px_2px_rgba(255,255,255,0.05)] text-[#6F787C]"
                    onClick={handlePrevImage}
                  >
                    <ChevronLeft className="h-5 w-5" />
                  </Button>
                  <Button 
                    variant="ghost" 
                    size="icon" 
                    className="h-11 w-11 rounded-full bg-gradient-to-b from-[#313539] to-[#1A1D1F] hover:from-[#3A3E43] hover:to-[#1E2022] shadow-[0_4px_10px_rgba(0,0,0,0.6),inset_0_2px_2px_rgba(255,255,255,0.05)] text-[#6F787C]"
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
                  className="aspect-square rounded-[18px] overflow-hidden transition-all duration-300 hover:scale-[1.02] cursor-pointer"
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
    </div>
  );
};

export default ProfileSection;
