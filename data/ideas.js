const ideas = [
    {
        id: 1,
        title: "Kubernetes Operator for Personal Projects",
        date: "2026-01-10",
        content: `
            <p>Build a custom Kubernetes operator to manage my personal services. Would handle automatic backups, resource scaling based on time-of-day, and self-healing deployments.</p>
            <p><strong>Status:</strong> Brainstorming. Need to learn Operator SDK first.</p>
        `
    },
    {
        id: 2,
        title: "Home Network Monitoring Dashboard",
        date: "2026-01-08",
        content: `
            <p>Create a real-time dashboard showing network traffic, DNS queries, and device activity. Similar to Pi-hole but with more visual insights.</p>
            <p><strong>Tools:</strong> Prometheus, Grafana, custom metrics exporter.</p>
            <p><strong>Status:</strong> Early planning phase.</p>
        `
    },
    {
        id: 3,
        title: "Automated Infrastructure as Code Workshop",
        date: "2026-01-05",
        content: `
            <p>Document my learning journey from manual kubectl commands to full GitOps. Create tutorial content for others learning DevOps.</p>
            <p><strong>Chapters:</strong> Helm basics, Kustomize overlays, ArgoCD workflows, disaster recovery.</p>
            <p><strong>Status:</strong> Collecting notes.</p>
        `
    },
    {
        id: 4,
        title: "Multi-Node Cluster on Raspberry Pis",
        date: "2025-12-20",
        content: `
            <p>Expand from single-node to 3-node cluster using Raspberry Pi 4s. Learn about network segmentation, load balancing, and node affinity rules.</p>
            <p><strong>Challenge:</strong> Power constraints and cooling. Budget ~$300 for hardware.</p>
            <p><strong>Status:</strong> Waiting for funds.</p>
        `
    },
    {
        id: 5,
        title: "Blog Analytics Without Tracking",
        date: "2025-12-15",
        content: `
            <p>Implement privacy-respecting analytics. Count page views and popular content without cookies, fingerprinting, or third-party services.</p>
            <p><strong>Approach:</strong> Simple server-side logging with aggregation.</p>
            <p><strong>Status:</strong> Research phase.</p>
        `
    },
    {
        id: 6,
        title: "Chaos Engineering Experiments",
        date: "2025-12-10",
        content: `
            <p>Run controlled chaos tests on the cluster. Kill pods randomly, simulate network latency, drain nodes. Document how services fail and recover.</p>
            <p><strong>Tools:</strong> Chaos Mesh, Pumba.</p>
            <p><strong>Status:</strong> Haven't started (scared to break things).</p>
        `
    },
    {
        id: 7,
        title: "Container Image Scanning & Vulnerability Management",
        date: "2025-12-01",
        content: `
            <p>Integrate automated vulnerability scanning into CI/CD pipeline. Use Trivy or Grype to scan images before pushing to registry.</p>
            <p><strong>Goal:</strong> Catch security issues early, prevent vulnerable images in production.</p>
            <p><strong>Status:</strong> Planning implementation.</p>
        `
    },
    {
        id: 8,
        title: "Cost Optimization & Resource Limits Study",
        date: "2025-11-25",
        content: `
            <p>Deep dive into Kubernetes resource requests/limits. Understand how to set them properly without starving pods or wasting resources.</p>
            <p><strong>Experiments:</strong> Simulate OOM conditions, test CPU throttling, monitor actual usage patterns.</p>
            <p><strong>Status:</strong> In progress.</p>
        `
    },
    {
        id: 9,
        title: "Contributing to Open Source DevOps Projects",
        date: "2025-11-15",
        content: `
            <p>Find Kubernetes/ArgoCD/Prometheus related projects to contribute to. Start with documentation improvements, then work toward code contributions.</p>
            <p><strong>Goal:</strong> Give back to the community, improve my skills through code review.</p>
            <p><strong>Status:</strong> Looking for projects.</p>
        `
    },
    {
        id: 10,
        title: "Personal VPN & Wireguard Setup",
        date: "2025-11-01",
        content: `
            <p>Deploy Wireguard VPN on the cluster. Secure remote access to internal services without exposing them to the internet.</p>
            <p><strong>Use case:</strong> Access home services while traveling, secure mobile access.</p>
            <p><strong>Status:</strong> Researching deployment options.</p>
        `
    }
];
