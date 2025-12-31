<template>
  <article class="product-card">
    <div class="product-image-wrapper" @click="$router.push(`/product/${product.id}`)">
      <img 
        :src="currentImage" 
        :alt="product.title"
        class="product-image"
        loading="lazy"
      />
    </div>
    
    <div class="product-content">
      <h3 class="product-title" @click="$router.push(`/product/${product.id}`)">{{ product.title }}</h3>
      
      <div class="product-size-selector">
        <button 
          class="size-button"
          :class="{ active: size === 'small' }"
          @click="size = 'small'"
        >
          Маленький
        </button>
        <button 
          class="size-button"
          :class="{ active: size === 'large' }"
          @click="size = 'large'"
        >
          Большой
        </button>
      </div>

      <div class="product-price">
        {{ formattedPrice }} ₽
      </div>

      <div class="product-production">
        <svg class="icon-clock" width="16" height="16" viewBox="0 0 16 16" fill="none">
          <circle cx="8" cy="8" r="7" stroke="currentColor" stroke-width="1.5"/>
          <path d="M8 4V8L10.5 10.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
        </svg>
        <span>Срок изготовки: {{ product.productionDays }} дней</span>
      </div>

      <div class="product-colors">
        <span class="colors-label">Цвета:</span>
        <div class="colors-list">
          <button
            v-for="(color, index) in product.colors"
            :key="index"
            class="color-circle"
            :class="{ active: selectedColor === color }"
            :style="{ backgroundColor: color }"
            @click="selectColor(color)"
            :title="`Цвет ${index + 1}`"
          />
        </div>
      </div>
    </div>
  </article>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import type { IProduct } from '@/types/product'

interface Props {
  product: IProduct
}

const props = defineProps<Props>()

const size = ref<'small' | 'large'>('large')
const selectedColor = ref<string>(props.product.colors[0])

const formattedPrice = computed(() => {
  const price = size.value === 'large' ? props.product.priceLarge : props.product.priceSmall
  return price.toLocaleString('ru-RU')
})

const currentImage = computed(() => {
  const colorImages = props.product.images[selectedColor.value]
  return colorImages ? colorImages[0] : 'https://via.placeholder.com/400x300?text=Gamak'
})

const selectColor = (color: string) => {
  selectedColor.value = color
}
</script>

<style lang="scss" scoped>
.product-card {
  background: white;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.08);
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.12);
  }
}

.product-image-wrapper {
  position: relative;
  width: 100%;
  padding-top: 75%;
  overflow: hidden;
  cursor: pointer;
  background: #f5e6d3;
}

.product-image {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;

  .product-card:hover & {
    transform: scale(1.05);
  }
}

.product-content {
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  flex: 1;
}

.product-title {
  font-size: 1.5rem;
  font-weight: 600;
  color: #6b5b4f;
  margin: 0;
  cursor: pointer;
  transition: color 0.3s ease;

  &:hover {
    color: #8b7355;
  }
}

.product-size-selector {
  display: flex;
  gap: 0.5rem;
  margin-top: 0.5rem;
}

.size-button {
  flex: 1;
  padding: 0.6rem 1rem;
  border: 2px solid #d4b896;
  background: white;
  color: #8b7355;
  border-radius: 8px;
  font-size: 0.9rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    border-color: #8b7355;
    background: #f5e6d3;
  }

  &.active {
    background: #8b7355;
    color: white;
    border-color: #8b7355;
  }
}

.product-price {
  font-size: 2rem;
  font-weight: 700;
  color: #a0826d;
  margin-top: 0.5rem;
}

.product-production {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: #6b5b4f;
  font-size: 0.95rem;

  .icon-clock {
    color: #8b7355;
    flex-shrink: 0;
  }
}

.product-colors {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-top: auto;
  padding-top: 1rem;
  border-top: 1px solid #e6d5b8;
}

.colors-label {
  font-size: 0.9rem;
  color: #6b5b4f;
  font-weight: 500;
}

.colors-list {
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
}

.color-circle {
  width: 28px;
  height: 28px;
  border-radius: 50%;
  border: 3px solid white;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);

  &:hover {
    transform: scale(1.15);
    box-shadow: 0 3px 8px rgba(0, 0, 0, 0.3);
  }

  &.active {
    transform: scale(1.2);
    border-color: #8b7355;
    box-shadow: 0 0 0 2px white, 0 0 0 4px #8b7355;
  }
}

@media (max-width: 768px) {
  .product-content {
    padding: 1rem;
  }

  .product-title {
    font-size: 1.3rem;
  }

  .product-price {
    font-size: 1.7rem;
  }
}
</style>

