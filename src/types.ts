import type { LucideIcon } from "lucide-react";

export type FocusMode = "qa" | "dev";

export type ProjectCategory =
  | "QA Automation"
  | "Software Development"
  | "Workflow Automation"
  | "IoT";

export type CapabilityGroup = {
  title: string;
  description: string;
  focus: FocusMode | "both";
  practices: string[];
  tools: string[];
};

export type Stat = {
  label: string;
  value: number;
  suffix?: string;
};

export type Project = {
  title: string;
  category: ProjectCategory;
  summary: string;
  problem: string;
  approach: string;
  impact: string;
  technologies: string[];
  repositoryUrl: string;
  demoUrl?: string;
  screenshot?: string;
  focus: FocusMode | "both";
};

export type Experience = {
  role: string;
  company: string;
  period: string;
  summary: string;
  highlights: string[];
};

export type Certification = {
  name: string;
  issuer: string;
  year: string;
  credentialUrl?: string;
};

export type CommandItem = {
  label: string;
  description: string;
  target: string;
  icon: LucideIcon;
};
