<template>
  <div class="catalog">
    <div class="catalog-header">
      <h2 class="catalog-title">Каталог гамаков</h2>
      
      <div class="catalog-controls">
        <div class="filter-group">
          <label for="sort">Сортировка:</label>
          <select id="sort" v-model="sortBy" class="select-input">
            <option value="default">По умолчанию</option>
            <option value="price-asc">Цена: по возрастанию</option>
            <option value="price-desc">Цена: по убыванию</option>
            <option value="days-asc">Срок: меньше дней</option>
            <option value="days-desc">Срок: больше дней</option>
          </select>
        </div>

        <div class="filter-group">
          <label for="filter-size">Размер:</label>
          <select id="filter-size" v-model="filterSize" class="select-input">
            <option value="all">Все</option>
            <option value="small">Маленький</option>
            <option value="large">Большой</option>
          </select>
        </div>
      </div>
    </div>

    <div class="products-grid">
      <ProductCard 
        v-for="product in sortedProducts" 
        :key="product.id" 
        :product="product"
      />
    </div>

    <div v-if="sortedProducts.length === 0" class="no-products">
      <p>Товары не найдены</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import ProductCard from './ProductCard.vue'
import { products } from '@/data/products'
import type { IProduct } from '@/types/product'

const sortBy = ref<string>('default')
const filterSize = ref<string>('all')

const sortedProducts = computed(() => {
  let result: IProduct[] = [...products]

  // Фильтрация по размеру
  if (filterSize.value !== 'all') {
    // Для демонстрации показываем все товары, но можно добавить поле availableSizes
    // result = result.filter(p => p.availableSizes.includes(filterSize.value))
  }

  // Сортировка
  switch (sortBy.value) {
    case 'price-asc':
      result.sort((a, b) => a.priceLarge - b.priceLarge)
      break
    case 'price-desc':
      result.sort((a, b) => b.priceLarge - a.priceLarge)
      break
    case 'days-asc':
      result.sort((a, b) => a.productionDays - b.productionDays)
      break
    case 'days-desc':
      result.sort((a, b) => b.productionDays - a.productionDays)
      break
    default:
      // По умолчанию без сортировки
      break
  }

  return result
})
</script>

<style lang="scss" scoped>
.catalog {
  max-width: 1200px;
  margin: 0 auto;
  padding: 4rem 2rem;
}

.catalog-header {
  margin-bottom: 3rem;
}

.catalog-title {
  font-size: 2.5rem;
  font-weight: 700;
  color: #6b5b4f;
  margin-bottom: 2rem;
  text-align: center;
}

.catalog-controls {
  display: flex;
  gap: 2rem;
  justify-content: center;
  flex-wrap: wrap;
}

.filter-group {
  display: flex;
  align-items: center;
  gap: 0.75rem;

  label {
    font-size: 1rem;
    color: #6b5b4f;
    font-weight: 500;
  }
}

.select-input {
  padding: 0.6rem 1rem;
  border: 2px solid #d4b896;
  border-radius: 8px;
  background: white;
  color: #6b5b4f;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;
  min-width: 180px;

  &:hover {
    border-color: #8b7355;
  }

  &:focus {
    outline: none;
    border-color: #8b7355;
    box-shadow: 0 0 0 3px rgba(139, 115, 85, 0.1);
  }
}

.products-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
}

.no-products {
  text-align: center;
  padding: 4rem 2rem;
  color: #8b7355;
  font-size: 1.2rem;
}

@media (max-width: 768px) {
  .catalog {
    padding: 2rem 1rem;
  }

  .catalog-title {
    font-size: 2rem;
  }

  .catalog-controls {
    flex-direction: column;
    gap: 1rem;
  }

  .filter-group {
    width: 100%;
    flex-direction: column;
    align-items: stretch;

    label {
      text-align: left;
    }

    .select-input {
      width: 100%;
    }
  }

  .products-grid {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
}

@media (min-width: 769px) and (max-width: 1024px) {
  .products-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 1025px) {
  .products-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}
</style>

