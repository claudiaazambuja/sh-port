import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  template: `
    <footer class="footer" [class.footer-hidden]="isFooterHidden">
      <div class="footer-content">
        <div class="footer-section">
          <h3>SH-Port</h3>
          <p>Somos especialistas em criar identidade visual e conteúdo que conecta sua empresa ao seu público, transformando pequenas empresas em grandes marcas.</p>
          <div class="social-links">
            <a href="https://wa.me/5553992414885" target="_blank" class="social-link">
              <i class="fab fa-whatsapp"></i>
            </a>
            <a href="mailto:azambujaclaudia@hotmail.com" class="social-link">
              <i class="fas fa-envelope"></i>
            </a>
            <a href="#" class="social-link">
              <i class="fab fa-instagram"></i>
            </a>
            <a href="#" class="social-link">
              <i class="fab fa-facebook-f"></i>
            </a>
          </div>
        </div>

        <div class="footer-section">
          <h3>Navegação</h3>
          <ul>
            <li><a href="#inicio">Início</a></li>
            <li><a href="#sobre">Sobre</a></li>
            <li><a href="#servicos">Serviços</a></li>
            <li><a href="#galeria">Galeria</a></li>
            <li><a href="#depoimentos">Depoimentos</a></li>
            <li><a href="#contato">Contato</a></li>
          </ul>
        </div>

        <div class="footer-section">
          <h3>Serviços</h3>
          <ul>
            <li>Design Gráfico</li>
            <li>Identidade Visual</li>
            <li>Social Media</li>
            <li>Marketing Digital</li>
            <li>Desenvolvimento Web</li>
            <li>E-commerce</li>
          </ul>
        </div>

        <div class="footer-section">
          <h3>Contato</h3>
          <ul class="contact-info">
            <li>
              <i class="fas fa-map-marker-alt"></i>
              <span>Pelotas, RS - Brasil</span>
            </li>
            <li>
              <i class="fas fa-phone"></i>
              <span>(53) 99241-4885</span>
            </li>
            <li>
              <i class="fas fa-envelope"></i>
              <span>contato&#64;sh-port.com</span>
            </li>
            <li>
              <i class="fas fa-clock"></i>
              <span>Seg - Sex: 9h às 18h</span>
            </li>
          </ul>
        </div>
      </div>

      <div class="footer-bottom">
        <p>&copy; 2024 SH-Port. Todos os direitos reservados.</p>
      </div>
    </footer>
  `,
  styles: [`
    .footer {
      background-color: var(--footer-bg);
      color: var(--footer-text);
      padding: 4rem 0 0;
      margin-top: 4rem;
      box-shadow: 0 -4px 6px rgba(0, 0, 0, 0.1);
      transition: transform 0.3s ease;
    }

    .footer-hidden {
      transform: translateY(100%);
    }

    .footer-content {
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 1rem;
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 3rem;
    }

    .footer-section {
      h3 {
        font-size: 1.4rem;
        margin-bottom: 1.5rem;
        color: var(--primary-color);
        font-weight: 600;
      }

      p {
        color: var(--footer-link);
        line-height: 1.6;
        margin-bottom: 1.5rem;
      }
    }

    .social-links {
      display: flex;
      gap: 1rem;

      .social-link {
        width: 40px;
        height: 40px;
        border-radius: 50%;
        background-color: var(--primary-color);
        color: var(--footer-text);
        display: flex;
        align-items: center;
        justify-content: center;
        transition: all 0.3s ease;

        &:hover {
          background-color: var(--footer-link-hover);
          transform: translateY(-3px);
        }
      }
    }

    ul {
      list-style: none;
      padding: 0;
      margin: 0;

      li {
        margin-bottom: 0.8rem;
        color: var(--footer-link);

        a {
          color: var(--footer-link);
          text-decoration: none;
          transition: color 0.3s ease;

          &:hover {
            color: var(--footer-link-hover);
          }
        }
      }
    }

    .contact-info {
      li {
        display: flex;
        align-items: flex-start;
        gap: 1rem;

        i {
          color: var(--primary-color);
          margin-top: 0.3rem;
        }

        span {
          line-height: 1.6;
        }
      }
    }

    .footer-bottom {
      margin-top: 4rem;
      padding: 1.5rem 0;
      text-align: center;
      border-top: 1px solid rgba(255, 255, 255, 0.1);
      background-color: rgba(0, 0, 0, 0.2);

      p {
        color: var(--footer-link);
        font-size: 0.9rem;
      }
    }

    @media (max-width: 1200px) {
      .footer-content {
        grid-template-columns: repeat(2, 1fr);
      }
    }

    @media (max-width: 768px) {
      .footer {
        padding: 3rem 0 0;
      }

      .footer-content {
        grid-template-columns: 1fr;
        gap: 2rem;
      }

      .footer-section {
        text-align: center;

        .social-links {
          justify-content: center;
        }
      }

      .contact-info {
        li {
          justify-content: center;
        }
      }
    }
  `]
})
export class FooterComponent {
  private lastScrollTop = 0;
  isFooterHidden = true;

  @HostListener('window:scroll', ['$event'])
  onScroll() {
    const currentScroll = window.pageYOffset || document.documentElement.scrollTop;
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;
    
    // Mostrar footer quando chegar próximo ao final da página
    if (currentScroll + windowHeight >= documentHeight - 100) {
      this.isFooterHidden = false;
    } else {
      this.isFooterHidden = true;
    }

    this.lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
  }
} 