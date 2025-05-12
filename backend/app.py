from flask import Flask, jsonify, request
from flask_cors import CORS
try:
    from models import db, Produto
    print("Importação de models.py bem-sucedida.")
except ImportError as e:
    print(f"Erro ao importar models.py: {e}")
    raise

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///estoque.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

# Habilita CORS para o front-end
CORS(app, resources={r"/*": {"origins": ["http://127.0.0.1:5500", "http://localhost:5500"]}})

db.init_app(app)

# Cria o banco de dados
with app.app_context():
    try:
        db.create_all()
        print("Banco de dados inicializado com sucesso.")
    except Exception as e:
        print(f"Erro ao inicializar o banco de dados: {e}")

# GET: Lista todos os produtos
@app.route('/estoque', methods=['GET'])
def get_estoque():
    try:
        produtos = Produto.query.all()
        return jsonify([{'id': p.id, 'nome': p.nome, 'quantidade': p.quantidade} for p in produtos])
    except Exception as e:
        print(f"Erro ao listar produtos: {e}")
        return jsonify({'error': 'Falha ao listar produtos'}), 500

# POST: Adiciona um novo produto
@app.route('/estoque', methods=['POST'])
def add_produto():
    try:
        data = request.get_json()
        if not data or 'nome' not in data or 'quantidade' not in data:
            return jsonify({'error': 'Nome e quantidade são obrigatórios'}), 400
        novo_produto = Produto(nome=data['nome'], quantidade=data['quantidade'])
        db.session.add(novo_produto)
        db.session.commit()
        return jsonify({'message': 'Produto adicionado', 'id': novo_produto.id}), 201
    except Exception as e:
        db.session.rollback()
        print(f"Erro ao adicionar produto: {e}")
        return jsonify({'error': 'Falha ao adicionar produto'}), 500

# PUT: Atualiza um produto existente
@app.route('/estoque/<int:id>', methods=['PUT'])
def update_produto(id):
    try:
        produto = Produto.query.get_or_404(id)
        data = request.get_json()
        produto.nome = data.get('nome', produto.nome)
        produto.quantidade = data.get('quantidade', produto.quantidade)
        db.session.commit()
        return jsonify({'message': 'Produto atualizado'})
    except Exception as e:
        db.session.rollback()
        print(f"Erro ao atualizar produto: {e}")
        return jsonify({'error': 'Falha ao atualizar produto'}), 500

# DELETE: Remove um produto
@app.route('/estoque/<int:id>', methods=['DELETE'])
def delete_produto(id):
    try:
        produto = Produto.query.get_or_404(id)
        db.session.delete(produto)
        db.session.commit()
        return jsonify({'message': 'Produto removido'})
    except Exception as e:
        db.session.rollback()
        print(f"Erro ao remover produto: {e}")
        return jsonify({'error': 'Falha ao remover produto'}), 500

# DELETE: Zera todos os produtos
@app.route('/estoque', methods=['DELETE'])
def clear_estoque():
    try:
        num_deleted = Produto.query.delete()
        db.session.commit()
        return jsonify({'message': f'Estoque zerado com sucesso! ({num_deleted} produtos removidos)'}), 200
    except Exception as e:
        db.session.rollback()
        print(f"Erro ao zerar estoque: {e}")
        return jsonify({'error': 'Falha ao zerar estoque', 'details': str(e)}), 500

if __name__ == '__main__':
    print("Iniciando o servidor Flask na porta 5000...")
    app.run(debug=True, port=5000)