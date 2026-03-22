'use client'

import { useState } from 'react'

const problems = [
  {
    id: '1',
    title: 'Palindrome String',
    desc: 'Determine whether a given string reads the same forward and backward',
  },
  {
    id: '2',
    title: 'Maximum Element in Array',
    desc: 'Return the largest integer in the given array',
  },
  {
    id: '3',
    title: 'Minimum Element in Array',
    desc: 'Return the smallest integer in the given array',
  },
]

export default function ClientPage({ id }: { id: string }) {
  const problem = problems.find((p) => p.id === id) || problems[0]

  const [score, setScore] = useState('')
  const [submittedScore, setSubmittedScore] = useState('')

  const handleSubmit = () => {
    if (!score) return
    setSubmittedScore(score)

    // Update URL with score (important for OG later)
    const url = new URL(window.location.href)
    url.searchParams.set('score', score)
    window.history.replaceState({}, '', url.toString())
  }

  const handleShare = () => {
    const shareUrl = window.location.href

    const fbUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
      shareUrl
    )}`

    window.open(fbUrl, '_blank')
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="max-w-xl w-full bg-white rounded-2xl border-2 border-blue-400 shadow-lg p-6 text-center space-y-4">
        
        {/* Header */}
        <h2 className="text-blue-500 tracking-widest text-sm">
          ACHIEVEMENT UNLOCKED
        </h2>

        <h1 className="text-2xl font-bold">
          Certificate of Completion
        </h1>

        <p className="text-gray-500 text-sm">
          This certifies that you have successfully conquered the
        </p>

        {/* Problem Title */}
        <h2 className="text-blue-600 text-xl font-semibold">
          {problem.title}
        </h2>

        <p className="text-gray-500 text-sm px-4">
          {problem.desc}
        </p>

        {/* Input */}
        <div className="flex gap-2 justify-center mt-4">
          <input
            type="number"
            placeholder="Enter XP"
            value={score}
            onChange={(e) => setScore(e.target.value)}
            className="border rounded px-3 py-2 outline-none"
          />
          <button
            onClick={handleSubmit}
            className="bg-blue-500 text-white px-4 py-2 rounded"
          >
            Submit
          </button>
        </div>

        {/* Result */}
        {submittedScore && (
          <>
            <div className="flex justify-center gap-4 mt-4">
              <div className="bg-yellow-100 px-4 py-2 rounded-lg">
                <p className="text-xs text-gray-500">XP Earned</p>
                <p className="font-bold text-yellow-600">
                  {submittedScore} XP
                </p>
              </div>

              <div className="bg-gray-100 px-4 py-2 rounded-lg">
                <p className="text-xs text-gray-500">Date</p>
                <p className="font-bold">
                  {new Date().toDateString()}
                </p>
              </div>
            </div>

            {/* Share */}
            <button
              onClick={handleShare}
              className="mt-4 bg-blue-600 text-white px-6 py-2 rounded-lg"
            >
              Share on Facebook
            </button>
          </>
        )}
      </div>
    </div>
  )
}