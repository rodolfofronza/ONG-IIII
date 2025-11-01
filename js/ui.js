// Função para carregar conteúdo de uma página na SPA
export async function loadPage(page, container) {
  try {
    const response = await fetch(page);
    if (!response.ok) throw new Error('Página não encontrada');

    const html = await response.text();

    // Extrai apenas o conteúdo <main>
    const parser = new DOMParser();
    const doc = parser.parseFromString(html, 'text/html');
    const mainContent = doc.querySelector('main');
    if (mainContent && container) {
      container.innerHTML = mainContent.innerHTML;
    }
  } catch (error) {
    container.innerHTML = `<p style="color:red;">Erro ao carregar a página.</p>`;
    console.error(error);
  }
}
