'use client';

import { AlertCard } from '../components/AlertCard';
import { AlertFeed } from '../components/AlertFeed';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import WithoutSimbianSection from '@/components/WithoutSimbianSection';

export default function WithoutSimbianPage() {
  const router = useRouter();

  // Redirect logic (optional, can be commented out for now)
  useEffect(() => {
    const timer = setTimeout(() => {
      
      router.push('/with-simbian');
    }, 5000);

    return () => clearTimeout(timer); // Cleanup on component unmount
  }, [router]);

  return (
    <main className="min-h-screen px-6 py-12 bg-gradient-to-b from-red-50 to-white">
      {/* Heading Text */}
      <h2 className="text-3xl md:text-4xl font-bold text-red-600 mb-10 text-center">
        Without Simbian
      </h2>

      {/* Alert Cards with Animation */}
      <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
        <AlertCard title="Ignored Alerts" count={200} icon="ignored" color="red" />
        <AlertCard title="Wrongly Closed" count={35} icon="wrong" color="red" />
        <AlertCard title="Active Threats" count={5} icon="active" color="red" />
      </div>

      {/* Alert Feed */}
      <AlertFeed />

      {/* Issues List */}
      <div className="mt-10 space-y-4 max-w-2xl mx-auto">
        {[
          'Wasting valuable analyst time on false positives',
          'Processing one alert at a time, missing the big picture',
          'More time fixing SOAR automation, less time on real threats',
        ].map((issue, i) => (
          <div key={i} className="bg-red-100 text-red-800 px-4 py-3 rounded border border-red-300 shadow">
            ⚠️ {issue}
          </div>
        ))}
      </div>

      {/* Optional: Displaying Without Simbian Section */}
      <WithoutSimbianSection />
    </main>
  );
}
