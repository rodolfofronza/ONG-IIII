// Validação do formulário
export function validateForm(form) {
  let isValid = true;
  const inputs = form.querySelectorAll('input, select, textarea');

  inputs.forEach(input => {
    input.classList.remove('erro');
    const small = input.nextElementSibling;
    if (small && small.tagName === 'SMALL') small.remove();

    if (input.hasAttribute('required') && !input.value.trim()) {
      showError(input, 'Este campo é obrigatório');
      isValid = false;
    }
    if (input.type === 'email' && input.value) {
      const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!regex.test(input.value)) {
        showError(input, 'E-mail inválido');
        isValid = false;
      }
    }
  });

  return isValid;
}

function showError(input, message) {
  input.classList.add('erro');
  const small = document.createElement('small');
  small.textContent = message;
  input.parentNode.insertBefore(small, input.nextSibling);
}
