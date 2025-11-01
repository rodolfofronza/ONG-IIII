
// MENU HAMBÚRGUER 

const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('nav');
if (menuToggle && nav) {
  menuToggle.addEventListener('click', () => {
    nav.classList.toggle('active');
  });
}


// IMPORTS MODULARES

import { loadPage } from './ui.js';
import { validateForm } from './formValidation.js';
import { saveVolunteer } from './storage.js';


// TOAST (feedback visual)

function showToast(message, type = 'success') {
  const toast = document.createElement('div');
  toast.className = `toast ${type}`;
  toast.textContent = message;
  document.body.appendChild(toast);

  // animação de entrada
  setTimeout(() => toast.classList.add('visible'), 100);

  // remove após 3s
  setTimeout(() => toast.remove(), 3000);
}


// CONFIGURAÇÃO DO FORMULÁRIO

function setupFormHandler() {
  const form = document.querySelector('form');
  if (!form) return;

  form.addEventListener('submit', e => {
    e.preventDefault();
    if (validateForm(form)) {
      const data = Object.fromEntries(new FormData(form).entries());
      saveVolunteer(data);
      showToast('✅ Cadastro realizado com sucesso!', 'success');
      form.reset();
    } else {
      showToast('⚠️ Corrija os erros antes de enviar o formulário.', 'error');
    }
  });
}

// SPA BÁSICA

document.addEventListener('DOMContentLoaded', () => {
  const links = document.querySelectorAll('nav a');
  const main = document.querySelector('main');

  // SPA: navegação sem recarregar página
  links.forEach(link => {
    link.addEventListener('click', event => {
      event.preventDefault();
      const page = link.getAttribute('href');
      loadPage(page, main).then(() => setupFormHandler());
      history.pushState({}, '', page);
    });
  });

  // Back/Forward do navegador
  window.addEventListener('popstate', () => {
    loadPage(location.pathname, main).then(() => setupFormHandler());
  });

  // Inicializa o formulário na primeira carga
  setupFormHandler();
});
