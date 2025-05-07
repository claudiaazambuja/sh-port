import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  template: `
    <header class="header" [class.header-hidden]="isHeaderHidden">
      <div class="header-content">
        <div class="logo">
          <h1>SH-Port</h1>
        </div>
        <nav class="nav-links">
          <a href="#inicio">Início</a>
          <a href="#sobre">Sobre</a>
          <a href="#servicos">Serviços</a>
          <a href="#galeria">Galeria</a>
          <a href="#depoimentos">Depoimentos</a>
          <a href="#contato">Contato</a>
        </nav>
      </div>
    </header>
  `,
  styles: [`
    .header {
      background-color: var(--footer-bg);
      color: var(--footer-text);
      padding: 1rem 0;
      position: fixed;
      width: 100%;
      top: 0;
      z-index: 1000;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
      transition: transform 0.3s ease;
    }

    .header-hidden {
      transform: translateY(-100%);
    }

    .header-content {
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 1rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .logo h1 {
      color: var(--primary-color);
      font-size: 1.8rem;
      font-weight: 700;
    }

    .nav-links {
      display: flex;
      gap: 2rem;

      a {
        color: var(--footer-link);
        text-decoration: none;
        font-weight: 500;
        transition: color 0.3s ease;
        position: relative;

        &:hover {
          color: var(--footer-link-hover);
        }

        &::after {
          content: '';
          position: absolute;
          bottom: -5px;
          left: 0;
          width: 0;
          height: 2px;
          background-color: var(--footer-link-hover);
          transition: width 0.3s ease;
        }

        &:hover::after {
          width: 100%;
        }
      }
    }

    @media (max-width: 768px) {
      .nav-links {
        display: none;
      }
    }
  `]
})
export class HeaderComponent {
  private lastScrollTop = 0;
  isHeaderHidden = false;

  @HostListener('window:scroll', ['$event'])
  onScroll() {
    const currentScroll = window.pageYOffset || document.documentElement.scrollTop;
    
    // Mostrar header no topo da página
    if (currentScroll <= 0) {
      this.isHeaderHidden = false;
      return;
    }

    // Esconder header ao rolar para baixo, mostrar ao rolar para cima
    if (currentScroll > this.lastScrollTop) {
      this.isHeaderHidden = true;
    } else {
      this.isHeaderHidden = false;
    }

    this.lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
  }
} 