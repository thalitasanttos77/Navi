import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  username = '';
  password = '';

  constructor(private router: Router) { }

  login() {
    console.log('Tentando logar com:', this.username, this.password);

    // --- LÓGICA DO LOGIN FALSO ---
    // Verificamos se o usuário e a senha são os que definimos
    if (this.username === 'thalita' && this.password === '1234') {
      console.log('Login bem-sucedido! Redirecionando...');
      // Se forem corretos, navegamos para a tela de dashboard
      this.router.navigate(['/dashboard']);
    } else {
      // Se estiverem errados, mostramos um alerta simples
      console.error('Credenciais inválidas!');
      alert('Usuário ou senha incorretos!');
    }

    this.router.navigate(['/dashboard']);
  }

  logout() {
    console.log('Usuário deslogado. Redirecionando para a tela de login...');

    // --- LÓGICA DO LOGOUT ---
    // 1. Limpar qualquer dado de sessão/autenticação.
    // Em uma aplicação real, você removeria o token de autenticação.
    // Ex: localStorage.removeItem('userToken');

    // 2. Redirecionar o usuário para a tela de login.
    // Assumindo que a rota da sua tela de login é '/login' ou a raiz '/'.
    this.router.navigate(['/login']);
  }
}
