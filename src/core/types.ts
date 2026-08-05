export interface SocialLink {
  /** 平台名称（用于 aria-label / title / tooltip） */
  label: string
  /** 个人主页地址；留空表示该平台无值（置灰或隐藏） */
  url?: string
  /** simple-icons 风格的 24x24 SVG path */
  path: string
  /** 有值时的品牌色 */
  color: string
}
