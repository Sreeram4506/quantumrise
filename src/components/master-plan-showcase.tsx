import { motion } from "framer-motion";
import { useMemo, useState } from "react";
import { Eyebrow, MagneticButton, RevealText, SectionHeading } from "@/components/site";

type LayerId = "all" | "arrival" | "clubhouse" | "plots" | "roads";

const plotRowsLeft = ["25", "26", "26", "27", "28", "29", "30", "31", "32", "33", "34*"];
const plotRowsCenterLeft = ["24*", "23", "22", "22", "21", "20", "19", "17", "18", "15", "15", "14", "13*"];
const plotRowsCenterRight = ["1*", "2", "3", "4", "5", "5", "6", "7", "8", "9", "10", "11", "12*"];

const layers: Array<{
  id: LayerId;
  title: string;
  body: string;
}> = [
  {
    id: "arrival",
    title: "Arrival Gate",
    body: "A formal entry axis with a secure forecourt and landscaped threshold.",
  },
  {
    id: "clubhouse",
    title: "Clubhouse Edge",
    body: "The social anchor sits to the upper left, framed by tree cover and softer planting.",
  },
  {
    id: "plots",
    title: "Plot Banks",
    body: "Two long plot bands hold the community together with a calm, efficient footprint.",
  },
  {
    id: "roads",
    title: "9m Wide Roads",
    body: "Two internal roads carry movement while preserving quiet and clear plot access.",
  },
];

type MasterPlanShowcaseProps = {
  onPrimaryAction: () => void;
  primaryCtaLabel?: string;
  selectedCtaLabel?: string;
  secondaryCtaTo?: string;
  secondaryCtaLabel?: string;
  showStats?: boolean;
};

