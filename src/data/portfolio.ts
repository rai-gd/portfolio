import {
  Bot,
  Braces,
  BriefcaseBusiness,
  Github,
  Linkedin,
  Mail,
  ShieldCheck,
  TerminalSquare,
  Workflow,
} from "lucide-react";
import type {
  Certification,
  CommandItem,
  Experience,
  Project,
  ProjectCategory,
  CapabilityGroup,
  Stat,
} from "@/types";

export const owner = {
  name: "YOUR FULL NAME",
  title: "QA Engineer | Test Automation | Developer Tooling",
  location: "YOUR LOCATION",
  email: "your.email@example.com",
  resumeUrl: "https://example.com/resume.pdf",
  githubUrl: "https://github.com/your-github-username",
  linkedinUrl: "https://linkedin.com/in/your-linkedin",
  heroSubtitles: {
    qa: "QA Engineer building automation-first test systems, API validation layers, and release confidence for fast-moving engineering teams.",
    dev: "QA Engineer with strong development depth, shipping internal tools, workflow automation, and maintainable software that improves engineering throughput.",
  },
  bio: "PLACEHOLDER BIO: Write a concise paragraph describing your QA engineering background, the domains you have tested, the automation systems you have built, and how you collaborate with developers to improve product quality.",
};

export const focusCopy = {
  qa: {
    label: "QA Focus",
    eyebrow: "Automation-first quality engineering",
    gradient: "from-cyan-300 via-teal-300 to-emerald-300",
    accent: "hsl(174 82% 52%)",
  },
  dev: {
    label: "Developer Focus",
    eyebrow: "Tooling, systems, and automation",
    gradient: "from-violet-300 via-fuchsia-300 to-cyan-300",
    accent: "hsl(268 84% 67%)",
  },
} as const;

export const stats: Stat[] = [
  { label: "Automation suites maintained", value: 12, suffix: "+" },
  { label: "API scenarios covered", value: 450, suffix: "+" },
  { label: "Release checks accelerated", value: 68, suffix: "%" },
  { label: "CI workflows improved", value: 20, suffix: "+" },
];

export const capabilityGroups: CapabilityGroup[] = [
  {
    title: "Quality Engineering",
    description: "Risk-based validation across UI, API, integration, and release-critical workflows.",
    focus: "qa",
    practices: [
      "Test strategy and coverage design",
      "Regression suite architecture",
      "Defect isolation and triage",
      "Exploratory testing with automation follow-through",
    ],
    tools: ["Playwright", "Cypress", "Postman", "Allure", "Jira", "TestRail"],
  },
  {
    title: "API and Service Validation",
    description: "Service-level checks that make backend behavior observable, repeatable, and release-ready.",
    focus: "qa",
    practices: [
      "Contract and schema validation",
      "Auth, permissions, and negative-path coverage",
      "Typed API clients and reusable fixtures",
      "Environment health checks",
    ],
    tools: ["REST APIs", "GraphQL", "OpenAPI", "JSON Schema", "Node.js", "SQL"],
  },
  {
    title: "Delivery and CI/CD",
    description: "Fast feedback systems that connect automated checks to practical release decisions.",
    focus: "both",
    practices: [
      "Pipeline smoke checks",
      "Release readiness signals",
      "Test reporting and failure diagnostics",
      "Branch and pull request quality workflows",
    ],
    tools: ["GitHub Actions", "Docker", "Linux", "Bash", "npm", "Vite"],
  },
  {
    title: "Software Development",
    description: "Maintainable internal tools, utilities, dashboards, and automation services.",
    focus: "dev",
    practices: [
      "Type-safe application code",
      "Reusable component architecture",
      "CLI and script development",
      "Data modeling and validation",
    ],
    tools: ["TypeScript", "JavaScript", "React", "Node.js", "Zod", "PostgreSQL"],
  },
  {
    title: "Workflow Automation",
    description: "Automation that reduces manual coordination and keeps engineering teams moving.",
    focus: "dev",
    practices: [
      "Operational scripting",
      "Repository and issue tracker integrations",
      "Release note and checklist generation",
      "Notification and reporting workflows",
    ],
    tools: ["GitHub API", "Slack Webhooks", "Markdown", "REST APIs", "PowerShell", "Python"],
  },
  {
    title: "IoT and Observability",
    description: "Validation and monitoring practices for telemetry, embedded flows, and device behavior.",
    focus: "both",
    practices: [
      "Telemetry-driven validation",
      "Structured logs and evidence capture",
      "Firmware regression checks",
      "Dashboard-backed investigation",
    ],
    tools: ["MQTT", "Serial", "Raspberry Pi", "Grafana", "Python", "Linux"],
  },
];

