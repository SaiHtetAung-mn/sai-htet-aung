import type { JSX } from "react";
import { motion, type HTMLMotionProps } from "framer-motion";

// const itemVariants = {
//   hidden: { opacity: 0, y: 20 },
//   visible: { opacity: 1, y: 0 }
// };

type Props<T extends keyof JSX.IntrinsicElements = "div"> = {
  className?: string;
  variant?: boolean;
  as?: T;
  //@ts-ignore
} & HTMLMotionProps<T>;

const MotionItem = <T extends keyof JSX.IntrinsicElements = "div">({ 
  className, 
  variant = false, 
  as = "div" as T, 
  ...rest 
}: Props<T>) => {
  const Component: any = motion[as as keyof typeof motion];

  return (
    <Component
      // { ... variant ? { variants: itemVariants } : {} }
      className={className}
      {...rest}
    />
  );
};

export default MotionItem;