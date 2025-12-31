<template>
  <div class="contacts-page">
    <div class="contacts-container">
      <h1 class="contacts-title">Контакты</h1>
      <div class="contacts-content">
        <div class="contact-info">
          <h2>Свяжитесь с нами</h2>
          <p>Мы с радостью ответим на все ваши вопросы и поможем выбрать идеальный гамак!</p>
          
          <div class="contact-methods">
            <a href="https://wa.me/79999999999" target="_blank" class="contact-button contact-button--whatsapp">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              WhatsApp
            </a>
            
            <a href="https://telegram.org" target="_blank" class="contact-button contact-button--telegram">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.562 8.161c-.169 1.858-.896 6.728-.896 6.728-.896 6.728-1.268 8.729-1.268 8.729s-.13.851-.569.985c-.438.135-1.037-.135-1.037-.135l-2.896-2.031s-4.036-1.47-4.703-1.63c-.667-.161-1.168.004-1.168.004l-1.063.728s-.515.319-.854.02c-.339-.299-.05-.896-.05-.896l2.55-5.092s7.057-8.232 7.289-8.737c.231-.505.17-.896-.035-1.169-.205-.274-.552-.04-.552-.04l-9.351 3.551s-.896.271-1.017.667c-.122.396.085.984.085.984l1.765 5.592s.299 1.064.598 1.086c.299.022.598-.022.598-.022l3.115-1.866c.299-.18.598 0 .598.299s-.598 2.327-1.196 4.05c-.598 1.724-1.196 3.55-1.196 3.55s-.065.494.231.641c.297.148.598-.044.598-.044l2.896-1.808c.299-.18 1.196-.598 1.196-.598s.598-.271.896-.133c.299.137.231.598.231.598l-1.196 4.149s-.044.598.299.744c.343.146.896-.271.896-.271l5.09-4.975c1.196-1.196 2.392-2.392 2.392-2.392s.598-.271.598-.641c0-.371-.598-.271-.598-.271z"/>
              </svg>
              Telegram
            </a>
          </div>
        </div>
        
        <div class="contact-image">
          <img src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800&h=600&fit=crop" alt="Контакты" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// Страница контактов
</script>

<style lang="scss" scoped>
.contacts-page {
  min-height: 60vh;
  background: linear-gradient(135deg, #f5e6d3 0%, #e6d5b8 100%);
  padding: 4rem 0;
}

.contacts-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

.contacts-title {
  font-size: 3rem;
  font-weight: 700;
  color: #6b5b4f;
  text-align: center;
  margin-bottom: 3rem;
}

.contacts-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
}

.contact-info {
  h2 {
    font-size: 2rem;
    color: #6b5b4f;
    margin-bottom: 1rem;
  }

  p {
    font-size: 1.2rem;
    color: #8b7355;
    line-height: 1.6;
    margin-bottom: 2rem;
  }
}

.contact-methods {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.contact-button {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1.2rem 2rem;
  border-radius: 12px;
  text-decoration: none;
  font-size: 1.2rem;
  font-weight: 600;
  transition: all 0.3s ease;
  color: white;

  svg {
    width: 28px;
    height: 28px;
  }

  &--whatsapp {
    background: linear-gradient(135deg, #25d366 0%, #128c7e 100%);
    box-shadow: 0 4px 15px rgba(37, 211, 102, 0.3);

    &:hover {
      transform: translateY(-3px);
      box-shadow: 0 6px 20px rgba(37, 211, 102, 0.4);
    }
  }

  &--telegram {
    background: linear-gradient(135deg, #0088cc 0%, #005f8a 100%);
    box-shadow: 0 4px 15px rgba(0, 136, 204, 0.3);

    &:hover {
      transform: translateY(-3px);
      box-shadow: 0 6px 20px rgba(0, 136, 204, 0.4);
    }
  }
}

.contact-image {
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}

@media (max-width: 968px) {
  .contacts-content {
    grid-template-columns: 1fr;
    gap: 2rem;
  }

  .contacts-title {
    font-size: 2.5rem;
  }

  .contact-info {
    h2 {
      font-size: 1.7rem;
    }

    p {
      font-size: 1.1rem;
    }
  }

  .contact-image {
    order: -1;
  }
}

@media (max-width: 568px) {
  .contacts-page {
    padding: 2rem 0;
  }

  .contacts-container {
    padding: 0 1rem;
  }

  .contacts-title {
    font-size: 2rem;
    margin-bottom: 2rem;
  }
}
</style>

