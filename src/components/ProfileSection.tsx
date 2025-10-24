import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight, Plus, HelpCircle } from "lucide-react";

const ProfileSection = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [activeTab, setActiveTab] = useState("about");
  
  const [galleryImages, setGalleryImages] = useState([
    "https://images.unsplash.com/photo-1518005020951-eccb494ad742?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3MjAxN3wwfDF8c2VhcmNofDd8fGFyY2hpdGVjdHVyZXxlbnwwfHx8fDE3NjEzMzM2Mjh8MA&ixlib=rb-4.1.0&q=85&q=85&fmt=jpg&crop=entropy&cs=tinysrgb&w=450",
    "https://images.unsplash.com/photo-1518005020951-eccb494ad742?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3MjAxN3wwfDF8c2VhcmNofDd8fGFyY2hpdGVjdHVyZXxlbnwwfHx8fDE3NjEzMzM2Mjh8MA&ixlib=rb-4.1.0&q=85&q=85&fmt=jpg&crop=entropy&cs=tinysrgb&w=450",
    "https://images.unsplash.com/photo-1518005020951-eccb494ad742?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3MjAxN3wwfDF8c2VhcmNofDd8fGFyY2hpdGVjdHVyZXxlbnwwfHx8fDE3NjEzMzM2Mjh8MA&ixlib=rb-4.1.0&q=85&q=85&fmt=jpg&crop=entropy&cs=tinysrgb&w=450",
    "https://images.unsplash.com/photo-1518005020951-eccb494ad742?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3MjAxN3wwfDF8c2VhcmNofDd8fGFyY2hpdGVjdHVyZXxlbnwwfHx8fDE3NjEzMzM2Mjh8MA&ixlib=rb-4.1.0&q=85&q=85&fmt=jpg&crop=entropy&cs=tinysrgb&w=450"
  ]);
  const [galleryStartIndex, setGalleryStartIndex] = useState(0);

  const handlePrevImage = () => {
    setCurrentImageIndex((prev) => (prev === 0 ? galleryImages.length - 1 : prev - 1));
  };

  const handleNextImage = () => {
    setCurrentImageIndex((prev) => (prev === galleryImages.length - 1 ? 0 : prev + 1));
  };

  const handlePrevGallery = () => {
    if (galleryStartIndex > 0) {
      setGalleryStartIndex((prev) => prev - 1);
    } else {
      // Loop to the end
      const maxIndex = Math.max(0, galleryImages.length - 3);
      setGalleryStartIndex(maxIndex);
    }
  };

  const handleNextGallery = () => {
    if (galleryStartIndex < galleryImages.length - 3) {
      setGalleryStartIndex((prev) => prev + 1);
    } else {
      // Loop back to the beginning
      setGalleryStartIndex(0);
    }
  };

  const handleAddImage = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file && file.type.startsWith('image/')) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const imageDataUrl = e.target?.result as string;
        setGalleryImages((prev) => [...prev, imageDataUrl]);
      };
      reader.readAsDataURL(file);
    }
    // Reset input value to allow selecting the same file again
    event.target.value = '';
  };

  const getTabPosition = () => {
    switch(activeTab) {
      case "about": return 0;
      case "experiences": return 1;
      case "recommended": return 2;
      default: return 0;
    }
  };

  // Get visible images (3 at a time)
  const visibleImages = galleryImages.slice(galleryStartIndex, galleryStartIndex + 3);

  return (
    <div className="min-h-screen bg-[#1E1E1E] py-4 px-4 md:py-6 md:px-6 lg:py-6 lg:pl-4 lg:pr-8 flex items-center justify-center">
      <div className="w-full max-w-[1800px] flex flex-col lg:flex-row items-center lg:items-center justify-center gap-4 md:gap-5 lg:gap-5">
        {/* Left Container - Widget/Empty Space */}
        <div className="w-full lg:w-[46%] lg:max-w-[936px] h-[300px] md:h-[400px] lg:h-auto lg:self-stretch bg-[#616161] rounded-[20px] md:rounded-[27px] shadow-[0_4px_8px_rgba(0,0,0,0.4)]" style={{
          border: '2px solid #96BEE7'
        }}>
          {/* Empty widget container */}
        </div>

        {/* Right Section - Tabs and Gallery */}
        <div className="w-full lg:max-w-[720px] lg:flex-shrink-0 space-y-3 md:space-y-4">
          {/* Top Container - Tabs Section */}
          <div className="bg-[#363C43] rounded-[20px] md:rounded-[27px] shadow-[0_4px_8px_rgba(0,0,0,0.4)] p-4 md:p-6 pl-1 flex gap-2 md:gap-3">
          {/* Left Column - Question Mark Icon */}
          <div className="flex flex-col items-center gap-16 pt-1 px-0">
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
            {/* 6-square grid menu */}
            <div className="grid grid-cols-2 gap-0.5 w-6">
              <div className="aspect-square bg-[#4A4E54] rounded-xs"></div>
              <div className="aspect-square bg-[#4A4E54] rounded-xs"></div>
              <div className="aspect-square bg-[#4A4E54] rounded-xs"></div>
              <div className="aspect-square bg-[#4A4E54] rounded-xs"></div>
              <div className="aspect-square bg-[#4A4E54] rounded-xs"></div>
              <div className="aspect-square bg-[#4A4E54] rounded-xs"></div>
            </div>
          </div>

            {/* Right Column - Tabs Content */}
            <div className="flex-1 relative">
              <Tabs defaultValue="about" value={activeTab} onValueChange={setActiveTab} className="w-full">
                <TabsList className="w-full mb-3 md:mb-4 relative overflow-visible">
                {/* Sliding background indicator */}
                <div 
                  className="absolute top-[6px] left-[6px] h-[calc(100%-12px)] w-[calc(33.333%-6px)] bg-[#28292F] rounded-[16px] shadow-[0_8px_24px_rgba(0,0,0,0.6),inset_0_0_0_0.5px_rgba(255,255,255,0.08),0_4px_12px_rgba(0,0,0,0.4),-10px_0_20px_rgba(0,0,0,0.5),0_10px_25px_rgba(0,0,0,0.6)] transition-all duration-300 ease-in-out z-0"
                  style={{ transform: `translateX(calc(${getTabPosition()} * 100%))` }}
                />
                <TabsTrigger value="about" className="data-[state=active]:bg-transparent data-[state=active]:shadow-none">About Me</TabsTrigger>
                <TabsTrigger value="experiences" className="data-[state=active]:bg-transparent data-[state=active]:shadow-none">Experiences</TabsTrigger>
                <TabsTrigger value="recommended" className="data-[state=active]:bg-transparent data-[state=active]:shadow-none">Recommended</TabsTrigger>
              </TabsList>

                <TabsContent value="about" className="animate-in fade-in-50 duration-300">
                  <div className="space-y-3 md:space-y-4 text-[#969696] text-[17px] md:text-[18.5px] leading-[1.1] p-2">
                    <p>
                      Hello! I'm Dave, your sales rep here from Salesforce. I've been working at this awesome company for 3 years now.
                    </p>
                    <p>
                      I was born and raised in Albany, NY & have been living in Santa Carla for the past 10 years my wife Tiffany and my 4 year old twin daughters- Emma and Ella. Both of them are just starting school, so my calendar is usually blocked between 9-10 AM. This is a...
                    </p>
                  </div>
                </TabsContent>

                <TabsContent value="experiences" className="animate-in fade-in-50 duration-300">
                  <div className="space-y-3 md:space-y-4 text-[#969696] text-[13px] md:text-[15px] leading-[1.6] p-2">
                    <p>
                      My professional journey includes various roles and accomplishments across different companies and industries.
                    </p>
                  </div>
                </TabsContent>

                <TabsContent value="recommended" className="animate-in fade-in-50 duration-300">
                  <div className="space-y-3 md:space-y-4 text-[#969696] text-[13px] md:text-[15px] leading-[1.6] p-2">
                  <p>
                    Here are some recommendations and testimonials from colleagues and clients I've worked with.
                  </p>
                </div>
              </TabsContent>
            </Tabs>
            
            {/* Vertical metallic gradient bar on the right */}
            <div className="absolute -right-3 top-1/2 -translate-y-1/2 w-2 h-16 rounded-lg bg-gradient-to-b from-[#E8EBED] via-[#727475] to-[#4A4E54] shadow-[2px_0_8px_rgba(0,0,0,0.5),-1px_0_4px_rgba(255,255,255,0.1)]"></div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-1 w-[86%] mx-auto bg-gradient-to-r from-[#888989] via-[#4A4E54] to-[#888989] rounded-full shadow-[0_4px_4px_rgba(0,0,0,0.33)]" />

          {/* Bottom Container - Gallery Section */}
          <div className="bg-[#363C43] rounded-[20px] md:rounded-[27px] shadow-[0_4px_8px_rgba(0,0,0,0.4)] p-4 md:p-6 pl-1 flex gap-2 md:gap-3">
          {/* Left Column - Question Mark Icon */}
          <div className="flex flex-col items-center gap-16 pt-1 px-0">
            <div className="h-12 w-12 flex items-center justify-center">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="12" cy="12" r="10" stroke="url(#silverGradient)" strokeWidth="2" fill="none"/>
                <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3M12 17h.01" stroke="url(#silverGradient)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            {/* 6-square grid menu */}
            <div className="grid grid-cols-2 gap-0.5 w-6">
              <div className="aspect-square bg-[#4A4E54] rounded-xs"></div>
              <div className="aspect-square bg-[#4A4E54] rounded-xs"></div>
              <div className="aspect-square bg-[#4A4E54] rounded-xs"></div>
              <div className="aspect-square bg-[#4A4E54] rounded-xs"></div>
              <div className="aspect-square bg-[#4A4E54] rounded-xs"></div>
              <div className="aspect-square bg-[#4A4E54] rounded-xs"></div>
            </div>
          </div>

            {/* Right Column - Gallery Content */}
            <div className="flex-1 space-y-3 md:space-y-4">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-0">
                <Button 
                  variant="ghost" 
                  className="bg-[#171717] hover:bg-[#2A2A2A] text-white px-6 md:px-9 py-2.5 md:py-3.5 text-[16px] md:text-[18px] font-medium rounded-[18px] shadow-[0_4px_10px_rgba(0,0,0,0.5),inset_0_1px_0_rgba(255,255,255,0.05)] h-auto"
                >
                  Gallery
                </Button>
                
                <div className="flex items-center gap-4 md:gap-6 w-full sm:w-auto justify-between sm:justify-end">
                  <label htmlFor="image-upload">
                    <Button 
                      variant="ghost" 
                      className="gap-2 px-5 md:px-7 py-2.5 md:py-3.5 text-[11px] md:text-[13px] font-semibold bg-[#FFFFFF]/[0.02] hover:bg-[#FFFFFF]/[0.08] text-white rounded-[104px] shadow-[0_0_0_1.8px_rgba(255,255,255,0.1),0_8px_20px_rgba(0,0,0,0.7),inset_0_0_48px_rgba(255,255,255,0.05),3px_0_6px_rgba(255,255,255,0.15),0_-3px_6px_rgba(255,255,255,0.15)] h-auto uppercase tracking-wide cursor-pointer"
                      asChild
                    >
                      <span>
                        <Plus className="h-3 w-3 md:h-3.5 md:w-3.5" />
                        ADD IMAGE
                      </span>
                    </Button>
                  </label>
                  <input 
                    id="image-upload"
                    type="file" 
                    accept="image/*"
                    onChange={handleAddImage}
                    className="hidden"
                  />
                  
                  <div className="flex gap-2 md:gap-3">
                    <Button 
                      variant="ghost" 
                      size="icon" 
                      className="h-9 w-9 md:h-11 md:w-11 rounded-full bg-gradient-to-b from-[#313539] to-[#1A1D1F] hover:from-[#3A3E43] hover:to-[#1E2022] active:bg-gradient-to-br active:from-[#77bcf6] active:to-[#2E3135] shadow-[0_4px_10px_rgba(0,0,0,0.6),inset_0_2px_2px_rgba(255,255,255,0.05),3px_0_5px_rgba(255,255,255,0.12),0_-3px_5px_rgba(255,255,255,0.12)] text-[#6F787C] active:text-white transition-colors"
                      onClick={handlePrevGallery}
                    >
                      <ArrowLeft className="h-7 w-7 md:h-8 md:w-8" strokeWidth={3.5} />
                    </Button>
                    <Button 
                      variant="ghost" 
                      size="icon" 
                      className="h-9 w-9 md:h-11 md:w-11 rounded-full bg-gradient-to-b from-[#313539] to-[#1A1D1F] hover:from-[#3A3E43] hover:to-[#1E2022] active:bg-gradient-to-br active:from-[#719fc4] active:to-[#2E3135] shadow-[0_4px_10px_rgba(0,0,0,0.6),inset_0_2px_2px_rgba(255,255,255,0.05),3px_0_5px_rgba(255,255,255,0.12),0_-3px_5px_rgba(255,255,255,0.12)] text-[#6F787C] active:text-white transition-colors"
                      onClick={handleNextGallery}
                    >
                      <ArrowRight className="h-7 w-7 md:h-8 md:w-8" strokeWidth={3.5} />
                    </Button>
                  </div>
                </div>
              </div>

              {/* Gallery Images */}
              <div className="relative overflow-hidden -mx-1 px-1 py-4 -my-4">
                <div 
                  className="grid grid-cols-3 gap-3 md:gap-4 transition-transform duration-700 ease-in-out"
                  style={{ 
                    transform: `translateX(-${galleryStartIndex * (100 / 3)}%)`,
                    gridTemplateColumns: `repeat(${galleryImages.length}, minmax(0, 1fr))`,
                    width: `${(galleryImages.length / 3) * 100}%`
                  }}
                >
                  {galleryImages.map((image, index) => (
                    <div 
                      key={index}
                      className="aspect-square rounded-[15px] md:rounded-[18px] cursor-pointer group"
                      style={{ perspective: '1000px' }}
                    >
                      <img 
                        src={image} 
                        alt={`Gallery image ${index + 1}`}
                        className="w-full h-full object-cover rounded-[15px] md:rounded-[18px] grayscale group-hover:grayscale-0 transition-all duration-1000 ease-out origin-bottom-left group-hover:-rotate-[3deg] group-hover:scale-105"
                        style={{ transformOrigin: '0% 100%' }}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileSection;
