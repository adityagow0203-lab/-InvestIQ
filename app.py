from flask import Flask, request, jsonify
from flask_cors import CORS
import mysql.connector

app = Flask(__name__)
CORS(app, resources={r"/*": {"origins": "*"}})

# DB Connection
db = mysql.connector.connect(
    host="localhost",
    user="root",
    password="Amma@321",
    database="investiq"
)

cursor = db.cursor()

# Home Route
@app.route('/')
def home():
    return "InvestIQ Backend Running"


# Login Route
@app.route('/login', methods=['POST'])
def login():

    data = request.json

    username = data['username']
    password = data['password']

    query = "SELECT * FROM users WHERE username=%s AND password=%s"

    cursor.execute(query, (username, password))

    user = cursor.fetchone()

    if user:
        return jsonify({
            "message": "Login Successful"
        })

    else:
        return jsonify({
            "message": "Invalid Credentials"
        })


# SIGNUP ROUTE
@app.route('/signup', methods=['POST'])
def signup():

    data = request.json

    username = data['username']
    password = data['password']

    # Check if user already exists
    query = "SELECT * FROM users WHERE username=%s"

    cursor.execute(query, (username,))

    existing_user = cursor.fetchone()

    if existing_user:

        return jsonify({
            "message": "Username already exists"
        })

    # Insert new user
    insert_query = "INSERT INTO users (username, password) VALUES (%s, %s)"

    cursor.execute(insert_query, (username, password))

    db.commit()

    return jsonify({
        "message": "Account created successfully"
    })

# PORTFOLIO ROUTE
@app.route('/portfolio/<int:user_id>', methods=['GET'])
def get_portfolio(user_id):

    query = """
    SELECT stock_symbol, quantity, buy_price
    FROM portfolio
    WHERE user_id=%s
    """

    cursor.execute(query, (user_id,))

    data = cursor.fetchall()

    portfolio = []

    for row in data:

        portfolio.append({
            "stock_symbol": row[0],
            "quantity": row[1],
            "buy_price": row[2]
        })

    return jsonify(portfolio)

# Run server
if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5001, debug=True)