import { useState } from 'react'
import { cardStyle, colors, containerStyle, ghostButtonStyle, pageStyle } from '../styles.js'

const categories = ['All', 'Shooting', 'Dribbling', 'Defense', 'Conditioning']

const drills = [
  { name: 'Form shooting', category: 'Shooting', time: '10 min', how: 'Shoot close to the basket, one hand, focusing on the follow-through.' },
  { name: 'Spot-up threes', category: 'Shooting', time: '15 min', how: 'Five spots around the arc, five shots from each, no misses allowed to move on.' },
  { name: 'Two-ball dribbling', category: 'Dribbling', time: '5 min', how: 'Bounce two balls at once, low and high, keeping your eyes up.' },
  { name: 'Figure eights', category: 'Dribbling', time: '5 min', how: 'Dribble through your legs in a figure eight, speeding up each round.' },
  { name: 'Closeouts', category: 'Defense', time: '10 min', how: 'Sprint to a shooter, then chop your feet and contest without fouling.' },
  { name: 'Defensive slides', category: 'Defense', time: '8 min', how: 'Stay low and slide side to side between two cones, never crossing your feet.' },
  { name: 'Suicide sprints', category: 'Conditioning', time: '10 min', how: 'Sprint to each line and back, touching each line before turning.' },
  { name: 'Ladder runs', category: 'Conditioning', time: '8 min', how: 'Quick feet through an agility ladder, then a short sprint at the end.' },
]

export default function Drills() {
  const [category, setCategory] = useState('All')
  const [favourites, setFavourites] = useState([])

  const shown = category === 'All' ? drills : drills.filter((drill) => drill.category === category)

  function toggleFavourite(name) {
    setFavourites((current) =>
      current.includes(name) ? current.filter((item) => item !== name) : [...current, name],
    )
  }

  return (
    <main style={pageStyle}>
      <div style={containerStyle}>
        <h1 style={{ fontSize: 32, margin: '0 0 8px' }}>Drill library</h1>
        <p style={{ color: colors.muted, margin: '0 0 16px' }}>Pick a skill to focus on, then star the drills you like.</p>
        <p style={{ color: colors.muted, fontSize: 14, margin: '0 0 20px' }}>
          Not saved yet: upgrade to keep your changes
        </p>

        <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginBottom: 20 }}>
          {categories.map((name) => (
            <button
              key={name}
              type="button"
              onClick={() => setCategory(name)}
              style={{
                ...ghostButtonStyle,
                background: category === name ? colors.accent : colors.white,
                color: category === name ? colors.white : colors.ink,
              }}
            >
              {name}
            </button>
          ))}
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 14 }}>
          {shown.map((drill) => {
            const starred = favourites.includes(drill.name)
            return (
              <article key={drill.name} style={cardStyle}>
                <p style={{ color: colors.accent, fontWeight: 600, fontSize: 13, margin: 0 }}>
                  {drill.category} · {drill.time}
                </p>
                <h2 style={{ fontSize: 19, margin: '6px 0 8px' }}>{drill.name}</h2>
                <p style={{ color: colors.muted, lineHeight: 1.5, margin: '0 0 14px' }}>{drill.how}</p>
                <button type="button" onClick={() => toggleFavourite(drill.name)} style={ghostButtonStyle}>
                  {starred ? '★ Starred' : '☆ Star drill'}
                </button>
              </article>
            )
          })}
        </div>
      </div>
    </main>
  )
}
