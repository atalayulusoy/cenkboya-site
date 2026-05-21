"use client";

import Image from "next/image";
import Link from "next/link";
import {
  AnimatePresence,
  motion,
  useInView,
  useScroll,
  useSpring,
} from "framer-motion";
import {
  ArrowRight,
  BadgeCheck,
  Boxes,
  ChevronRight,
  Clock3,
  Droplets,
  Factory,
  FlaskConical,
  Layers3,
  MapPinned,
  Menu,
  MessageCircleMore,
  MonitorSmartphone,
  Palette,
  Phone,
  Rocket,
  ShieldCheck,
  Sparkles,
  Star,
  SwatchBook,
  Target,
  Users,
  X,
} from "lucide-react";
import {
  FormEvent,
  MouseEvent as ReactMouseEvent,
  ReactNode,
  useEffect,
  useRef,
  useState,
} from "react";
import {
  advantageItems,
  applicationShowcaseItems,
  companyInfo,
  featureItems,
  galleryItems,
  navItems,
  processSteps,
  productHighlights,
  productItems,
  referenceBrands,
  serviceItems,
  statItems,
  testimonialItems,
} from "./site-data";

type IconKey =
  | "badge"
  | "boxes"
  | "clock"
  | "droplets"
  | "factory"
  | "flask"
  | "layers"
  | "palette"
  | "rocket"
  | "shield"
  | "sparkles"
  | "swatchbook"
  | "target"
  | "users";

const iconMap: Record<IconKey, typeof Droplets> = {
  badge: BadgeCheck,
  boxes: Boxes,
  clock: Clock3,
  droplets: Droplets,
  factory: Factory,
  flask: FlaskConical,
  layers: Layers3,
  palette: Palette,
  rocket: Rocket,
  shield: ShieldCheck,
  sparkles: Sparkles,
  swatchbook: SwatchBook,
  target: Target,
  users: Users,
};

const easeOut = [0.22, 1, 0.36, 1] as const;
const brandMedia = {
  logo: "/cenk-logo-cropped.png",
  logoWide: "/cenk-logo-cropped.png",
  label: "/cenk-logo-cropped.png",
  gif: "/cenk-logo-cropped.png",
};
const referenceAccents = [
  "#38bdf8",
  "#22c55e",
  "#f59e0b",
  "#2563eb",
  "#e5e7eb",
  "#ffffff",
  "#60a5fa",
  "#f97316",
];

function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

function BrandMark({
  className,
  imageClassName,
}: {
  className?: string;
  imageClassName?: string;
}) {
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-[1.6rem] border border-white/10 bg-white/95 px-3 py-2 shadow-[0_20px_48px_rgba(0,0,0,0.24)]",
        className
      )}
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.7),_transparent_55%)]" />
      <Image
        src={brandMedia.logoWide}
        alt="Cenk Serigrafi Boyaları logosu"
        width={576}
        height={178}
        priority
        className={cn(
          "relative h-11 w-36 object-contain object-center sm:h-12 sm:w-40",
          imageClassName
        )}
      />
    </div>
  );
}

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      className={className}
    >
      <rect
        x="3.25"
        y="3.25"
        width="17.5"
        height="17.5"
        rx="5"
        stroke="currentColor"
        strokeWidth="1.7"
      />
      <circle cx="12" cy="12" r="4.1" stroke="currentColor" strokeWidth="1.7" />
      <circle cx="17.45" cy="6.55" r="1.1" fill="currentColor" />
    </svg>
  );
}

function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      className={className}
    >
      <path
        d="M13.4 21V13.1H16.05L16.45 9.95H13.4V7.93C13.4 7.02 13.65 6.4 14.96 6.4H16.56V3.57C15.78 3.48 14.99 3.44 14.21 3.45C11.89 3.45 10.3 4.87 10.3 7.48V9.95H7.75V13.1H10.3V21H13.4Z"
        fill="currentColor"
      />
    </svg>
  );
}

function Reveal({
  children,
  className,
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement | null>(null);
  const inView = useInView(ref, { once: true, amount: 0.25 });

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, y: 36 }}
      animate={
        inView
          ? {
              opacity: 1,
              y: 0,
            }
          : undefined
      }
      transition={{ duration: 0.8, delay, ease: easeOut }}
    >
      {children}
    </motion.div>
  );
}

function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <Reveal className="mx-auto max-w-3xl text-center">
      <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.32em] text-white/65 backdrop-blur-xl">
        <span className="h-2 w-2 rounded-full bg-[var(--accent-1)] shadow-[0_0_18px_rgba(249,115,22,0.85)]" />
        {eyebrow}
      </div>
      <h2 className="mt-6 font-display text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl">
        {title}
      </h2>
      <p className="mt-5 text-base leading-8 text-white/68 sm:text-lg">
        {description}
      </p>
    </Reveal>
  );
}

function ScrollProgressBar() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 24,
    mass: 0.2,
  });

  return (
    <motion.div
      aria-hidden="true"
      className="fixed inset-x-0 top-0 z-[70] h-[3px] origin-left bg-[linear-gradient(90deg,var(--accent-1),var(--accent-2),var(--accent-3))] shadow-[0_0_22px_rgba(34,211,238,0.55)]"
      style={{ scaleX }}
    />
  );
}

function FactoryBackdrop() {
  return (
    <div aria-hidden="true" className="factory-backdrop pointer-events-none fixed inset-0 z-0">
      <div className="factory-backdrop__steel" />
      <div className="factory-backdrop__halftone" />
      <div className="factory-backdrop__ribbons">
        <span className="paint-ribbon paint-ribbon-cyan" />
        <span className="paint-ribbon paint-ribbon-magenta" />
        <span className="paint-ribbon paint-ribbon-yellow" />
        <span className="paint-ribbon paint-ribbon-ink" />
      </div>
      <div className="factory-backdrop__tanks">
        <span />
        <span />
        <span />
      </div>
      <div className="factory-backdrop__rails" />
    </div>
  );
}

