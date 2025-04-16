'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { AlertTriangle, ShieldX, Flame } from 'lucide-react';

interface AlertCardProps {
  title: string;
  count: number;
  icon: 'ignored' | 'wrong' | 'active';
  theme?: 'red' | 'green';
  color: string;
}

const icons = {
  ignored: AlertTriangle,
  wrong: ShieldX,
  active: Flame,
};

export const AlertCard: React.FC<AlertCardProps> = ({ title, count, icon, theme = 'red', color }) => {
  const Icon = icons[icon];
  const isGreen = theme === 'green';

  const [displayCount, setDisplayCount] = useState(0);

  useEffect(() => {
    // Only animate if the count is not zero
    if (count > 0) {
      let start = 0;
      const step = () => {
        start += Math.ceil(count / 30); // Adjust step size for faster/slower animation
        if (start >= count) {
          setDisplayCount(count);
        } else {
          setDisplayCount(start);
          requestAnimationFrame(step);
        }
      };
      step();
    } else {
      setDisplayCount(count); // If the count is already 0, don't animate
    }
  }, [count]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.05 }}
      className={`p-4 rounded-xl shadow-lg w-full md:w-64 ${
        isGreen ? 'bg-green-100 border-green-400' : 'bg-red-100 border-red-400'
      } border`}
    >
      <div className="flex items-center gap-3">
        <Icon className={`${isGreen ? 'text-green-600' : 'text-red-600'}`} size={28} />
        <h3 className="text-lg font-semibold">{title}</h3>
      </div>
      <motion.p
        className="text-3xl font-bold mt-3"
        animate={{ opacity: 1 }}
        initial={{ opacity: 0 }}
      >
        {displayCount}
      </motion.p>
    </motion.div>
  );
};
