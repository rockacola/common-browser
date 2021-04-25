export type UserAgentSoftware = string
export type UserAgentOs = 'Android' | 'Linux' | 'Windows' | 'iOS' | 'macOS'
export type UserAgentEngine =
  | 'Blink'
  | 'EdgeHTML'
  | 'Gecko'
  | 'Trident'
  | 'WebKit'

export interface UserAgentDataItem {
  rank: number
  ua: string
  software: UserAgentSoftware
  os: UserAgentOs
  engine: UserAgentEngine
}
