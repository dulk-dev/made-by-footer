import type { SocialLink } from './types'

/**
 * 解析最终要渲染的链接列表：
 * - showEmpty 为 false 时过滤掉无值平台
 * - 有值的排在前面，无值的始终排在队列尾部（保持各自相对顺序）
 */
export function resolveLinks(links: SocialLink[], showEmpty = true): SocialLink[] {
  const visible = showEmpty ? links : links.filter((link) => link.url)
  return [...visible].sort((a, b) => Number(!a.url) - Number(!b.url))
}
