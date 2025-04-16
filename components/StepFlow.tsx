import { StepItem } from "./StepItem";
import { steps } from "@/constants/steps";

export default function StepFlow() {
  return (
    <div className="flex flex-wrap justify-center items-center gap-4 my-8">
      {steps.map((step, index) => (
        <StepItem key={index} label={step} index={index} delay={index * 0.4} />
      ))}
    </div>
  );
}
