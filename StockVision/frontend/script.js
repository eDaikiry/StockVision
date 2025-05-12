const ctx = document.getElementById('stockChart').getContext('2d');
let stockChart;
const apiUrl = 'http://localhost:5000/estoque';
let retryCount = 0;
const maxRetries = 3;

// Verifica se o rodapé está no DOM
document.addEventListener('DOMContentLoaded', () => {
  const credit = document.querySelector('.credit');
  console.log('Rodapé encontrado:', credit ? credit.textContent : 'Não encontrado');
});

// Inicializa o gráfico com dados vazios
function initializeChart() {
  stockChart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: [],
      datasets: [{
        label: 'Estoque Atual',
        data: [],
        backgroundColor: [
          'rgba(76, 175, 80, 0.8)',
          'rgba(33, 150, 243, 0.8)',
          'rgba(255, 152, 0, 0.8)',
          'rgba(244, 67, 54, 0.8)',
          'rgba(156, 39, 176, 0.8)'
        ],
        borderColor: [
          'rgba(76, 175, 80, 1)',
          'rgba(33, 150, 243, 1)',
          'rgba(255, 152, 0, 1)',
          'rgba(244, 67, 54, 1)',
          'rgba(156, 39, 176, 1)'
        ],
        borderWidth: 2,
        borderRadius: 8,
      }]
    },
    options: {
      responsive: true,
      animation: {
        duration: 1000,
        easing: 'easeOutQuart'
      },
      scales: {
        y: {
          beginAtZero: true,
          max: 50,
          grid: { color: 'rgba(0, 0, 0, 0.1)' }
        },
        x: {
          grid: { display: false }
        }
      },
      plugins: {
        legend: {
          labels: {
            font: { size: 14, family: 'Poppins' }
          }
        }
      }
    }
  });
}

// Busca dados do back-end e atualiza o gráfico
async function fetchStockData() {
  try {
    console.log('Buscando dados da API...');
    const response = await fetch(apiUrl);
    if (!response.ok) {
      throw new Error(`Erro HTTP ${response.status}: ${response.statusText}`);
    }
    const data = await response.json();
    console.log('Dados recebidos:', data);
    const labels = data.map(item => item.nome);
    const quantities = data.map(item => item.quantidade);
    stockChart.data.labels = labels;
    stockChart.data.datasets[0].data = quantities;
    stockChart.update();
    retryCount = 0; // Reseta retries após sucesso
  } catch (error) {
    console.error('Erro ao buscar dados:', error.message);
    if (retryCount < maxRetries) {
      retryCount++;
      console.log(`Tentativa ${retryCount} de ${maxRetries}...`);
      setTimeout(fetchStockData, 5000);
    } else {
      alert('Falha ao conectar com o servidor. Verifique se o Flask está rodando em http://localhost:5000.');
    }
  }
}

// Adiciona um novo produto
document.getElementById('productForm').addEventListener('submit', async (e) => {
  e.preventDefault();
  const nome = document.getElementById('nome').value;
  const quantidade = parseInt(document.getElementById('quantidade').value);
  const addButton = document.getElementById('addButton');
  const loader = addButton.querySelector('.loader');

  console.log('Enviando produto:', { nome, quantidade });

  addButton.disabled = true;
  loader.classList.remove('hidden');

  try {
    const response = await fetch(apiUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ nome, quantidade })
    });
    console.log('Resposta do POST:', response);
    if (response.ok) {
      document.getElementById('productForm').reset();
      fetchStockData();
      addButton.innerHTML = '<i class="fas fa-check"></i> Adicionado!';
      setTimeout(() => {
        addButton.innerHTML = '<i class="fas fa-plus"></i> Adicionar <span class="loader hidden"></span>';
      }, 1500);
    } else {
      const errorData = await response.json();
      alert(`Erro ao adicionar produto: ${errorData.error || 'Erro desconhecido'}`);
    }
  } catch (error) {
    console.error('Erro ao adicionar produto:', error);
    alert('Falha na conexão com o servidor. Verifique o Flask.');
  } finally {
    addButton.disabled = false;
    loader.classList.add('hidden');
  }
});

// Zera o estoque
document.getElementById('clearButton').addEventListener('click', async () => {
  const clearButton = document.getElementById('clearButton');
  const loader = clearButton.querySelector('.loader');

  if (!confirm('Tem certeza que deseja zerar o estoque?')) return;

  clearButton.disabled = true;
  loader.classList.remove('hidden');

  try {
    const response = await fetch(apiUrl, {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' }
    });
    console.log('Resposta do DELETE:', response);
    if (response.ok) {
      fetchStockData();
      clearButton.innerHTML = '<i class="fas fa-check"></i> Estoque Zerado!';
      setTimeout(() => {
        clearButton.innerHTML = '<i class="fas fa-trash"></i> Zerar Estoque <span class="loader hidden"></span>';
      }, 1500);
    } else {
      const errorData = await response.json();
      alert(`Erro ao zerar estoque: ${errorData.error || 'Erro desconhecido'}`);
    }
  } catch (error) {
    console.error('Erro ao zerar estoque:', error);
    alert('Falha na conexão com o servidor. Verifique o Flask.');
  } finally {
    clearButton.disabled = false;
    loader.classList.add('hidden');
  }
});

// Inicializa o gráfico e busca os dados
initializeChart();
fetchStockData();