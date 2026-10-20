import { useState, type ReactNode } from "react"

type IconName = "pulse" | "overview" | "responses" | "themes" | "reports" | "settings" | "search" | "bell" | "chevron" | "arrowUp" | "arrowDown" | "sparkles" | "lock" | "download" | "calendar" | "more"

function Icon({ name, size = 18 }: { name: IconName size?: number }) {
  const paths: Record<IconName, ReactNode> = {
    pulse: (
      <>
        <path d="M3 12h4l2-6 4 12 2-6h6" />
      </>
    ),
    overview: (
      <>
        <rect x="3" y="3" width="7" height="7" rx="2" />
        <rect x="14" y="3" width="7" height="7" rx="2" />
        <rect x="3" y="14" width="7" height="7" rx="2" />
        <rect x="14" y="14" width="7" height="7" rx="2" />
      </>
    ),
    responses: (
      <>
        <path d="M21 15a4 4 0 0 1-4 4H8l-5 3V7a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4Z" />
        <path d="M8 9h8M8 13h5" />
      </>
    ),
    themes: (
      <>
        <path d="M4 6h16M4 12h10M4 18h13" />
        <circle cx="18" cy="12" r="2" />
        <circle cx="20" cy="18" r="2" />
      </>
    ),
    reports: (
      <>
        <path d="M6 3h9l4 4v14H6z" />
        <path d="M14 3v5h5M9 13h6M9 17h6" />
      </>
    ),
    settings: (
      <>
        <circle cx="12" cy="12" r="3" />
        <path d="M19.4 15a1.7 1.7 0 0 0 .34 1.88l.06.06-2.83 2.83-.06-.06a1.7 1.7 0 0 0-1.88-.34 1.7 1.7 0 0 0-1.03 1.56V21h-4v-.08A1.7 1.7 0 0 0 9 19.37a1.7 1.7 0 0 0-1.88.34l-.06.06-2.83-2.83.06-.06A1.7 1.7 0 0 0 4.63 15 1.7 1.7 0 0 0 3.08 14H3v-4h.08A1.7 1.7 0 0 0 4.63 9a1.7 1.7 0 0 0-.34-1.88l-.06-.06 2.83-2.83.06.06A1.7 1.7 0 0 0 9 4.63h.01A1.7 1.7 0 0 0 10 3.08V3h4v.08A1.7 1.7 0 0 0 15 4.63a1.7 1.7 0 0 0 1.88-.34l.06-.06 2.83 2.83-.06.06A1.7 1.7 0 0 0 19.37 9v.01A1.7 1.7 0 0 0 20.92 10H21v4h-.08A1.7 1.7 0 0 0 19.4 15Z" />
      </>
    ),
    search: (
      <>
        <circle cx="11" cy="11" r="7" />
        <path d="m20 20-4-4" />
      </>
    ),
    bell: (
      <>
        <path d="M18 8a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9M10 21h4" />
      </>
    ),
    chevron: (
      <>
        <path d="m9 18 6-6-6-6" />
      </>
    ),
    arrowUp: (
      <>
        <path d="m18 15-6-6-6 6" />
      </>
    ),
    arrowDown: (
      <>
        <path d="m6 9 6 6 6-6" />
      </>
    ),
    sparkles: (
      <>
        <path d="m12 3 1.2 3.8L17 8l-3.8 1.2L12 13l-1.2-3.8L7 8l3.8-1.2ZM19 14l.8 2.2L22 17l-2.2.8L19 20l-.8-2.2L16 17l2.2-.8Z" />
      </>
    ),
    lock: (
      <>
        <rect x="5" y="10" width="14" height="11" rx="3" />
        <path d="M8 10V7a4 4 0 0 1 8 0v3" />
      </>
    ),
    download: (
      <>
        <path d="M12 3v12m0 0 5-5m-5 5-5-5M5 21h14" />
      </>
    ),
    calendar: (
      <>
        <rect x="3" y="5" width="18" height="16" rx="3" />
        <path d="M16 3v4M8 3v4M3 10h18" />
      </>
    ),
    more: (
      <>
        <circle cx="5" cy="12" r="1" fill="currentColor" stroke="none" />
        <circle cx="12" cy="12" r="1" fill="currentColor" stroke="none" />
        <circle cx="19" cy="12" r="1" fill="currentColor" stroke="none" />
      </>
    ),
  }

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {paths[name]}
    </svg>
  )
}

