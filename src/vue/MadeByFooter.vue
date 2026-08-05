<script setup lang="ts">
import { computed } from 'vue'
import {
  DEFAULT_NAME,
  defaultLinks,
  EMPTY_COLOR,
  resolveLinks,
  type SocialLink,
} from '../core'

const props = withDefaults(
  defineProps<{
    /** 「Made by」后显示的名字 */
    name?: string
    /** 社媒链接列表，默认渲染内置的 hi超纯 社媒配置 */
    links?: SocialLink[]
    /** 无值（无 url）的平台是否以置灰 icon 占位显示；默认 false 直接隐藏 */
    showEmpty?: boolean
  }>(),
  {
    name: DEFAULT_NAME,
    links: () => defaultLinks,
    showEmpty: false,
  },
)

const visibleLinks = computed(() => resolveLinks(props.links, props.showEmpty))
</script>

<template>
  <footer class="mbf-footer">
    <span class="mbf-text">
      Made by <span class="mbf-name">{{ name }}</span>
    </span>

    <template v-for="link in visibleLinks" :key="link.label">
      <a
        v-if="link.url"
        :href="link.url"
        target="_blank"
        rel="noopener noreferrer"
        :title="link.label"
        :aria-label="link.label"
        class="mbf-link"
      >
        <svg viewBox="0 0 24 24" class="mbf-icon" :style="{ fill: link.color }" aria-hidden="true">
          <path :d="link.path" />
        </svg>
      </a>
      <span v-else :aria-label="`${link.label}（暂未开通）`" class="mbf-empty">
        <svg viewBox="0 0 24 24" class="mbf-icon" :style="{ fill: EMPTY_COLOR }" aria-hidden="true">
          <path :d="link.path" />
        </svg>
        <!-- 无值平台悬停提示 -->
        <span class="mbf-tooltip">
          {{ link.label }} · 暂未开通
          <span class="mbf-tooltip-arrow"></span>
        </span>
      </span>
    </template>
  </footer>
</template>

<style scoped>
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
</style>
