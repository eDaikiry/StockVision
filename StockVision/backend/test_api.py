import pytest
from app import app, db
from models import Produto

@pytest.fixture
def client():
    app.config['TESTING'] = True
    app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///test.db'
    with app.test_client() as client:
        with app.app_context():
            db.create_all()
        yield client
        with app.app_context():
            db.drop_all()

def test_get_estoque_vazio(client):
    response = client.get('/estoque')
    assert response.status_code == 200
    assert response.json == []

def test_add_produto(client):
    response = client.post('/estoque', json={'nome': 'Produto A', 'quantidade': 10})
    assert response.status_code == 201
    assert response.json['message'] == 'Produto adicionado'
    assert response.json['id'] == 1

def test_update_produto(client):
    client.post('/estoque', json={'nome': 'Produto A', 'quantidade': 10})
    response = client.put('/estoque/1', json={'nome': 'Produto B', 'quantidade': 20})
    assert response.status_code == 200
    assert response.json['message'] == 'Produto atualizado'

def test_delete_produto(client):
    client.post('/estoque', json={'nome': 'Produto A', 'quantidade': 10})
    response = client.delete('/estoque/1')
    assert response.status_code == 200
    assert response.json['message'] == 'Produto removido'