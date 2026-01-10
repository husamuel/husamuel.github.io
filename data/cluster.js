const cluster = [
    {
        id: 1,
        title: "Cluster Overview",
        date: "2026-01-15",
        content: `
            <p>A personal Kubernetes homelab running on a custom-built tower PC in my apartment. This is my playground for learning cluster operations, container orchestration, and DevOps practices without the cloud bills.</p>
            <p><strong>Hardware:</strong> Tower case with Intel i7-9700K, 32GB RAM, 2TB NVMe SSD, RTX 2060 (unused). Sits under my desk, sounds like a jet engine when it kicks in.</p>
            <p><strong>Distribution:</strong> kubeadm-bootstrapped single-node cluster running Kubernetes 1.28. Runs 24/7 (mostly).</p>
            <p><strong>Purpose:</strong> Learning Kubernetes internals, practicing GitOps workflows, hosting personal projects, and having something to tinker with on weekends.</p>
        `
    },
    {
        id: 2,
        title: "What's Running",
        date: "2026-01-15",
        content: `
            <p><strong>Core Services:</strong></p>
            <ul>
                <li><strong>Blog API</strong> - This website's backend (Node.js)</li>
                <li><strong>PostgreSQL</strong> - Database for blog and projects</li>
                <li><strong>Redis</strong> - Cache layer and session store</li>
                <li><strong>Prometheus</strong> - Metrics scraper (stores 14 days of data)</li>
                <li><strong>Grafana</strong> - Pretty dashboards I check occasionally</li>
                <li><strong>Loki</strong> - Log aggregation system</li>
                <li><strong>AlertManager</strong> - Sends me Discord notifications when things break</li>
                <li><strong>ArgoCD</strong> - GitOps CD tool (cluster state synced to GitHub)</li>
                <li><strong>Nginx Ingress</strong> - Routes traffic to services</li>
            </ul>
            <p><strong>Pet Projects:</strong></p>
            <ul>
                <li>Homelab monitoring dashboard</li>
                <li>Personal file storage (Minio S3-compatible)</li>
                <li>DNS server (Pi-hole clone)</li>
            </ul>
        `
    },
    {
        id: 3,
        title: "Hardware Reality",
        date: "2026-01-15",
        content: `
            <p><strong>Specs:</strong></p>
            <ul>
                <li>CPU: Intel i7-9700K (8 cores) - overkill for a homelab</li>
                <li>RAM: 32GB - half is usually unused</li>
                <li>Storage: 2TB NVMe - getting tight with PostgreSQL backups</li>
                <li>Network: Gigabit ethernet (Wi-Fi disabled for stability)</li>
                <li>Power: ~150W idle, ~350W under load</li>
            </ul>
            <p><strong>The Tower:</strong> Noctua fans everywhere (expensive but quiet). Tempered glass side panel so I can stare at the RGB RAM I don't need. Mounted horizontally on a shelf, cables held together with zip ties and duct tape.</p>
            <p><strong>Real Talk:</strong> Overkill for what it does, but that's the point. If I had a real budget constraint, I'd move it to a used laptop or Raspberry Pi cluster.</p>
        `
    },
    {
        id: 4,
        title: "Network & Storage",
        date: "2026-01-15",
        content: `
            <p><strong>Networking:</strong> Wired gigabit connection directly to apartment router. DNS points to the cluster via dynamic DNS (duckdns.org). DDoS protection? Lol, no. Security group rules rely on "obscurity".</p>
            <p><strong>Storage Architecture:</strong></p>
            <ul>
                <li><code>/data</code> - Local NVMe for database and application files</li>
                <li><code>/backups</code> - PostgreSQL dumps run nightly via cron</li>
                <li>No distributed storage (Ceph, etc). Single disk failure = data loss</li>
                <li>Backups uploaded to cloud monthly (via encrypted tar files)</li>
            </ul>
            <p><strong>Lesson Learned:</strong> Backup to cloud. Not just another disk in the same machine.</p>
        `
    },
    {
        id: 5,
        title: "Observability & Debugging",
        date: "2026-01-15",
        content: `
            <p><strong>Monitoring Stack:</strong> Prometheus scrapes every 15 seconds. Keeps 14 days of metrics (disk constraint). Grafana dashboards monitor CPU, memory, disk I/O, pod restarts.</p>
            <p><strong>Logs:</strong> Fluent Bit ships container logs to Loki. Can query the past week of logs. Before that? Deleted.</p>
            <p><strong>Alerts:</strong> When memory hits 80%, PostgreSQL crashes, or a pod restarts 5+ times, AlertManager sends me a Discord message. Works 70% of the time.</p>
            <p><strong>Debugging in Real Life:</strong> SSH into the node, <code>kubectl describe pod</code>, check <code>dmesg</code> for OOM kills, restart things, check Grafana again. It's hands-on.</p>
        `
    },
    {
        id: 6,
        title: "Deployments & CI/CD",
        date: "2026-01-15",
        content: `
            <p><strong>Workflow:</strong> Push to GitHub → GitHub Actions builds Docker image → Push to Docker Hub → ArgoCD detects change → Cluster syncs automatically.</p>
            <p><strong>Configuration Management:</strong> Helm charts for templating. Kustomize overlays for different environments (dev, prod). YAML files everywhere.</p>
            <p><strong>Database Migrations:</strong> Run <code>kubectl apply -f migration-job.yaml</code> manually before deploying new app version. Error-prone but works.</p>
            <p><strong>Rollback Process:</strong> Revert commit in Git, ArgoCD syncs within 30 seconds. Or manually edit the cluster state. Both options suck.</p>
        `
    },
    {
        id: 7,
        title: "The Constraints",
        date: "2026-01-15",
        content: `
            <p><strong>No High Availability:</strong> One machine dies? Everything down. Recovery = manually boot, run <code>kubectl get nodes</code>, pray it works.</p>
            <p><strong>Resource Limits:</strong> Can't run 100 replicas. Can't simulate real autoscaling. Can barely run 5 services concurrently without swapping.</p>
            <p><strong>Noise & Power:</strong> Tower runs 24/7. Cooling fans are loud. Electric bill probably $50/month higher because of this.</p>
        `
    },
    {
        id: 8,
        title: "Thoughts & Reflections",
        date: "2026-01-15",
        content: `
            <p><strong>Network Constraints:</strong> Home internet = inconsistent. Sometimes cluster unreachable for 10 minutes. ISP doesn't care about my uptime.</p>
            <p><strong>Security:</strong> No TLS termination outside the cluster. Firewall rules = "trust the local network". No real RBAC setup. Not enterprise-grade.</p>
        `
    },
    {
        id: 9,
        title: "What I've Learned",
        date: "2026-01-15",
        content: `
            <p><strong>Kubernetes Internals:</strong> Pod lifecycle, how kubelet communicates with API server, what happens during eviction. Reading source code > watching tutorials.</p>
            <p><strong>Stateful Services Are Hard:</strong> PostgreSQL failover, Redis persistence, understanding when to use StatefulSets vs Deployments. Lost data twice before getting it right.</p>
            <p><strong>Monitoring Matters:</strong> Had no visibility into what was breaking. Added Prometheus → immediately found problems I didn't know existed.</p>
            <p><strong>GitOps Actually Works:</strong> The cluster becoming a reflection of Git state is powerful. Removed manual kubectl commands from my life.</p>
            <p><strong>Single-Node Teaches You Limits:</strong> Forced to think about resource efficiency. Can't hide problems behind "scale horizontally".</p>
        `
    },
    {
        id: 10,
        title: "Future Experiments",
        date: "2026-01-15",
        content: `
            <p><strong>Next Steps:</strong></p>
            <ul>
                <li>Add a Raspberry Pi node to practice multi-node networking and failover</li>
                <li>Implement proper backup automation to S3-compatible storage</li>
                <li>Learn Terraform to define infrastructure as code</li>
                <li>Set up proper RBAC and network policies for defense-in-depth</li>
                <li>Test cluster recovery from scratch (how fast can I rebuild?)</li>
            </ul>
            <p><strong>Reality Check:</strong> This is a hobby project. When it breaks, I fix it manually. That's fine. Enterprise Kubernetes engineers deal with 10,000 nodes and complex distributed systems. I deal with one tower and a lot of curiosity.</p>
        `
    }
];

// Photo reference - update this with your actual tower photo
const clusterPhoto = {
    src: "https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?w=800&h=600&fit=crop",
    alt: "Custom-built tower PC running Kubernetes cluster",
    caption: "The beast under my desk. Noctua fans, RGB RAM, and a lot of cable management regret."
};
