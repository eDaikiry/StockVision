# StockVision

**StockVision** é um sistema web para gerenciamento e visualização de estoque, com uma interface interativa e uma API RESTful. 
Desenvolvido por **Eduardo Daiki Riboldi Yamamoto**, o projeto demonstra habilidades em desenvolvimento full-stack, integração com banco de dados e práticas modernas de DevOps.

## Funcionalidades
- Visualização de estoque em gráficos de barras dinâmicos com Chart.js.
- Gerenciamento de produtos via API (adicionar, listar, zerar estoque).
- Interface responsiva com formulário para adicionar produtos e botão "Zerar Estoque" com feedback visual.
- Banco de dados SQLite para persistência de dados.
- Testes unitários para a API com Pytest.
- Configuração com Docker para implantação simplificada.

## Tecnologias
- **Front-end**: HTML, CSS, JavaScript, Chart.js
- **Back-end**: Python, Flask, Flask-SQLAlchemy, Flask-Cors
- **Banco de Dados**: SQLite
- **Testes**: Pytest
- **DevOps**: Docker, Docker Compose

## Estrutura do Projeto

StockVision/
├── backend/                # Código do back-end (Flask)
│   ├── app.py              # API RESTful
│   ├── models.py           # Modelo do banco de dados
│   ├── requirements.txt    # Dependências Python
│   └── tests/              # Testes unitários
├── frontend/               # Código do front-end
│   ├── index.html          # Página principal
│   ├── style.css           # Estilos
│   └── script.js           # Lógica do front-end
├── screenshots/            # Capturas de tela
├── Dockerfile              # Configuração do Docker
├── docker-compose.yml      # Orquestração de containers
├── README.md               # Documentação
└── LICENSE                 # Licença MIT

## Como Rodar Localmente

### Pré-requisitos
- Python 3.9+ ([instale aqui](https://www.python.org/downloads/)).
- Docker (opcional, para rodar com contêineres) ([instale aqui](https://www.docker.com/get-started)).
- Um navegador moderno (Chrome, Firefox, etc.).
- Extensão Live Server no VS Code (para servir o front-end).

### Passos (Sem Docker)
1. Clone o repositório:
   ```bash
   git clone https://github.com/Daikiry/stockvision
   cd stockvision

Instale as dependências do back-end:
bash

cd backend
pip install -r requirements.txt

Inicie o servidor Flask:
bash

python app.py

Abra o front-end:
Navegue até a pasta frontend/.

Abra index.html com a extensão Live Server no VS Code (http://localhost:5500).

Acesse o sistema no navegador:
URL: http://localhost:5500

Passos (Com Docker)
Clone o repositório (como acima).

Inicie os containers:
bash

docker-compose up --build

Acesse:
Front-end: http://localhost:5500

Back-end: http://localhost:5000/estoque

 Executando Testes
Na pasta backend/:
bash

pytest tests/

 Capturas de Tela
(Em breve, capturas serão adicionadas na pasta screenshots/)
 Créditos
Desenvolvido por Eduardo Daiki Riboldi Yamamoto.
 Licença
Este projeto é licenciado sob a MIT License (LICENSE).