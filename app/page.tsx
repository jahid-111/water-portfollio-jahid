"use client";

import { useEffect, useMemo, useState } from "react";
import {
  ArrowUpRight,
  Award,
  Check,
  CheckCircle2,
  ChevronDown,
  ChevronRight,
  ClipboardList,
  Copy,
  Download,
  Droplets,
  Gauge,
  Mail,
  MapPin,
  Menu,
  Phone,
  Settings2,
  ShieldCheck,
  Waves,
  Workflow,
  Wrench,
  Activity,
  CircleAlert,
  Power,
  RotateCcw,
  X,
} from "lucide-react";

const EMAIL = "jahidjob5@outlook.com";
const WHATSAPP_NUMBER = "966578277451";
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  "Hello Jahidul, I checked out your portfolio and am impressed with your work. Are you available to discuss an opportunity?",
)}`;
const CV_URL = "/resume-Mohd_Jahidul_Islam-Water_Treatment_Expert.pdf";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#expertise", label: "Expertise" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#process", label: "RO Process" },
  { href: "#scada", label: "SCADA Demo" },
  { href: "#contact", label: "Contact" },
];

const CV_NOTE =
  "Listed project reference in the supplied CV. The CV identifies the project location and stated capacity; it does not specify individual duties for this project.";

const projects = [
  {
    name: "NAQUA",
    location: "Al-Lith, Saudi Arabia",
    capacity: "1 MLD",
    type: "Water treatment project",
    details: CV_NOTE,
  },
  {
    name: "AMAALA",
    location: "Al-Wajh (SV), Saudi Arabia",
    capacity: "15 MLD",
    type: "Desalination project",
    details: CV_NOTE,
  },
  {
    name: "NOMAC",
    location: "Dammam 3rd Industrial City",
    capacity: "2.5 MLD",
    type: "Water treatment project",
    details: CV_NOTE,
  },
  {
    name: "SEC",
    location: "Dammam 3rd Industrial City",
    capacity: "2.5 MLD",
    type: "Water treatment project",
    details: CV_NOTE,
  },
  {
    name: "KAIA",
    location: "Jeddah Airport, Saudi Arabia",
    capacity: "2 MLD",
    type: "Water treatment project",
    details: CV_NOTE,
  },
  {
    name: "NRC – 13, 14, 25",
    location: "Al Bad (NEOM), Saudi Arabia",
    capacity: "MBBR",
    type: "Biological treatment",
    details:
      "Listed project reference in the supplied CV. The CV identifies the project location and treatment type; no capacity is stated.",
  },
];

const projectFilters = ["All", "Water treatment", "Desalination", "Biological"];

const skills = [
  {
    icon: Waves,
    title: "RO Process Operations",
    detail:
      "SWRO & BWRO systems, intake and pretreatment, DAF / UF / DMF / MMF, cartridge filtration, high-pressure pumps, RO membrane systems, ERD / PX, post-treatment and CIP.",
    points: [
      "SWRO and BWRO operating systems",
      "Intake and pretreatment process",
      "Cartridge filtration and RO membranes",
      "Post-treatment and CIP",
    ],
  },
  {
    icon: Gauge,
    title: "Automation & Control",
    detail:
      "SCADA monitoring, PLC interfaces, process monitoring, alarm response and emergency response.",
    points: [
      "SCADA process monitoring",
      "PLC interfaces",
      "Alarm and emergency response",
      "Control-room and field coordination",
    ],
  },
  {
    icon: Droplets,
    title: "Water Chemistry & Dosing",
    detail:
      "pH, TDS, conductivity, residual chlorine, chemical dosing and CO₂ systems.",
    points: [
      "pH, TDS and conductivity checks",
      "Residual chlorine monitoring",
      "Chemical dosing systems",
      "CO₂ systems",
    ],
  },
  {
    icon: Wrench,
    title: "Maintenance & Troubleshooting",
    detail:
      "Routine inspections, preventive and corrective maintenance support, equipment troubleshooting and abnormal-condition response.",
    points: [
      "Routine plant inspections",
      "PM / CM support",
      "Initial troubleshooting",
      "Abnormal operating-condition response",
    ],
  },
  {
    icon: ShieldCheck,
    title: "Safety & Documentation",
    detail:
      "HSE practices, SOP compliance, LOTO awareness, shift logbooks, operating records and daily reports.",
    points: [
      "HSE and SOP compliance",
      "LOTO awareness",
      "Shift logbooks",
      "Daily operating reports",
    ],
  },
  {
    icon: Settings2,
    title: "Plant Equipment",
    detail:
      "High-pressure pumps, cartridge / micron filters, RO membrane systems and chemical dosing equipment.",
    points: [
      "High-pressure pumps",
      "Cartridge / micron filters",
      "RO membrane systems",
      "Chemical dosing equipment",
    ],
  },
];

const stages = [
  {
    name: "Intake",
    short: "Raw water",
    icon: Waves,
    desc: "Raw seawater collection and initial screening. Intake conditions influence the loading on downstream pretreatment.",
    checks: ["Intake flow", "Screening condition", "Feed-water observations"],
  },
  {
    name: "Pretreatment",
    short: "Conditioning",
    icon: Workflow,
    desc: "Pretreatment conditions the feed water and helps protect downstream filtration and RO membranes.",
    checks: [
      "Pretreatment operation",
      "Chemical dosing status",
      "Turbidity / SDI where monitored",
    ],
  },
  {
    name: "MMF / Cartridge",
    short: "Filtration",
    icon: Workflow,
    desc: "Media and cartridge filtration remove suspended particles before the high-pressure RO section.",
    checks: [
      "Filter differential pressure",
      "Cartridge filter condition",
      "Upstream / downstream readings",
    ],
  },
  {
    name: "High-pressure pump",
    short: "Pressure",
    icon: Gauge,
    desc: "The high-pressure pump supplies the pressure required by the RO membrane system.",
    checks: [
      "Discharge pressure",
      "Pump status",
      "Flow and abnormal vibration / noise",
    ],
  },
  {
    name: "RO membrane",
    short: "Separation",
    icon: Droplets,
    desc: "The RO membrane separates a permeate stream from the concentrated reject stream. Monitor operating conditions and water quality.",
    checks: [
      "Feed / permeate pressure",
      "Permeate conductivity",
      "Flow and differential pressure",
    ],
  },
  {
    name: "Post-treatment",
    short: "Product water",
    icon: Workflow,
    desc: "Permeate is conditioned and checked against the plant's required product-water quality criteria.",
    checks: [
      "Product-water quality",
      "pH / conductivity",
      "Post-treatment equipment status",
    ],
  },
];

const career = [
  {
    date: "APR 2021 — OCT 2026",
    role: "RO Plant Operator",
    company: "VEOLIA",
    duration: "5 years 7 months",
    bullets: [
      "Operated and monitored SWRO and BWRO systems through SCADA and field inspections.",
      "Operated RO Gen-1, Gen-2, 200C, 35C and MORO systems according to operating procedures.",
      "Monitored RO feed, pressure, flow, conductivity, TDS, pH and other critical process parameters.",
      "Operated and monitored high-pressure pumps, cartridge / micron filters, RO membranes and chemical dosing systems.",
      "Performed routine inspections, supported PM / CM activities and responded to alarms, trips and abnormal conditions.",
      "Maintained shift logbooks, operating records and daily reports in line with HSE and SOP requirements.",
    ],
  },
  {
    date: "NOV 2019 — JUL 2020",
    role: "Instrument Technician",
    company: "SAIPEM",
    duration: "9 months",
    bullets: [
      "Installed and calibrated field instruments, including pressure, temperature and level transmitters.",
      "Managed specialized tools and maintenance documentation while following safety protocols and company standards.",
    ],
  },
];

// Demo values only. Feed pressure of a SWRO membrane train is far higher
// (typically 50-70 bar), so this panel shows the pretreatment section.
const demoMetrics = [
  {
    label: "Pretreatment pressure",
    value: "3.2",
    alarmValue: "4.8",
    unit: "bar",
    status: "Normal",
  },
  { label: "Feed flow", value: "128", unit: "m³/h", status: "Normal" },
  {
    label: "Permeate conductivity",
    value: "310",
    unit: "µS/cm",
    status: "Normal",
  },
  { label: "Tank level", value: "76", unit: "%", status: "Normal" },
];

const trendNormal =
  "M0 77 L45 74 L90 76 L135 68 L180 71 L225 63 L270 66 L315 59 L360 62 L405 54 L450 57 L495 50 L560 52";
const trendAlarm =
  "M0 94 L45 88 L90 84 L135 81 L180 77 L225 72 L270 66 L315 62 L360 49 L405 35 L450 22 L495 14 L560 9";

export default function Home() {
  const [activeSkill, setActiveSkill] = useState<number | null>(null);
  const [activeStage, setActiveStage] = useState(0);
  const [activeProject, setActiveProject] = useState<number | null>(null);
  const [projectFilter, setProjectFilter] = useState("All");
  const [expandedJob, setExpandedJob] = useState(0);
  const [simRunning, setSimRunning] = useState(true);
  const [alarm, setAlarm] = useState(false);
  const [copied, setCopied] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  // Close the mobile menu with Escape and lock page scroll while it is open.
  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    document.addEventListener("keydown", onKey);
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = previous;
    };
  }, [menuOpen]);

  const filteredProjects = useMemo(
    () =>
      projects
        .map((p, i) => ({ ...p, originalIndex: i }))
        .filter(
          (p) => projectFilter === "All" || p.type.includes(projectFilter),
        ),
    [projectFilter],
  );

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      window.location.href = `mailto:${EMAIL}`;
    }
  }

  const stage = stages[activeStage];

  return (
    <main>
      <header className="topbar">
        <a className="brand" href="#home" onClick={() => setMenuOpen(false)}>
          <span className="brand-mark">
            <Droplets size={19} />
          </span>
          <span>
            MOHD. JAHIDUL ISLAM<span className="brand-dot">.</span>
          </span>
        </a>
        <nav className="nav" aria-label="Main navigation">
          {navLinks.map((l) => (
            <a key={l.href} href={l.href}>
              {l.label}
            </a>
          ))}
        </nav>
        <a className="nav-cta" href="#contact">
          Let&apos;s connect <ArrowUpRight size={15} />
        </a>
        <button
          type="button"
          className="mobile-menu"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          aria-controls="mobile-nav"
          onClick={() => setMenuOpen((v) => !v)}
        >
          {menuOpen ? <X /> : <Menu />}
        </button>
        {menuOpen && (
          <nav
            id="mobile-nav"
            className="mobile-nav"
            aria-label="Mobile navigation"
          >
            {navLinks.map((l) => (
              <a key={l.href} href={l.href} onClick={() => setMenuOpen(false)}>
                {l.label}
              </a>
            ))}
          </nav>
        )}
      </header>

      <section className="hero section-wrap" id="home">
        <div className="hero-copy">
          <div className="eyebrow">
            <span className="pulse" /> WATER OPERATIONS PROFESSIONAL
          </div>
          <h1>
            Keeping water
            <br />
            systems <em>running.</em>
          </h1>
          <p className="hero-sub">Mohd. Jahidul Islam</p>
          <p className="hero-role">Level 2 SWRO / Water Plant Operator</p>
          <p className="hero-text">
            5+ years of experience in desalination and water treatment
            operations, combining control-room monitoring with hands-on field
            execution.
          </p>
          <div className="hero-actions">
            <a
              className="btn btn-primary"
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
            >
              Contact me on WhatsApp
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="17"
                height="17"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21" />
                <path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1a5 5 0 0 0 5 5h1a.5.5 0 0 0 0-1h-1a.5.5 0 0 0 0 1" />
              </svg>
            </a>
            <a className="btn btn-outline" href={CV_URL} download>
              Download CV <Download size={16} />
            </a>
          </div>
          <div className="hero-meta">
            <span>
              <MapPin size={15} /> Riyadh, Saudi Arabia
            </span>
            <span>
              <CheckCircle2 size={15} /> Saudi driving licence
            </span>
          </div>
        </div>
        <div className="hero-visual">
          <div className="visual-grid" />
          <div className="orb orb-one" />
          <div className="orb orb-two" />
          <div className="plant-card">
            <div className="plant-card-top">
              <span className="live-dot" /> PROCESS OPERATIONS
            </div>
            <div className="plant-icon">
              <Waves size={58} strokeWidth={1.1} />
            </div>
            <div className="plant-card-title">Water. Quality. Continuity.</div>
            <div className="plant-card-caption">Operational focus</div>
            <div className="plant-stats">
              <div>
                <strong>5+</strong>
                <span>Years experience</span>
              </div>
              <div>
                <strong>SWRO</strong>
                <span>Core process</span>
              </div>
              <div>
                <strong>SCADA</strong>
                <span>Monitoring</span>
              </div>
            </div>
          </div>
          <div className="float-tag tag-a">
            <span className="tag-icon">
              <Gauge size={17} />
            </span>
            <span>
              <b>Process monitoring</b>
              <small>Control room + field</small>
            </span>
          </div>
          <div className="float-tag tag-b">
            <span className="tag-icon green">
              <ShieldCheck size={17} />
            </span>
            <span>
              <b>Safety focused</b>
              <small>HSE · SOP · LOTO</small>
            </span>
          </div>
          <div className="hero-index">
            01 / 06 <span />
          </div>
        </div>
      </section>

      <section className="trust-strip">
        <div className="section-wrap trust-inner">
          <span>EXPERIENCE / PROJECT REFERENCES</span>
          <b>VEOLIA</b>
          <i />
          <b>SAIPEM</b>
          <i />
          <b>NAQUA</b>
          <i />
          <b>AMAALA</b>
          <i />
          <b>NOMAC</b>
        </div>
      </section>

      <section className="section-wrap section" id="about">
        <div className="section-kicker">01 — PROFILE</div>
        <div className="about-grid">
          <div>
            <h2>
              Reliable operations.
              <br />
              <em>Measured results.</em>
            </h2>
          </div>
          <div className="about-content">
            <p className="lead">
              I am a water and desalination plant operator experienced in SWRO,
              BWRO and water treatment plant operations.
            </p>
            <p>
              My work spans SCADA monitoring, field inspections, RO process
              operation, high-pressure pumping systems, chemical dosing,
              water-quality checks and initial troubleshooting. I focus on safe,
              stable and continuous plant operation while following operating
              procedures and site HSE requirements.
            </p>
            <div className="metric-row">
              <div>
                <strong>5+</strong>
                <span>Years in water operations</span>
              </div>
              <div>
                <strong>{projects.length}</strong>
                <span>Listed project references</span>
              </div>
              <div>
                <strong>{career.length}</strong>
                <span>Company experiences</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section expertise-section" id="expertise">
        <div className="section-wrap">
          <div className="section-heading">
            <div>
              <div className="section-kicker">02 — TECHNICAL CAPABILITIES</div>
              <h2>
                Where I bring
                <br />
                <em>hands-on value.</em>
              </h2>
            </div>
            <p>
              Select a capability to explore the areas of work listed in my CV.
            </p>
          </div>
          <div className="skills-grid">
            {skills.map((skill, i) => {
              const Icon = skill.icon;
              const open = activeSkill === i;
              return (
                <article
                  className={`skill-card interactive-card ${open ? "is-open" : ""}`}
                  key={skill.title}
                >
                  <button
                    type="button"
                    className="skill-button"
                    onClick={() => setActiveSkill(open ? null : i)}
                    aria-expanded={open}
                    aria-controls={`skill-detail-${i}`}
                  >
                    <div className="skill-top">
                      <span className="skill-icon">
                        <Icon size={21} />
                      </span>
                      <span className="skill-num">0{i + 1}</span>
                    </div>
                    <h3>{skill.title}</h3>
                    <p>{skill.detail}</p>
                    <span className="expand-label">
                      {open ? "Close details" : "Explore capability"}{" "}
                      <ChevronDown size={14} />
                    </span>
                  </button>
                  {open && (
                    <div className="skill-detail" id={`skill-detail-${i}`}>
                      <b>Areas covered</b>
                      <ul>
                        {skill.points.map((point) => (
                          <li key={point}>{point}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                  <div className="card-line" />
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section-wrap section" id="experience">
        <div className="section-kicker">03 — PROFESSIONAL EXPERIENCE</div>
        <h2>
          Experience built
          <br />
          <em>on the plant floor.</em>
        </h2>
        <div className="timeline">
          {career.map((job, i) => (
            <article className="timeline-item" key={job.company}>
              <div className="timeline-date">{job.date}</div>
              <div className={`timeline-marker ${i ? "muted" : ""}`} />
              <div className="timeline-body">
                <button
                  type="button"
                  className="job-toggle"
                  onClick={() => setExpandedJob(expandedJob === i ? -1 : i)}
                  aria-expanded={expandedJob === i}
                >
                  <div>
                    <h3>{job.role}</h3>
                    <p className="company">{job.company}</p>
                  </div>
                  <span className="job-toggle-right">
                    {job.duration && (
                      <span className="job-tag">{job.duration}</span>
                    )}
                    <ChevronDown
                      className={expandedJob === i ? "rotated" : ""}
                      size={18}
                    />
                  </span>
                </button>
                {expandedJob === i && (
                  <ul>
                    {job.bullets.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                )}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section projects-section" id="projects">
        <div className="section-wrap">
          <div className="section-heading">
            <div>
              <div className="section-kicker">
                04 — SELECTED PROJECT EXPERIENCE
              </div>
              <h2>
                Project exposure
                <br />
                <em>across Saudi Arabia.</em>
              </h2>
            </div>
            <p>
              Choose a project to view the location and the information recorded
              in my CV.
            </p>
          </div>
          <div
            className="project-filters"
            role="group"
            aria-label="Filter projects"
          >
            {projectFilters.map((filter) => (
              <button
                type="button"
                key={filter}
                className={projectFilter === filter ? "filter-active" : ""}
                aria-pressed={projectFilter === filter}
                onClick={() => {
                  setProjectFilter(filter);
                  setActiveProject(null);
                }}
              >
                {filter}
              </button>
            ))}
          </div>
          <div className="project-list">
            {filteredProjects.length === 0 && (
              <p className="project-note">
                No projects in this category. Choose another filter.
              </p>
            )}
            {filteredProjects.map((p) => {
              const selected = activeProject === p.originalIndex;
              return (
                <article
                  className={`project-row ${selected ? "project-selected" : ""}`}
                  key={p.name}
                >
                  <button
                    type="button"
                    className="project-main"
                    onClick={() =>
                      setActiveProject(selected ? null : p.originalIndex)
                    }
                    aria-expanded={selected}
                  >
                    <span className="project-index">
                      0{p.originalIndex + 1}
                    </span>
                    <div className="project-name">
                      <h3>{p.name}</h3>
                      <span>{p.type}</span>
                    </div>
                    <div className="project-location">
                      <MapPin size={14} />
                      {p.location}
                    </div>
                    <div className="project-capacity">
                      <span>CAPACITY / TYPE</span>
                      <b>{p.capacity}</b>
                    </div>
                    <ChevronRight className="project-arrow" size={18} />
                  </button>
                  {selected && (
                    <div className="project-detail">
                      <b>Project reference</b>
                      <p>{p.details}</p>
                    </div>
                  )}
                </article>
              );
            })}
          </div>
          <p className="project-note">
            Project names, locations and capacities / types are reproduced from
            the supplied CV. Individual project responsibilities are not
            assigned where the CV does not specify them.
          </p>
        </div>
      </section>

      <section className="section process-section" id="process">
        <div className="section-wrap">
          <div className="section-heading">
            <div>
              <div className="section-kicker">05 — TECHNICAL WALKTHROUGH</div>
              <h2>
                Explore the
                <br />
                <em>RO process flow.</em>
              </h2>
            </div>
            <p>
              An educational overview of a typical SWRO process sequence. Select
              a stage to see its purpose and operating checks.
            </p>
          </div>
          <div className="process-panel">
            <div
              className="process-flow"
              role="group"
              aria-label="RO process stages"
            >
              {stages.map((s, i) => {
                const StageIcon = s.icon;
                return (
                  <div className="process-node-wrap" key={s.name}>
                    <button
                      type="button"
                      className={`process-node ${activeStage === i ? "node-active" : ""}`}
                      onClick={() => setActiveStage(i)}
                      aria-pressed={activeStage === i}
                    >
                      <span className="node-number">0{i + 1}</span>
                      <span className="node-symbol">
                        <StageIcon />
                      </span>
                      <b>{s.name}</b>
                      <small>{s.short}</small>
                    </button>
                    {i !== stages.length - 1 && (
                      <span className="process-connector" aria-hidden="true">
                        →
                      </span>
                    )}
                  </div>
                );
              })}
            </div>
            <div className="stage-detail" aria-live="polite">
              <div>
                <span className="stage-label">
                  SELECTED STAGE / 0{activeStage + 1}
                </span>
                <h3>{stage.name}</h3>
                <p>{stage.desc}</p>
              </div>
              <div className="stage-checks">
                <b>Example checks</b>
                {stage.checks.map((check) => (
                  <span key={check}>
                    <CheckCircle2 size={14} />
                    {check}
                  </span>
                ))}
              </div>
            </div>
            <p className="simulation-note">
              Training illustration only. Actual process configuration,
              parameters, limits and operating actions must follow the specific
              plant design, approved SOPs and supervisor instructions.
            </p>
          </div>
        </div>
      </section>

      <section className="section scada-section" id="scada">
        <div className="section-wrap">
          <div className="section-heading">
            <div>
              <div className="section-kicker">06 — INTERACTIVE DEMO</div>
              <h2>
                SCADA-style
                <br />
                <em>monitoring simulator.</em>
              </h2>
            </div>
            <p>
              Explore a non-operational interface concept showing how key
              water-process values and alarm states may be presented.
            </p>
          </div>
          <div className="scada-shell">
            <div className="scada-top">
              <div>
                <span className="live-dot" />
                <b>WATER PLANT / DEMO HMI</b>
                <small>SIMULATED DATA — NOT CONNECTED TO A PLANT</small>
              </div>
              <span
                className={`system-state ${simRunning ? "state-on" : "state-off"}`}
              >
                {simRunning ? "DEMO RUNNING" : "DEMO PAUSED"}
              </span>
            </div>
            <div className="scada-toolbar">
              <span>
                <Activity size={15} /> PROCESS OVERVIEW
              </span>
              <div>
                <button
                  type="button"
                  onClick={() => {
                    setSimRunning(!simRunning);
                    setAlarm(false);
                  }}
                >
                  <Power size={14} />
                  {simRunning ? "Pause demo" : "Resume demo"}
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setSimRunning(true);
                    setAlarm(false);
                  }}
                >
                  <RotateCcw size={14} /> Reset
                </button>
              </div>
            </div>
            <div className="scada-metrics">
              {demoMetrics.map((m) => {
                const inAlarm = alarm && !!m.alarmValue;
                return (
                  <div className="scada-metric" key={m.label}>
                    <span>{m.label}</span>
                    <strong>
                      {simRunning ? (inAlarm ? m.alarmValue : m.value) : "—"}
                      <small>{m.unit}</small>
                    </strong>
                    <em className={inAlarm ? "metric-warning" : ""}>
                      {inAlarm
                        ? "High (simulated)"
                        : simRunning
                          ? m.status
                          : "Paused"}
                    </em>
                  </div>
                );
              })}
            </div>
            <div className="scada-lower">
              <div className="scada-trend">
                <div className="scada-panel-title">
                  PRETREATMENT PRESSURE TREND <span>ILLUSTRATIVE</span>
                </div>
                <div className="trend-chart">
                  <div className="trend-y">
                    <span>5.0</span>
                    <span>4.0</span>
                    <span>3.0</span>
                    <span>2.0</span>
                  </div>
                  <svg
                    viewBox="0 0 560 130"
                    role="img"
                    aria-label="Illustrative pretreatment pressure trend line"
                  >
                    <path
                      d="M0 24 H560 M0 58 H560 M0 92 H560 M0 126 H560"
                      stroke="#28414d"
                      strokeDasharray="3 5"
                      fill="none"
                    />
                    <path
                      d={`${alarm ? trendAlarm : trendNormal} L560 130 L0 130 Z`}
                      fill={
                        alarm ? "rgba(255,179,107,.08)" : "rgba(91,212,208,.08)"
                      }
                    />
                    <path
                      d={alarm ? trendAlarm : trendNormal}
                      fill="none"
                      stroke={alarm ? "#ffb36b" : "#5bd4d0"}
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <div className="trend-x">
                  <span>00:00</span>
                  <span>00:15</span>
                  <span>00:30</span>
                  <span>00:45</span>
                  <span>01:00</span>
                </div>
              </div>
              <div className="scada-alarm">
                <div className="scada-panel-title">ALARM SIMULATION</div>
                <div
                  className={`alarm-box ${alarm ? "alarm-active" : ""}`}
                  role="status"
                >
                  <CircleAlert size={21} />
                  <div>
                    <b>
                      {alarm
                        ? "High pretreatment pressure"
                        : "No active demo alarms"}
                    </b>
                    <span>
                      {alarm
                        ? "Example alarm state — not a real plant event."
                        : "The demo is currently in a normal illustrative state."}
                    </span>
                  </div>
                </div>
                <button
                  type="button"
                  className="alarm-trigger"
                  onClick={() => {
                    setAlarm(!alarm);
                    setSimRunning(true);
                  }}
                >
                  {alarm ? "Clear simulated alarm" : "Trigger sample alarm"}
                </button>
              </div>
            </div>
            <div className="scada-foot">
              <span>
                <i className="legend-green" /> Normal state
              </span>
              <span>
                <i className="legend-amber" /> Simulated alarm
              </span>
              <span>All values are fictional demonstration values.</span>
            </div>
          </div>
        </div>
      </section>

      <section className="section-wrap section credentials" id="credentials">
        <div className="section-kicker">07 — CREDENTIALS</div>
        <h2>
          Ready for the next
          <br />
          <em>operational challenge.</em>
        </h2>
        <div className="credential-grid">
          <div className="credential">
            <Award />
            <div>
              <b>SCADA Certificate</b>
              <span>Certificate listed in CV</span>
            </div>
          </div>
          <div className="credential">
            <ShieldCheck />
            <div>
              <b>Saudi Driving Licence</b>
              <span>Valid until 22 April 2033</span>
            </div>
          </div>
          <div className="credential">
            <ClipboardList />
            <div>
              <b>Education</b>
              <span>Honors, 2017 · Brahmanbaria Government College</span>
            </div>
          </div>
          <div className="credential">
            <Workflow />
            <div>
              <b>Computer & Reporting</b>
              <span>MS Excel, Word, PowerPoint and reporting</span>
            </div>
          </div>
        </div>
        <p className="language-line">
          <b>Languages</b>
          <span>Bangla — Native</span>
          <span>Hindi — Fluent</span>
          <span>English — Intermediate</span>
          <span>Arabic — Intermediate</span>
        </p>
      </section>

      <section className="contact-section" id="contact">
        <div className="section-wrap contact-inner">
          <div>
            <div className="section-kicker">08 — CONTACT</div>
            <h2>
              Let&apos;s keep
              <br />
              <em>water moving.</em>
            </h2>
            <p>
              Open to opportunities in SWRO, BWRO and water treatment plant
              operations in Saudi Arabia.
            </p>
          </div>
          <div className="contact-card">
            <div className="contact-item">
              <span>
                <Mail size={17} />
              </span>
              <div>
                <small>EMAIL</small>
                <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
              </div>
              <button
                type="button"
                className="copy-btn"
                onClick={copyEmail}
                aria-label="Copy email address"
              >
                {copied ? <Check size={16} /> : <Copy size={16} />}
              </button>
            </div>

            <div className="contact-item">
              <span>
                <MapPin size={17} />
              </span>
              <div>
                <small>LOCATION</small>
                <b>Riyadh, Saudi Arabia</b>
              </div>
            </div>
            <a
              className="btn btn-primary contact-btn "
              href={`mailto:${EMAIL}?subject=Water%20Plant%20Operator%20Opportunity`}
            >
              Discuss an opportunity <ArrowUpRight size={17} />
            </a>
            <p className="copy-feedback" aria-live="polite">
              {copied ? "Email address copied." : " "}
            </p>
          </div>
        </div>
      </section>

      <footer className="footer">
        <a className="brand" href="#home">
          <span className="brand-mark">
            <Droplets size={18} />
          </span>
          <span>
            JAHIDUL<span className="brand-dot">.</span>
          </span>
        </a>
        <span>
          © {new Date().getFullYear()} Mohd. Jahidul Islam. Professional
          portfolio.
        </span>
        <a href="#home">Back to top ↑</a>
      </footer>
    </main>
  );
}
