'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { v4 as uuid } from 'uuid';

const dummyAlerts = [
  'Phishing Email',
  'Suspicious Login',
  'Malware Detected',
  'Unauthorized Access',
  'Abnormal Behavior',
];

export const AlertFeed = () => {
  const [alerts, setAlerts] = useState<string[]>([]);

  useEffect(() => {
    const interval = setInterval(() => {
      setAlerts((prev) => [dummyAlerts[Math.floor(Math.random() * dummyAlerts.length)], ...prev.slice(0, 4)]);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="mt-6 space-y-2 max-h-40 overflow-hidden">
      {alerts.map((alert) => (
        <motion.div
          key={uuid()}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="bg-red-200 text-red-900 font-medium px-4 py-2 rounded shadow-md w-fit animate-pulse"
        >
          {alert}
        </motion.div>
      ))}
    </div>
  );
};
