import requests

def get_stock_price(symbol):
    api_key = "AVEUCS4XKA77W1NO"

    url = f"https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol={symbol}&apikey={api_key}"

    try:
        response = requests.get(url)
        data = response.json()

        # Invalid symbol
        if "Global Quote" not in data or data["Global Quote"] == {}:
            print("Invalid stock symbol")
            return None

        # API limit exceeded
        if "Note" in data:
            print("API request limit reached")
            return None

        price = data["Global Quote"]["05. price"]

        return float(price)

    except Exception as e:
        print("Error:", e)
        return None

price = get_stock_price("AAPL")

if price:
    print("Apple stock price:", price)