import { cn } from "../../lib/utils";

export function Container({ children, className, id }) {
  return (
    <section id={id} className={cn("relative scroll-mt-28 px-5 py-20 sm:px-8 lg:px-12", className)}>
      <div className="mx-auto w-full max-w-7xl">{children}</div>
    </section>
  );
}
