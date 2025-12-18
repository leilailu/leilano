import Link from "next/link";
import Container from "./container";

export default function Header() {
  return (
    <header className="bg-white shadow-soft border-b border-sage-200 py-4">
      <Container>
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold text-sage-800 font-serif">
            <Link href="/">LEILA.NO</Link>
          </h1>
          
          <nav className="flex gap-6">
            <Link 
              href="/" 
              className="text-sage-600 hover:text-sage-800 transition-colors duration-200 font-medium"
            >
              Om meg
            </Link>
            <Link 
              href="/posts" 
              className="text-neutral-600 hover:text-sage-700 transition-colors duration-200 font-medium"
            >
              Mitt liv
            </Link>
            {/* "Prosjekter" og "Kontakt" er fjernet */}
          </nav>
        </div>
      </Container>
    </header>
  );
}