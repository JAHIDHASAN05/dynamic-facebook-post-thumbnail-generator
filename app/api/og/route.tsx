import { ImageResponse } from 'next/og'
import React from 'react'

export const runtime = 'edge'

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url)

  const title = searchParams.get('title') || 'Problem'
  const score = searchParams.get('score') || '0'
  const date = new Date().toDateString()

  return new ImageResponse(
    (
      <div
        style={{
          width: '1200px',
          height: '630px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#f3f4f6', // Changed to backgroundColor
        }}
      >
        <div
          style={{
            width: '900px',
            height: '500px',
            backgroundColor: 'white', // Changed to backgroundColor
            borderRadius: '24px',
            // FIXED BORDER SHORTHAND HERE:
            borderWidth: '4px',
            borderColor: '#3b82f6',
            borderStyle: 'solid',
            padding: '40px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            textAlign: 'center',
          }}
        >
          <div style={{ color: '#3b82f6', fontSize: 24, display: 'flex' }}>
            ACHIEVEMENT UNLOCKED
          </div>

          <div style={{ fontSize: 48, fontWeight: 700, display: 'flex' }}>
            Certificate of Completion
          </div>

          <div style={{ fontSize: 20, marginTop: 20, display: 'flex' }}>
            Successfully solved
          </div>

          <div
            style={{
              fontSize: 36,
              color: '#2563eb',
              marginTop: 10,
              fontWeight: 600,
              display: 'flex'
            }}
          >
            {title}
          </div>

          <div style={{ display: 'flex', gap: 20, marginTop: 30 }}>
            <div
              style={{
                backgroundColor: '#fef3c7',
                // FIXED PADDING SHORTHAND HERE:
                paddingTop: 10,
                paddingBottom: 10,
                paddingLeft: 20,
                paddingRight: 20,
                borderRadius: 12,
                display: 'flex',
                flexDirection: 'column', // Ensures text stacks vertically
                alignItems: 'center',
              }}
            >
              <div style={{ display: 'flex' }}>XP Earned</div>
              <div style={{ fontWeight: 700, display: 'flex' }}>{score} XP</div>
            </div>

            <div
              style={{
                backgroundColor: '#e5e7eb',
                // FIXED PADDING SHORTHAND HERE:
                paddingTop: 10,
                paddingBottom: 10,
                paddingLeft: 20,
                paddingRight: 20,
                borderRadius: 12,
                display: 'flex',
                flexDirection: 'column', // Ensures text stacks vertically
                alignItems: 'center',
              }}
            >
              <div style={{ display: 'flex' }}>Date</div>
              <div style={{ display: 'flex' }}>{date}</div>
            </div>
          </div>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  )
}