'use client';

import { useState, useEffect } from 'react';
import { AlertCard } from './AlertCard';
import StepFlow from './StepFlow';

export default function WithSimbianSection() {
  // State to store the alert counts
  const [ignoredCount, setIgnoredCount] = useState(200);
  const [wrongCount, setWrongCount] = useState(35);
  const [activeCount, setActiveCount] = useState(5);

  useEffect(() => {
    const countdownInterval = setInterval(() => {
      if (ignoredCount > 0) setIgnoredCount((prev) => prev - 1);
      if (wrongCount > 0) setWrongCount((prev) => prev - 1);
      if (activeCount > 0) setActiveCount((prev) => prev - 1);
    }, 1000); // Decrease every second

    return () => clearInterval(countdownInterval); // Cleanup interval on component unmount
  }, [ignoredCount, wrongCount, activeCount]);

  return (
    <section className="bg-gray-50 py-16 px-4 md:px-12">
      <h1 className="text-2xl font-bold text-center mb-8">With Simbian</h1>
      <StepFlow />
      <div className="flex flex-col md:flex-row gap-6 justify-center items-center mt-8">
        <AlertCard title="Ignored Alerts" count={ignoredCount} icon="ignored" color="green" />
        <AlertCard title="Wrongly Closed" count={wrongCount} icon="wrong" color="green" />
        <AlertCard title="Active Threats" count={activeCount} icon="active" color="green" />
      </div>
      <div className="mt-10 space-y-4">
        <p className="bg-green-100 text-green-800 px-6 py-3 rounded shadow">90% of alerts resolved automatically, 24/7</p>
        <p className="bg-green-100 text-green-800 px-6 py-3 rounded shadow">Correlates alerts to your environment</p>
        <p className="bg-green-100 text-green-800 px-6 py-3 rounded shadow">Investigate every alert—no SOAR needed</p>
      </div>
    </section>
  );
}
