import { HeroContent } from "@/components/sub/hero-content";
import { getAssetPath } from "@/utils/path";

export const Hero = () => {
  return (
    <div className="relative flex flex-col h-full w-full">
      <video
        autoPlay
        muted
        loop
        className="rotate-180 absolute top-[-340px] left-0 w-full h-full object-cover -z-20"
      >
        <source src={getAssetPath("videos/blackhole.webm")} type="video/webm" />
      </video>

      <HeroContent />
    </div>
  );
};
