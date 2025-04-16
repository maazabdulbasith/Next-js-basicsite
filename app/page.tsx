'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function HomePage() {
  const router = useRouter();

  useEffect(() => {
    // Redirect after 5 seconds to Without Simbian
    const timer = setTimeout(() => {
      router.push('/without-simbian');
    }, 5000);

    return () => clearTimeout(timer);
  }, [router]);

  return (
    <main className="min-h-screen flex justify-center items-center bg-gradient-to-b from-blue-50 to-white">
      <div className="text-center">
        <h2 className="text-4xl font-bold text-blue-600">Welcome to Simbian</h2>
        <p className="mt-4 text-xl text-blue-500">We are preparing the best experience for you...</p>
        <p className="mt-4 text-lg text-blue-400">Redirecting you in a few seconds...</p>
      </div>
    </main>
  );
}
