import Spotify from "@/components/spotify";
import Hero from "@/components/Hero";

export const revalidate = 20; // Deine alte Config behalten

export default function Home() {
  return (
    <main>
      <Hero>
        <Spotify />
      </Hero>
    </main>
  );
}