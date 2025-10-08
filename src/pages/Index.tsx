import { Cloud, Database, Shield } from "lucide-react";
import ClusterCard from "@/components/ClusterCard";

const Index = () => {
  const clusters = [
    {
      clusterName: "pcc-37-59-190-20.ovh.com",
      location: "DRAAS ROUBAIX",
      esxiHosts: ["172.17.244.50", "172.17.244.51", "172.17.244.52"],
      clients: [
        { name: "ECF_CER_CA", service: "DRAAS", status: "en prod" },
        { name: "PICOT", service: "DRAAS", status: "en prod" },
        { name: "GEA", service: "DRAAS", status: "en prod" },
      ],
    },
    {
      clusterName: "pcc-51-210-115-181.ovh.com",
      location: "IAAS ROUBAIX",
      esxiHosts: ["172.17.88.50", "172.17.88.51", "172.17.88.54", "172.17.88.55"],
      clients: [
        { name: "FD2R", service: "IAAS", status: "en prod" },
        { name: "OLANO", service: "IAAS", status: "en B2R" },
        { name: "SMENO", service: "IAAS", status: "en B2R" },
      ],
    },
    {
      clusterName: "pcc-51-68-8-120.ovh.com",
      location: "DRAAS/IAAS Strasbourg",
      esxiHosts: ["172.22.142.54", "172.22.142.55"],
      clients: [
        { name: "NACRE SI", service: "DRAAS", status: "Build" },
        { name: "Louis PION", service: "IAAS", status: "en prod" },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <header className="relative overflow-hidden border-b border-border">
        <div className="absolute inset-0 bg-[var(--gradient-primary)] opacity-10" />
        <div className="container mx-auto px-4 py-16 relative">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/30 rounded-full px-4 py-2 mb-6">
              <Cloud className="w-4 h-4 text-primary animate-float" />
              <span className="text-sm font-medium text-primary">OVH Infrastructure Dashboard</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
              Cloud Infrastructure
              <span className="block text-transparent bg-clip-text bg-[var(--gradient-primary)]">
                Management Overview
              </span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Real-time visualization of OVH cluster deployments across multiple data centers,
              managing DRAAS and IAAS services for enterprise clients.
            </p>
          </div>
        </div>
      </header>

      {/* Stats Section */}
      <section className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <div className="bg-card border border-border rounded-xl p-6 hover:border-primary/50 transition-all duration-300 animate-fade-in">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center">
                <Database className="w-6 h-6 text-primary" />
              </div>
              <div>
                <div className="text-3xl font-bold text-foreground">3</div>
                <div className="text-sm text-muted-foreground">Active Clusters</div>
              </div>
            </div>
          </div>

          <div className="bg-card border border-border rounded-xl p-6 hover:border-accent/50 transition-all duration-300 animate-fade-in [animation-delay:100ms]">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-lg bg-accent/20 flex items-center justify-center">
                <Shield className="w-6 h-6 text-accent" />
              </div>
              <div>
                <div className="text-3xl font-bold text-foreground">8</div>
                <div className="text-sm text-muted-foreground">Client Services</div>
              </div>
            </div>
          </div>

          <div className="bg-card border border-border rounded-xl p-6 hover:border-[hsl(var(--status-prod))]/50 transition-all duration-300 animate-fade-in [animation-delay:200ms]">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-lg bg-[hsl(var(--status-prod))]/20 flex items-center justify-center">
                <Cloud className="w-6 h-6 text-[hsl(var(--status-prod))]" />
              </div>
              <div>
                <div className="text-3xl font-bold text-foreground">9</div>
                <div className="text-sm text-muted-foreground">ESXI Hosts</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Clusters Section */}
      <section className="container mx-auto px-4 py-12 pb-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-3">Cluster Deployments</h2>
          <p className="text-muted-foreground">
            Infrastructure distributed across Roubaix and Strasbourg data centers
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {clusters.map((cluster, idx) => (
            <ClusterCard
              key={idx}
              clusterName={cluster.clusterName}
              location={cluster.location}
              esxiHosts={cluster.esxiHosts}
              clients={cluster.clients}
            />
          ))}
        </div>
      </section>

      {/* Legend Section */}
      <section className="container mx-auto px-4 pb-16">
        <div className="max-w-4xl mx-auto bg-card border border-border rounded-xl p-6">
          <h3 className="text-lg font-semibold text-foreground mb-4">Status Legend</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 rounded-full bg-[hsl(var(--status-prod))]" />
              <div>
                <div className="text-sm font-medium text-foreground">Production</div>
                <div className="text-xs text-muted-foreground">Live and operational</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 rounded-full bg-[hsl(var(--status-build))]" />
              <div>
                <div className="text-sm font-medium text-foreground">Build</div>
                <div className="text-xs text-muted-foreground">Under construction</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 rounded-full bg-[hsl(var(--status-b2r))]" />
              <div>
                <div className="text-sm font-medium text-foreground">B2R</div>
                <div className="text-xs text-muted-foreground">Build To Run</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
