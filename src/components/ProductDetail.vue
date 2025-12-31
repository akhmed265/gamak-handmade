<template>
  <div class="product-detail">
    <div v-if="product" class="detail-container">
      <div class="detail-images">
        <div class="main-image">
          <img :src="currentMainImage" :alt="product.title" />
        </div>
        <div class="thumbnail-list">
          <button
            v-for="(image, index) in currentImages"
            :key="index"
            class="thumbnail"
            :class="{ active: currentImageIndex === index }"
            @click="currentImageIndex = index"
          >
            <img :src="getImageUrl(image)" :alt="`${product.title} ${index + 1}`" />
          </button>
        </div>
      </div>

      <div class="detail-info">
        <h1 class="detail-title">{{ product.title }}</h1>
        <p class="detail-description">{{ product.description }}</p>

        <div class="detail-size-selector">
          <h3>Выберите размер:</h3>
          <div class="size-buttons">
            <button 
              class="size-button"
              :class="{ active: size === 'small' }"
              @click="size = 'small'"
            >
              <span class="size-label">Маленький</span>
              <span class="size-price">{{ product.priceSmall.toLocaleString('ru-RU') }} ₽</span>
            </button>
            <button 
              class="size-button"
              :class="{ active: size === 'large' }"
              @click="size = 'large'"
            >
              <span class="size-label">Большой</span>
              <span class="size-price">{{ product.priceLarge.toLocaleString('ru-RU') }} ₽</span>
            </button>
          </div>
        </div>

        <div class="detail-production">
          <svg class="icon-clock" width="20" height="20" viewBox="0 0 16 16" fill="none">
            <circle cx="8" cy="8" r="7" stroke="currentColor" stroke-width="1.5"/>
            <path d="M8 4V8L10.5 10.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
          </svg>
          <span>Срок изготовки: {{ product.productionDays }} дней</span>
        </div>

        <div class="detail-colors">
          <h3>Доступные цвета:</h3>
          <div class="colors-grid">
            <button
              v-for="(color, index) in product.colors"
              :key="index"
              class="color-button"
              :class="{ active: selectedColor === color }"
              :style="{ backgroundColor: color }"
              @click="selectColor(color)"
            >
              <span v-if="selectedColor === color" class="checkmark">✓</span>
            </button>
          </div>
        </div>

        <div class="detail-actions">
          <a 
            :href="`https://wa.me/79999999999?text=Здравствуйте! Меня интересует ${product.title} (размер: ${size === 'large' ? 'Большой' : 'Маленький'}, цвет: ${selectedColor})`"
            target="_blank"
            class="action-button action-button--primary"
          >
            Заказать в WhatsApp
          </a>
          <button @click="$router.back()" class="action-button action-button--secondary">
            Вернуться назад
          </button>
        </div>
      </div>
    </div>
    <div v-else class="not-found">
      <p>Товар не найден</p>
      <router-link to="/catalog" class="back-link">Вернуться в каталог</router-link>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, watch } from 'vue'
import { useRoute } from 'vue-router'
import { products } from '@/data/products'

const route = useRoute()
const productId = route.params.id as string

const product = computed(() => products.find(p => p.id === productId))
const size = ref<'small' | 'large'>('large')
const selectedColor = ref<string>('')
const currentImageIndex = ref<number>(0)

// Инициализация цвета при загрузке продукта
watch(product, (newProduct) => {
  if (newProduct && newProduct.colors.length > 0) {
    selectedColor.value = newProduct.colors[0]
  }
}, { immediate: true })

const currentImages = computed(() => {
  if (!product.value || !selectedColor.value) return []
  return product.value.images[selectedColor.value] || []
})

const getImageUrl = (imagePath: string): string => {
  if (!imagePath) return ''
  const base = import.meta.env.BASE_URL
  if (imagePath.startsWith('/')) {
    return `${base}${imagePath.slice(1)}`
  }
  return imagePath
}

const currentMainImage = computed(() => {
  if (currentImages.value.length === 0) return ''
  const imagePath = currentImages.value[currentImageIndex.value] || currentImages.value[0]
  return getImageUrl(imagePath)
})

const selectColor = (color: string) => {
  selectedColor.value = color
  currentImageIndex.value = 0
}

watch(selectedColor, () => {
  currentImageIndex.value = 0
})
</script>

<style lang="scss" scoped>
.product-detail {
  max-width: 1200px;
  margin: 0 auto;
  padding: 4rem 2rem;
}

.detail-container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: start;
}

