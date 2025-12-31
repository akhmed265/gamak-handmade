import type { IProduct } from '@/types/product'

export const products: IProduct[] = [
  {
    id: '1',
    title: 'Гамак "Уют"',
    description: 'Классический гамак ручной работы из натуральной хлопковой нити. Идеален для отдыха в саду или на даче.',
    priceLarge: 8500,
    priceSmall: 6500,
    productionDays: 7,
    colors: ['#C9A876', '#8B7355', '#D4B896', '#A0826D'],
    images: {
      '#C9A876': [
        '/images/1/1.webp',
        '/images/1/2.webp',
        '/images/1/3.webp'
      ],
      '#8B7355': [
        '/images/1/2.webp',
        '/images/1/3.webp',
        '/images/1/4.webp'
      ],
      '#D4B896': [
        '/images/1/3.webp',
        '/images/1/4.webp',
        '/images/1/5.webp'
      ],
      '#A0826D': [
        '/images/1/4.webp',
        '/images/1/5.webp',
        '/images/1/1.webp'
      ]
    }
  },
  {
    id: '2',
    title: 'Гамак "Мечта"',
    description: 'Просторный гамак для комфортного отдыха на природе. Изготовлен из прочной макраме-нити.',
    priceLarge: 12000,
    priceSmall: 9500,
    productionDays: 10,
    colors: ['#E6D5B8', '#B89B6D', '#F5E6D3', '#C9A876'],
    images: {
      '#E6D5B8': [
        '/images/2/1.webp',
        '/images/2/2.webp',
        '/images/2/3.webp'
      ],
      '#B89B6D': [
        '/images/2/2.webp',
        '/images/2/3.webp',
        '/images/2/4.webp'
      ],
      '#F5E6D3': [
        '/images/2/3.webp',
        '/images/2/4.webp',
        '/images/2/5.webp'
      ],
      '#C9A876': [
        '/images/2/4.webp',
        '/images/2/5.webp',
        '/images/2/6.webp',
        '/images/2/7.webp'
      ]
    }
  },
  {
    id: '3',
    title: 'Гамак "Роскошь"',
    description: 'Премиум гамак с дополнительными декоративными элементами. Максимальный комфорт и элегантность.',
    priceLarge: 15000,
    priceSmall: 12000,
    productionDays: 14,
    colors: ['#8B7355', '#6B5B4F', '#A0826D', '#4A4037'],
    images: {
      '#8B7355': [
        'https://images.unsplash.com/photo-1517770413964-df8ca61194a6?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1582765872397-0372c3dddc67?w=800&h=600&fit=crop'
      ],
      '#6B5B4F': [
        'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800&h=600&fit=crop'
      ],
      '#A0826D': [
        'https://images.unsplash.com/photo-1582765872397-0372c3dddc67?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1517770413964-df8ca61194a6?w=800&h=600&fit=crop'
      ],
      '#4A4037': [
        'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800&h=600&fit=crop'
      ]
    }
  },
  {
    id: '4',
    title: 'Гамак "Летний"',
    description: 'Легкий воздушный гамак для жарких дней. Отличная вентиляция и комфорт.',
    priceLarge: 7500,
    priceSmall: 5800,
    productionDays: 5,
    colors: ['#F5E6D3', '#E6D5B8', '#D4B896', '#C9A876'],
    images: {
      '#F5E6D3': [
        'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1582765872397-0372c3dddc67?w=800&h=600&fit=crop'
      ],
      '#E6D5B8': [
        'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800&h=600&fit=crop'
      ],
      '#D4B896': [
        'https://images.unsplash.com/photo-1517770413964-df8ca61194a6?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1582765872397-0372c3dddc67?w=800&h=600&fit=crop'
      ],
      '#C9A876': [
        'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800&h=600&fit=crop'
      ]
    }
  },
  {
    id: '5',
    title: 'Гамак "Классик"',
    description: 'Традиционный дизайн с современными материалами. Проверенная надежность и комфорт.',
    priceLarge: 9000,
    priceSmall: 7000,
    productionDays: 8,
    colors: ['#A0826D', '#8B7355', '#6B5B4F', '#4A4037'],
    images: {
      '#A0826D': [
        'https://images.unsplash.com/photo-1582765872397-0372c3dddc67?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop'
      ],
      '#8B7355': [
        'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1517770413964-df8ca61194a6?w=800&h=600&fit=crop'
      ],
      '#6B5B4F': [
        'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1582765872397-0372c3dddc67?w=800&h=600&fit=crop'
      ],
      '#4A4037': [
        'https://images.unsplash.com/photo-1517770413964-df8ca61194a6?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800&h=600&fit=crop'
      ]
    }
  },
  {
    id: '6',
    title: 'Гамак "Эко"',
    description: 'Экологичный гамак из органических материалов. Для тех, кто ценит природу и комфорт.',
    priceLarge: 11000,
    priceSmall: 8800,
    productionDays: 12,
    colors: ['#9CAF88', '#7A9570', '#B8C9A8', '#6B8E5F'],
    images: {
      '#9CAF88': [
        'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop'
      ],
      '#7A9570': [
        'https://images.unsplash.com/photo-1517770413964-df8ca61194a6?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1582765872397-0372c3dddc67?w=800&h=600&fit=crop'
      ],
      '#B8C9A8': [
        'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800&h=600&fit=crop'
      ],
      '#6B8E5F': [
        'https://images.unsplash.com/photo-1582765872397-0372c3dddc67?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1517770413964-df8ca61194a6?w=800&h=600&fit=crop'
      ]
    }
  }
]

