'use client';

import { useEffect } from 'react';
import { AlertCard } from '@/components/AlertCard';

export default function WithSimbianPage() {
  return (
    <main className="min-h-screen px-6 py-12 bg-gradient-to-b from-green-50 to-white">
      <h2 className="text-3xl md:text-4xl font-bold text-green-600 mb-10 text-center">With Simbian</h2>

      <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
        <AlertCard title="Ignored Alerts" count={0} icon="ignored" color="green" theme="green" />
        <AlertCard title="Wrongly Closed" count={0} icon="wrong" color="green" theme="green" />
        <AlertCard title="Active Threats" count={0} icon="active" color="green" theme="green" />
      </div>

      <div className="mt-10 space-y-4 max-w-2xl mx-auto">
        {[
          'All alerts are handled by Simbian, reducing false positives and improving response time.',
          'Threats are automatically identified and categorized.',
        ].map((issue, i) => (
          <div key={i} className="bg-green-100 text-green-800 px-4 py-3 rounded border border-green-300 shadow">
            ✅ {issue}
          </div>
        ))}
      </div>
    </main>
  );
}
