import { CommonUserAgent } from '../lib'

describe('CommonUserAgent', () => {
  test('getRandom', () => {
    const res = CommonUserAgent.getRandom()
    expect(res.length).toBeGreaterThan(10)
  })

  test('getTotalLength', () => {
    const res = CommonUserAgent.getTotalLength()
    expect(res).toBe(50)
  })

  test('getByRank', () => {
    const res = CommonUserAgent.getByRank(1)
    expect(res).toContain('Mozilla/5.0')
  })
})
