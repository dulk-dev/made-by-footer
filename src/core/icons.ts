import { siGithub, siTiktok, siX, siXiaohongshu } from 'simple-icons'

export interface BrandIcon {
  path: string
  color: string
}

/**
 * 常用社媒平台的品牌图标（simple-icons 官方 path + 品牌色）。
 * 注意：simple-icons 未收录抖音，抖音与 TikTok 的音符字形一致，
 * 这里借用 siTiktok 的 path 作为抖音占位图标。
 */
export const brandIcons = {
  xiaohongshu: { path: siXiaohongshu.path, color: `#${siXiaohongshu.hex}` },
  x: { path: siX.path, color: `#${siX.hex}` },
  douyin: { path: siTiktok.path, color: `#${siTiktok.hex}` },
  github: { path: siGithub.path, color: `#${siGithub.hex}` },
} satisfies Record<string, BrandIcon>
