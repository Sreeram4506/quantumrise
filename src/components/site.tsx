/* eslint-disable react-refresh/only-export-components */
import { Link, useRouter, useRouterState } from "@tanstack/react-router";
import { AnimatePresence, motion, useInView, useMotionValue, useScroll, useSpring, useTransform } from "framer-motion";
import type { ReactNode } from "react";
import { createContext, useContext, useEffect, useRef, useState } from "react";
import Lenis from "lenis";
import {
  HiOutlineArrowUpRight,
  HiOutlineArrowUp,
  HiOutlinePhone,
} from "react-icons/hi2";
import { FaWhatsapp } from "react-icons/fa6";
import { brand, nav } from "@/lib/site-data";
import { cn } from "@/lib/utils";

/* -------------------------------------------------------------------------- */
/*  Lenis smooth scroll provider                                              */
/* -------------------------------------------------------------------------- */
export function SmoothScroll({ children }: { children: ReactNode }) {
  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const lenis = new Lenis({ duration: 1.4, smoothWheel: true, lerp: 0.09 });
    let raf = 0;
    const tick = (t: number) => {
      lenis.raf(t);
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => {
      cancelAnimationFrame(raf);
      lenis.destroy();
    };
  }, []);
  return <>{children}</>;
}

/* -------------------------------------------------------------------------- */
/*  Loading screen                                                            */
/* -------------------------------------------------------------------------- */
const LoadingContext = createContext<{ done: boolean }>({ done: true });
export function useLoadingDone() {
  return useContext(LoadingContext).done;
}
export function LoadingScreen({ children }: { children: ReactNode }) {
  const [done, setDone] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setDone(true), 1800);
    return () => clearTimeout(t);
  }, []);
  return (
    <LoadingContext.Provider value={{ done }}>
      <AnimatePresence>
        {!done && (
          <motion.div
            key="loader"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: [0.65, 0, 0.35, 1] }}
            className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-primary text-primary-foreground"
          >
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.7 }}
              className="font-display text-center text-4xl tracking-tight"
            >
              <span className="gold-shimmer">Green Gardens by Quantum Rise</span>
            </motion.div>
            <div className="mt-8 h-px w-56 overflow-hidden bg-primary-foreground/15">
              <motion.div
                className="h-full bg-secondary"
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ duration: 1.6, ease: [0.65, 0, 0.35, 1] }}
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      {children}
    </LoadingContext.Provider>
  );
}

/* -------------------------------------------------------------------------- */
/*  Cursor follower (desktop only)                                            */
/* -------------------------------------------------------------------------- */
export function CursorFollower() {
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const sx = useSpring(x, { stiffness: 300, damping: 30, mass: 0.4 });
  const sy = useSpring(y, { stiffness: 300, damping: 30, mass: 0.4 });
  const [hover, setHover] = useState(false);
  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.matchMedia("(pointer: coarse)").matches) return;
    const onMove = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
      const el = e.target as HTMLElement | null;
      setHover(!!el?.closest("a, button, [data-cursor='hover']"));
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, [x, y]);
  return (
    <motion.div
      aria-hidden
      className="pointer-events-none fixed left-0 top-0 z-[90] hidden md:block"
      style={{ x: sx, y: sy }}
    >
      <motion.div
        animate={{ scale: hover ? 1.8 : 1, opacity: hover ? 0.9 : 0.7 }}
        transition={{ type: "spring", stiffness: 200, damping: 20 }}
        className="-ml-3 -mt-3 h-6 w-6 rounded-full border border-secondary mix-blend-difference"
      />
    </motion.div>
  );
}

