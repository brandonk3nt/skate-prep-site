import Image from "next/image";
import { ArrowRight } from "lucide-react";

const SIGNUP_URL =
  "https://www.signupgenius.com/go/60B0444ADA82DA6F94-62512835-treats"; // Replace with your external signup link

export default function Hero() {
  return (
    <section className="relative min-h-[100vh] flex items-center">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/fish.webp"
          alt="Assortment of homemade treats on a table"
          fill
          className="object-cover brightness-50"
          priority
        />
        <div className="absolute inset-0 bg-foreground/20" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-4xl px-6 py-24 text-center">
        <p className="mb-4 text-sm font-medium uppercase tracking-widest text-primary-foreground/80">
          Kimball Stake
        </p>
        <h1 className="font-serif text-4xl font-normal leading-tight text-primary-foreground md:text-6xl lg:text-7xl text-balance">
          Mission & Life Skills Prep
        </h1>
        <h1 className="font-serif text-2xl font-normal leading-tight text-primary-foreground md:text-4xl lg:text-5xl text-balance">
         Refreshments Sign-up
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-primary-foreground/90 md:text-xl">
          Help make our gathering special by signing up to bring your favorite
          treats. Every contribution counts!
        </p>

        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <a
            href={SIGNUP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg bg-primary px-8 py-4 text-lg font-semibold text-primary-foreground transition-all hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
          >
            Sign Up to Bring Treats
            <ArrowRight className="h-5 w-5" />
          </a>
        </div>
      </div>
    </section>
  );
}
