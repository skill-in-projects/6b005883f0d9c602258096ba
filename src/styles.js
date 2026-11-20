export const colors = {
  accent: '#ea580c',
  accentSoft: '#ffedd5',
  ink: '#1f2937',
  muted: '#6b7280',
  line: '#e5e7eb',
  paper: '#fafaf9',
  white: '#ffffff',
}

export const pageStyle = {
  minHeight: 'calc(100vh - 60px)',
  padding: '32px 24px 48px',
  background: colors.paper,
  color: colors.ink,
  fontFamily: 'system-ui, sans-serif',
}

export const containerStyle = {
  maxWidth: 960,
  margin: '0 auto',
}

export const cardStyle = {
  background: colors.white,
  border: `1px solid ${colors.line}`,
  borderRadius: 12,
  padding: 20,
}

export const buttonStyle = {
  display: 'inline-block',
  background: colors.accent,
  color: colors.white,
  border: 'none',
  borderRadius: 8,
  padding: '10px 16px',
  fontWeight: 600,
  fontSize: 15,
  cursor: 'pointer',
  textDecoration: 'none',
}

export const ghostButtonStyle = {
  ...buttonStyle,
  background: colors.white,
  color: colors.ink,
  border: `1px solid ${colors.line}`,
}

export const noticeStyle = {
  background: colors.accentSoft,
  color: colors.ink,
  borderRadius: 8,
  padding: '10px 14px',
  fontSize: 14,
}
