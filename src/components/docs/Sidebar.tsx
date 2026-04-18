import { useState } from "react";
import { Search, ChevronRight, Leaf, Moon, ChevronDown, BookOpen, Compass, Lightbulb, Code2, GitBranch, FileClock } from "lucide-react";

type NavItem = { label: string; href: string; active?: boolean };
type NavSection = { title: string; icon: React.ComponentType<{ className?: string }>; items: NavItem[]; defaultOpen?: boolean };

const sections: NavSection[] = [
  {
    title: "Getting Started",
    icon: BookOpen,
    defaultOpen: true,
    items: [
      { label: "Introduction", href: "#", active: true },
      { label: "Installation", href: "#" },
      { label: "Quick Start", href: "#" },
      { label: "Project Structure", href: "#" },
    ],
  },
  {
    title: "Core Concepts",
    icon: Compass,
    defaultOpen: true,
    items: [
      { label: "Architecture", href: "#" },
      { label: "Data Model", href: "#" },
      { label: "Lifecycle", href: "#" },
    ],
  },
  {
    title: "Guides",
    icon: Lightbulb,
    defaultOpen: true,
    items: [
      { label: "Authentication", href: "#" },
      { label: "Deployment", href: "#" },
      { label: "Performance", href: "#" },
    ],
  },
  { title: "API Reference", icon: Code2, items: [{ label: "REST", href: "#" }, { label: "GraphQL", href: "#" }] },
  { title: "Flowcharts & Diagrams", icon: GitBranch, items: [{ label: "Request Flow", href: "#" }] },
  { title: "Changelog", icon: FileClock, items: [{ label: "v2.1.0", href: "#" }] },
];

function Section({ section }: { section: NavSection }) {
  const [open, setOpen] = useState(section.defaultOpen ?? false);
  const Icon = section.icon;

  return (
    <div className="mb-1">
      <button
        onClick={() => setOpen(!open)}
        className="group flex w-full items-center gap-2 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.08em] text-muted-foreground hover:text-forest transition-colors"
      >
        <Icon className="h-3 w-3 opacity-60" />
        <span className="flex-1 text-left">{section.title}</span>
        <ChevronDown className={`h-3 w-3 transition-transform duration-200 ${open ? "" : "-rotate-90"}`} />
      </button>
      {open && (
        <ul className="relative ml-4 mt-1 border-l border-sage">
          {section.items.map((item) => (
            <li key={item.label} className="relative">
              <a
                href={item.href}
                className={`relative -ml-px flex items-center px-4 py-2 text-sm transition-all duration-150 ${
                  item.active
                    ? "border-l-2 border-primary bg-sage-soft/60 font-medium text-forest"
                    : "border-l-2 border-transparent text-foreground hover:bg-sage-soft/50 hover:text-forest"
                }`}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export function DocsSidebar() {
  return (
    <aside className="fixed left-0 top-0 hidden h-screen w-[260px] flex-col border-r border-sage bg-paper lg:flex">
      {/* Logo */}
      <div className="flex items-center gap-2 px-6 py-5 border-b border-sage">
        <div className="flex h-8 w-8 items-center justify-center rounded-md bg-primary/10">
          <Leaf className="h-4 w-4 text-primary" strokeWidth={2.2} />
        </div>
        <div className="flex-1">
          <div className="text-sm font-semibold tracking-tight text-foreground">Verdant</div>
        </div>
        <button className="flex items-center gap-1 rounded-md border border-sage bg-background px-2 py-1 text-[11px] font-medium text-muted-foreground hover:border-sage-medium transition-colors">
          v2.1.0
          <ChevronDown className="h-3 w-3" />
        </button>
      </div>

      {/* Search */}
      <div className="px-4 pt-4 pb-2">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-muted-foreground" />
          <input
            type="search"
            placeholder="Search docs..."
            className="w-full rounded-lg border border-sage bg-background py-2 pl-9 pr-12 text-sm text-foreground placeholder:text-muted-foreground focus:border-sage-medium focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
          />
          <kbd className="absolute right-2 top-1/2 -translate-y-1/2 rounded border border-sage bg-paper px-1.5 py-0.5 text-[10px] font-medium text-muted-foreground">⌘K</kbd>
        </div>
      </div>

      {/* Nav */}
      <nav className="flex-1 overflow-y-auto px-2 py-4">
        {sections.map((s) => <Section key={s.title} section={s} />)}
      </nav>

      {/* Footer */}
      <div className="border-t border-sage px-4 py-3 flex items-center justify-between">
        <span className="text-[11px] text-muted-foreground">© Verdant Docs</span>
        <button className="flex h-7 w-7 items-center justify-center rounded-md text-muted-foreground hover:bg-sage-soft hover:text-forest transition-colors">
          <Moon className="h-3.5 w-3.5" />
        </button>
      </div>
    </aside>
  );
}
