import React from "react";
import ChallengeCard from "./ChallengeCard";
import { motion } from "framer-motion";
import { useMediaQuery } from "usehooks-ts";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

interface Props {
  challenges: {
    icon: string;
    problem: string;
    solution: string;
  }[];
}

const ProblemSolutionSection: React.FC<Props> = ({ challenges }) => {
  const isDesktop = useMediaQuery("(min-width: 768px)");

  return (
    <section className="relative py-24 overflow-hidden bg-gradient-to-br from-white to-blue-50">
      {/* Fancy blurred blob in the background */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        aria-hidden
        className="absolute inset-0 pointer-events-none"
      >
        <div className="absolute -top-24 -left-24 h-96 w-96 rounded-full bg-primary-100 blur-[120px] opacity-30" />
        <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-blue-200 blur-[120px] opacity-40" />
      </motion.div>

      <div className="relative max-w-6xl px-4 mx-auto">
        {/* Section header */}
        <motion.header
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="inline-block text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl">
            Stop Struggling with{" "}
            <span className="bg-[linear-gradient(to_right,#0ea5e9,theme(colors.primary.600))] bg-clip-text text-transparent">
              Poor Location Data
            </span>
          </h2>
          <p className="max-w-2xl mx-auto mt-4 text-xl text-gray-600">
            Outdated datasets? Low accuracy? We fix that with tech-driven,
            real-time POI intelligence.
          </p>
        </motion.header>

        {/* Responsive layout */}
        {isDesktop ? (
          // ⇢ Staggered grid on desktop
          <div className="grid grid-cols-3 gap-10">
            {challenges.map((c, i) => (
              <ChallengeCard key={i} item={c} index={i} />
            ))}
          </div>
        ) : (
          // ⇢ Carousel on mobile
          <Swiper
            spaceBetween={20}
            slidesPerView={1.1}
            centeredSlides
            loop
            className="pb-10"
          >
            {challenges.map((c, i) => (
              <SwiperSlide key={i} className="flex justify-center">
                <ChallengeCard item={c} index={i} />
              </SwiperSlide>
            ))}
          </Swiper>
        )}
      </div>
    </section>
  );
};

export default ProblemSolutionSection; 