function IntroLoader() {
  return (
    <motion.div
      className="fixed inset-0 z-[90] flex items-center justify-center overflow-hidden bg-[#060814]"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.6, ease: easeOut } }}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(34,211,238,0.18),_transparent_36%),radial-gradient(circle_at_bottom_right,_rgba(249,115,22,0.18),_transparent_28%)]" />
      <motion.div
        className="relative flex flex-col items-center gap-6"
        initial={{ opacity: 0, scale: 0.94 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: easeOut }}
      >
        <div className="overflow-hidden rounded-[2rem] border border-white/12 bg-white/95 p-3 shadow-[0_25px_65px_rgba(0,0,0,0.32)]">
          <Image
            src={brandMedia.gif}
            alt="Cenk Serigrafi Boyaları logosu"
            width={591}
            height={591}
            unoptimized
            priority
            className="h-28 w-28 rounded-[1.2rem] object-cover sm:h-32 sm:w-32"
          />
        </div>
        <div className="space-y-3 text-center">
          <p className="font-display text-lg font-medium tracking-[0.24em] text-white/85">
            Premium Endüstriyel Renk Deneyimi
          </p>
          <div className="h-1.5 w-64 overflow-hidden rounded-full bg-white/8">
            <motion.div
              className="h-full rounded-full bg-[linear-gradient(90deg,var(--accent-1),var(--accent-2),var(--accent-3))]"
              initial={{ x: "-100%" }}
              animate={{ x: "100%" }}
              transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.6, ease: "easeInOut" }}
            />
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

function CountCard({
  value,
  suffix,
  label,
}: {
  value: number;
  suffix: string;
  label: string;
}) {
  const ref = useRef<HTMLDivElement | null>(null);
  const inView = useInView(ref, { once: true, amount: 0.7 });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) {
      return;
    }

    let frame = 0;
    const start = performance.now();
    const duration = 1400;

    const tick = (time: number) => {
      const progress = Math.min((time - start) / duration, 1);
      setCount(Math.round(progress * value));
      if (progress < 1) {
        frame = window.requestAnimationFrame(tick);
      }
    };

    frame = window.requestAnimationFrame(tick);
    return () => window.cancelAnimationFrame(frame);
  }, [inView, value]);

  return (
    <div
      ref={ref}
      className="glass-panel group relative overflow-hidden rounded-[2rem] p-8"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(255,255,255,0.1),_transparent_45%)] opacity-70 transition-opacity duration-500 group-hover:opacity-100" />
      <p className="font-display text-4xl font-semibold tracking-tight text-white sm:text-5xl">
        {count}
        {suffix}
      </p>
      <p className="mt-3 text-sm uppercase tracking-[0.28em] text-white/58">
        {label}
      </p>
    </div>
  );
}

function ProductCard({
  product,
  index,
}: {
  product: (typeof productItems)[number];
  index: number;
}) {
  const rotateX = useSpring(0, { stiffness: 140, damping: 18, mass: 0.4 });
  const rotateY = useSpring(0, { stiffness: 140, damping: 18, mass: 0.4 });

  const handleMove = (event: ReactMouseEvent<HTMLElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const relativeX = (event.clientX - rect.left) / rect.width - 0.5;
    const relativeY = (event.clientY - rect.top) / rect.height - 0.5;
    rotateX.set(relativeY * -10);
    rotateY.set(relativeX * 12);
  };

  const handleLeave = () => {
    rotateX.set(0);
    rotateY.set(0);
  };

  const whatsappMessage = encodeURIComponent(
    `${product.title} için detaylı bilgi ve teklif almak istiyorum.`
  );

  return (
    <Reveal delay={index * 0.04}>
      <motion.article
        className="paint-card group relative h-full overflow-hidden rounded-[2rem] border border-white/10 bg-[#0d1224]/78 p-6 backdrop-blur-2xl"
        style={{ rotateX, rotateY, transformPerspective: 1400 }}
        onMouseMove={handleMove}
        onMouseLeave={handleLeave}
        whileHover={{ y: -10 }}
        transition={{ duration: 0.35, ease: easeOut }}
      >
        <div className="relative overflow-hidden rounded-[1.6rem] border border-white/10 bg-black/20">
          <div className="absolute inset-x-5 top-5 z-20 flex items-center justify-between">
            <span className="rounded-full border border-white/14 bg-black/35 px-3 py-1 text-[11px] uppercase tracking-[0.28em] text-white/78 backdrop-blur-md">
              Premium Seri
            </span>
            <div className="flex gap-2">
              <span
                className="h-3 w-3 rounded-full shadow-[0_0_18px_rgba(255,255,255,0.26)]"
                style={{ backgroundColor: product.accent[0] }}
              />
              <span
                className="h-3 w-3 rounded-full shadow-[0_0_18px_rgba(255,255,255,0.26)]"
                style={{ backgroundColor: product.accent[1] }}
              />
            </div>
          </div>
          <div className="relative h-48 overflow-hidden">
            <Image
              src={product.image}
              alt={product.imageAlt}
              fill
              sizes="(min-width: 1280px) 23vw, (min-width: 768px) 45vw, 100vw"
              className="object-cover transition duration-700 group-hover:scale-105"
            />
            <div
              className="absolute inset-0"
              style={{
                background: `linear-gradient(180deg, rgba(6,8,20,0.12) 0%, rgba(6,8,20,0.44) 48%, rgba(6,8,20,0.9) 100%), linear-gradient(135deg, ${product.accent[0]}33, transparent 42%, ${product.accent[1]}26)`,
              }}
            />
          </div>
          <div
            className="absolute -left-8 top-16 h-24 w-24 rounded-full blur-2xl"
            style={{ background: `${product.accent[0]}7a` }}
          />
          <div
            className="absolute -right-8 bottom-4 h-24 w-24 rounded-full blur-2xl"
            style={{ background: `${product.accent[1]}70` }}
          />
          <div className="relative">
            <div className="px-6 pb-6 pt-5">
              <p className="text-xs uppercase tracking-[0.3em] text-white/56">
                {product.eyebrow}
              </p>
              <h3 className="mt-3 font-display text-2xl font-semibold text-white">
                {product.title}
              </h3>
            </div>
          </div>
        </div>

        <div className="mt-6 space-y-4">
          <p className="text-sm leading-7 text-white/68">
            Yüksek verim, dengeli akış ve profesyonel baskı kalitesi için
            geliştirilmiş üretim serisi.
          </p>
          <ul className="space-y-3 text-sm text-white/72">
            {productHighlights.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span className="mt-1 inline-flex h-5 w-5 items-center justify-center rounded-full bg-white/10 text-[var(--accent-2)]">
                  <ChevronRight className="h-3.5 w-3.5" />
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <a
            href={`${companyInfo.whatsappHref}?text=${whatsappMessage}`}
            target="_blank"
            rel="noreferrer"
            className="button-primary inline-flex items-center flex-1 justify-center"
          >
            Detaylı Bilgi Al
            <ArrowRight className="h-4 w-4" />
          </a>
          <a
            href={companyInfo.whatsappHref}
            target="_blank"
            rel="noreferrer"
            className="button-secondary inline-flex items-center flex-1 justify-center"
          >
            WhatsApp
          </a>
        </div>
      </motion.article>
    </Reveal>
  );
}

function GalleryCard({
  item,
  index,
  onOpen,
}: {
  item: (typeof galleryItems)[number];
  index: number;
  onOpen: () => void;
}) {
  return (
    <Reveal className="mb-6 break-inside-avoid" delay={index * 0.05}>
      <button
        type="button"
        onClick={onOpen}
        className="group relative block w-full overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 text-left"
      >
        <div className={cn("relative overflow-hidden", item.aspect)}>
          <Image
            src={item.image}
            alt={item.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(6,8,20,0.12),rgba(6,8,20,0.9))]" />
          <div className="absolute inset-x-0 bottom-0 p-6">
            <div className="inline-flex items-center rounded-full border border-white/12 bg-black/30 px-3 py-1 text-[11px] uppercase tracking-[0.26em] text-white/72 backdrop-blur-xl">
              {item.category}
            </div>
            <h3 className="mt-4 font-display text-2xl font-semibold text-white">
              {item.title}
            </h3>
          </div>
        </div>
      </button>
    </Reveal>
  );
}

