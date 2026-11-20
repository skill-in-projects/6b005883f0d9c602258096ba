import { Link } from 'react-router-dom'
import { buttonStyle, cardStyle, colors, containerStyle, pageStyle } from '../styles.js'

const features = [
  { title: 'Weekly plan', text: 'See each day’s session, from warm-up to shooting finish.', to: '/plan' },
  { title: 'Drill library', text: 'Browse drills for shooting, dribbling, defense and conditioning.', to: '/drills' },
]

export default function Home() {
  return (
    <main style={pageStyle}>
      <div style={containerStyle}>
        <section style={{ padding: '40px 0 32px' }}>
          <p style={{ color: colors.accent, fontWeight: 700, margin: 0 }}>For players and coaches</p>
          <h1 style={{ fontSize: 40, lineHeight: 1.15, margin: '8px 0 12px', maxWidth: 640 }}>
            Build better basketball habits, one session at a time.
          </h1>
          <p style={{ color: colors.muted, fontSize: 17, maxWidth: 580, lineHeight: 1.6 }}>
            Follow a simple weekly training plan, practise the right drills and tick off each session as you finish it.
          </p>
          <div style={{ display: 'flex', gap: 12, marginTop: 24, flexWrap: 'wrap' }}>
            <Link to="/plan" style={buttonStyle}>Open weekly plan</Link>
            <Link to="/drills" style={{ ...buttonStyle, background: colors.white, color: colors.ink, border: `1px solid ${colors.line}` }}>
              Browse drills
            </Link>
          </div>
        </section>

        <section style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 16 }}>
          {features.map((feature) => (
            <Link key={feature.to} to={feature.to} style={{ ...cardStyle, color: colors.ink, textDecoration: 'none' }}>
              <h2 style={{ fontSize: 20, margin: '0 0 8px' }}>{feature.title}</h2>
              <p style={{ color: colors.muted, margin: 0, lineHeight: 1.5 }}>{feature.text}</p>
            </Link>
          ))}
        </section>
      </div>
    </main>
  )
}
