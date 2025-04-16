// components/StepItem.tsx
import { motion } from "framer-motion";

type StepItemProps = {
  label: string;
  delay?: number;
  index: number;
  key : number;
};

export function StepItem({ label, delay = 0 }: StepItemProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay }}
      className="bg-green-100 text-green-800 px-4 py-2 rounded shadow"
    >
      {label}
    </motion.div>
  );
}
