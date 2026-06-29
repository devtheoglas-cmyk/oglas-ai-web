import { Activity, CheckCircle2, Cpu, ScanLine } from "lucide-react";
import type { LucideIcon } from "lucide-react";

const workflow = [
  "Lead intake",
  "Approval",
  "Payroll sync",
  "Vision alert",
  "Executive report",
];

export function InterfaceVisual() {
  return (
    <div className="relative rounded-lg border border-white/12 bg-[linear-gradient(145deg,#0a0d0d,#111918_55%,#1b1710)] p-4 shadow-2xl shadow-black/30">
      <div className="grid gap-4 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="rounded-md border border-white/10 bg-white/[0.04] p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs uppercase text-white/45">Operations Command</p>
              <h3 className="mt-2 text-xl font-semibold text-white">Live workflow health</h3>
            </div>
            <span className="rounded-md border border-cyan/30 bg-cyan/10 px-3 py-2 text-xs font-semibold text-cyan">
              AI Assisted
            </span>
          </div>

          <div className="mt-8 grid gap-3">
            {workflow.map((item, index) => (
              <div
                key={item}
                className="grid grid-cols-[32px_1fr_64px] items-center gap-3 rounded-md border border-white/8 bg-white/[0.035] p-3"
              >
                <span className="grid h-8 w-8 place-items-center rounded-md bg-champagne/15 text-xs font-semibold text-champagne">
                  {index + 1}
                </span>
                <span className="text-sm font-medium text-white/82">{item}</span>
                <span className="text-right text-xs text-emerald-light">Active</span>
              </div>
            ))}
          </div>
        </div>

        <div className="grid gap-4">
          <div className="rounded-md border border-white/10 bg-white/[0.04] p-4">
            <div className="flex items-center gap-3">
              <ScanLine className="h-5 w-5 text-cyan" />
              <span className="text-sm font-semibold text-white">Vision monitor</span>
            </div>
            <div className="mt-5 grid h-36 grid-cols-3 gap-2">
              {Array.from({ length: 9 }).map((_, index) => (
                <span
                  key={index}
                  className="rounded-md border border-white/8 bg-[linear-gradient(135deg,rgba(255,255,255,0.12),rgba(96,230,255,0.05))]"
                />
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <Metric icon={Cpu} label="Automations" value="42" />
            <Metric icon={Activity} label="Reports" value="18" />
          </div>

          <div className="rounded-md border border-emerald-light/20 bg-emerald/20 p-4">
            <div className="flex items-center gap-3">
              <CheckCircle2 className="h-5 w-5 text-emerald-light" />
              <p className="text-sm font-medium text-white/85">
                Exception routed to operations lead
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Metric({
  icon: Icon,
  label,
  value,
}: {
  icon: LucideIcon;
  label: string;
  value: string;
}) {
  return (
    <div className="rounded-md border border-white/10 bg-white/[0.04] p-4">
      <Icon className="h-5 w-5 text-champagne" />
      <p className="mt-5 text-3xl font-semibold text-white">{value}</p>
      <p className="mt-1 text-xs text-white/50">{label}</p>
    </div>
  );
}
