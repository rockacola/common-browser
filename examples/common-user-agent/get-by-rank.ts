import { CommonUserAgent } from '../../lib'
;(async () => {
  const userAgent = CommonUserAgent.getRandom()
  console.log('userAgent:', userAgent)
})()
