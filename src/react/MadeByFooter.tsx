import { useMemo } from 'react'
import {
  DEFAULT_NAME,
  defaultLinks,
  EMPTY_COLOR,
  resolveLinks,
  type SocialLink,
} from '../core'
import './styles'

export interface MadeByFooterProps {
  /** 「Made by」后显示的名字 */
  name?: string
  /** 社媒链接列表，默认渲染内置的 hi超纯 社媒配置 */
  links?: SocialLink[]
  /** 无值（无 url）的平台是否以置灰 icon 占位显示；默认 false 直接隐藏 */
  showEmpty?: boolean
}

export function MadeByFooter({
  name = DEFAULT_NAME,
  links = defaultLinks,
  showEmpty = false,
}: MadeByFooterProps) {
  const visibleLinks = useMemo(() => resolveLinks(links, showEmpty), [links, showEmpty])

  return (
    <footer className="mbf-footer">
      <span className="mbf-text">
        Made by <span className="mbf-name">{name}</span>
      </span>

      {visibleLinks.map((link) =>
        link.url ? (
          <a
            key={link.label}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            title={link.label}
            aria-label={link.label}
            className="mbf-link"
          >
            <svg viewBox="0 0 24 24" className="mbf-icon" style={{ fill: link.color }} aria-hidden="true">
              <path d={link.path} />
            </svg>
          </a>
        ) : (
          <span key={link.label} aria-label={`${link.label}（暂未开通）`} className="mbf-empty">
            <svg viewBox="0 0 24 24" className="mbf-icon" style={{ fill: EMPTY_COLOR }} aria-hidden="true">
              <path d={link.path} />
            </svg>
            {/* 无值平台悬停提示 */}
            <span className="mbf-tooltip">
              {link.label} · 暂未开通
              <span className="mbf-tooltip-arrow" />
            </span>
          </span>
        ),
      )}
    </footer>
  )
}
