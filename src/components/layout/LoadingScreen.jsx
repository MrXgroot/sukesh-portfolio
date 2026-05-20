import { AnimatePresence, motion } from "framer-motion";

export function LoadingScreen({ isVisible, name }) {
  return (
    <AnimatePresence>
      {isVisible ? (
        <motion.div
          className="fixed inset-0 z-[90] grid place-items-center bg-ink"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.65, ease: "easeInOut" } }}
        >
          <div className="relative grid place-items-center">
            <motion.div
              className="absolute h-28 w-28 rounded-full border border-mint/25"
              animate={{ scale: [0.92, 1.18, 0.92], opacity: [0.5, 0.9, 0.5] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
              className="rounded-full border border-line bg-white/[0.06] px-5 py-3 text-sm font-semibold text-cloud backdrop-blur-xl"
              initial={{ y: 8, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
            >
              {name}
            </motion.div>
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
