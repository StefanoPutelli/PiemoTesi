import qrcode from "@/app/assets/shake.gif";

export default function Home() {
  return (
    <div className="font-sans flex items-center justify-center min-h-screen bg-background text-foreground">
      <div className="flex flex-col items-center">
        <span
          className="lg:text-[7rem] md:text-[5rem] text-[3rem] font-bold"
          style={{
            backgroundImage: `url(${qrcode.src})`,
            backgroundSize: "50%",
            backgroundPosition: "center",
            backgroundRepeat: "repeat",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            // Disable antialiasing
            WebkitFontSmoothing: "none",
            MozOsxFontSmoothing: "unset",
            fontSmooth: "never",
          }}
        >
          UNTITLIED
        </span>
      </div>
    </div>
  );
}
