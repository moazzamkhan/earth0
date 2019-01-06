import redis from "redis"

const redisClient = redis.createClient(+process.env.REDIS_PORT, process.env.REDIS_HOST, {
  password: process.env.REDIS_PASSWORD
})

redisClient.on("connect", function() {
  console.log("Redis client connected")
})

redisClient.on("error", function(err) {
  console.log("Error " + err)
})

// redisClient.set("moazzam", "khan", redis.print)
// client.get("moazzam", redis.print)
// client.quit()

export default redisClient
