import Link from "next/link";
import Image from "next/image";

export default function Home() {
  const sections = [
    {
      id: 1,
      icon: "🖤",
      title: "23.02.2003",
      content: "22 år gammel jente som er både 8 år og 66 år i sjelen"
    },
    {
      id: 2,
      title: "Bergen",
      icon: "🖤",
      content: "Oppvokst i Oslo, flyttet til Gjøvik, tok eventyret videre til Bergen"
    },
    {
      id: 3,
      title: "Kognitiv vitenskap",
      icon: "🖤",
      content: "Fordi hjernen vil finne ut mer om hjernen"
    }
  ];

  return (
    <div className="min-h-screen bg-sage-50">

      <main className="container mx-auto px-6 py-16">
        {/* Hero seksjon */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-sage-900 mb-6 font-serif">
            Bevis på at jeg kan mer enn å skrive søknader
          </h2>
          <p className="text-xl text-neutral-600 mb-10">
            PS: Jeg lover å være minst like flink som denne porteføljen antyder
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-16">
            <Link
              href="/posts"
              className="bg-sage-600 text-white px-8 py-4 rounded-xl hover:bg-sage-700 transition duration-300 shadow-medium"
            >
              Les om mitt liv
            </Link>
          </div>
        </div>

        {/* Innholdskort */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-20">
          {sections.map((section) => (
            <div
              key={section.id}
              className="bg-white p-8 rounded-2xl shadow-soft border border-sage-200 hover:shadow-medium transition duration-300"
            >
              <div className="w-12 h-12 bg-sage-100 rounded-lg flex items-center justify-center mb-6">
                <span className="text-2xl">{section.icon}</span>
              </div>
              <h3 className="text-xl font-bold text-sage-800 mb-4">
                {section.title}
              </h3>
              <p className="text-neutral-600">
                {section.content}
              </p>
            </div>
          ))}
        </div>

        <div className="flex flex-col items-center justify-center mb-16">
          <div className="w-64 h-64 md:w-80 md:h-80 relative mb-8">
            <Image
              src="/profile.jpg"
              alt="Profilbilde av Leila"
              fill
              className="object-cover rounded-lg border-4 border-sage-300 shadow-lg"
              sizes="(max-width: 768px) 256px, 320px"
            />
          </div>
          <p className="text-lg text-neutral-600 italic max-w-md text-center">
            Populær selvportrett!
          </p>
        </div>

        <div className="mt-16 bg-gradient-to-r from-sage-100 to-sage-300 rounded-3xl p-10 max-w-4xl mx-auto">
          <h3 className="text-3xl font-bold text-sage-900 mb-6 text-center font-serif">
            Web-utvikler, mentor, barista, kodelærer, pleieassistent, din neste
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