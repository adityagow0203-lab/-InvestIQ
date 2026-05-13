            <div className="space-y-4">

              {
                portfolio.map((stock, index) => (

                  <div
                    key={index}
                    className="flex justify-between border-b border-zinc-800 pb-2"
                  >

                    <div>
                      <p className="font-semibold text-white">
                        {stock.stock_symbol}
                      </p>

                      <p className="text-sm text-zinc-500">
                        Buy Price: ${stock.buy_price}
                      </p>
                    </div>

                    <span className="text-green-400 font-semibold">
                      Qty: {stock.quantity}
                    </span>

                  </div>

                ))
              }

            </div>