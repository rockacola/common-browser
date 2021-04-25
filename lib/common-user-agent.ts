import userAgents from '../data/ua.json'

export class CommonUserAgent {
  static getRandom(): string {
    const randomIndex = Math.floor(Math.random() * userAgents.length)
    return userAgents[randomIndex].ua
  }

  static getByRank(rank: number): string | undefined {
    return userAgents.find((ua) => ua.rank === rank)?.ua
  }

  static getTotalLength(): number {
    return userAgents.length
  }
}
