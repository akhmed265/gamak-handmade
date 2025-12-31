<template>
  <section class="hero">
    <div class="hero-content">
      <h1 class="hero-title">Вязаные гамаки ручной работы</h1>
      <p class="hero-subtitle">Уникальные изделия для вашего уютного отдыха</p>
      <router-link to="/catalog" class="hero-button">Смотреть каталог</router-link>
    </div>
    <div class="hero-image">
      <img src="https://images.unsplash.com/photo-1582765872397-0372c3dddc67?w=1200&h=800&fit=crop" alt="Гамак" />
    </div>
  </section>
</template>

<script setup lang="ts">
// Компонент герой-баннера
</script>

<style lang="scss" scoped>
.hero {
  position: relative;
  min-height: 600px;
  display: flex;
  align-items: center;
  background: linear-gradient(135deg, #f5e6d3 0%, #e6d5b8 50%, #d4b896 100%);
  overflow: hidden;
  padding: 4rem 2rem;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: 
      radial-gradient(circle at 20% 50%, rgba(201, 168, 118, 0.1) 0%, transparent 50%),
      radial-gradient(circle at 80% 80%, rgba(139, 115, 85, 0.1) 0%, transparent 50%);
    pointer-events: none;
  }
}

.hero-content {
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
  z-index: 2;
  position: relative;
  text-align: center;
}

.hero-title {
  font-size: 3.5rem;
  font-weight: 700;
  color: #6b5b4f;
  margin-bottom: 1.5rem;
  line-height: 1.2;
  text-shadow: 2px 2px 4px rgba(255, 255, 255, 0.5);
}

.hero-subtitle {
  font-size: 1.5rem;
  color: #8b7355;
  margin-bottom: 2.5rem;
  font-weight: 300;
}

.hero-button {
  display: inline-block;
  padding: 1rem 3rem;
  background: linear-gradient(135deg, #8b7355 0%, #a0826d 100%);
  color: white;
  text-decoration: none;
  border-radius: 50px;
  font-size: 1.2rem;
  font-weight: 600;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(139, 115, 85, 0.3);

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 6px 20px rgba(139, 115, 85, 0.4);
    background: linear-gradient(135deg, #a0826d 0%, #8b7355 100%);
  }
}

.hero-image {
  position: absolute;
  top: 0;
  right: 0;
  width: 50%;
  height: 100%;
  opacity: 0.3;
  z-index: 1;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}

@media (max-width: 968px) {
  .hero {
    min-height: 500px;
    padding: 3rem 1.5rem;
  }

  .hero-title {
    font-size: 2.5rem;
  }

  .hero-subtitle {
    font-size: 1.2rem;
  }

  .hero-image {
    width: 100%;
    opacity: 0.2;
  }
}

@media (max-width: 568px) {
  .hero {
    min-height: 400px;
    padding: 2rem 1rem;
  }

  .hero-title {
    font-size: 2rem;
  }

  .hero-subtitle {
    font-size: 1rem;
  }

  .hero-button {
    padding: 0.8rem 2rem;
    font-size: 1rem;
  }
}
</style>

