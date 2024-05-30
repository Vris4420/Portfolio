"use client";

import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";
import Stairs from "./Stairs";

const StairTransition = () => {
  const pathname = usePathname();

  // return (
  //   <AnimatePresence mode="wait">
  //     <motion.div
  //       key={pathname}
  //       initial={{ opacity: 1 }}
  //       animate={{ opacity: 1 }}
  //       exit={{ opacity: 0 }}
  //       transition={{ duration: 0.4 }}
  //     >
  //       <div className="h-screen w-screen fixed top-0 left-0 right-0 pointer-events-none flex">
  //         <Stairs />
  //       </div>
  //     </motion.div>
  //   </AnimatePresence>
  // );

  return (
    <>
      <AnimatePresence mode="wait">
        <div key={pathname}>
          <div className="h-screen w-screen fixed top-0 left-0 right-0 pointer-events-none flex">
            <Stairs/>
          </div>
        </div>
      </AnimatePresence>
    </>
  );
};

export default StairTransition;