.detail-images {
  position: sticky;
  top: 100px;
}

.main-image {
  width: 100%;
  aspect-ratio: 4/3;
  border-radius: 12px;
  overflow: hidden;
  margin-bottom: 1rem;
  background: #f5e6d3;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}

.thumbnail-list {
  display: flex;
  gap: 1rem;
  overflow-x: auto;
  padding-bottom: 0.5rem;
}

.thumbnail {
  flex-shrink: 0;
  width: 80px;
  height: 80px;
  border-radius: 8px;
  overflow: hidden;
  border: 3px solid transparent;
  cursor: pointer;
  transition: all 0.3s ease;
  background: #f5e6d3;
  padding: 0;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  &:hover {
    border-color: #d4b896;
    transform: scale(1.05);
  }

  &.active {
    border-color: #8b7355;
    box-shadow: 0 0 0 2px white, 0 0 0 4px #8b7355;
  }
}

.detail-info {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.detail-title {
  font-size: 2.5rem;
  font-weight: 700;
  color: #6b5b4f;
  margin: 0;
}

.detail-description {
  font-size: 1.1rem;
  color: #8b7355;
  line-height: 1.6;
  margin: 0;
}

.detail-size-selector {
  h3 {
    font-size: 1.2rem;
    color: #6b5b4f;
    margin-bottom: 1rem;
  }
}

.size-buttons {
  display: flex;
  gap: 1rem;
}

.size-button {
  flex: 1;
  padding: 1.5rem;
  border: 2px solid #d4b896;
  background: white;
  border-radius: 12px;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  align-items: center;

  &:hover {
    border-color: #8b7355;
    background: #f5e6d3;
  }

  &.active {
    background: linear-gradient(135deg, #8b7355 0%, #a0826d 100%);
    border-color: #8b7355;
    color: white;

    .size-label,
    .size-price {
      color: white;
    }
  }
}

.size-label {
  font-size: 1rem;
  font-weight: 500;
  color: #6b5b4f;
}

.size-price {
  font-size: 1.5rem;
  font-weight: 700;
  color: #a0826d;
}

.detail-production {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 1rem;
  background: #f5e6d3;
  border-radius: 8px;
  color: #6b5b4f;
  font-size: 1.1rem;

  .icon-clock {
    color: #8b7355;
    flex-shrink: 0;
  }
}

.detail-colors {
  h3 {
    font-size: 1.2rem;
    color: #6b5b4f;
    margin-bottom: 1rem;
  }
}

.colors-grid {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
}

.color-button {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: 3px solid white;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  padding: 0;

  &:hover {
    transform: scale(1.1);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
  }

  &.active {
    transform: scale(1.15);
    border-color: #8b7355;
    box-shadow: 0 0 0 2px white, 0 0 0 4px #8b7355;

    .checkmark {
      color: white;
      font-size: 1.5rem;
      font-weight: bold;
      text-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
    }
  }
}

.detail-actions {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
}

.action-button {
  flex: 1;
  min-width: 200px;
  padding: 1rem 2rem;
  border: none;
  border-radius: 50px;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;

  &--primary {
    background: linear-gradient(135deg, #25d366 0%, #128c7e 100%);
    color: white;
    box-shadow: 0 4px 15px rgba(37, 211, 102, 0.3);

    &:hover {
      transform: translateY(-2px);
      box-shadow: 0 6px 20px rgba(37, 211, 102, 0.4);
    }
  }

  &--secondary {
    background: white;
    color: #8b7355;
    border: 2px solid #d4b896;

    &:hover {
      background: #f5e6d3;
      border-color: #8b7355;
    }
  }
}

.not-found {
  text-align: center;
  padding: 4rem 2rem;
  color: #8b7355;
}

.back-link {
  display: inline-block;
  margin-top: 1rem;
  color: #8b7355;
  text-decoration: none;
  font-weight: 500;

  &:hover {
    text-decoration: underline;
  }
}

@media (max-width: 968px) {
  .detail-container {
    grid-template-columns: 1fr;
    gap: 2rem;
  }

  .detail-images {
    position: static;
  }

  .detail-title {
    font-size: 2rem;
  }

  .size-buttons {
    flex-direction: column;
  }
}

@media (max-width: 568px) {
  .product-detail {
    padding: 2rem 1rem;
  }

  .detail-title {
    font-size: 1.7rem;
  }

  .detail-actions {
    flex-direction: column;
  }

  .action-button {
    width: 100%;
  }
}
</style>

