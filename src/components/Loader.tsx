import { useEffect, useRef } from "react";
import gsap from "gsap";

interface LoaderProps {
  onLoadingComplete: () => void;
}

const Loader = ({ onLoadingComplete }: LoaderProps) => {
  const loaderRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({
      onComplete: () => {
        gsap.to(loaderRef.current, {
          opacity: 0,
          duration: 1,
          onComplete: onLoadingComplete,
        });
      },
    });

    tl.from(logoRef.current, {
      scale: 0,
      rotation: 720,
      duration: 2,
      ease: "power3.out",
    }).to(logoRef.current, {
      scale: 1,
      duration: 0.5,
      ease: "power3.out",
    });
  }, [onLoadingComplete]);

  return (
    <div
      ref={loaderRef}
      className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-[#177697] via-black to-[#177697]"
    >
      <div className="text-center">
        <img
          ref={logoRef}
          src="/lovable-uploads/84cff9b1-920e-4ce8-9e85-d7c4ad03c319.png"
          alt="ZenStreet.ai Logo"
          className="mx-auto h-24 w-24"
        />
        <h1 className="mt-4 text-2xl font-semibold text-primary animate-fade-in">
          Welcome to ZenStreet.ai
        </h1>
      </div>
    </div>
  );
};

export default Loader;