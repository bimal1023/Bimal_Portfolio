'use client'

export function useSounds() {
  function playPing() {
    const ctx = new AudioContext()

    // two-tone bell: fundamental + overtone for a rich chime feel
    const notes = [
      { freq: 1046.5, gain: 0.3, decay: 2.0 },  // C6
      { freq: 1318.5, gain: 0.15, decay: 1.5 },  // E6 overtone
    ]

    notes.forEach(({ freq, gain: peakGain, decay }) => {
      const gain = ctx.createGain()
      gain.connect(ctx.destination)
      gain.gain.setValueAtTime(0, ctx.currentTime)
      gain.gain.linearRampToValueAtTime(peakGain, ctx.currentTime + 0.005)
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + decay)

      const osc = ctx.createOscillator()
      osc.connect(gain)
      osc.type = 'sine'
      osc.frequency.setValueAtTime(freq, ctx.currentTime)
      osc.start(ctx.currentTime)
      osc.stop(ctx.currentTime + decay)
    })
  }

  function playPop() {
    const ctx = new AudioContext()
    const gain = ctx.createGain()
    gain.connect(ctx.destination)
    gain.gain.setValueAtTime(0.25, ctx.currentTime)
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.12)

    const osc = ctx.createOscillator()
    osc.connect(gain)
    osc.type = 'sine'
    osc.frequency.setValueAtTime(300, ctx.currentTime)
    osc.frequency.exponentialRampToValueAtTime(80, ctx.currentTime + 0.12)
    osc.start(ctx.currentTime)
    osc.stop(ctx.currentTime + 0.12)
  }

  return { playPing, playPop }
}