/* -------------------------------------------------------------------------- */
/*  Navigation                                                                */
/* -------------------------------------------------------------------------- */
export function Nav() {
  const [solid, setSolid] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <>
      <motion.header
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-all duration-500",
          solid
            ? "border-b border-border/60 bg-background/80 backdrop-blur-xl"
            : "bg-transparent"
        )}
      >
        <div className="container-lux flex h-16 items-center justify-between md:h-20">
          <Link to="/" className="group flex items-center gap-3">
            <img
              src="/logo.png"
              alt="Quantum Rise Logo"
              className="h-9 w-auto md:h-11 object-contain transition-transform duration-300 group-hover:scale-105"
            />
            <span className="font-display flex flex-col leading-none tracking-tight">
              <span className="flex items-center text-2xl md:text-[26px]">
                <span className="text-[#0d2757] dark:text-[#3b82f6] font-extrabold">Quantum</span>
                <span className="text-[#c8a85d] font-extrabold ml-0.5">Rise</span>
              </span>
              <span className="mt-1 text-[11px] font-extrabold uppercase tracking-[0.3em] text-foreground/75">
                Rise Together
              </span>
            </span>
          </Link>

          <nav className="hidden items-center gap-7 lg:flex">
            {nav.map((n) => {
              const active = pathname === n.to;
              return (
                <Link
                  key={n.to}
                  to={n.to}
                  className={cn(
                    "group relative text-sm font-medium tracking-wide transition-colors",
                    active ? "text-primary" : "text-foreground/75 hover:text-primary"
                  )}
                >
                  {n.label}
                  <span
                    className={cn(
                      "absolute -bottom-1 left-0 h-px bg-secondary transition-all duration-500",
                      active ? "w-full" : "w-0 group-hover:w-full"
                    )}
                  />
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-3">
            <Link
              to="/contact"
              className="hidden md:inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-xs font-medium uppercase tracking-[0.2em] text-primary-foreground transition-transform hover:scale-[1.03]"
            >
              Book Site Visit
              <HiOutlineArrowUpRight className="text-secondary" />
            </Link>
            <button
              aria-label={open ? "Close menu" : "Open menu"}
              onClick={() => setOpen((v) => !v)}
              className="relative flex h-10 w-10 items-center justify-center rounded-full border border-border bg-background/80 lg:hidden"
            >
              <span
                className={cn(
                  "absolute h-px w-4 bg-foreground transition-all duration-300",
                  open ? "rotate-45" : "-translate-y-1"
                )}
              />
              <span
                className={cn(
                  "absolute h-px w-4 bg-foreground transition-all duration-300",
                  open ? "-rotate-45" : "translate-y-1"
                )}
              />
            </button>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            key="menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-[70] bg-primary text-primary-foreground lg:hidden"
          >
            <div className="container-lux flex h-full flex-col justify-between pt-24 pb-16">
              <div className="flex items-center gap-3 mb-4 pb-4 border-b border-primary-foreground/10">
                <img src="/logo.png" alt="Quantum Rise Logo" className="h-10 w-auto bg-white/95 rounded p-1 object-contain" />
                <span className="font-display flex flex-col leading-none tracking-tight">
                  <span className="flex items-center text-2xl">
                    <span className="text-[#0d2757] dark:text-[#3b82f6] font-extrabold">Quantum</span>
                    <span className="text-[#c8a85d] font-extrabold ml-0.5">Rise</span>
                  </span>
                  <span className="mt-1 text-[11px] font-extrabold uppercase tracking-[0.3em] text-primary-foreground/85">
                    Rise Together
                  </span>
                </span>
              </div>
              <nav className="flex flex-col gap-1">
                {[{ label: "Home", to: "/" as const }, ...nav].map((n, i) => (
                  <motion.div
                    key={n.to}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 + i * 0.05, duration: 0.5 }}
                  >
                    <Link
                      to={n.to}
                      className="block border-b border-primary-foreground/10 py-4 font-display text-3xl tracking-tight"
                    >
                      {n.label}
                    </Link>
                  </motion.div>
                ))}
              </nav>
              <div className="space-y-4">
                <div className="hairline-gold" />
                <div className="flex gap-3">
                  <a
                    href={`tel:${brand.phone}`}
                    className="flex-1 rounded-full border border-primary-foreground/30 px-5 py-3 text-center text-sm"
                  >
                    Call us
                  </a>
                  <Link
                    to="/contact"
                    className="flex-1 rounded-full bg-secondary px-5 py-3 text-center text-sm text-secondary-foreground"
                  >
                    Book visit
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

/* -------------------------------------------------------------------------- */
/*  Footer                                                                    */
/* -------------------------------------------------------------------------- */
export function Footer() {
  return (
    <footer className="mt-24 bg-primary text-primary-foreground">
      <div className="container-lux py-20">
        <div className="grid gap-16 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-3">
              <img src="/logo.png" alt="Quantum Rise Logo" className="h-10 w-auto md:h-12 bg-white/95 rounded-md p-1 object-contain" />
              <span className="font-display flex flex-col leading-none tracking-tight">
                <span className="flex items-center text-2xl md:text-[26px]">
                  <span className="text-[#0d2757] dark:text-[#3b82f6] font-extrabold">Quantum</span>
                  <span className="ml-0.5 text-[#c8a85d] font-extrabold">Rise</span>
                </span>
                <span className="mt-1 text-[11px] font-extrabold uppercase tracking-[0.3em] text-primary-foreground/85">
                  Rise Together
                </span>
              </span>
            </div>
          </div>

          <div>
            <div className="mb-4 text-[10px] uppercase tracking-[0.3em] text-secondary">Explore</div>
            <ul className="space-y-2 text-sm text-primary-foreground/75">
              {nav.slice(0, 5).map((n) => (
                <li key={n.to}>
                  <Link to={n.to} className="hover:text-secondary">
                    {n.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link to="/blog" className="hover:text-secondary">Journal</Link>
              </li>
            </ul>
          </div>

          <div>
            <div className="mb-4 text-[10px] uppercase tracking-[0.3em] text-secondary">Contact</div>
            <ul className="space-y-2 text-sm text-primary-foreground/75">
              <li>{brand.address}</li>
              <li><a href={`tel:${brand.phone}`}>{brand.phone}</a></li>
              <li><a href={`mailto:${brand.email}`}>{brand.email}</a></li>
            </ul>
          </div>

          <div>
            <div className="mb-4 text-[10px] uppercase tracking-[0.3em] text-secondary">Legal</div>
            <ul className="space-y-2 text-sm text-primary-foreground/75">
              <li><Link to="/privacy" className="hover:text-secondary">Privacy</Link></li>
              <li><Link to="/terms" className="hover:text-secondary">Terms</Link></li>
              <li>RERA — PRM/KA/RERA/1251/446</li>
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col justify-between gap-3 border-t border-primary-foreground/10 pt-6 text-xs text-primary-foreground/50 md:flex-row">
          <p>© {new Date().getFullYear()} Quantumrise Infra</p>
          <p>Renders are indicative. Actual finishes subject to design intent.</p>
        </div>
      </div>
    </footer>
  );
}

/* -------------------------------------------------------------------------- */
/*  Floating actions & mobile bottom bar                                      */
/* -------------------------------------------------------------------------- */
export function FloatingActions() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const on = () => setShow(window.scrollY > 600);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);
  return (
    <div className="fixed right-4 bottom-24 z-40 hidden flex-col gap-3 md:right-6 md:bottom-8 md:flex">
      <a
        href={`https://wa.me/${brand.whatsapp.replace(/\D/g, "")}`}
        target="_blank"
        rel="noreferrer"
        aria-label="Chat on WhatsApp"
        className="flex h-12 w-12 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-transform hover:scale-110"
      >
        <FaWhatsapp className="text-xl" />
      </a>
      <a
        href={`tel:${brand.phone}`}
        aria-label="Call sales"
        className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg transition-transform hover:scale-110"
      >
        <HiOutlinePhone className="text-lg" />
      </a>
      <AnimatePresence>
        {show && (
          <motion.button
            initial={{ opacity: 0, scale: 0.7 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.7 }}
            aria-label="Back to top"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="flex h-12 w-12 items-center justify-center rounded-full border border-border bg-background text-foreground shadow-lg transition-transform hover:scale-110"
          >
            <HiOutlineArrowUp />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}

export function MobileBottomBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 md:hidden">
      <div className="glass mx-3 mb-3 flex items-center gap-2 rounded-full border-border/60 p-1.5 shadow-lg">
        <a
          href={`tel:${brand.phone}`}
          className="flex-1 rounded-full border border-border bg-background/60 px-3 py-2.5 text-center text-xs font-medium"
        >
          Call
        </a>
        <a
          href={`https://wa.me/${brand.whatsapp.replace(/\D/g, "")}`}
          target="_blank"
          rel="noreferrer"
          className="flex-1 rounded-full bg-[#25D366] px-3 py-2.5 text-center text-xs font-medium text-white"
        >
          WhatsApp
        </a>
        <Link
          to="/contact"
          className="flex-1 rounded-full bg-primary px-3 py-2.5 text-center text-xs font-medium text-primary-foreground"
        >
          Book Visit
        </Link>
      </div>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/*  Primitives                                                                */
/* -------------------------------------------------------------------------- */

export function Eyebrow({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <div className={cn("mb-4 flex items-center gap-3 text-[10px] uppercase tracking-[0.35em] text-secondary-foreground/80", className)}>
      <span className="h-px w-8 bg-secondary" />
      <span>{children}</span>
    </div>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  intro,
  align = "left",
  eyebrowClassName,
  titleClassName,
}: {
  eyebrow?: string;
  title: ReactNode;
  intro?: ReactNode;
  align?: "left" | "center";
  eyebrowClassName?: string;
  titleClassName?: string;
}) {
  return (
    <div className={cn("max-w-2xl", align === "center" && "mx-auto text-center")}>
      {eyebrow && <Eyebrow className={eyebrowClassName}>{eyebrow}</Eyebrow>}
      <RevealText as="h2" className={cn("font-display text-4xl leading-[1.1] text-primary md:text-6xl", titleClassName)}>
        {title}
      </RevealText>
      {intro && (
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="mt-6 text-base leading-relaxed text-muted-foreground md:text-lg"
        >
          {intro}
        </motion.p>
      )}
    </div>
  );
}

export function RevealText({
  as: Tag = "span",
  children,
  className,
  delay = 0,
}: {
  as?: keyof React.JSX.IntrinsicElements;
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const text = typeof children === "string" ? children : null;

  if (!text) {
    // Fallback simple fade
    const Component = Tag as React.ElementType;
    return (
      <Component ref={ref as never} className={className}>
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay }}
          className="inline-block"
        >
          {children}
        </motion.span>
      </Component>
    );
  }

  const words = text.split(" ");
  const Component = Tag as React.ElementType;
  return (
    <Component ref={ref as never} className={className}>
      {words.map((w, i) => (
        <span key={i} className="inline-block overflow-hidden pb-[0.1em]">
          <motion.span
            initial={{ y: "100%", opacity: 0, filter: "blur(8px)" }}
            animate={inView ? { y: 0, opacity: 1, filter: "blur(0px)" } : {}}
            transition={{
              duration: 0.9,
              ease: [0.22, 1, 0.36, 1],
              delay: delay + i * 0.055,
            }}
            className="inline-block"
          >
            {w}
            {i < words.length - 1 && "\u00A0"}
          </motion.span>
        </span>
      ))}
    </Component>
  );
}

export function MagneticButton({
  children,
  className,
  href,
  to,
  variant = "primary",
  onClick,
  type = "button",
}: {
  children: ReactNode;
  className?: string;
  href?: string;
  to?: React.ComponentProps<typeof Link>["to"];
  variant?: "primary" | "ghost" | "gold";
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 200, damping: 15 });
  const sy = useSpring(y, { stiffness: 200, damping: 15 });

  const onMove = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    x.set((e.clientX - (r.left + r.width / 2)) * 0.25);
    y.set((e.clientY - (r.top + r.height / 2)) * 0.25);
  };
  const onLeave = () => {
    x.set(0);
    y.set(0);
  };

  const base = cn(
    "group relative inline-flex items-center gap-3 rounded-full px-7 py-3.5 text-xs font-medium uppercase tracking-[0.22em] transition-colors",
    variant === "primary" && "bg-primary text-primary-foreground hover:bg-primary/90",
    variant === "ghost" && "border border-primary/25 text-primary hover:bg-primary hover:text-primary-foreground",
    variant === "gold" && "bg-secondary text-secondary-foreground hover:brightness-105",
    className
  );

  const inner = (
    <motion.span ref={ref} style={{ x: sx, y: sy }} onMouseMove={onMove} onMouseLeave={onLeave} className={base}>
      <span>{children}</span>
      <HiOutlineArrowUpRight className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-0.5" />
    </motion.span>
  );

  if (to) return <Link to={to}>{inner}</Link>;
  if (href) return <a href={href} onClick={onClick}>{inner}</a>;
  return (
    <button type={type} onClick={onClick}>
      {inner}
    </button>
  );
}

export function GlassCard({
  children,
  className,
  dark,
}: {
  children: ReactNode;
  className?: string;
  dark?: boolean;
}) {
  return (
    <div className={cn("rounded-3xl p-6 md:p-8", dark ? "glass-dark text-primary-foreground" : "glass", className)}>
      {children}
    </div>
  );
}

export function TiltCard({ children, className }: { children: ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rx = useTransform(y, [-50, 50], [8, -8]);
  const ry = useTransform(x, [-50, 50], [-8, 8]);

  const onMove = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    x.set(e.clientX - (r.left + r.width / 2));
    y.set(e.clientY - (r.top + r.height / 2));
  };
  const onLeave = () => {
    x.set(0);
    y.set(0);
  };
  return (
    <motion.div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      style={{ rotateX: rx, rotateY: ry, transformPerspective: 1000 }}
      className={cn("group transition-shadow duration-500 will-change-transform", className)}
    >
      {children}
    </motion.div>
  );
}

export function StatCounter({
  value,
  suffix,
  label,
}: {
  value: number;
  suffix?: string;
  label: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [n, setN] = useState(0);
  useEffect(() => {
    if (!inView) return;
    const start = performance.now();
    const dur = 1600;
    let raf = 0;
    const tick = (t: number) => {
      const p = Math.min(1, (t - start) / dur);
      const eased = 1 - Math.pow(1 - p, 3);
      setN(Math.round(value * eased));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, value]);
  return (
    <div ref={ref}>
      <div className="font-display text-5xl leading-none tracking-tight text-primary md:text-6xl">
        {n.toLocaleString("en-IN")}
        {suffix}
      </div>
      <div className="mt-3 text-xs uppercase tracking-[0.25em] text-muted-foreground">{label}</div>
    </div>
  );
}

export function Parallax({
  children,
  offset = 100,
  className,
}: {
  children: ReactNode;
  offset?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [offset, -offset]);
  return (
    <div ref={ref} className={cn("overflow-hidden", className)}>
      <motion.div style={{ y }}>{children}</motion.div>
    </div>
  );
}

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const width = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  return (
    <motion.div
      style={{ width }}
      className="fixed inset-x-0 top-0 z-[60] h-[2px] origin-left bg-secondary"
    />
  );
}

export function PageTransition({ children }: { children: ReactNode }) {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={pathname}
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}

export function SiteChrome({ children }: { children: ReactNode }) {
  return (
    <SmoothScroll>
      <LoadingScreen>
        <ScrollProgress />
        <CursorFollower />
        <Nav />
        <main id="main" className="pt-16 md:pt-20">
          <PageTransition>{children}</PageTransition>
        </main>
        <Footer />
        <FloatingActions />
        <MobileBottomBar />
      </LoadingScreen>
    </SmoothScroll>
  );
}

/* Force useRouter to be reachable for future utilities */
export { useRouter };
