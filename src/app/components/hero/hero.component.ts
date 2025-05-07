import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  template: `
    <section class="hero" id="home">
      <div class="hero-content">
        <h1>Transforme sua presença digital</h1>
        <p>Somos especialistas em criar identidade visual e conteúdo que conecta sua empresa ao seu público</p>
        <button class="cta-button">Fale Conosco</button>
      </div>
    </section>
  `,
  styles: [`
    .hero {
      min-height: 100vh;
      background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),
                  url('/assets/images/hero-bg.jpg') center/cover no-repeat;
      display: flex;
      align-items: center;
      justify-content: center;
      text-align: center;
      color: white;
      padding: 2rem;
    }

    .hero-content {
      max-width: 800px;
    }

    .hero-content h1 {
      font-size: 3.5rem;
      margin-bottom: 1.5rem;
      animation: fadeInUp 1s ease;
    }

    .hero-content p {
      font-size: 1.5rem;
      margin-bottom: 2rem;
      opacity: 0.9;
      animation: fadeInUp 1s ease 0.2s;
      animation-fill-mode: both;
    }

    .cta-button {
      background-color: var(--primary-color);
      color: white;
      border: none;
      padding: 1rem 2rem;
      font-size: 1.2rem;
      border-radius: 4px;
      cursor: pointer;
      transition: background-color 0.3s ease;
      animation: fadeInUp 1s ease 0.4s;
      animation-fill-mode: both;

      &:hover {
        background-color: var(--primary-color-dark);
      }
    }

    @keyframes fadeInUp {
      from {
        opacity: 0;
        transform: translateY(20px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }

    @media (max-width: 768px) {
      .hero-content h1 {
        font-size: 2.5rem;
      }

      .hero-content p {
        font-size: 1.2rem;
      }
    }
  `]
})
export class HeroComponent {} 