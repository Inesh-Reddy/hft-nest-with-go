package main

const (
    // Binance spot single-stream base (simple)
    BinanceWSBase = "wss://stream.binance.com:9443/ws"

    // The single symbol stream we'll subscribe to initially.
    // change this to "ethusdt@ticker" or others as needed
    Symbol = "btcusdt@ticker"

    // Redis
    RedisAddr    = "localhost:6379"
    RedisChannel = "market.ticker.btcusdt"
)