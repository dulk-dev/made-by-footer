import { brandIcons } from './icons'
import type { SocialLink } from './types'

/** 「Made by」后默认显示的名字 */
export const DEFAULT_NAME = 'hi超纯'

/** 无值 icon 与「Made by」文案的置灰色 */
export const EMPTY_COLOR = '#9ca3af'

/** 默认社媒配置：hi超纯 的小红书 / X / GitHub，抖音无值占位 */
export const defaultLinks: SocialLink[] = [
  {
    label: '小红书',
    url: 'https://www.xiaohongshu.com/user/profile/6163ad690000000002026b33',
    path: brandIcons.xiaohongshu.path,
    color: brandIcons.xiaohongshu.color,
  },
  {
    label: 'X',
    url: 'https://x.com/hichaochun',
    path: brandIcons.x.path,
    color: brandIcons.x.color,
  },
  {
    label: '抖音',
    path: brandIcons.douyin.path,
    color: brandIcons.douyin.color,
  },
  {
    label: 'GitHub',
    url: 'https://github.com/dulk-dev',
    path: brandIcons.github.path,
    color: brandIcons.github.color,
  },
]
