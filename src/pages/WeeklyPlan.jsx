import { useState } from 'react'
import { cardStyle, colors, containerStyle, ghostButtonStyle, noticeStyle, pageStyle } from '../styles.js'

const days = [
  {
    day: 'Monday',
    focus: 'Ball handling and shooting',
    drills: ['Two-ball dribbling, 5 min', 'Form shooting, 100 makes', 'Pick-and-roll reads, 15 min'],
  },
  {
    day: 'Tuesday',
    focus: 'Conditioning',
    drills: ['Suicide sprints, 10 min', 'Defensive slides, 8 min', 'Free throws under fatigue, 50 shots'],
  },
  {
    day: 'Wednesday',
    focus: 'Shooting off the catch',
    drills: ['Spot-up threes, 5 spots', 'Catch-and-shoot off screens, 20 min', 'Mid-range pull-ups, 30 shots'],
  },
  {
    day: 'Thursday',
    focus: 'Defense',
    drills: ['Closeouts, 10 min', 'Shell drill, 15 min', 'One-on-one, 3 rounds'],
  },
  {
    day: 'Friday',
    focus: 'Game speed',
    drills: ['Full-court 3v3, 20 min', 'Transition finishing, 15 min', 'Free throws, 30 shots'],
  },
  {
    day: 'Saturday',
    focus: 'Rest or light shooting',
    drills: ['Shoot for fun, 20 min', 'Stretch and foam roll, 10 min'],
  },
  {
    day: 'Sunday',
    focus: 'Rest',
    drills: ['Watch a game and note one thing to copy'],
  },
]

export default function WeeklyPlan() {
  const [done, setDone] = useState({})

  const doneCount = Object.values(done).filter(Boolean).length

  function toggle(day) {
    setDone((current) => ({ ...current, [day]: !current[day] }))
  }

  return (
    <main style={pageStyle}>
      <div style={containerStyle}>
        <h1 style={{ fontSize: 32, margin: '0 0 8px' }}>Weekly plan</h1>
        <p style={{ color: colors.muted, margin: '0 0 16px' }}>
          Tick a day off when you finish it. {doneCount} of {days.length} days done.
        </p>
        <p style={{ ...noticeStyle, margin: '0 0 24px' }}>
          Not saved yet: upgrade to keep your changes
        </p>

        <div style={{ display: 'grid', gap: 14 }}>
          {days.map((item) => (
            <article key={item.day} style={{ ...cardStyle, opacity: done[item.day] ? 0.7 : 1 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 12, flexWrap: 'wrap' }}>
                <div>
                  <h2 style={{ fontSize: 18, margin: 0 }}>{item.day}</h2>
                  <p style={{ color: colors.muted, margin: '4px 0 0' }}>{item.focus}</p>
                </div>
                <button
                  type="button"
                  onClick={() => toggle(item.day)}
                  style={{
                    ...ghostButtonStyle,
                    background: done[item.day] ? colors.accentSoft : colors.white,
                  }}
                >
                  {done[item.day] ? 'Done' : 'Mark done'}
                </button>
              </div>
              <ul style={{ margin: '12px 0 0', paddingLeft: 20, color: colors.ink, lineHeight: 1.7 }}>
                {item.drills.map((drill) => (
                  <li key={drill}>{drill}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </main>
  )
}
