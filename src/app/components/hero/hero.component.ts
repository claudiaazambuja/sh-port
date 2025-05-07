import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="hero">
      <div class="hero-content">
        <h1>Transforme sua presença digital</h1>
        <p>Design, desenvolvimento e marketing digital para impulsionar seu negócio</p>
        <button class="cta-button">Comece Agora</button>
      </div>
      <div class="hero-overlay"></div>
    </section>
  `,
  styles: [`
    .hero {
      position: relative;
      height: 100vh;
      width: 100%;
      background-image: url('/assets/images/hero-bg.jpg');
      background-size: cover;
      background-position: center;
      display: flex;
      align-items: center;
      justify-content: center;
      text-align: center;
      color: white;
      overflow: hidden;
    }

    .hero-overlay {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: linear-gradient(45deg, rgba(0,0,0,0.8), rgba(0,0,0,0.4));
      z-index: 1;
    }

    .hero-content {
      position: relative;
      z-index: 2;
      max-width: 800px;
      padding: 0 var(--spacing-xl);
      animation: fadeIn 1s ease-out;

      h1 {
        font-size: 4rem;
        margin-bottom: var(--spacing-lg);
        line-height: 1.2;
        text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
      }

      p {
        font-size: 1.5rem;
        margin-bottom: var(--spacing-xl);
        text-shadow: 1px 1px 2px rgba(0,0,0,0.3);
      }
    }

    .cta-button {
      background-color: var(--primary-color);
      color: white;
      padding: 1rem 2.5rem;
      font-size: 1.2rem;
      border: none;
      border-radius: var(--border-radius-lg);
      cursor: pointer;
      transition: var(--transition-fast);
      text-transform: uppercase;
      letter-spacing: 1px;
      font-weight: bold;

      &:hover {
        background-color: var(--primary-dark);
        transform: translateY(-2px);
        box-shadow: var(--shadow-md);
      }
    }

    @keyframes fadeIn {
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
      .hero-content {
        h1 {
          font-size: 2.5rem;
        }

        p {
          font-size: 1.2rem;
        }
      }
    }
  `]
})
export class HeroComponent {} 