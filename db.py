import requests
import mysql.connector

# DB connection
db = mysql.connector.connect(
    host="localhost",
    user="root",
    password="Amma@321",
    database="investiq"
)
cursor = db.cursor()

# Function to fetch stock price
def get_stock_price(symbol):
    api_key = "AVEUCS4XKA77W1NO"

    url = f"https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol={symbol}&apikey={api_key}"

    response = requests.get(url)
    data = response.json()

    # Error handling
    if "Global Quote" not in data or data["Global Quote"] == {}:
        print("Invalid stock symbol")
        return None

    price = data["Global Quote"]["05. price"]
    return float(price)


# Function to store data in DB
def store_stock(symbol):
    price = get_stock_price(symbol)

    if price is None:
        print("Stock not stored")
        return

    query = "INSERT INTO stock_history (stock_symbol, price) VALUES (%s, %s)"
    cursor.execute(query, (symbol, price))
    db.commit()

    print(f"{symbol} stored with price {price}")


# Test
store_stock("AAPL")	