function GalleryLightbox({
  item,
  onClose,
}: {
  item: (typeof galleryItems)[number];
  onClose: () => void;
}) {
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  return (
    <motion.div
      className="fixed inset-0 z-[85] flex items-center justify-center bg-[#040611]/88 p-4 backdrop-blur-xl"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div
        className="relative w-full max-w-5xl overflow-hidden rounded-[2.2rem] border border-white/12 bg-[#0d1326]"
        initial={{ opacity: 0, y: 32, scale: 0.96 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 24, scale: 0.96 }}
        transition={{ duration: 0.45, ease: easeOut }}
      >
        <button
          type="button"
          onClick={onClose}
          className="absolute right-4 top-4 z-10 inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-black/30 text-white/78 backdrop-blur-xl transition hover:text-white"
          aria-label="Galeri görselini kapat"
        >
          <X className="h-5 w-5" />
        </button>
        <div className="grid gap-0 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="relative min-h-[22rem] bg-[#090d1d]">
            <Image
              src={item.image}
              alt={item.title}
              fill
              sizes="100vw"
              className="object-cover"
              priority
            />
          </div>
          <div className="flex flex-col justify-between gap-8 p-8 lg:p-10">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-white/52">
                {item.category}
              </p>
              <h3 className="mt-4 font-display text-3xl font-semibold text-white">
                {item.title}
              </h3>
              <p className="mt-6 text-base leading-8 text-white/68">
                {item.summary}
              </p>
            </div>
            <div className="rounded-[1.7rem] border border-white/8 bg-white/5 p-6">
              <p className="text-sm uppercase tracking-[0.24em] text-white/55">
                Proje Notu
              </p>
              <p className="mt-4 text-sm leading-7 text-white/72">
                Numune, uygulama ve üretim ihtiyaçlarınız için özel ton,
                kuruma karakteri ve yüzey uyumu tarafında detaylı destek
                sağlıyoruz.
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

function BrandLogoArt({
  kind,
  mark,
}: {
  kind: (typeof referenceBrands)[number]["logoKind"];
  mark: string;
}) {
  const baseClass = "h-full w-full text-white";

  if (kind === "starbucks") {
    return (
      <svg viewBox="0 0 180 180" aria-hidden="true" className={baseClass}>
        <circle cx="90" cy="90" r="78" fill="none" stroke="currentColor" strokeWidth="13" />
        <circle cx="90" cy="90" r="50" fill="none" stroke="currentColor" strokeWidth="5" />
        <path
          d="M90 33 103 70l39 1-31 23 11 38-32-23-32 23 11-38-31-23 39-1Z"
          fill="currentColor"
        />
        <path
          d="M55 122c16-11 55-11 70 0M62 141c12-8 44-8 56 0"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeWidth="6"
        />
      </svg>
    );
  }

  if (kind === "nike") {
    return (
      <svg viewBox="0 0 260 140" aria-hidden="true" className={baseClass}>
        <path
          d="M23 91c48 22 105 11 215-57-73 74-156 102-214 76-17-8-21-18-1-19Z"
          fill="currentColor"
        />
      </svg>
    );
  }

  if (kind === "adidas") {
    return (
      <svg viewBox="0 0 220 160" aria-hidden="true" className={baseClass}>
        <path d="M37 129h32L94 60H62Z" fill="currentColor" />
        <path d="M94 129h34L106 32H72Z" fill="currentColor" />
        <path d="M151 129h35L120 10H86Z" fill="currentColor" />
      </svg>
    );
  }

  if (kind === "puma") {
    return (
      <svg viewBox="0 0 260 150" aria-hidden="true" className={baseClass}>
        <path
          d="M44 88c34-7 59-35 92-43 31-8 58 5 79 24-27-4-51 4-73 17l23 12c-44 9-82 2-121-10Z"
          fill="currentColor"
        />
        <circle cx="213" cy="56" r="8" fill="currentColor" />
        <path
          d="M81 99c-22 12-42 18-62 18 13-12 26-20 45-28Z"
          fill="currentColor"
        />
      </svg>
    );
  }

  if (kind === "gezer") {
    return (
      <div className="flex h-full w-full items-center justify-center rounded-full border-[10px] border-white/80 font-display text-7xl font-black tracking-[-0.08em] text-white">
        G
      </div>
    );
  }

  if (kind === "espresso") {
    return (
      <svg viewBox="0 0 220 170" aria-hidden="true" className={baseClass}>
        <path
          d="M71 35h78l-13 36 37 64H47l37-64Z"
          fill="none"
          stroke="currentColor"
          strokeLinejoin="round"
          strokeWidth="13"
        />
        <path d="M73 112c19-16 54-16 74 0" fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="10" />
        <circle cx="111" cy="70" r="13" fill="currentColor" />
      </svg>
    );
  }

  if (kind === "mavi") {
    return (
      <div className="flex h-full w-full items-center justify-center rounded-[2rem] bg-blue-500/50 px-8 font-display text-6xl font-black uppercase tracking-[-0.08em] text-white">
        mavi
      </div>
    );
  }

  if (kind === "lufian") {
    return (
      <div className="flex h-full w-full items-center justify-center border-y-[10px] border-white/70 font-display text-5xl font-semibold uppercase tracking-[0.24em] text-white">
        {mark}
      </div>
    );
  }

  return (
    <div className="font-display text-5xl font-semibold uppercase tracking-[0.22em] text-white">
      {mark}
    </div>
  );
}

function ReferenceLogoCloud() {
  return (
    <Reveal className="mt-14">
      <div className="relative overflow-hidden rounded-[2.4rem] border border-white/10 bg-white/[0.045] p-5 shadow-[0_24px_80px_rgba(0,0,0,0.22)] backdrop-blur-2xl sm:p-7">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(34,211,238,0.12),_transparent_38%),radial-gradient(circle_at_bottom_right,_rgba(249,115,22,0.12),_transparent_34%)]" />
        <div className="relative flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.32em] text-white/50">
              Referans Marka Vitrini
            </p>
            <h3 className="mt-3 font-display text-2xl font-semibold text-white sm:text-3xl">
              Güven veren markalarla premium baskı algısı
            </h3>
          </div>
          <p className="max-w-xl text-sm leading-7 text-white/62">
            Kurumsal marka dünyasına uygun canlı renk, net yüzey transferi ve
            seri üretim standardı için tasarlanmış referans alanı.
          </p>
        </div>

        <div className="relative mt-7 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {referenceBrands.map((brand, index) => {
            const accent = referenceAccents[index % referenceAccents.length];

            return (
              <motion.article
                key={brand.name}
                className="group relative min-h-32 overflow-hidden rounded-[1.6rem] border border-white/10 bg-[#0b1020]/78 p-5"
                whileHover={{ y: -6, scale: 1.015 }}
                transition={{ duration: 0.35, ease: easeOut }}
              >
                <div className="pointer-events-none absolute -right-8 -top-8 h-36 w-36 rotate-[-8deg] opacity-[0.07] transition duration-500 group-hover:scale-110 group-hover:opacity-[0.13]">
                  <BrandLogoArt kind={brand.logoKind} mark={brand.mark} />
                </div>
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute -right-5 top-5 h-28 w-28 bg-contain bg-center bg-no-repeat opacity-[0.1] grayscale invert saturate-0 transition duration-500 group-hover:opacity-[0.22] sm:h-32 sm:w-32"
                  style={{ backgroundImage: `url(${brand.logoUrl})` }}
                />
                <div className="pointer-events-none absolute -bottom-10 left-4 right-4 font-display text-[4.1rem] font-black uppercase leading-none tracking-[-0.08em] text-white/[0.035] sm:text-[4.8rem]">
                  {brand.mark}
                </div>
                <div
                  className="absolute inset-0 opacity-45 transition-opacity duration-500 group-hover:opacity-75"
                  style={{
                    background: `radial-gradient(circle at top right, ${accent}33, transparent 48%)`,
                  }}
                />
                <div className="relative flex h-full min-h-24 flex-col justify-between">
                  <div className="flex items-center justify-between gap-3">
                    <div
                      className="h-2.5 w-2.5 rounded-full shadow-[0_0_20px_currentColor]"
                      style={{ color: accent, backgroundColor: accent }}
                    />
                    <div className="absolute left-4 top-4 h-10 w-10 rounded-2xl border border-white/10 bg-white/[0.04] p-2 opacity-0 backdrop-blur-xl transition duration-500 group-hover:opacity-100">
                      <BrandLogoArt kind={brand.logoKind} mark={brand.mark} />
                    </div>
                    <span className="rounded-full border border-white/10 bg-white/6 px-3 py-1 text-[10px] uppercase tracking-[0.22em] text-white/54">
                      {brand.descriptor}
                    </span>
                  </div>
                  <div className="mt-7">
                    <p className="font-display text-2xl font-semibold uppercase tracking-[0.18em] text-white sm:text-[1.7rem]">
                      {brand.mark}
                    </p>
                    <p className="mt-2 text-xs uppercase tracking-[0.28em] text-white/45">
                      {brand.name}
                    </p>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </Reveal>
  );
}

function TestimonialSlider() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActive((current) => (current + 1) % testimonialItems.length);
    }, 4500);

    return () => window.clearInterval(timer);
  }, []);

  return (
    <div className="grid gap-10 xl:grid-cols-[0.8fr_1.2fr] xl:items-center">
      <Reveal>
        <div className="space-y-6">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.28em] text-white/60">
            <Star className="h-3.5 w-3.5 text-[var(--accent-1)]" />
            Güven Veren Geri Bildirimler
          </div>
          <h3 className="font-display text-3xl font-semibold text-white sm:text-4xl">
            İş ortaklarımızın memnuniyetini sadece ürünle değil, süreç
            kalitesiyle kazanıyoruz.
          </h3>
          <p className="max-w-xl text-base leading-8 text-white/66">
            Teknik destekten teslimata kadar tutarlı bir deneyim sunmak, bizim
            için premium marka algısının temelidir.
          </p>
          <div className="flex gap-3">
            {testimonialItems.map((item, index) => (
              <button
                key={item.name}
                type="button"
                onClick={() => setActive(index)}
                className={cn(
                  "h-2.5 rounded-full transition-all",
                  active === index
                    ? "w-12 bg-[linear-gradient(90deg,var(--accent-1),var(--accent-2))]"
                    : "w-3 bg-white/18"
                )}
                aria-label={`${item.name} yorumunu göster`}
              />
            ))}
          </div>
        </div>
      </Reveal>

      <div className="relative min-h-[25rem]">
        <AnimatePresence mode="wait">
          <motion.article
            key={testimonialItems[active].name}
            className="glass-panel absolute inset-0 flex flex-col justify-between rounded-[2.4rem] p-8 lg:p-10"
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -24 }}
            transition={{ duration: 0.45, ease: easeOut }}
          >
            <div className="flex items-center gap-2 text-[var(--accent-1)]">
              {Array.from({ length: 5 }).map((_, index) => (
                <Star key={index} className="h-5 w-5 fill-current" />
              ))}
            </div>
            <p className="mt-10 font-display text-2xl leading-[1.55] text-white sm:text-3xl">
              “{testimonialItems[active].quote}”
            </p>
            <div className="mt-10 flex items-center justify-between gap-6 border-t border-white/10 pt-6">
              <div>
                <p className="text-lg font-medium text-white">
                  {testimonialItems[active].name}
                </p>
                <p className="mt-1 text-sm uppercase tracking-[0.22em] text-white/55">
                  {testimonialItems[active].company}
                </p>
              </div>
              <div className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.24em] text-white/58">
                Premium Referans
              </div>
            </div>
          </motion.article>
        </AnimatePresence>
      </div>
    </div>
  );
}

function ContactForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const text = encodeURIComponent(
      `Merhaba, ben ${formData.fullName}. Telefon: ${formData.phone}. Mesajım: ${formData.message}`
    );
    window.open(`${companyInfo.whatsappHref}?text=${text}`, "_blank", "noopener,noreferrer");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="glass-panel rounded-[2.2rem] p-7 sm:p-8"
    >
      <div className="grid gap-5">
        <label className="space-y-2 text-sm text-white/70">
          <span>Ad Soyad</span>
          <input
            type="text"
            value={formData.fullName}
            onChange={(event) =>
              setFormData((current) => ({
                ...current,
                fullName: event.target.value,
              }))
            }
            required
            placeholder="Adınız ve soyadınız"
            className="input-field"
          />
        </label>
        <label className="space-y-2 text-sm text-white/70">
          <span>Telefon</span>
          <input
            type="tel"
            value={formData.phone}
            onChange={(event) =>
              setFormData((current) => ({
                ...current,
                phone: event.target.value,
              }))
            }
            required
            placeholder="05xx xxx xx xx"
            className="input-field"
          />
        </label>
        <label className="space-y-2 text-sm text-white/70">
          <span>Mesaj</span>
          <textarea
            value={formData.message}
            onChange={(event) =>
              setFormData((current) => ({
                ...current,
                message: event.target.value,
              }))
            }
            required
            rows={5}
            placeholder="İhtiyacınız olan ürün, renk veya üretim detayını paylaşın."
            className="input-field min-h-36 resize-none"
          />
        </label>
      </div>
      <button
        type="submit"
        className="button-primary mt-6 inline-flex w-full items-center justify-center"
      >
        Gönder
        <ArrowRight className="h-4 w-4" />
      </button>
    </form>
  );
}

