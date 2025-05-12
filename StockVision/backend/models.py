from flask_sqlalchemy import SQLAlchemy

# Inicializando o banco de dados
db = SQLAlchemy()

# Modelo de Produto para a tabela de estoque
class Produto(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    nome = db.Column(db.String(100), nullable=False)  # Nome do produto, máx. 100 caracteres
    quantidade = db.Column(db.Integer, nullable=False)  # Quantidade em estoque

    def __repr__(self):
        return f'<Produto {self.nome}, Quantidade: {self.quantidade}>'