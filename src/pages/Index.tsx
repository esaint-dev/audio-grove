
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Music, PlayCircle } from "lucide-react";

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen relative">
      {/* Animated grid background */}
      <div 
        className="absolute inset-0 bg-gradient-grid bg-[size:40px_40px] animate-gridLines"
        style={{
          background: `
            linear-gradient(135deg, rgba(124, 58, 237, 0.1) 0%, rgba(72, 1, 139, 0.1) 100%),
            linear-gradient(to right, rgba(124, 58, 237, 0.1) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(124, 58, 237, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: "40px 40px",
        }}
      />
      
      {/* Hero Content */}
      <div className="relative pt-32 px-6">
        <div className="max-w-4xl mx-auto text-center animate-fadeIn">
          <div className="inline-flex items-center justify-center space-x-2 glass-card px-4 py-2 rounded-full mb-8">
            <Music className="w-4 h-4" />
            <span className="text-sm">Welcome to AudioGrove</span>
          </div>
          
          <h1 className="text-4xl sm:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-white/60 bg-clip-text text-transparent">
            Your Music, Your Groove
          </h1>
          
          <p className="text-lg sm:text-xl text-white/60 mb-12 max-w-2xl mx-auto">
            Discover, stream, and share your favorite music. Create playlists, follow artists, and find your perfect sound.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Button 
              size="lg"
              className="bg-primary hover:bg-primary/90 text-white px-8 rounded-full"
              onClick={() => navigate("/profile")}
            >
              <PlayCircle className="mr-2 h-5 w-5" /> Start Listening
            </Button>
            
            <Button 
              variant="secondary"
              size="lg"
              className="rounded-full"
              onClick={() => navigate("/explore")}
            >
              Explore Music
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