function HeroMediaPanel() {
  return (
    <div className="hero-panel relative overflow-hidden rounded-[2.6rem] border border-white/12 bg-[#0a1022]/82 p-4 backdrop-blur-2xl sm:p-6">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.08),_transparent_40%),linear-gradient(180deg,rgba(255,255,255,0.02),transparent_45%)]" />
      <div className="relative grid gap-4">
        <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-[#040813] shadow-[0_24px_60px_rgba(0,0,0,0.32)]">
          <div className="flex flex-col gap-3 border-b border-white/8 px-4 py-3 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-[11px] uppercase tracking-[0.3em] text-white/52">
                Kurumsal Marka Görseli
              </p>
              <p className="mt-1 text-sm text-white/72">
                Cenk Serigrafi Boyaları iletişim ve marka sunumu
              </p>
            </div>
            <div className="inline-flex w-fit items-center gap-2 rounded-full border border-white/10 bg-white/6 px-3 py-1 text-[11px] uppercase tracking-[0.22em] text-white/64">
              <MonitorSmartphone className="h-3.5 w-3.5 text-[var(--accent-2)]" />
              Responsive Görsel
            </div>
          </div>
          <div className="relative aspect-[16/11] w-full bg-white">
            <Image
              src={brandMedia.label}
              alt="Cenk Serigrafi Boyaları marka görseli"
              fill
              priority
              className="object-contain p-6 sm:p-10"
            />
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {applicationShowcaseItems.map((item) => (
            <article
              key={item.title}
              className="group glass-panel overflow-hidden rounded-[1.9rem] p-3"
            >
              <div className="relative aspect-[4/5] overflow-hidden rounded-[1.5rem] border border-white/10 bg-[#050812]">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(6,8,20,0.04),rgba(6,8,20,0.82))]" />
                <div className="absolute inset-x-0 bottom-0 p-4">
                  <p className="text-[10px] uppercase tracking-[0.24em] text-white/58">
                    {item.category}
                  </p>
                  <h3 className="mt-2 font-display text-lg font-semibold text-white">
                    {item.title}
                  </h3>
                </div>
              </div>
              <p className="px-1 pt-4 text-sm leading-7 text-white/66">
                {item.summary}
              </p>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}

function FloatingWhatsApp() {
  return (
    <motion.a
      href={companyInfo.whatsappHref}
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-5 right-5 z-[72] inline-flex items-center gap-3 rounded-full border border-white/12 bg-[#11c36a] px-5 py-3 text-sm font-medium text-white shadow-[0_20px_50px_rgba(17,195,106,0.35)] backdrop-blur-xl"
      whileHover={{ y: -4, scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      <MessageCircleMore className="h-5 w-5" />
      WhatsApp
    </motion.a>
  );
}

export function HomePage() {
  const [isLoading, setIsLoading] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [navCompact, setNavCompact] = useState(false);
  const [selectedGalleryIndex, setSelectedGalleryIndex] = useState<number | null>(
    null
  );

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => window.clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleScroll = () => setNavCompact(window.scrollY > 28);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isLoading || isMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isLoading, isMenuOpen]);

  const selectedGalleryItem =
    selectedGalleryIndex !== null ? galleryItems[selectedGalleryIndex] : null;

  return (
    <div className="relative overflow-hidden">
      <ScrollProgressBar />
      <FactoryBackdrop />
      <div className="page-noise pointer-events-none fixed inset-0 z-[1]" />

      <AnimatePresence>{isLoading && <IntroLoader />}</AnimatePresence>

      <header className="fixed inset-x-0 top-0 z-[75] px-3 py-3 sm:px-5">
        <motion.div
          className={cn(
            "mx-auto flex max-w-7xl items-center justify-between gap-4 rounded-[2rem] border border-white/12 bg-[#070b17]/72 px-4 backdrop-blur-2xl transition-all duration-500 sm:px-6",
            navCompact ? "py-3 shadow-[0_16px_40px_rgba(0,0,0,0.35)]" : "py-4"
          )}
        >
          <Link href="#anasayfa" className="shrink-0">
            <BrandMark />
          </Link>

          <nav className="hidden items-center gap-7 xl:flex">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm uppercase tracking-[0.24em] text-white/66 transition-colors duration-300 hover:text-white"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a
              href={companyInfo.whatsappHref}
              target="_blank"
              rel="noreferrer"
              className="button-primary hidden items-center px-5 py-3 text-sm lg:inline-flex"
            >
              WhatsApp’tan İletişime Geç
              <ArrowRight className="h-4 w-4" />
            </a>
            <button
              type="button"
              onClick={() => setIsMenuOpen((current) => !current)}
              className="inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-white/12 bg-white/5 text-white xl:hidden"
              aria-label="Menüyü aç"
              aria-expanded={isMenuOpen}
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </motion.div>
      </header>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="fixed inset-0 z-[74] bg-[#040711]/82 backdrop-blur-xl xl:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="absolute inset-x-3 top-24 rounded-[2rem] border border-white/12 bg-[#09101f]/92 p-6 shadow-[0_24px_60px_rgba(0,0,0,0.4)]"
              initial={{ opacity: 0, y: -18 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -18 }}
            >
              <div className="flex flex-col gap-5">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="rounded-2xl border border-white/8 bg-white/5 px-4 py-4 text-sm uppercase tracking-[0.26em] text-white/75"
                  >
                    {item.label}
                  </Link>
                ))}
                <a
                  href={companyInfo.whatsappHref}
                  target="_blank"
                  rel="noreferrer"
                  className="button-primary inline-flex items-center justify-center"
                >
                  WhatsApp’tan İletişime Geç
                  <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <main className="relative z-[10]">
        <section
          id="anasayfa"
          className="content-visibility hero-factory relative min-h-screen overflow-hidden px-4 pb-24 pt-32 sm:px-6 lg:px-8 lg:pb-28 lg:pt-36"
        >
          <div className="section-shell grid gap-16 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <Reveal className="max-w-3xl">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/6 px-4 py-2 text-xs uppercase tracking-[0.34em] text-white/68 backdrop-blur-xl">
                <span className="h-2 w-2 rounded-full bg-[var(--accent-2)] shadow-[0_0_16px_rgba(34,211,238,0.85)]" />
                Endüstriyel Baskıda Premium Performans
              </div>
              <h1 className="mt-8 max-w-4xl font-display text-5xl font-semibold leading-[1.02] tracking-tight text-white sm:text-6xl lg:text-7xl">
                {companyInfo.heroTitle}
              </h1>
              <p className="mt-7 max-w-2xl text-lg leading-8 text-white/70 sm:text-xl">
                {companyInfo.heroDescription}
              </p>

              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <Link
                  href="#urunler"
                  className="button-primary inline-flex items-center justify-center px-6 py-4"
                >
                  Ürünleri İncele
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <a
                  href={companyInfo.whatsappHref}
                  target="_blank"
                  rel="noreferrer"
                  className="button-secondary inline-flex items-center justify-center px-6 py-4"
                >
                  WhatsApp’tan Teklif Al
                </a>
              </div>

              <div className="mt-12 grid gap-4 sm:grid-cols-3">
                {[
                  "Yüksek tutuculuk",
                  "Özel renk üretimi",
                  "Kalite kontrollü üretim",
                ].map((item) => (
                  <div
                    key={item}
                    className="glass-panel rounded-[1.6rem] px-5 py-4 text-sm uppercase tracking-[0.24em] text-white/75"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </Reveal>

            <Reveal delay={0.15}>
              <HeroMediaPanel />
            </Reveal>
          </div>
        </section>

        <section
          id="hakkimizda"
          className="content-visibility relative px-4 py-24 sm:px-6 lg:px-8 lg:py-28"
        >
          <div className="section-shell">
            <SectionHeading
              eyebrow="Kurumsal Profil"
              title="Yüksek performanslı baskı boyalarında güven veren üretim altyapısı"
              description={companyInfo.aboutDescription}
            />

            <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {featureItems.map((item, index) => {
                const Icon = iconMap[item.icon as IconKey];
                return (
                  <Reveal key={item.title} delay={index * 0.05}>
                    <article className="glass-panel group h-full rounded-[2rem] p-7 transition-transform duration-500 hover:-translate-y-2">
                      <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl border border-white/12 bg-white/8 text-[var(--accent-2)]">
                        <Icon className="h-6 w-6" />
                      </div>
                      <h3 className="mt-6 font-display text-2xl font-semibold text-white">
                        {item.title}
                      </h3>
                      <p className="mt-4 text-sm leading-7 text-white/68">
                        {item.description}
                      </p>
                    </article>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </section>

        <section
          id="urunler"
          className="content-visibility relative px-4 py-24 sm:px-6 lg:px-8 lg:py-28"
        >
          <div className="section-shell">
            <SectionHeading
              eyebrow="Ürün Portföyü"
              title="Her baskı yüzeyi ve üretim ihtiyacı için profesyonel boya çözümleri"
              description="Premium kart sistemi ile ürün gruplarını hızlıca keşfedin; tüm seriler özel renk, özel formül ve yüksek pigment kalitesi ile üretilebilir."
            />

            <div className="mt-14 grid gap-6 md:grid-cols-2 2xl:grid-cols-3">
              {productItems.map((item, index) => (
                <ProductCard key={item.title} product={item} index={index} />
              ))}
            </div>
          </div>
        </section>

        <section
          id="hizmetler"
          className="content-visibility relative px-4 py-24 sm:px-6 lg:px-8 lg:py-28"
        >
          <div className="section-shell">
            <SectionHeading
              eyebrow="Hizmetler"
              title="Sadece boya değil, üretimi güçlendiren teknik partnerlik sunuyoruz"
              description="Renk eşleştirme, proses desteği ve sürdürülebilir tedarik yaklaşımı ile işinize katma değer sağlayan bir çözüm ortağı olarak çalışıyoruz."
            />
            <div className="mt-14 grid gap-6 lg:grid-cols-2">
              {serviceItems.map((item, index) => {
                const Icon = iconMap[item.icon as IconKey];
                return (
                  <Reveal key={item.title} delay={index * 0.06}>
                    <article className="glass-panel relative overflow-hidden rounded-[2rem] p-8">
                      <div className="absolute -right-12 top-0 h-28 w-28 rounded-full bg-[var(--accent-1)]/20 blur-3xl" />
                      <div className="relative flex items-start gap-5">
                        <div className="inline-flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-white/12 bg-white/8 text-[var(--accent-1)]">
                          <Icon className="h-6 w-6" />
                        </div>
                        <div>
                          <h3 className="font-display text-2xl font-semibold text-white">
                            {item.title}
                          </h3>
                          <p className="mt-3 text-sm leading-7 text-white/68">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    </article>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </section>

        <section className="content-visibility relative px-4 py-24 sm:px-6 lg:px-8 lg:py-28">
          <div className="section-shell">
            <SectionHeading
              eyebrow="Neden Biz"
              title="Veriyle desteklenen üretim disiplini, premium kalite yaklaşımı"
              description="Markanıza güç, üretiminize süreklilik kazandıran bir boya tedarik yapısı için teknik uzmanlık ve istikrarlı kaliteyi bir araya getiriyoruz."
            />

            <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
              {statItems.map((item) => (
                <Reveal key={item.label}>
                  <CountCard {...item} />
                </Reveal>
              ))}
            </div>

            <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {advantageItems.map((item, index) => {
                const Icon = iconMap[item.icon as IconKey];
                return (
                  <Reveal key={item.title} delay={index * 0.05}>
                    <article className="glass-panel h-full rounded-[2rem] p-7">
                      <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-white/12 bg-white/8 text-[var(--accent-3)]">
                        <Icon className="h-5 w-5" />
                      </div>
                      <h3 className="mt-5 font-display text-2xl font-semibold text-white">
                        {item.title}
                      </h3>
                      <p className="mt-3 text-sm leading-7 text-white/68">
                        {item.description}
                      </p>
                    </article>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </section>

        <section
          id="uretim"
          className="content-visibility relative px-4 py-24 sm:px-6 lg:px-8 lg:py-28"
        >
          <div className="section-shell">
            <SectionHeading
              eyebrow="Üretim Süreci"
              title="Analizden teslimata kadar net, kontrollü ve animasyonlu üretim akışı"
              description="Her aşama ölçülebilir kalite ve termin güveni için tasarlanır; böylece ortaya sadece bir ürün değil, süreklilik sağlayan bir iş ortaklığı çıkar."
            />

            <div className="relative mt-16 space-y-6 before:absolute before:left-5 before:top-2 before:h-[calc(100%-1rem)] before:w-px before:bg-[linear-gradient(180deg,rgba(249,115,22,0.95),rgba(34,211,238,0.18))] lg:space-y-8 lg:before:left-1/2">
              {processSteps.map((step, index) => {
                const Icon = iconMap[step.icon as IconKey];
                return (
                  <Reveal key={step.title} delay={index * 0.06}>
                    <div
                      className={cn(
                        "relative grid gap-4 lg:grid-cols-2 lg:gap-10",
                        index % 2 === 0 ? "lg:text-right" : ""
                      )}
                    >
                      <div
                        className={cn(
                          index % 2 === 0 ? "lg:pr-12" : "lg:col-start-2 lg:pl-12"
                        )}
                      >
                        <article className="glass-panel rounded-[2rem] p-7">
                          <p className="text-xs uppercase tracking-[0.28em] text-white/54">
                            Adım {index + 1}
                          </p>
                          <div className="mt-4 flex items-center gap-4 lg:justify-start">
                            <div className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-white/12 bg-white/8 text-[var(--accent-1)]">
                              <Icon className="h-5 w-5" />
                            </div>
                            <h3 className="font-display text-2xl font-semibold text-white">
                              {step.title}
                            </h3>
                          </div>
                          <p className="mt-4 text-sm leading-7 text-white/68">
                            {step.description}
                          </p>
                        </article>
                      </div>
                      <div className="absolute left-0 top-10 flex h-10 w-10 items-center justify-center rounded-full border border-white/12 bg-[#0f162c] text-sm font-semibold text-white shadow-[0_0_0_8px_rgba(8,11,22,0.8)] lg:left-1/2 lg:-translate-x-1/2">
                        {index + 1}
                      </div>
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </section>

        <section
          id="referanslar"
          className="content-visibility relative px-4 py-24 sm:px-6 lg:px-8 lg:py-28"
        >
          <div className="section-shell">
            <SectionHeading
              eyebrow="Referanslar / Galeri"
              title="Baskı örneklerinden üretim alanlarına uzanan modern görsel vitrin"
              description="Premium masonry galeri, hover zoom ve lightbox akışı ile üretim kalitesini görsel olarak da güçlü biçimde hissettirecek şekilde tasarlandı."
            />

            <ReferenceLogoCloud />

            <div className="mt-16 columns-1 gap-6 md:columns-2 2xl:columns-3">
              {galleryItems.map((item, index) => (
                <GalleryCard
                  key={item.title}
                  item={item}
                  index={index}
                  onOpen={() => setSelectedGalleryIndex(index)}
                />
              ))}
            </div>
          </div>
        </section>

        <section className="content-visibility relative px-4 py-24 sm:px-6 lg:px-8 lg:py-28">
          <div className="section-shell">
            <SectionHeading
              eyebrow="Müşteri Yorumları"
              title="Güven duygusunu güçlendiren, otomatik kayan premium testimonial alanı"
              description="Uzun vadeli iş ilişkilerinde en önemli ölçüt güven, renk tutarlılığı ve süreç kalitesidir. Bu alan da tam olarak o algıyı destekler."
            />
            <div className="mt-14">
              <TestimonialSlider />
            </div>
          </div>
        </section>

        <section
          id="iletisim"
          className="content-visibility relative px-4 pb-24 pt-24 sm:px-6 lg:px-8 lg:pb-28 lg:pt-28"
        >
          <div className="section-shell">
            <SectionHeading
              eyebrow="İletişim"
              title="Teklif, renk danışmanlığı ve üretim planlaması için doğrudan bize ulaşın"
              description="Telefon, WhatsApp ve sosyal medya üzerinden hızlıca iletişime geçebilir; formu doldurarak talebinizi doğrudan WhatsApp mesajına dönüştürebilirsiniz."
            />

            <div className="mt-14 grid gap-6 xl:grid-cols-[0.88fr_1.12fr]">
              <div className="space-y-6">
                <Reveal>
                  <article className="glass-panel rounded-[2rem] p-7">
                    <div className="grid gap-4 sm:grid-cols-2">
                      <a
                        href={companyInfo.phoneHref}
                        className="contact-tile"
                      >
                        <Phone className="h-5 w-5 text-[var(--accent-1)]" />
                        <div>
                          <p className="contact-label">Telefon</p>
                          <p className="contact-value">{companyInfo.phoneDisplay}</p>
                        </div>
                      </a>
                      <a
                        href={companyInfo.whatsappHref}
                        target="_blank"
                        rel="noreferrer"
                        className="contact-tile"
                      >
                        <MessageCircleMore className="h-5 w-5 text-[#20c96b]" />
                        <div>
                          <p className="contact-label">WhatsApp</p>
                          <p className="contact-value">Hızlı teklif ve bilgi</p>
                        </div>
                      </a>
                      <a
                        href={companyInfo.instagramHref}
                        target="_blank"
                        rel="noreferrer"
                        className="contact-tile"
                      >
                        <InstagramIcon className="h-5 w-5 text-[var(--accent-3)]" />
                        <div>
                          <p className="contact-label">Instagram</p>
                          <p className="contact-value">{companyInfo.instagramHandle}</p>
                        </div>
                      </a>
                      {companyInfo.facebookHref ? (
                        <a
                          href={companyInfo.facebookHref}
                          target="_blank"
                          rel="noreferrer"
                          className="contact-tile"
                        >
                          <FacebookIcon className="h-5 w-5 text-[var(--accent-2)]" />
                          <div>
                            <p className="contact-label">Facebook</p>
                            <p className="contact-value">Kurumsal profil</p>
                          </div>
                        </a>
                      ) : null}
                      <a
                        href={companyInfo.mapsHref}
                        target="_blank"
                        rel="noreferrer"
                        className="contact-tile sm:col-span-2"
                      >
                        <MapPinned className="h-5 w-5 text-[var(--accent-1)]" />
                        <div>
                          <p className="contact-label">Adres</p>
                          <p className="contact-value">{companyInfo.address}</p>
                        </div>
                      </a>
                    </div>
                  </article>
                </Reveal>

                <Reveal delay={0.05}>
                  <article className="glass-panel overflow-hidden rounded-[2rem] p-3">
                    <div className="relative overflow-hidden rounded-[1.6rem] border border-white/8">
                      <iframe
                        title="Cenk Serigrafi Boyaları konumu"
                        src={companyInfo.mapsEmbedHref}
                        loading="lazy"
                        allowFullScreen
                        className="h-[20rem] w-full border-0 grayscale"
                        referrerPolicy="no-referrer-when-downgrade"
                      />
                      <div className="pointer-events-none absolute inset-x-4 bottom-4 rounded-[1.3rem] border border-white/12 bg-black/40 px-4 py-3 backdrop-blur-xl">
                        <div className="flex items-center gap-3">
                          <MapPinned className="h-5 w-5 text-[var(--accent-2)]" />
                          <p className="text-sm text-white/78">
                            {companyInfo.address}
                          </p>
                        </div>
                      </div>
                    </div>
                    <a
                      href={companyInfo.mapsHref}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-3 inline-flex w-full items-center justify-center gap-2 rounded-[1.2rem] border border-white/10 bg-white/[0.06] px-4 py-3 text-sm font-medium text-white/78 transition hover:border-white/20 hover:bg-white/[0.1] hover:text-white"
                    >
                      Google Maps&apos;te Aç
                      <ArrowRight className="h-4 w-4" />
                    </a>
                  </article>
                </Reveal>
              </div>

              <Reveal delay={0.08}>
                <ContactForm />
              </Reveal>
            </div>
          </div>
        </section>
      </main>

      <footer className="relative z-[10] border-t border-white/8 px-4 pb-12 pt-12 sm:px-6 lg:px-8">
        <div className="section-shell grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <BrandMark
              className="inline-block px-4 py-3"
              imageClassName="h-14 w-[11.5rem] object-contain sm:h-16 sm:w-[13rem]"
            />
            <p className="mt-6 max-w-xl text-sm leading-7 text-white/62">
              Serigrafi, tekstil ve endüstriyel baskı çözümleri için yüksek
              kaliteli boya üretimi; canlı renkler, güçlü tutuculuk ve kurumsal
              güven duygusunu bir arada sunar.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href={companyInfo.whatsappHref}
                target="_blank"
                rel="noreferrer"
                className="button-primary inline-flex items-center"
              >
                WhatsApp
                <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href={companyInfo.phoneHref}
                className="button-secondary inline-flex items-center"
              >
                {companyInfo.phoneDisplay}
              </a>
            </div>
          </div>

          <div className="grid gap-10 sm:grid-cols-2">
            <div>
              <p className="footer-title">Menü</p>
              <div className="mt-5 grid gap-3">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="text-sm text-white/64 transition-colors hover:text-white"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
            <div>
              <p className="footer-title">Sosyal Medya</p>
              <div className="mt-5 flex gap-3">
                <a
                  href={companyInfo.instagramHref}
                  target="_blank"
                  rel="noreferrer"
                  className="social-button"
                >
                  <InstagramIcon className="h-5 w-5" />
                </a>
                {companyInfo.facebookHref ? (
                  <a
                    href={companyInfo.facebookHref}
                    target="_blank"
                    rel="noreferrer"
                    className="social-button"
                  >
                    <FacebookIcon className="h-5 w-5" />
                  </a>
                ) : null}
                <a
                  href={companyInfo.whatsappHref}
                  target="_blank"
                  rel="noreferrer"
                  className="social-button"
                >
                  <MessageCircleMore className="h-5 w-5" />
                </a>
                <a href={companyInfo.phoneHref} className="social-button">
                  <Phone className="h-5 w-5" />
                </a>
              </div>

              <div className="mt-6 rounded-[1.8rem] border border-white/8 bg-white/5 p-5">
                <p className="text-xs uppercase tracking-[0.28em] text-white/52">
                  Premium İletişim
                </p>
                <p className="mt-3 text-sm leading-7 text-white/68">
                  Hızlı üretim planı, özel ton danışmanlığı ve teknik bilgi için
                  WhatsApp hattımız üzerinden anında bağlantı kurabilirsiniz.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="section-shell mt-10 flex flex-col gap-3 border-t border-white/8 pt-6 text-sm text-white/45 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Cenk Serigrafi Boyaları — Tüm Hakları Saklıdır.</p>
          <div className="flex items-center gap-4 text-white/38">
            <span className="inline-flex items-center gap-2">
              <MonitorSmartphone className="h-4 w-4" />
              Hızlı ve mobil uyumlu deneyim
            </span>
          </div>
        </div>
      </footer>

      <FloatingWhatsApp />

      <AnimatePresence>
        {selectedGalleryItem && (
          <GalleryLightbox
            item={selectedGalleryItem}
            onClose={() => setSelectedGalleryIndex(null)}
          />
        )}
      </AnimatePresence>
    </div>
  );
}
