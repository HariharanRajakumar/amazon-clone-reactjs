const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")("sk_test_51IwQeYSGZ8VbKtnHw2s01EiXLh8hKD3KNJ6gtc0dcslaqGtaHsG2hrTSKOvGn6xiGw0TiTOd3aqvIa0rD8jYuqmz00exfofGLS");

// API

// App config
const app = express();
// Middlewares
app.use(cors({origin: true}));
app.use(express.json());
// API routes
app.get("/", (req, res) => res.status(200).send("Hello World"));
app.post('/payments/create', async (request,response) => {
  const total = request.query.total;
  console.log("Payment Request Received BOOMM!!! for this amount >>>",total);
  const paymentIntent = await stripe.paymentIntents.create({
    amount:total,
    currency:"usd",
  });
  response.status(201).send({
    clientSecret:paymentIntent.client_secret,
  });
});

// Listen command

exports.api = functions.https.onRequest(app);

// example endpoint
// http://localhost:5001/clone-56fd8/us-central1/api
