export default function App() {
  return (
    <section className="relative w-full h-screen h-[100dvh] overflow-hidden bg-black select-none">
      {/* Background Video Only - All text and content removed */}
      <video
        className="absolute inset-0 w-full h-full object-cover anim-fade-in"
        src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260813_115057_94c3699b-0fd1-4124-bcf3-3626bb8c1f77.mp4"
        autoPlay
        muted
        loop
        playsInline
      />
    </section>
  );
}
