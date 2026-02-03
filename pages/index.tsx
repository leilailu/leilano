import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-sage-50">

      <main className="container mx-auto px-6 py-16">
        {/* Hero seksjon */}
        <div className="max-w-3xl mx-auto text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-sage-900 mb-6 font-serif">
            Bevis på at jeg kan mer enn å skrive søknader
          </h2>
          <p className="text-xl text-neutral-600 mb-10">
            PS: Jeg lover å være minst like flink som denne porteføljen antyder
          </p>
        </div>

        <div className="flex flex-col items-center justify-center mb-20">
          <div className="w-full max-w-xl mb-8"> 
            <div className="relative w-full h-[500px] md:h-[700px] bg-white rounded-xl shadow-soft border-4 border-sage-300 p-6">
              <Image
                src="/cv2026.jpg"
                alt="Min CV"
                fill
                className="object-contain" 
                sizes="(max-width: 768px) 100vw, 576px" 
                priority
              />
            </div>
          </div>
          
          <p className="text-lg text-neutral-600 italic max-w-md text-center">
            Min CV!
          </p>
        </div>

        {/* Aksent seksjon */}
        <div className="mt-16 bg-gradient-to-r from-sage-100 to-sage-300 rounded-3xl p-10 max-w-4xl mx-auto">
          <h3 className="text-3xl font-bold text-sage-900 mb-6 text-center font-serif">
            Mentor, barista, kodelærer, pleieassistent, din neste
            suksesshistorie, you name it
          </h3>
          <p className="text-neutral-700 text-center">
            Denne porteføljen er bygget med Next.js og et bibliotek kalt
            next-mdx. Den lar meg skrive Markdown og fokusere på innholdet i
            porteføljen min.
          </p>
        </div>
      </main>

      <footer className="bg-sage-800 text-white mt-20 py-10">
        <div className="container mx-auto px-6 text-center">
          <p className="text-sage-300">© 2025 Leila.no</p>
        </div>
      </footer>
    </div>
  );
}