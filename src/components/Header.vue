<template>
  <header class="header">
    <div class="container">
      <router-link to="/" class="logo">
        <span class="logo-text">Gamak</span>
        <span class="logo-text logo-text--handmade">Handmade</span>
      </router-link>
      <nav class="nav">
        <router-link to="/" class="nav-link">Главная</router-link>
        <router-link to="/catalog" class="nav-link">Каталог</router-link>
        <router-link to="/contacts" class="nav-link">Контакты</router-link>
      </nav>
    </div>
  </header>
</template>

<script setup lang="ts">
// Компонент шапки
</script>

<style lang="scss" scoped>
.header {
  background: linear-gradient(135deg, #f5e6d3 0%, #e6d5b8 100%);
  padding: 1.5rem 0;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
  position: sticky;
  top: 0;
  z-index: 100;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 1.5rem;
}

.logo {
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }
}

.logo-text {
  font-size: 2rem;
  font-weight: 700;
  color: #8b7355;
  position: relative;
  letter-spacing: 2px;
  text-transform: uppercase;
  
  &::before {
    content: '';
    position: absolute;
    bottom: -5px;
    left: 0;
    width: 100%;
    height: 3px;
    background: linear-gradient(90deg, #c9a876 0%, #a0826d 50%, #c9a876 100%);
    transform: scaleX(0);
    transform-origin: left;
    transition: transform 0.3s ease;
  }

  &:hover::before {
    transform: scaleX(1);
  }

  &--handmade {
    color: #a0826d;
    font-size: 1.5rem;
    font-weight: 400;
    font-style: italic;
    letter-spacing: 3px;

    &::after {
      content: '✽';
      position: absolute;
      right: -20px;
      top: 50%;
      transform: translateY(-50%);
      font-size: 1rem;
      color: #c9a876;
      animation: pulse 2s ease-in-out infinite;
    }
  }
}

@keyframes pulse {
  0%, 100% {
    opacity: 0.5;
    transform: translateY(-50%) scale(1);
  }
  50% {
    opacity: 1;
    transform: translateY(-50%) scale(1.2);
  }
}

.nav {
  display: flex;
  gap: 2rem;
  flex-wrap: wrap;
}

.nav-link {
  color: #6b5b4f;
  text-decoration: none;
  font-size: 1.1rem;
  font-weight: 500;
  position: relative;
  padding: 0.5rem 0;
  transition: color 0.3s ease;

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0;
    height: 2px;
    background: #8b7355;
    transition: width 0.3s ease;
  }

  &:hover,
  &.router-link-active {
    color: #8b7355;
    
    &::after {
      width: 100%;
    }
  }
}

@media (max-width: 768px) {
  .container {
    flex-direction: column;
    padding: 0 1rem;
  }

  .logo-text {
    font-size: 1.5rem;
    
    &--handmade {
      font-size: 1.2rem;
    }
  }

  .nav {
    gap: 1rem;
    justify-content: center;
    width: 100%;
  }

  .nav-link {
    font-size: 1rem;
  }
}
</style>

