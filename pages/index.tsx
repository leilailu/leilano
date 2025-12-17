import Container from "../components/container";
import Image from "next/image";

function HomePage() {
  return (
    <>
      <Container>
        <div className="space-y-6">
          <h1 className="text-2xl font-bold">
            Hei! Jeg er i ferd med å fullføre bachelor graden min i kognitiv
            vitenskap. Dette er mitt nåværende prosjekt
          </h1>
          <p>
            Web-utvikler, student, barista, kodelærer, pleieassistent, din neste
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
          src="/desk.jpg"
          alt="my desk"
          width={1920 / 2}
          height={1280 / 2}
        />
      </div>
    </>
  );
}

export default HomePage;
