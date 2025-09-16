package main

import (
	"context"
	"fmt"
	"log"
	"time"
)


func main(){
	fmt.Println(`Welcome to Market data ingestion Service `);
	ctx := context.Background()

	fmt.Println(`Redis + WS test`)
	r := NewRedisClient(RedisAddr)
	defer r.Close()

	out := make(chan []byte, 100)
	// wsURL := `${BinanceWSBase}/${Symbol}` 
	wsURL := BinanceWSBase+"/"+Symbol 
	go ConnectAndStream(ctx, wsURL, out)


	for msg := range out {
		if err := r.Publish(ctx, RedisChannel, msg); err!= nil{
			log.Println("Publish error:", err)
		} else {
			log.Printf("Publised %d bytes of %s\n", len(msg), msg)
		}
	}
	time.Sleep(2 * time.Second)
}
