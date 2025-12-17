import Container from "../components/container";
import Image from "next/image";

function HomePage() {
  return (
    <>
      <Container>
        <div className="space-y-6">
          <h1 className="text-2xl font-bold">
            Bevis på at jeg kan mer enn å skrive søknader
          </h1>
          
          <p className="text-lg text-gray-600 italic">
            PS: Jeg lover å være minst like flink som denne porteføljen antyder.
          </p>
          
          <p>
            Web-utvikler, mentor, barista, kodelærer, pleieassistent, din neste
            suksesshistorie, you name it.
          </p>

          <p>
            Denne porteføljen er bygget med Next.js og et bibliotek kalt
            next-mdx. Den lar meg skrive Markdown og fokusere på innholdet i
            porteføljen min.
          </p>
        </div>
      </Container>

      <div className="container max-w-4xl m-auto px-4 mt-20">
        <Image
          src="/profile.jpg"
          alt="selvportrett"
          width={1920 / 2}
          height={1280 / 2}
        />
      </div>
    </>
  );
}

export default HomePage;