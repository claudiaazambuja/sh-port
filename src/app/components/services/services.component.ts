import { Component } from '@angular/core';

@Component({
  selector: 'app-services',
  template: `
    <section class="services" id="servicos">
      <h2>Nossos Serviços</h2>
      <div class="services-grid">
        <div class="service-card" *ngFor="let service of services">
          <i [class]="service.icon"></i>
          <h3>{{ service.title }}</h3>
          <p>{{ service.description }}</p>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .services {
      padding: 6rem 0;
      background-color: var(--light-color);
    }

    h2 {
      text-align: center;
      font-size: 2.5rem;
      color: var(--dark-color);
      margin-bottom: 3rem;
    }

    .services-grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 2rem;
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 1rem;
    }

    .service-card {
      background-color: white;
      padding: 2rem;
      border-radius: 8px;
      text-align: center;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
      transition: transform 0.3s ease;

      &:hover {
        transform: translateY(-5px);
      }

      i {
        font-size: 2.5rem;
        color: var(--primary-color);
        margin-bottom: 1.5rem;
      }

      h3 {
        font-size: 1.5rem;
        color: var(--dark-color);
        margin-bottom: 1rem;
      }

      p {
        color: var(--text-color);
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
        padding: 4rem 0;
      }

      .services-grid {
        grid-template-columns: 1fr;
      }

      h2 {
        font-size: 2rem;
      }
    }
  `]
})
export class ServicesComponent {
  services = [
    {
      icon: 'fas fa-paint-brush',
      title: 'Identidade Visual',
      description: 'Criação de logos, cores e elementos visuais que representam sua marca'
    },
    {
      icon: 'fas fa-camera',
      title: 'Posts para Redes Sociais',
      description: 'Conteúdo criativo e engajante para suas redes sociais'
    },
    {
      icon: 'fas fa-chart-line',
      title: 'Estratégia Digital',
      description: 'Planejamento estratégico para aumentar sua presença online'
    }
  ];
} 