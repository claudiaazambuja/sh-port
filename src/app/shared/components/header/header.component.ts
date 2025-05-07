import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  template: `
    <header [class.header-light]="isHomeSection" [class.header-dark]="!isHomeSection">
      <div class="container">
        <div class="logo">
          <h1>SH-Port</h1>
        </div>
        <nav>
          <ul>
            <li><a href="#inicio">Início</a></li>
            <li><a href="#sobre">Sobre</a></li>
            <li><a (click)="scrollToServices()" style="cursor: pointer;">Serviços</a></li>
            <li><a href="#galeria">Galeria</a></li>
            <li><a href="#depoimentos">Depoimentos</a></li>
            <li><a href="#contato">Contato</a></li>
          </ul>
        </nav>
      </div>
    </header>
  `,
  styles: [`
    header {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      z-index: 1000;
      transition: all 0.3s ease;
      padding: 1rem 0;

      &.header-light {
        background: transparent;
        
        .logo h1, nav a {
          color: white;
        }

        nav a:hover {
          color: rgba(255, 255, 255, 0.8);
        }
      }

      &.header-dark {
        background: white;
        box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
        
        .logo h1, nav a {
          color: #333;
        }

        nav a:hover {
          color: #007bff;
        }
      }
    }

    .container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 2rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .logo h1 {
      font-size: 1.8rem;
      font-weight: 700;
      margin: 0;
      transition: color 0.3s ease;
    }

    nav ul {
      display: flex;
      list-style: none;
      margin: 0;
      padding: 0;
      gap: 2rem;
    }

    nav a {
      text-decoration: none;
      font-weight: 500;
      transition: color 0.3s ease;
    }

    @media (max-width: 768px) {
      nav {
        display: none;
      }
    }
  `]
})
export class HeaderComponent {
  isHomeSection = true;

  @HostListener('window:scroll', ['$event'])
  onScroll() {
    const homeSection = document.querySelector('app-home');
    if (homeSection) {
      const homeRect = homeSection.getBoundingClientRect();
      this.isHomeSection = homeRect.bottom > 0;
    }
  }

  scrollToServices() {
    const servicesSection = document.querySelector('app-services');
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: 'smooth' });
    }
  }
} 