import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="services">
      <div class="container">
        <div class="section-header">
          <h2>Nossos Serviços</h2>
          <p class="subtitle">Soluções completas para impulsionar sua presença digital</p>
        </div>
        <div class="services-grid">
          <div class="service-card" *ngFor="let service of services">
            <i class="{{ service.icon }}"></i>
            <h3>{{ service.title }}</h3>
            <p>{{ service.description }}</p>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .services {
      padding: 5rem 0;
      background-color: white;
    }

    .container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 2rem;
    }

    .section-header {
      text-align: center;
      margin-bottom: 4rem;
    }

    h2 {
      font-size: 2.5rem;
      color: #000;
      margin-bottom: 1rem;
      font-weight: 600;
    }

    .subtitle {
      font-size: 1.1rem;
      color: #000;
      max-width: 600px;
      margin: 0 auto;
      line-height: 1.6;
    }

    .services-grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 2rem;
    }

    .service-card {
      background: #f8f9fa;
      padding: 2rem;
      border-radius: 10px;
      text-align: center;
      border: 1px solid #e0e0e0;
      transition: all 0.3s ease;

      &:hover {
        transform: translateY(-5px);
        box-shadow: 0 5px 15px rgba(0,0,0,0.1);
        border-color: #007bff;
      }

      i {
        font-size: 2.5rem;
        color: #007bff;
        margin-bottom: 1rem;
      }

      h3 {
        color: #2c3e50;
        margin-bottom: 1rem;
        font-size: 1.5rem;
      }

      p {
        color: #666;
        line-height: 1.6;
      }
    }

    @media (max-width: 992px) {
      .services-grid {
        grid-template-columns: repeat(2, 1fr);
      }
    }

    @media (max-width: 768px) {
      .services {
        padding: 3rem 0;
      }

      h2 {
        font-size: 2rem;
      }

      .subtitle {
        font-size: 1rem;
      }

      .services-grid {
        grid-template-columns: 1fr;
      }
    }
  `]
})
export class ServicesComponent {
  services = [
    {
      icon: 'fas fa-paint-brush',
      title: 'Design Gráfico',
      description: 'Criação de identidade visual, logos, materiais impressos e digitais com design moderno e profissional.'
    },
    {
      icon: 'fas fa-laptop-code',
      title: 'Desenvolvimento Web',
      description: 'Desenvolvimento de sites e aplicações web responsivas, modernas e otimizadas para performance.'
    },
    {
      icon: 'fas fa-bullhorn',
      title: 'Marketing Digital',
      description: 'Estratégias de marketing digital para aumentar sua presença online e engajamento com seu público.'
    },
    {
      icon: 'fas fa-search',
      title: 'SEO',
      description: 'Otimização para motores de busca para melhorar o posicionamento do seu site nos resultados de pesquisa.'
    },
    {
      icon: 'fas fa-mobile-alt',
      title: 'Design Mobile',
      description: 'Criação de interfaces mobile-first para garantir a melhor experiência em dispositivos móveis.'
    },
    {
      icon: 'fas fa-chart-line',
      title: 'Analytics',
      description: 'Análise de dados e métricas para entender o comportamento dos usuários e melhorar resultados.'
    }
  ];
} 