import { HashRouter, NavLink, Route, Routes } from 'react-router-dom'
import Home from './pages/Home.jsx'
import WeeklyPlan from './pages/WeeklyPlan.jsx'
import Drills from './pages/Drills.jsx'
import { colors } from './styles.js'

const linkStyle = ({ isActive }) => ({
  color: isActive ? colors.accent : colors.muted,
  fontWeight: isActive ? 700 : 500,
  textDecoration: 'none',
  padding: '6px 4px',
})

export default function App() {
  return (
    <HashRouter>
      <header
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: 12,
          padding: '14px 24px',
          borderBottom: `1px solid ${colors.line}`,
          background: colors.white,
          fontFamily: 'system-ui, sans-serif',
        }}
      >
        <strong style={{ color: colors.ink, fontSize: 18 }}>Hoops Training Plan</strong>
        <nav style={{ display: 'flex', gap: 18 }}>
          <NavLink to="/" end style={linkStyle}>Home</NavLink>
          <NavLink to="/plan" style={linkStyle}>Weekly plan</NavLink>
          <NavLink to="/drills" style={linkStyle}>Drills</NavLink>
        </nav>
      </header>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/plan" element={<WeeklyPlan />} />
        <Route path="/drills" element={<Drills />} />
      </Routes>
    </HashRouter>
  )
}
