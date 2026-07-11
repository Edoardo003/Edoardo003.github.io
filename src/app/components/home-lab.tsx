import { Section } from "./section";
import { MermaidDiagram } from "./mermaid-diagram";

const diagram = `flowchart LR
    Internet((Internet))
    Router["ISP Router / AP"]
    FW["OPNsense"]
    SW["Managed Switch"]

    Internet --> Router --> FW --> SW

    SW -->|VLAN 10| PC["Main Workstation"]
    SW -->|802.1Q Trunk| PX["Proxmox VE"]

    subgraph LAB["VLAN 30 - Lab"]
        PiHole["Pi-hole"]
        Docker["Docker / LXC"]
        Ubuntu["Ubuntu Server"]
        Planned["Planned:<br/>• Wazuh<br/>• Grafana + Prometheus<br/>• Active Directory"]
    end

    subgraph MAL["VLAN 99 - Malware Analysis"]
        Sandbox["Sandbox VMs"]
        REMnux["REMnux"]
        FLARE["FLARE VM"]
    end

    PX --> LAB
    PX --> MAL

    PX -.-> PBS["Planned:<br/>Proxmox Backup Server"]

    classDef default fill:#fff,stroke:#000,color:#000;`;

const groups: { label: string; items: string[] }[] = [
  {
    label: "Infrastructure",
    items: [
      "Proxmox virtualization platform",
      "OPNsense perimeter firewall",
      "Managed switch with VLAN segmentation",
      "Dedicated management and lab networks",
      "Pi-hole with Unbound recursive DNS",
      "Internal DNS and network services",
      "Isolated testing environment",
    ],
  },
  {
    label: "Networking",
    items: [
      "VLAN design and segmentation",
      "Inter-VLAN routing",
      "Firewall policy design",
      "Stateful firewall rules",
      "NAT configuration",
      "Secure management network",
      "DNS filtering and recursive resolution",
    ],
  },
  {
    label: "Security",
    items: [
      "Least privilege firewall policies",
      "Network isolation between lab environments",
      "Custom ingress and egress filtering",
      "Controlled access between VLANs",
      "Secure DNS via Unbound",
      "Hardened virtual infrastructure",
    ],
  },
];

export function HomeLab() {
  return (
    <Section id="homelab" label="Home Lab">
      <h3 className="tracking-tight" style={{ fontSize: "1.25rem", fontWeight: 700 }}>
        Segmented Proxmox Security Lab
      </h3>
      <p className="mt-3 max-w-2xl text-neutral-700" style={{ lineHeight: 1.7 }}>
        A personal virtualized environment designed to practice penetration
        testing, network segmentation, Active Directory, firewall management
        and defensive network architecture.
      </p>

      <div className="mt-8 grid grid-cols-1 gap-x-12 gap-y-8 sm:grid-cols-3">
        {groups.map((group) => (
          <div key={group.label}>
            <p className="mb-3 border-b border-black/10 pb-1.5 uppercase tracking-widest text-neutral-500" style={{ fontSize: "0.68rem", fontWeight: 600 }}>
              {group.label}
            </p>
            <ul className="space-y-2">
              {group.items.map((item) => (
                <li key={item} className="flex items-baseline gap-2 text-neutral-800" style={{ lineHeight: 1.5 }}>
                  <span className="shrink-0 text-neutral-300" style={{ fontSize: "0.6rem" }}>▸</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="mt-10">
        <p className="mb-3 uppercase tracking-widest text-neutral-500" style={{ fontSize: "0.68rem", fontWeight: 600 }}>
          Network Architecture
        </p>
        <div className="border border-black/15 p-4">
          <MermaidDiagram chart={diagram} />
        </div>
      </div>
    </Section>
  );
}
