import { CommonUserAgent } from '../../lib'
;(async () => {
  const rank = 12
  const userAgent = CommonUserAgent.getByRank(rank)
  console.log('userAgent:', userAgent)
})()
