import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="services">
      <div class="container">
        <h2>Nossos Serviços</h2>
        <div class="services-grid">
          <div class="service-card">
            <i class="fas fa-paint-brush"></i>
            <h3>Design Gráfico</h3>
            <p>Criação de identidade visual, logos, materiais impressos e digitais com design moderno e profissional.</p>
          </div>
          <div class="service-card">
            <i class="fas fa-laptop-code"></i>
            <h3>Desenvolvimento Web</h3>
            <p>Sites responsivos, sistemas web e aplicações personalizadas com as mais recentes tecnologias.</p>
          </div>
          <div class="service-card">
            <i class="fas fa-bullhorn"></i>
            <h3>Marketing Digital</h3>
            <p>Estratégias de marketing online, gestão de redes sociais e campanhas publicitárias eficientes.</p>
          </div>
          <div class="service-card">
            <i class="fas fa-search"></i>
            <h3>SEO</h3>
            <p>Otimização para motores de busca para aumentar sua visibilidade online e atrair mais visitantes.</p>
          </div>
          <div class="service-card">
            <i class="fas fa-mobile-alt"></i>
            <h3>Design Mobile</h3>
            <p>Criação de interfaces mobile-first e aplicativos com foco na experiência do usuário.</p>
          </div>
          <div class="service-card">
            <i class="fas fa-chart-line"></i>
            <h3>Analytics</h3>
            <p>Análise de dados e métricas para otimizar resultados e tomar decisões baseadas em dados.</p>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .services {
      padding: 80px 0;
      background-color: #f8f9fa;
    }

    .container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 20px;
    }

    h2 {
      text-align: center;
      font-size: 2.5rem;
      color: #333;
      margin-bottom: 50px;
    }

    .services-grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 30px;
    }

    .service-card {
      background: white;
      padding: 30px;
      border-radius: 10px;
      text-align: center;
      box-shadow: 0 5px 15px rgba(0,0,0,0.1);
      transition: transform 0.3s ease;

      &:hover {
        transform: translateY(-10px);
      }

      i {
        font-size: 40px;
        color: #007bff;
        margin-bottom: 20px;
      }

      h3 {
        font-size: 1.5rem;
        color: #333;
        margin-bottom: 15px;
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
        padding: 60px 0;
      }

      h2 {
        font-size: 2rem;
      }

      .services-grid {
        grid-template-columns: 1fr;
      }
    }
  `]
})
export class ServicesComponent {} 