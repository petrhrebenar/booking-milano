import Image from 'next/image';
import { BookingForm } from '@/components/booking-form';

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-background p-4 sm:p-6 md:p-8">
      <div className="w-full max-w-4xl mx-auto">
        <header className="text-center mb-8">
          <h1 className="font-headline text-4xl md:text-5xl font-bold text-primary tracking-tight">
            Prenota Milano
          </h1>
          <p className="mt-2 text-lg text-muted-foreground">
            Your personal gateway to a memorable stay in Milan.
          </p>
        </header>

        <div className="relative w-full h-64 md:h-96 rounded-lg overflow-hidden shadow-lg mb-8">
           <Image
            src="https://placehold.co/1200x600.png"
            alt="Beautiful view of Milan"
            layout="fill"
            objectFit="cover"
            className="transition-transform duration-500 hover:scale-105"
            data-ai-hint="milan italy"
          />
        </div>

        <BookingForm />
      </div>
    </main>
  );
}
