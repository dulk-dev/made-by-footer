/**
 * 组件样式（与 Vue 壳的 scoped CSS 同款，类名带 mbf- 前缀避免冲突）。
 * 模块加载时幂等注入 <style data-mbf>，SSR 环境下自动跳过。
 */
const MBF_CSS = `
.mbf-footer {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  padding: 1.5rem 0;
  font-size: 0.875rem;
  user-select: none;
}
.mbf-text {
  letter-spacing: 0.025em;
  color: #9ca3af;
}
.mbf-name {
  font-weight: 600;
}
.mbf-link {
  line-height: 0;
  transition: transform 0.2s;
}
.mbf-link:hover {
  transform: scale(1.1);
}
.mbf-icon {
  display: block;
  width: 1rem;
  height: 1rem;
}
.mbf-empty {
  position: relative;
  line-height: 0;
  cursor: default;
  opacity: 0.6;
}
.mbf-tooltip {
  pointer-events: none;
  position: absolute;
  bottom: 100%;
  left: 50%;
  transform: translateX(-50%);
  margin-bottom: 0.5rem;
  padding: 0.25rem 0.5rem;
  border-radius: 0.375rem;
  background: #1f2937;
  color: #ffffff;
  font-size: 0.75rem;
  line-height: 1.25;
  white-space: nowrap;
  opacity: 0;
  transition: opacity 0.2s;
}
.mbf-empty:hover .mbf-tooltip {
  opacity: 1;
}
.mbf-tooltip-arrow {
  position: absolute;
  top: 100%;
  left: 50%;
  transform: translateX(-50%);
  border: 4px solid transparent;
  border-top-color: #1f2937;
}
`

function injectStyles(): void {
  if (typeof document === 'undefined' || document.querySelector('style[data-mbf]')) return
  const style = document.createElement('style')
  style.dataset.mbf = ''
  style.textContent = MBF_CSS
  document.head.appendChild(style)
}

injectStyles()