function Button({
  children,
  className = "",
  onClick,
  ariaLabel,
}: {
  children: ReactNode
  className?: string
  onClick?: () => void
  ariaLabel?: string
}) {
  return (
    <button className={className} onClick={onClick} aria-label={ariaLabel}>
      {children}
    </button>
  )
}

const navItems: { label: string icon: IconName }[] = [
  { label: "Overview", icon: "overview" },
  { label: "Responses", icon: "responses" },
  { label: "Themes", icon: "themes" },
  { label: "Reports", icon: "reports" },
]

const themes = [
  {
    name: "Team collaboration",
    mentions: 186,
    score: 91,
    change: "+6.2%",
    tone: "positive",
  },
  {
    name: "Recognition",
    mentions: 142,
    score: 84,
    change: "+4.8%",
    tone: "positive",
  },
  {
    name: "Career growth",
    mentions: 119,
    score: 72,
    change: "+1.4%",
    tone: "neutral",
  },
  {
    name: "Leadership",
    mentions: 98,
    score: 68,
    change: "−2.1%",
    tone: "neutral",
  },
  {
    name: "Workload",
    mentions: 164,
    score: 54,
    change: "−8.6%",
    tone: "negative",
  },
]

const departments = [
  { name: "Product", score: 86, responses: 48, change: 5 },
  { name: "Design", score: 82, responses: 34, change: 3 },
  { name: "Customer Success", score: 79, responses: 57, change: 1 },
  { name: "Engineering", score: 71, responses: 86, change: -6 },
]

const chartPoints =
  "0,101 64,94 128,98 192,79 256,71 320,76 384,52 448,58 512,43 576,35 640,40 704,22"
const areaPoints = `${chartPoints} 704,140 0,140`

