# StockVision

## English README

**StockVision** is a web system for inventory management and visualization, featuring an interactive interface and a RESTful API. 
Developed by **Eduardo Daiki Riboldi Yamamoto**, the project showcases skills in full-stack development, database integration, and modern DevOps practices.

### Features
- Inventory visualization with dynamic bar charts using Chart.js.
- Product management via API (add, list, reset inventory).
- Responsive interface with a form to add products and a "Reset Inventory" button with visual feedback.
- SQLite database for data persistence.
- API unit tests with Pytest.
- Docker configuration for simplified deployment.

### Technologies
- **Front-end**: HTML, CSS, JavaScript, Chart.js
- **Back-end**: Python, Flask, Flask-SQLAlchemy, Flask-Cors
- **Database**: SQLite
- **Tests**: Pytest
- **DevOps**: Docker, Docker Compose

### Project Structure

StockVision/
├── backend/                # Back-end code (Flask)
│   ├── app.py              # RESTful API
│   ├── models.py           # Database model
│   ├── requirements.txt    # Python dependencies
│   └── tests/              # Unit tests
├── frontend/               # Front-end code
│   ├── index.html          # Main page
│   ├── style.css           # Styles
│   └── script.js           # Front-end logic
├── screenshots/            # Screenshots
├── Dockerfile              # Docker configuration
├── docker-compose.yml      # Container orchestration
├── README.md               # Documentation
└── LICENSE                 # MIT License

### How to Run Locally

#### Prerequisites
- Python 3.9+ ([install here](https://www.python.org/downloads/)).
- Docker (optional, for running with containers) ([install here](https://www.docker.com/get-started)).
- A modern browser (Chrome, Firefox, etc.).
- Live Server extension in VS Code (for serving the front-end).

#### Steps (Without Docker)
### 1. Clone the repository:

   ```bash
   git clone https://github.com/Daikiry/stockvision
   cd stockvision
   ```
   
### 2. Install back-end dependencies:

```bash
cd backend
pip install -r requirements.txt
```

### 3. Start the Flask server:

```bash
python app.py
```

### 4. Open the Front-End

1. Navigate to the `frontend/` folder.
2. Open `index.html` using the **Live Server** extension in VS Code.
   - The project will be available at: [http://localhost:5500](http://localhost:5500)

---

### Running with Docker

1. Clone the repository (see instructions above).
2. Start the containers:

   ```bash
   docker-compose up --build
   ```

Access:
Front-end: `http://localhost:5500`
Back-end: `http://localhost:5000/estoque`

Running Tests
In the backend/ folder:
```bash
pytest tests/
```

Screenshots
(To be added soon in the screenshots/ folder)
Credits
Developed by Eduardo Daiki Riboldi Yamamoto.

## License

This project is protected by copyright and its use is subject to the terms outlined in the LICENSE file.  
You may not copy, distribute, modify, or reuse this code without prior written permission from the author.

------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

## Português README

## StockVision é um sistema web para gerenciamento e visualização de estoque, com uma interface interativa e uma API RESTful. 
### Desenvolvido por Eduardo Daiki Riboldi Yamamoto, o projeto demonstra habilidades em desenvolvimento full-stack, integração com banco de dados e práticas modernas de DevOps. 

## Funcionalidades:

-Visualização de estoque em gráficos de barras dinâmicos com Chart.js.

-Gerenciamento de produtos via API (adicionar, listar, zerar estoque).

-Interface responsiva com formulário para adicionar produtos e botão "Zerar Estoque" com feedback visual.

-Banco de dados SQLite para persistência de dados.

-Testes unitários para a API com Pytest.

-Configuração com Docker para implantação simplificada.

## Tecnologias:

### Front-end: HTML, CSS, JavaScript, Chart.js

### Back-end: Python, Flask, Flask-SQLAlchemy, Flask-Cors

### Banco de Dados: SQLite

### Testes: Pytest

### DevOps: Docker, Docker Compose

## Estrutura do Projeto:

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

Como Rodar Localmente:

## Pré-requisitos

Python 3.9+ ([install here](https://www.python.org/downloads/)).

Docker (opcional, para rodar com contêineres) ([install here](https://www.docker.com/get-started)).

Um navegador moderno (Chrome, Firefox, etc.).

Extensão Live Server no VS Code (para servir o front-end).

Passos (Sem Docker)
Clone o repositório:

```bash
git clone https://github.com/Daikiry/stockvision
cd stockvision
```

Instale as dependências do back-end:

```bash
cd backend
pip install -r requirements.txt
```

Inicie o servidor Flask:

```bash
python app.py
```

Abra o `front-end`:
Navegue até a pasta `frontend/`.

Abra `index.html` com a extensão Live Server no VS Code (`http://localhost:5500`).

Acesse o sistema no navegador:
`URL: http://localhost:5500`

Passos (Com Docker)
Clone o repositório (como acima).

Inicie os containers:

```bash
docker-compose up --build
```

Acesse:
Front-end: `http://localhost:5500`
Back-end: `http://localhost:5000/estoque`

Executando Testes:
Na pasta `backend/`:

```bash
pytest tests/
```

Capturas de Tela
(Em breve, capturas serão adicionadas na pasta screenshots/)

Desenvolvido por Eduardo Daiki Riboldi Yamamoto.

## Licença

Este projeto está protegido por direitos autorais e seu uso está sujeito aos termos descritos no arquivo LICENSE.  
Você não pode copiar, distribuir, modificar ou reutilizar este código sem autorização prévia por escrito do autor.
