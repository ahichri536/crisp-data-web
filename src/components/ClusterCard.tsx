import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Server, HardDrive } from "lucide-react";

interface Client {
  name: string;
  service: string;
  status: string;
}

interface ClusterCardProps {
  clusterName: string;
  location: string;
  esxiHosts: string[];
  clients: Client[];
}

const ClusterCard = ({ clusterName, location, esxiHosts, clients }: ClusterCardProps) => {
  const getStatusColor = (status: string) => {
    if (status.toLowerCase().includes("prod")) return "bg-[hsl(var(--status-prod))]";
    if (status.toLowerCase().includes("build")) return "bg-[hsl(var(--status-build))]";
    if (status.toLowerCase().includes("b2r")) return "bg-[hsl(var(--status-b2r))]";
    return "bg-muted";
  };

  return (
    <Card className="bg-card border-border hover:border-primary/50 transition-all duration-300 hover:shadow-[var(--glow-primary)] animate-fade-in">
      <CardHeader>
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <CardTitle className="text-xl font-bold text-foreground mb-2 flex items-center gap-2">
              <Server className="w-5 h-5 text-primary" />
              {location}
            </CardTitle>
            <p className="text-sm text-muted-foreground font-mono break-all">{clusterName}</p>
          </div>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <div>
          <h3 className="text-sm font-semibold text-foreground mb-2 flex items-center gap-2">
            <HardDrive className="w-4 h-4 text-accent" />
            ESXI Hosts
          </h3>
          <div className="grid grid-cols-2 gap-2">
            {esxiHosts.map((host, idx) => (
              <div
                key={idx}
                className="bg-secondary/50 px-3 py-2 rounded-md text-xs font-mono text-muted-foreground hover:bg-secondary transition-colors"
              >
                {host}
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-sm font-semibold text-foreground mb-3">Clients</h3>
          <div className="space-y-2">
            {clients.map((client, idx) => (
              <div
                key={idx}
                className="bg-secondary/30 border border-border rounded-lg p-3 hover:bg-secondary/50 transition-all duration-200 hover:translate-x-1"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="font-semibold text-foreground text-sm">{client.name}</span>
                  <Badge
                    variant="secondary"
                    className="text-xs font-medium bg-primary/20 text-primary border-primary/30"
                  >
                    {client.service}
                  </Badge>
                </div>
                <div className="flex items-center gap-2">
                  <div className={`w-2 h-2 rounded-full ${getStatusColor(client.status)} animate-glow`} />
                  <span className="text-xs text-muted-foreground">{client.status}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ClusterCard;
