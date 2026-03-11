'use client'

interface SectionCardProps {
  subject: string
  bullets: {
    icon?: string
    text: string
  }[]
}

export default function SectionCard({ subject, bullets }: SectionCardProps) {
  return (
    <div style={{
      border: '1.5px solid #c9a96e',
      borderRadius: '2px',
      overflow: 'hidden',
      background: '#f5f2ed',
      boxShadow: '0 4px 16px rgba(11, 29, 81, 0.10)',
      width: '100%',
      minHeight: '320px',
      display: 'flex',
      flexDirection: 'column',
    }}>
      {/* Subject Header Bar */}
      <div style={{
        background: '#102670',
        padding: '18px 24px',
        borderBottom: '2px solid #c9a96e',
      }}>
        <h3 style={{
          color: '#ece8e3',
          fontFamily: "'Cormorant Garamond', Georgia, serif",
          fontSize: '1.35rem',
          fontWeight: 600,
          letterSpacing: '0.03em',
          margin: 0,
          textTransform: 'uppercase',
        }}>
          {subject}
        </h3>
      </div>

      {/* Bullet Rows */}
      <div style={{
        padding: '20px 24px',
        display: 'flex',
        flexDirection: 'column',
        gap: '0',
        flex: 1,
      }}>
        {bullets.map((bullet, index) => (
          <div
            key={index}
            style={{
              display: 'flex',
              alignItems: 'flex-start',
              gap: '14px',
              padding: '16px 16px',
              background: index % 2 === 0 ? '#e8e4de' : 'transparent',
              borderRadius: '2px',
              borderLeft: '3px solid #c9a96e',
              marginBottom: index < bullets.length - 1 ? '8px' : '0',
            }}
          >
            {/* Bullet Number */}
            <div style={{
              width: '28px',
              height: '28px',
              borderRadius: '50%',
              background: '#102670',
              color: '#c9a96e',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '0.8rem',
              fontWeight: 700,
              flexShrink: 0,
              marginTop: '1px',
              fontFamily: "'Source Sans 3', system-ui, sans-serif",
            }}>
              {index + 1}
            </div>

            {/* Bullet Text */}
            <p style={{
              margin: 0,
              fontFamily: "'Source Sans 3', system-ui, sans-serif",
              fontSize: '0.95rem',
              lineHeight: 1.6,
              color: '#102670',
            }}>
              {bullet.text}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}