function App() {
  const [activeNav, setActiveNav] = useState("Overview")
  const [period, setPeriod] = useState("Last 90 days")
  const [reportOpen, setReportOpen] = useState(false)

  return (
    <div className="app-shell">
      <aside className="sidebar">
        <div className="brand">
          <span className="brand-mark">
            <Icon name="pulse" size={21} />
          </span>
          <span>Pulse</span>
        </div>

        <nav className="nav" aria-label="Main navigation">
          <span className="nav-label">Workspace</span>
          {navItems.map((item) => (
            <Button
              key={item.label}
              className={`nav-item ${activeNav === item.label ? "active" : ""}`}
              onClick={() => setActiveNav(item.label)}
            >
              <Icon name={item.icon} />
              <span>{item.label}</span>
              {item.label === "Responses" && (
                <span className="nav-count">12</span>
              )}
            </Button>
          ))}
        </nav>

        <div className="sidebar-footer">
          <div className="privacy-card">
            <span className="privacy-icon">
              <Icon name="lock" size={16} />
            </span>
            <div>
              <strong>Privacy protected</strong>
              <p>Groups under 5 responses are always hidden.</p>
            </div>
          </div>
          <Button className="nav-item">
            <Icon name="settings" />
            <span>Settings</span>
          </Button>
          <div className="profile">
            <span className="avatar">AM</span>
            <div>
              <strong>Alex Morgan</strong>
              <span>People Lead</span>
            </div>
            <Icon name="more" />
          </div>
        </div>
      </aside>

      <main className="main">
        <header className="topbar">
          <div className="mobile-brand">
            <span className="brand-mark">
              <Icon name="pulse" size={18} />
            </span>
            <strong>Pulse</strong>
          </div>
          <div className="search">
            <Icon name="search" size={17} />
            <span>Search insights or responses</span>
            <kbd>⌘ K</kbd>
          </div>
          <div className="top-actions">
            <Button className="icon-button" ariaLabel="View notifications">
              <Icon name="bell" />
              <span className="notification-dot" />
            </Button>
            <span className="top-divider" />
            <div className="company-switcher">
              <span className="company-logo">N</span>
              <div>
                <strong>Northstar Labs</strong>
                <span>184 employees</span>
              </div>
              <Icon name="chevron" size={14} />
            </div>
          </div>
        </header>

        <div className="content">
          <section className="page-heading">
            <div>
              <p className="eyebrow">Employee experience</p>
              <h1>Good morning, Alex</h1>
              <p>Here’s how your team is feeling across the organization.</p>
            </div>
            <div className="heading-actions">
              <div className="period-control">
                <Icon name="calendar" size={16} />
                {["30 days", "Last 90 days", "6 months"].map((option) => (
                  <Button
                    key={option}
                    className={period === option ? "selected" : ""}
                    onClick={() => setPeriod(option)}
                  >
                    {option}
                  </Button>
                ))}
              </div>
              <Button
                className="primary-button"
                onClick={() => setReportOpen(true)}
              >
                <Icon name="sparkles" size={16} />
                Generate report
              </Button>
            </div>
          </section>

          <section className="metrics-grid" aria-label="Key pulse metrics">
            <article className="metric-card featured">
              <div className="metric-top">
                <span>Engagement score</span>
                <span className="status-badge positive">Healthy</span>
              </div>
              <div className="metric-value-row">
                <strong className="metric-value">78</strong>
                <span className="metric-unit">/100</span>
                <span className="metric-change positive">
                  <Icon name="arrowUp" size={12} /> 4.2%
                </span>
              </div>
              <div className="score-track">
                <span />
              </div>
              <p>12 points above industry benchmark</p>
            </article>
            <article className="metric-card">
              <div className="metric-top">
                <span>Participation</span>
                <Button
                  className="quiet-button"
                  ariaLabel="More participation options"
                >
                  <Icon name="more" />
                </Button>
              </div>
              <div className="metric-value-row">
                <strong className="metric-value">84%</strong>
                <span className="metric-change positive">
                  <Icon name="arrowUp" size={12} /> 6.1%
                </span>
              </div>
              <div className="mini-bars participation-bars">
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
              </div>
              <p>154 of 184 employees responded</p>
            </article>
            <article className="metric-card">
              <div className="metric-top">
                <span>Positive sentiment</span>
                <Button
                  className="quiet-button"
                  ariaLabel="More sentiment options"
                >
                  <Icon name="more" />
                </Button>
              </div>
              <div className="metric-value-row">
                <strong className="metric-value">72%</strong>
                <span className="metric-change positive">
                  <Icon name="arrowUp" size={12} /> 3.8%
                </span>
              </div>
              <div className="sentiment-track">
                <span className="positive-segment" />
                <span className="neutral-segment" />
                <span className="negative-segment" />
              </div>
              <p>
                <b>72%</b> positive · 19% neutral · 9% negative
              </p>
            </article>
            <article className="metric-card">
              <div className="metric-top">
                <span>Retention risk</span>
                <span className="status-badge attention">Watch</span>
              </div>
              <div className="metric-value-row">
                <strong className="metric-value">11%</strong>
                <span className="metric-change negative">
                  <Icon name="arrowUp" size={12} /> 1.6%
                </span>
              </div>
              <div className="risk-people">
                {["JP", "SC", "TR", "MK"].map((initial, index) => (
                  <span key={initial} style={{ zIndex: 5 - index }}>
                    {initial}
                  </span>
                ))}
                <span>+13</span>
              </div>
              <p>17 responses show elevated risk</p>
            </article>
          </section>

          <section className="dashboard-grid">
            <article className="panel trend-panel">
              <div className="panel-header">
                <div>
                  <h2>Engagement trend</h2>
                  <p>Weekly average from 154 responses</p>
                </div>
                <div className="legend">
                  <span>
                    <i className="legend-current" />
                    Your score
                  </span>
                  <span>
                    <i className="legend-benchmark" />
                    Benchmark
                  </span>
                </div>
              </div>
              <div className="chart-wrap">
                <div className="y-axis">
                  <span>100</span>
                  <span>75</span>
                  <span>50</span>
                  <span>25</span>
                  <span>0</span>
                </div>
                <div className="chart">
                  <div className="grid-lines">
                    <span />
                    <span />
                    <span />
                    <span />
                    <span />
                  </div>
                  <svg
                    viewBox="0 0 704 140"
                    preserveAspectRatio="none"
                    aria-label="Engagement score rising from 62 to 78 over twelve weeks"
                  >
                    <defs>
                      <linearGradient
                        id="areaGradient"
                        x1="0"
                        y1="0"
                        x2="0"
                        y2="1"
                      >
                        <stop
                          offset="0%"
                          stopColor="#2f7568"
                          stopOpacity=".22"
                        />
                        <stop
                          offset="100%"
                          stopColor="#2f7568"
                          stopOpacity="0"
                        />
                      </linearGradient>
                    </defs>
                    <line
                      x1="0"
                      y1="57"
                      x2="704"
                      y2="57"
                      className="benchmark-line"
                    />
                    <polygon points={areaPoints} fill="url(#areaGradient)" />
                    <polyline points={chartPoints} className="trend-line" />
                    <circle cx="704" cy="22" r="5" className="chart-point" />
                  </svg>
                  <div className="chart-tooltip">
                    <span>Current score</span>
                    <strong>78</strong>
                    <small>+4.2% vs last month</small>
                  </div>
                  <div className="x-axis">
                    <span>Jan 8</span>
                    <span>Jan 22</span>
                    <span>Feb 5</span>
                    <span>Feb 19</span>
                    <span>Mar 4</span>
                    <span>Mar 18</span>
                  </div>
                </div>
              </div>
            </article>

            <article className="panel insight-panel">
              <div className="insight-title">
                <span className="sparkle-icon">
                  <Icon name="sparkles" size={17} />
                </span>
                <div>
                  <h2>Top insight</h2>
                  <p>Based on recent responses</p>
                </div>
                <span className="new-badge">New</span>
              </div>
              <div className="insight-body">
                <span className="insight-label">Needs attention</span>
                <h3>Workload pressure is rising in Engineering</h3>
                <p>
                  Mentions of workload increased by 24% this month, with 68%
                  expressing concern about project timelines.
                </p>
                <div className="quote">
                  <span>“</span>
                  <p>
                    Priorities keep shifting, making it difficult to plan
                    focused work.
                  </p>
                </div>
                <div className="insight-meta">
                  <span>
                    <b>32</b> related responses
                  </span>
                  <span>
                    <b>High</b> confidence
                  </span>
                </div>
              </div>
              <Button
                className="insight-action"
                onClick={() => setReportOpen(true)}
              >
                View full analysis <Icon name="chevron" size={14} />
              </Button>
            </article>
          </section>

          <section className="lower-grid">
            <article className="panel themes-panel">
              <div className="panel-header">
                <div>
                  <h2>What people are talking about</h2>
                  <p>Top themes from open-ended responses</p>
                </div>
                <Button className="text-button">
                  View all themes <Icon name="chevron" size={14} />
                </Button>
              </div>
              <div className="theme-table">
                <div className="table-header">
                  <span>Theme</span>
                  <span>Mentions</span>
                  <span>Sentiment score</span>
                  <span>Change</span>
                </div>
                {themes.map((theme) => (
                  <div className="table-row" key={theme.name}>
                    <span className="theme-name">
                      <i className={theme.tone} />
                      {theme.name}
                    </span>
                    <span>{theme.mentions}</span>
                    <span className="theme-score">
                      <i>
                        <b style={{ width: `${theme.score}%` }} />
                      </i>
                      {theme.score}%
                    </span>
                    <span
                      className={`change-cell ${
                        theme.change.startsWith("+")
                          ? "up"
                          : theme.change.startsWith("−")
                            ? "down"
                            : ""
                      }`}
                    >
                      {theme.change}
                    </span>
                  </div>
                ))}
              </div>
            </article>

            <article className="panel department-panel">
              <div className="panel-header">
                <div>
                  <h2>Department pulse</h2>
                  <p>Engagement by team</p>
                </div>
                <Button
                  className="quiet-button"
                  ariaLabel="More department options"
                >
                  <Icon name="more" />
                </Button>
              </div>
              <div className="department-list">
                {departments.map((department) => (
                  <div className="department-row" key={department.name}>
                    <div className="department-info">
                      <strong>{department.name}</strong>
                      <span>{department.responses} responses</span>
                    </div>
                    <div className="department-bar">
                      <span style={{ width: `${department.score}%` }} />
                    </div>
                    <strong className="department-score">
                      {department.score}
                    </strong>
                    <span
                      className={
                        department.change >= 0
                          ? "department-up"
                          : "department-down"
                      }
                    >
                      <Icon
                        name={department.change >= 0 ? "arrowUp" : "arrowDown"}
                        size={11}
                      />
                      {Math.abs(department.change)}
                    </span>
                  </div>
                ))}
              </div>
              <div className="privacy-note">
                <Icon name="lock" size={13} /> Only departments with 5+
                responses are shown
              </div>
            </article>
          </section>
        </div>
      </main>

      {reportOpen && (
        <div
          className="report-overlay"
          role="dialog"
          aria-modal="true"
          aria-labelledby="report-title"
        >
          <Button
            className="overlay-backdrop"
            onClick={() => setReportOpen(false)}
            ariaLabel="Close report"
          />
          <aside className="report-drawer">
            <div className="report-drawer-header">
              <div>
                <span className="report-kicker">
                  <Icon name="sparkles" size={14} /> AI insights report
                </span>
                <h2 id="report-title">March pulse summary</h2>
                <p>Generated from 154 anonymous responses</p>
              </div>
              <Button
                className="close-button"
                onClick={() => setReportOpen(false)}
                ariaLabel="Close report"
              >
                ×
              </Button>
            </div>
            <div className="report-content">
              <div className="executive-summary">
                <span>Executive summary</span>
                <p>
                  Overall engagement is healthy and improving, driven by
                  stronger recognition and team collaboration. Workload pressure
                  in Engineering is the clearest risk to address this cycle.
                </p>
              </div>
              <div className="report-section">
                <h3>Key findings</h3>
                <div className="finding positive-finding">
                  <span>01</span>
                  <div>
                    <strong>Recognition is gaining momentum</strong>
                    <p>
                      Positive mentions rose 18% after the peer recognition
                      program launched.
                    </p>
                  </div>
                </div>
                <div className="finding risk-finding">
                  <span>02</span>
                  <div>
                    <strong>Engineering workload needs attention</strong>
                    <p>
                      32 responses mention shifting priorities and unrealistic
                      project timelines.
                    </p>
                  </div>
                </div>
                <div className="finding neutral-finding">
                  <span>03</span>
                  <div>
                    <strong>Career paths remain unclear</strong>
                    <p>
                      Employees want clearer promotion criteria and more
                      frequent growth conversations.
                    </p>
                  </div>
                </div>
              </div>
              <div className="report-section">
                <h3>Recommended next steps</h3>
                <ol className="recommendations">
                  <li>
                    <span>1</span>
                    <p>
                      <strong>Review Engineering priorities</strong>Align active
                      projects with available capacity this week.
                    </p>
                  </li>
                  <li>
                    <span>2</span>
                    <p>
                      <strong>Equip managers for growth talks</strong>Share a
                      career conversation guide before the next 1:1 cycle.
                    </p>
                  </li>
                  <li>
                    <span>3</span>
                    <p>
                      <strong>Build on recognition gains</strong>Highlight peer
                      recognition stories at the next all-hands.
                    </p>
                  </li>
                </ol>
              </div>
              <div className="report-privacy">
                <Icon name="lock" size={15} />
                <p>
                  <strong>Privacy check passed</strong>No identifying
                  information is included in this report.
                </p>
              </div>
            </div>
            <div className="report-footer">
              <Button
                className="secondary-button"
                onClick={() => setReportOpen(false)}
              >
                Back to dashboard
              </Button>
              <Button className="primary-button">
                <Icon name="download" size={16} /> Export PDF
              </Button>
            </div>
          </aside>
        </div>
      )}
    </div>
  )
}

export default App
