import { motion } from "framer-motion";
import { SectionHeading } from "@/components/SectionHeading";
import { PROCESS_STEPS } from "@/config/site";
import { fadeInUpLg, viewportOnce, stagger } from "@/lib/animations";

export function ProcessSection() {
  return (
    <section id="process" aria-labelledby="process-heading" className="relative py-32">
      <div className="absolute inset-0 grid-bg" />

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <SectionHeading label="How We Work" id="process-heading">
          From zero to <span className="text-primary">production</span>
        </SectionHeading>

        <div className="relative grid gap-8 sm:grid-cols-2 md:grid-cols-4">
          {/* Connector line */}
          <div className="absolute left-[calc(12.5%+24px)] right-[calc(12.5%+24px)] top-8 hidden h-px border-t border-dashed border-border md:block" />

          {PROCESS_STEPS.map((step, i) => (
            <motion.div
              key={step.title}
              variants={fadeInUpLg}
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
              transition={stagger(i)}
              className="relative text-center"
            >
              <div className="relative z-10 mx-auto mb-5 flex size-14 items-center justify-center rounded-xl border border-border bg-card">
                <step.icon className="size-6 text-primary" />
              </div>
              <h3 className="text-lg font-bold">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
