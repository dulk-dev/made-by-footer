import { describe, expect, it } from 'vitest'
import { defaultLinks } from './defaults'
import { resolveLinks } from './resolve'
import type { SocialLink } from './types'

const link = (label: string, url?: string): SocialLink => ({
  label,
  url,
  path: 'M0 0h24v24H0z',
  color: '#000000',
})

describe('resolveLinks', () => {
  it('无值的始终排在队列尾部，保持各自相对顺序', () => {
    const links = [link('a'), link('b', 'https://b'), link('c'), link('d', 'https://d')]
    expect(resolveLinks(links).map((l) => l.label)).toEqual(['b', 'd', 'a', 'c'])
  })

  it('showEmpty 为 false 时过滤掉无值平台', () => {
    const links = [link('a'), link('b', 'https://b')]
    expect(resolveLinks(links, false).map((l) => l.label)).toEqual(['b'])
  })

  it('默认配置：抖音无值排在最后', () => {
    const labels = resolveLinks(defaultLinks).map((l) => l.label)
    expect(labels[labels.length - 1]).toBe('抖音')
    expect(labels.slice(0, 3)).toEqual(['小红书', 'X', 'GitHub'])
  })
})
