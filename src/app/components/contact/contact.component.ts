import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  template: `
    <section class="contact" id="contato">
      <h2>Entre em Contato</h2>
      <p class="subtitle">Estamos prontos para ajudar você a alcançar seus objetivos</p>
      
      <div class="contact-container">
        <div class="contact-info">
          <div class="info-item">
            <i class="fas fa-map-marker-alt"></i>
            <div>
              <h3>Endereço</h3>
              <p>Av. Paulista, 1000 - Bela Vista<br>São Paulo - SP, 01310-100</p>
            </div>
          </div>
          
          <div class="info-item">
            <i class="fas fa-phone"></i>
            <div>
              <h3>Telefone</h3>
              <p>(11) 9999-9999</p>
            </div>
          </div>
          
          <div class="info-item">
            <i class="fas fa-envelope"></i>
            <div>
              <h3>Email</h3>
              <p>contato&#64;sh-port.com.br</p>
            </div>
          </div>
          
          <div class="social-links">
            <a href="#" class="social-link"><i class="fab fa-facebook-f"></i></a>
            <a href="#" class="social-link"><i class="fab fa-instagram"></i></a>
            <a href="#" class="social-link"><i class="fab fa-linkedin-in"></i></a>
            <a href="#" class="social-link"><i class="fab fa-whatsapp"></i></a>
          </div>
        </div>
        
        <form [formGroup]="contactForm" (ngSubmit)="onSubmit()" class="contact-form">
          <div class="form-group">
            <label for="name">Nome</label>
            <input 
              type="text" 
              id="name" 
              formControlName="name"
              [class.invalid]="contactForm.get('name')?.invalid && contactForm.get('name')?.touched"
            >
            <div class="error-message" *ngIf="contactForm.get('name')?.invalid && contactForm.get('name')?.touched">
              Nome é obrigatório
            </div>
          </div>
          
          <div class="form-group">
            <label for="email">Email</label>
            <input 
              type="email" 
              id="email" 
              formControlName="email"
              [class.invalid]="contactForm.get('email')?.invalid && contactForm.get('email')?.touched"
            >
            <div class="error-message" *ngIf="contactForm.get('email')?.invalid && contactForm.get('email')?.touched">
              Email inválido
            </div>
          </div>
          
          <div class="form-group">
            <label for="phone">Telefone</label>
            <input 
              type="tel" 
              id="phone" 
              formControlName="phone"
              [class.invalid]="contactForm.get('phone')?.invalid && contactForm.get('phone')?.touched"
            >
            <div class="error-message" *ngIf="contactForm.get('phone')?.invalid && contactForm.get('phone')?.touched">
              Telefone é obrigatório
            </div>
          </div>
          
          <div class="form-group">
            <label for="message">Mensagem</label>
            <textarea 
              id="message" 
              formControlName="message"
              [class.invalid]="contactForm.get('message')?.invalid && contactForm.get('message')?.touched"
            ></textarea>
            <div class="error-message" *ngIf="contactForm.get('message')?.invalid && contactForm.get('message')?.touched">
              Mensagem é obrigatória
            </div>
          </div>
          
          <button type="submit" [disabled]="contactForm.invalid">Enviar Mensagem</button>
        </form>
      </div>
    </section>
  `,
  styles: [`
    .contact {
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

    .contact-container {
      display: grid;
      grid-template-columns: 1fr 2fr;
      gap: 4rem;
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 1rem;
    }

    .contact-info {
      .info-item {
        display: flex;
        align-items: flex-start;
        margin-bottom: 2rem;

        i {
          font-size: 1.5rem;
          color: var(--primary-color);
          margin-right: 1rem;
          margin-top: 0.5rem;
        }

        h3 {
          color: var(--dark-color);
          margin-bottom: 0.5rem;
        }

        p {
          color: var(--text-color);
          line-height: 1.6;
        }
      }
    }

    .social-links {
      display: flex;
      gap: 1rem;
      margin-top: 2rem;

      .social-link {
        width: 40px;
        height: 40px;
        border-radius: 50%;
        background-color: var(--primary-color);
        color: white;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: all 0.3s ease;

        &:hover {
          background-color: var(--secondary-color);
          transform: translateY(-3px);
        }
      }
    }

    .contact-form {
      background-color: white;
      padding: 2rem;
      border-radius: 8px;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

      .form-group {
        margin-bottom: 1.5rem;

        label {
          display: block;
          margin-bottom: 0.5rem;
          color: var(--dark-color);
        }

        input, textarea {
          width: 100%;
          padding: 0.8rem;
          border: 1px solid #ddd;
          border-radius: 4px;
          font-size: 1rem;
          transition: border-color 0.3s ease;

          &:focus {
            outline: none;
            border-color: var(--primary-color);
          }

          &.invalid {
            border-color: #ff4444;
          }
        }

        textarea {
          height: 150px;
          resize: vertical;
        }
      }

      .error-message {
        color: #ff4444;
        font-size: 0.9rem;
        margin-top: 0.5rem;
      }

      button {
        width: 100%;
        padding: 1rem;
        background-color: var(--primary-color);
        color: white;
        border: none;
        border-radius: 4px;
        font-size: 1rem;
        cursor: pointer;
        transition: all 0.3s ease;

        &:hover {
          background-color: var(--secondary-color);
        }

        &:disabled {
          background-color: #ccc;
          cursor: not-allowed;
        }
      }
    }

    @media (max-width: 992px) {
      .contact-container {
        grid-template-columns: 1fr;
        gap: 2rem;
      }
    }

    @media (max-width: 768px) {
      .contact {
        padding: 4rem 0;
      }

      h2 {
        font-size: 2rem;
      }

      .contact-form {
        padding: 1.5rem;
      }
    }
  `]
})
export class ContactComponent {
  contactForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', Validators.required],
      message: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.contactForm.valid) {
      console.log(this.contactForm.value);
      this.contactForm.reset();
    }
  }
} 