import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="gallery" id="galeria">
      <h2>Nossa Galeria</h2>
      <p class="subtitle">Conheça alguns dos nossos trabalhos mais recentes</p>
      <div class="gallery-grid">
        <div class="gallery-item" *ngFor="let item of galleryItems">
          <img [src]="item.image" [alt]="item.title">
          <div class="gallery-overlay">
            <h3>{{ item.title }}</h3>
            <p>{{ item.description }}</p>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .gallery {
      padding: 6rem 0;
      background-color: var(--light-color);
    }

    h2 {
      text-align: center;
      font-size: 2.5rem;
      color: var(--dark-color);
      margin-bottom: 1rem;
    }

    .subtitle {
      text-align: center;
      color: var(--text-color);
      margin-bottom: 3rem;
    }

    .gallery-grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 2rem;
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 1rem;
    }

    .gallery-item {
      position: relative;
      border-radius: 8px;
      overflow: hidden;
      aspect-ratio: 1;
      cursor: pointer;

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        transition: transform 0.3s ease;
      }

      &:hover {
        img {
          transform: scale(1.1);
        }

        .gallery-overlay {
          opacity: 1;
        }
      }
    }

    .gallery-overlay {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(0, 0, 0, 0.7);
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      padding: 2rem;
      text-align: center;
      opacity: 0;
      transition: opacity 0.3s ease;

      h3 {
        color: white;
        font-size: 1.5rem;
        margin-bottom: 1rem;
      }

      p {
        color: var(--text-light);
        line-height: 1.6;
      }
    }

    @media (max-width: 992px) {
      .gallery-grid {
        grid-template-columns: repeat(2, 1fr);
      }
    }

    @media (max-width: 768px) {
      .gallery {
        padding: 4rem 0;
      }

      .gallery-grid {
        grid-template-columns: 1fr;
      }

      h2 {
        font-size: 2rem;
      }
    }
  `]
})
export class GalleryComponent {
  galleryItems = [
    {
      image: 'https://picsum.photos/600/600?random=1',
      title: 'Rebranding Completo',
      description: 'Redesign da identidade visual para empresa de tecnologia'
    },
    {
      image: 'https://picsum.photos/600/600?random=2',
      title: 'Campanha Digital',
      description: 'Estratégia de marketing para lançamento de produto'
    },
    {
      image: 'https://picsum.photos/600/600?random=3',
      title: 'Social Media',
      description: 'Gestão de redes sociais para marca de moda'
    },
    {
      image: 'https://picsum.photos/600/600?random=4',
      title: 'Website Corporativo',
      description: 'Desenvolvimento de site institucional moderno'
    },
    {
      image: 'https://picsum.photos/600/600?random=5',
      title: 'E-commerce',
      description: 'Criação de loja virtual com design exclusivo'
    },
    {
      image: 'https://picsum.photos/600/600?random=6',
      title: 'Material Promocional',
      description: 'Design de catálogo e materiais impressos'
    }
  ];
} 