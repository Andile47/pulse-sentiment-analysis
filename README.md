# Pulse — Employee Sentiment Dashboard

Pulse is a responsive employee experience dashboard for understanding engagement, sentiment, workplace themes, and retention risk.

It turns anonymous pulse-survey responses into clear metrics, department-level trends, and an actionable insights report for People teams and organizational leaders.

> **Project status:** Frontend prototype using mock survey data. Authentication, persistent storage, live sentiment analysis, and PDF generation are not connected yet.

## Features

- **Engagement overview** — Track engagement, participation, positive sentiment, and retention-risk indicators.
- **Sentiment trends** — Review changes in employee sentiment over time.
- **Theme analysis** — Identify recurring topics such as collaboration, recognition, career growth, leadership, and workload.
- **Department pulse** — Compare engagement across eligible departments.
- **AI insights report** — View an executive summary, key findings, and recommended next steps.
- **Privacy-first presentation** — Hide departments with fewer than five responses and reinforce anonymity throughout the interface.
- **Responsive design** — Optimized for desktop, tablet, and mobile screens.

## Preview

The current prototype includes:

- An employee experience overview
- Interactive date-range controls
- Dashboard navigation
- Engagement and sentiment visualizations
- A generated insights-report drawer
- Mock employee survey data

## Tech Stack

- [React 19](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vite.dev/)
- [Tailwind CSS 4](https://tailwindcss.com/)
- Custom responsive CSS and SVG data visualizations

## Getting Started

### Prerequisites

- Node.js 22 or later
- [pnpm](https://pnpm.io/)

### Installation

Clone the repository and install its dependencies:

```bash
git clone <your-repository-url>
cd <your-repository-name>
pnpm install
```

Start the local development server:

```bash
pnpm dev
```

Vite will print the local preview URL in the terminal.

## Available Scripts

| Command | Description |
| --- | --- |
| `pnpm dev` | Start the Vite development server |
| `pnpm build` | Create a production build |
| `pnpm preview` | Preview the production build locally |
| `pnpm format` | Format the source code with oxfmt |

## Project Structure

```text
.
├── public/             # Static assets
├── src/
│   ├── App.tsx         # Dashboard UI, mock data, and interactions
│   ├── index.css       # Global styles and responsive layouts
│   ├── main.tsx        # React entry point
│   └── vite-env.d.ts   # Vite type declarations
├── index.html
├── package.json
├── tsconfig.json
└── vite.config.ts
```

## Privacy Principles

Employee feedback can contain sensitive information. Pulse is designed around several privacy principles:

- Do not display results for groups with fewer than five responses.
- Do not expose employee names or identifying information.
- Clearly distinguish directional insights from verified findings.
- Avoid presenting AI-generated recommendations as definitive conclusions.
- Restrict access to sensitive reports when authentication is added.

The current project demonstrates these principles in the interface but does not yet enforce them through a backend.

## Roadmap

- [ ] CSV survey-response import
- [ ] Live sentiment and theme analysis
- [ ] Secure authentication and role-based access
- [ ] Persistent survey and report storage
- [ ] Survey creation and distribution
- [ ] Historical comparisons
- [ ] Advanced department and demographic filters
- [ ] Personally identifiable information redaction
- [ ] PDF report export
- [ ] Slack and Microsoft Teams integrations

## Production Considerations

Before using Pulse with real employee feedback:

1. Add secure authentication and role-based permissions.
2. Store data in an encrypted database.
3. Enforce anonymity thresholds on the server, not only in the interface.
4. Redact personally identifiable information from written responses.
5. Establish retention and deletion policies.
6. Review applicable privacy, employment, and data-protection requirements.

## Contributing

Contributions are welcome. Open an issue to discuss a proposed change before submitting a large pull request.

1. Fork the repository.
2. Create a feature branch.
3. Make and verify your changes.
4. Submit a pull request with a clear description.

## License

No license has been selected yet. Add a license before distributing or accepting external contributions.