export const experiences: Experience[] = [
  {
    role: "PLACEHOLDER ROLE: QA Engineer",
    company: "PLACEHOLDER COMPANY",
    period: "2024 - Present",
    summary:
      "Own quality strategy for web, API, and automation workflows across active product releases.",
    highlights: [
      "Built automated regression coverage for critical API and UI flows.",
      "Improved release readiness signals through CI-integrated smoke checks.",
      "Partnered with developers to isolate defects earlier in the delivery cycle.",
    ],
  },
  {
    role: "PLACEHOLDER ROLE: Automation Engineer",
    company: "PLACEHOLDER COMPANY",
    period: "2022 - 2024",
    summary:
      "Developed test tooling, reporting utilities, and repeatable workflows for engineering teams.",
    highlights: [
      "Reduced manual verification effort through reusable automation libraries.",
      "Created technical documentation for test strategy and environment setup.",
      "Added API-level checks for high-risk service boundaries.",
    ],
  },
  {
    role: "PLACEHOLDER ROLE: Software Developer / QA Analyst",
    company: "PLACEHOLDER COMPANY",
    period: "2020 - 2022",
    summary:
      "Combined hands-on testing with application development and operational automation.",
    highlights: [
      "Shipped internal scripts for reporting and recurring operational tasks.",
      "Validated embedded, web, and backend workflows across changing requirements.",
      "Translated defect patterns into targeted regression coverage.",
    ],
  },
];

export const projectCategories: ProjectCategory[] = [
  "QA Automation",
  "Software Development",
  "Workflow Automation",
  "IoT",
];

export const projects: Project[] = [
  {
    title: "PLACEHOLDER: API Regression Quality Gate",
    category: "QA Automation",
    focus: "qa",
    summary: "CI-integrated API suite for validating release-critical service behavior.",
    problem:
      "Manual API verification created slow release checks and inconsistent coverage across authentication, error states, and data edge cases.",
    approach:
      "Designed a layered test suite with typed clients, reusable fixtures, environment health checks, and reporting aligned to release risk.",
    impact: "Cut release verification time by 60% and improved defect localization before staging sign-off.",
    technologies: ["TypeScript", "Playwright API", "GitHub Actions", "REST", "Allure"],
    repositoryUrl: "https://github.com/your-github-username/api-quality-gate",
  },
  {
    title: "PLACEHOLDER: Test Data Orchestrator",
    category: "Software Development",
    focus: "dev",
    summary: "Internal utility for creating deterministic data sets for automated tests.",
    problem:
      "Unstable test data caused flaky automation runs and forced repeated manual database preparation.",
    approach:
      "Built a typed CLI and lightweight service adapters that seed, tag, and clean test data across environments.",
    impact: "Reduced flaky setup failures and made test scenarios easier to reproduce locally.",
    technologies: ["Node.js", "TypeScript", "PostgreSQL", "Docker", "Zod"],
    repositoryUrl: "https://github.com/your-github-username/test-data-orchestrator",
  },
  {
    title: "PLACEHOLDER: Release Workflow Automator",
    category: "Workflow Automation",
    focus: "both",
    summary: "Automation layer that consolidates release checks, notes, and deployment readiness.",
    problem:
      "Release coordination depended on scattered manual checks across tickets, CI status, and smoke-test results.",
    approach:
      "Connected repository signals, checklist status, and test reports into a single command-driven workflow.",
    impact: "Improved release handoff consistency and reduced coordination overhead for QA and developers.",
    technologies: ["GitHub Actions", "Node.js", "Markdown", "REST APIs", "Slack Webhooks"],
    repositoryUrl: "https://github.com/your-github-username/release-workflow-automator",
  },
  {
    title: "PLACEHOLDER: IoT Device Validation Harness",
    category: "IoT",
    focus: "qa",
    summary: "Repeatable validation harness for device telemetry and firmware-level behavior.",
    problem:
      "Device validation required manual observation and produced inconsistent evidence across firmware revisions.",
    approach:
      "Captured telemetry, command responses, and scenario outcomes through scripted validation routines and structured logs.",
    impact: "Created repeatable evidence for firmware changes and accelerated regression analysis.",
    technologies: ["Python", "MQTT", "Serial", "Raspberry Pi", "Grafana"],
    repositoryUrl: "https://github.com/your-github-username/iot-validation-harness",
  },
];

export const certifications: Certification[] = [
  {
    name: "PLACEHOLDER CERTIFICATION: ISTQB Foundation Level",
    issuer: "PLACEHOLDER ISSUER",
    year: "2026",
  },
  {
    name: "PLACEHOLDER CERTIFICATION: API Testing / Automation",
    issuer: "PLACEHOLDER ISSUER",
    year: "2025",
  },
  {
    name: "PLACEHOLDER CERTIFICATION: Cloud or CI/CD Fundamentals",
    issuer: "PLACEHOLDER ISSUER",
    year: "2024",
  },
];

export const socialLinks = [
  { label: "GitHub", href: owner.githubUrl, icon: Github },
  { label: "LinkedIn", href: owner.linkedinUrl, icon: Linkedin },
  { label: "Email", href: `mailto:${owner.email}`, icon: Mail },
];

export const commandItems: CommandItem[] = [
  { label: "Hero", description: "Return to the opening summary", target: "hero", icon: TerminalSquare },
  { label: "Capabilities", description: "Review engineering stack and technical groupings", target: "skills", icon: ShieldCheck },
  { label: "Experience", description: "Inspect engineering history", target: "experience", icon: BriefcaseBusiness },
  { label: "Projects", description: "Open engineering case studies", target: "projects", icon: Workflow },
  { label: "Contact", description: "Find links and contact details", target: "contact", icon: Bot },
  { label: "Source", description: "Open GitHub profile", target: owner.githubUrl, icon: Braces },
];