export function MasterPlanShowcase({
  onPrimaryAction,
  primaryCtaLabel = "Download brochure",
  selectedCtaLabel = "Request master plan",
  secondaryCtaTo = "/contact",
  secondaryCtaLabel = "Book a site visit",
  showStats = true,
}: MasterPlanShowcaseProps) {
  const [selected, setSelected] = useState<LayerId>("all");
  const selectedLayer = useMemo(() => layers.find((layer) => layer.id === selected) ?? layers[0], [selected]);

  return (
    <>
      <section className="container-lux pt-24 pb-10 md:pt-32">
        <Eyebrow>Master Plan</Eyebrow>
        <RevealText as="h1" className="max-w-4xl font-display text-5xl leading-[1.05] text-primary md:text-7xl">
          A plan drawn in long lines,
          <br />
          with the land doing the talking.
        </RevealText>
        <p className="mt-6 max-w-2xl text-muted-foreground md:text-lg">
        Green Gardens is laid out as a calm plotted estate: two broad internal roads, a protected clubhouse edge,
        and long banks of villa plots tucked into a green frame.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <MagneticButton variant="gold" onClick={onPrimaryAction}>
            {primaryCtaLabel}
          </MagneticButton>
          <MagneticButton to={secondaryCtaTo} variant="ghost">
            {secondaryCtaLabel}
          </MagneticButton>
        </div>
      </section>

      <section className="container-lux pb-16">
        <div className="grid gap-8 lg:grid-cols-[1.35fr_0.65fr] lg:items-start">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="overflow-hidden rounded-[32px] border border-border bg-[linear-gradient(180deg,rgba(18,48,38,0.04),rgba(18,48,38,0.08))] p-4 shadow-[0_24px_80px_-24px_rgba(19,31,38,0.22)]"
          >
            <MasterPlanDiagram selected={selected} />
          </motion.div>

          <aside className="space-y-4">
            <div className="rounded-3xl border border-border bg-card p-6">
              <div className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">Legend</div>
              <div className="mt-4 space-y-2">
                <LegendButton
                  active={selected === "all"}
                  index="01"
                  title="Overall plan"
                  onClick={() => setSelected("all")}
                />
                {layers.map((layer, i) => (
                  <LegendButton
                    key={layer.id}
                    active={selected === layer.id}
                    index={String(i + 2).padStart(2, "0")}
                    title={layer.title}
                    onClick={() => setSelected(layer.id)}
                  />
                ))}
              </div>
            </div>

            <div className="rounded-3xl border border-border bg-primary p-6 text-primary-foreground">
              <div className="text-[10px] uppercase tracking-[0.3em] text-secondary">Selected focus</div>
              <div className="mt-2 font-display text-2xl text-secondary">
                {selected === "all" ? "Full estate" : selectedLayer.title}
              </div>
              <p className="mt-3 text-sm leading-relaxed text-primary-foreground/75">
                {selected === "all"
                  ? "The full layout reads as one composed estate with a formal arrival, long plot bands and a central social anchor."
                  : selectedLayer.body}
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <MagneticButton variant="gold" onClick={onPrimaryAction}>
                  {selectedCtaLabel}
                </MagneticButton>
              </div>
            </div>
          </aside>
        </div>
      </section>

      {showStats && (
        <section className="bg-primary py-24 text-primary-foreground md:py-32">
          <div className="container-lux">
            <SectionHeading
              eyebrow="What it shows"
              title={
                <>
                  The drawing is simple,
                  <br />
                  <em className="italic text-secondary">and that is the point.</em>
                </>
              }
              intro="There are no decorative distractions here. The master plan is about legibility: where you enter, where you park, where the clubhouse sits, and how the plots are grouped."
              eyebrowClassName="text-secondary"
              titleClassName="text-secondary"
            />

            <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
              {[
                { k: "Plot banks", v: "34" },
                { k: "Road width", v: "9m" },
                { k: "Estate type", v: "Low density" },
                { k: "View", v: "Forest edge" },
              ].map((item) => (
                <div key={item.k} className="rounded-3xl border border-primary-foreground/10 bg-primary-foreground/5 p-6">
                  <div className="text-[10px] uppercase tracking-[0.3em] text-primary-foreground/60">{item.k}</div>
                  <div className="mt-3 font-display text-3xl text-secondary">{item.v}</div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}

function LegendButton({
  active,
  index,
  title,
  onClick,
}: {
  active: boolean;
  index: string;
  title: string;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className={`flex w-full items-center gap-3 rounded-2xl px-3 py-3 text-left transition-all ${
        active ? "bg-primary text-primary-foreground" : "hover:bg-muted"
      }`}
    >
      <span
        className={`flex h-7 w-7 items-center justify-center rounded-full text-[10px] font-medium ${
          active ? "bg-secondary text-secondary-foreground" : "bg-muted text-muted-foreground"
        }`}
      >
        {index}
      </span>
      <span className="font-display text-lg">{title}</span>
    </button>
  );
}

function MasterPlanDiagram({ selected }: { selected: LayerId }) {
  const plotFill = selected === "plots" || selected === "all" ? "#6e8f3d" : "#4f6a2a";
  const roadFill = selected === "roads" || selected === "all" ? "#30363a" : "#40484d";
  const arrivalFill = selected === "arrival" || selected === "all" ? "#d2ba73" : "#a98e52";
  const clubhouseGlow = selected === "clubhouse" || selected === "all" ? "rgba(212, 186, 115, 0.95)" : "rgba(212, 186, 115, 0.65)";

  const edgeTrees = Array.from({ length: 18 }, (_, i) => i);

  return (
    <div className="relative aspect-[4/5] overflow-hidden rounded-[24px] bg-[#21311f]">
      <svg viewBox="0 0 1200 1500" className="h-full w-full">
        <defs>
          <linearGradient id="sky" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0%" stopColor="#435b2f" />
            <stop offset="45%" stopColor="#243620" />
            <stop offset="100%" stopColor="#1b2b1a" />
          </linearGradient>
          <linearGradient id="grass" x1="0" x2="1" y1="0" y2="1">
            <stop offset="0%" stopColor="#5f7f32" />
            <stop offset="100%" stopColor="#3f5f22" />
          </linearGradient>
          <linearGradient id="road" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0%" stopColor="#51585c" />
            <stop offset="100%" stopColor="#2f3437" />
          </linearGradient>
          <linearGradient id="plot" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0%" stopColor="#67893a" />
            <stop offset="100%" stopColor="#4e6d2b" />
          </linearGradient>
          <filter id="softShadow" x="-40%" y="-40%" width="180%" height="180%">
            <feDropShadow dx="0" dy="18" stdDeviation="18" floodColor="#0e160d" floodOpacity="0.25" />
          </filter>
        </defs>

        <rect x="0" y="0" width="1200" height="1500" fill="url(#sky)" />
        <rect x="28" y="28" width="1144" height="1444" rx="30" fill="url(#grass)" opacity="0.95" />

        {edgeTrees.map((i) => (
          <g key={`tree-top-${i}`}>
            <circle cx={70 + i * 62} cy={74} r="18" fill="#375321" />
            <circle cx={82 + i * 62} cy={58} r="14" fill="#496c2c" />
            <circle cx={60 + i * 62} cy={62} r="12" fill="#28401c" />
          </g>
        ))}

        {edgeTrees.map((i) => (
          <g key={`tree-bottom-${i}`}>
            <circle cx={70 + i * 62} cy={1432} r="18" fill="#375321" />
            <circle cx={82 + i * 62} cy={1418} r="14" fill="#496c2c" />
            <circle cx={60 + i * 62} cy={1422} r="12" fill="#28401c" />
          </g>
        ))}

        <rect x="76" y="148" width="220" height="186" rx="10" fill="#cbb78b" filter="url(#softShadow)" />
        <rect x="86" y="158" width="200" height="166" rx="8" fill="#f4f0df" opacity="0.12" />
        <text x="186" y="250" textAnchor="middle" fill="#f7f0d2" fontSize="28" fontWeight="600" letterSpacing="2">
          CLUBHOUSE
        </text>
        <text x="186" y="286" textAnchor="middle" fill="#f7f0d2" fontSize="14" letterSpacing="4">
          SOCIAL ANCHOR
        </text>

        <rect x="308" y="0" width="112" height="1500" fill="url(#road)" opacity="0.95" />
        <rect x="704" y="0" width="112" height="1500" fill="url(#road)" opacity="0.95" />
        <rect x="420" y="0" width="284" height="1500" fill="rgba(0,0,0,0)" />

        <rect x="0" y="1220" width="1200" height="120" fill="rgba(16, 29, 14, 0.35)" />
        <rect x="0" y="1308" width="1200" height="40" fill="rgba(31, 45, 21, 0.55)" />
        <rect x="82" y="1348" width="1036" height="48" rx="6" fill="#4b4f47" />
        <rect x="510" y="1288" width="180" height="92" rx="8" fill="#d6c28a" filter="url(#softShadow)" />
        <text x="600" y="1344" textAnchor="middle" fill="#3a321a" fontSize="24" fontWeight="700" letterSpacing="4">
          ENTRY GATE
        </text>

        <text x="364" y="770" transform="rotate(-90 364 770)" fill="#e7dfc9" fontSize="26" fontWeight="700" letterSpacing="3">
          9M WIDE ROAD
        </text>
        <text x="760" y="770" transform="rotate(-90 760 770)" fill="#e7dfc9" fontSize="26" fontWeight="700" letterSpacing="3">
          9M WIDE ROAD
        </text>

        <g opacity={selected === "roads" || selected === "all" ? 0.9 : 0.45}>
          <rect x="308" y="0" width="4" height="1500" fill={roadFill} opacity="0.8" />
          <rect x="816" y="0" width="4" height="1500" fill={roadFill} opacity="0.8" />
        </g>

        <g>
          {plotRowsLeft.map((label, index) => {
            const y = 360 + index * 85;
            const h = index === plotRowsLeft.length - 1 ? 94 : 84;
            return (
              <g key={`left-${label}-${index}`} opacity={selected === "plots" || selected === "all" ? 1 : 0.65}>
                <rect x="70" y={y} width="220" height={h} fill={plotFill} stroke="rgba(255,255,255,0.28)" strokeWidth="2" />
                <text x="180" y={y + h / 2 + 10} textAnchor="middle" fill="#f6f1dd" fontSize="26" fontWeight="700">
                  {label}
                </text>
              </g>
            );
          })}
        </g>

        <g>
          {plotRowsCenterLeft.map((label, index) => {
            const y = 230 + index * 90;
            const h = index === plotRowsCenterLeft.length - 1 ? 96 : 88;
            return (
              <g key={`center-left-${label}-${index}`} opacity={selected === "plots" || selected === "all" ? 1 : 0.65}>
                <rect x="420" y={y} width="140" height={h} fill="url(#plot)" stroke="rgba(255,255,255,0.28)" strokeWidth="2" />
                <text x="490" y={y + h / 2 + 9} textAnchor="middle" fill="#f6f1dd" fontSize="24" fontWeight="700">
                  {label}
                </text>
              </g>
            );
          })}
        </g>

        <g>
          {plotRowsCenterRight.map((label, index) => {
            const y = 230 + index * 90;
            const h = index === plotRowsCenterRight.length - 1 ? 96 : 88;
            return (
              <g key={`center-right-${label}-${index}`} opacity={selected === "plots" || selected === "all" ? 1 : 0.65}>
                <rect x="560" y={y} width="144" height={h} fill="url(#plot)" stroke="rgba(255,255,255,0.28)" strokeWidth="2" />
                <text x="632" y={y + h / 2 + 9} textAnchor="middle" fill="#f6f1dd" fontSize="24" fontWeight="700">
                  {label}
                </text>
              </g>
            );
          })}
        </g>

        <g opacity={selected === "arrival" || selected === "all" ? 1 : 0.45}>
          <rect x="505" y="1288" width="190" height="92" rx="8" fill={arrivalFill} opacity="0.45" />
          <circle cx="510" cy="1334" r="6" fill="#f7efd4" />
          <circle cx="690" cy="1334" r="6" fill="#f7efd4" />
        </g>

        <g opacity={selected === "clubhouse" || selected === "all" ? 1 : 0.55}>
          <circle cx="128" cy="134" r="18" fill={clubhouseGlow} />
          <circle cx="214" cy="138" r="14" fill={clubhouseGlow} />
          <circle cx="172" cy="100" r="16" fill={clubhouseGlow} />
        </g>

        <g opacity={selected === "all" ? 1 : 0.9}>
          {Array.from({ length: 20 }, (_, i) => i).map((i) => (
            <circle key={`lamp-${i}`} cx={330 + i * 42} cy={1390} r="3.5" fill="#f8e8a6" opacity="0.8" />
          ))}
        </g>
      </svg>
    </div>
  );
}
