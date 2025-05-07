import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-testimonials',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="testimonials" id="depoimentos">
      <h2>Depoimentos</h2>
      <p class="subtitle">O que nossos clientes dizem sobre nós</p>
      <div class="testimonials-grid">
        <div class="testimonial-card" *ngFor="let testimonial of testimonials">
          <div class="testimonial-content">
            <div class="testimonial-image">
              <img [src]="testimonial.image" [alt]="testimonial.name">
            </div>
            <p class="testimonial-text">{{ testimonial.text }}</p>
            <div class="testimonial-rating">
              <ng-container *ngFor="let star of getStars(testimonial.rating)">
                <i class="fas fa-star"></i>
              </ng-container>
            </div>
            <div class="testimonial-author">
              <h4>{{ testimonial.name }}</h4>
              <p>{{ testimonial.role }} - {{ testimonial.company }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .testimonials {
      padding: 6rem 0;
      background-color: white;
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

    .testimonials-grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 2rem;
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 1rem;
    }

    .testimonial-card {
      background-color: var(--light-color);
      border-radius: 8px;
      padding: 2rem;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
      transition: transform 0.3s ease;

      &:hover {
        transform: translateY(-5px);
      }
    }

    .testimonial-content {
      text-align: center;
    }

    .testimonial-image {
      width: 80px;
      height: 80px;
      border-radius: 50%;
      overflow: hidden;
      margin: 0 auto 1.5rem;

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }

    .testimonial-text {
      color: var(--text-color);
      line-height: 1.6;
      margin-bottom: 1.5rem;
      font-style: italic;
    }

    .testimonial-rating {
      color: var(--primary-color);
      margin-bottom: 1rem;

      i {
        margin: 0 0.2rem;
      }
    }

    .testimonial-author {
      h4 {
        color: var(--dark-color);
        font-size: 1.2rem;
        margin-bottom: 0.5rem;
      }

      p {
        color: var(--text-color);
        font-size: 0.9rem;
      }
    }

    @media (max-width: 992px) {
      .testimonials-grid {
        grid-template-columns: repeat(2, 1fr);
      }
    }

    @media (max-width: 768px) {
      .testimonials {
        padding: 4rem 0;
      }

      .testimonials-grid {
        grid-template-columns: 1fr;
      }

      h2 {
        font-size: 2rem;
      }
    }
  `]
})
export class TestimonialsComponent {
  testimonials = [
    {
      name: 'Ana Silva',
      role: 'CEO',
      company: 'Tech Solutions',
      image: 'https://picsum.photos/200/200?random=1',
      text: 'A SH-Port transformou completamente nossa presença digital. O novo site e a estratégia de marketing trouxeram resultados impressionantes para nossa empresa.',
      rating: 5
    },
    {
      name: 'Carlos Santos',
      role: 'Diretor de Marketing',
      company: 'Fashion Store',
      image: 'https://picsum.photos/200/200?random=2',
      text: 'Excelente trabalho na criação da nossa identidade visual e gestão das redes sociais. Profissionais muito competentes e atenciosos.',
      rating: 5
    },
    {
      name: 'Mariana Oliveira',
      role: 'Proprietária',
      company: 'Restaurante Sabor & Arte',
      image: 'https://picsum.photos/200/200?random=3',
      text: 'O e-commerce desenvolvido pela SH-Port superou todas as nossas expectativas. Aumentamos significativamente nossas vendas online.',
      rating: 5
    }
  ];

  getStars(rating: number): number[] {
    return Array(rating).fill(0);
  }
} 