import React, { useState } from 'react'
import Card from 'react-bootstrap/Card'
import Button  from 'react-bootstrap/Button'
import { loadStripe } from '@stripe/stripe-js'
import axios from 'axios'

export const StripePayment = () => {
    const [product, setproduct] = useState({
        name: "T-shirt",
        price: 10,
        description: "Comfortable cotton t-shirt",
        quantity: 10
    })
    const makePayment = async () => {
        const stripe = await loadStripe("pk_test_51MiiQ7SC6PHGNS1oy1LpABWZJBKe6b3sFgcPLgXqJl9VmWkvPc5DjfcyJtgj5oI4DbVFMx8gS8OeaARop7uYGrQ0009gGvyB2v")
        const body= {product}
        const headers = {
            'Content-Type': 'application/json'
        }
        axios.post('http://localhost:8000/api/mandate', body, headers)
        .then((response) => {
            console.log(response)
            const { id, client_secret } = response.data
            stripe.redirectToCheckout({sessionId: id})
        })

        .catch((error) => {
            console.log(error)
        })

    }
    return (

    <div>
        <Card>
            <Card.Body>
                <Card.Title>Stripe Payment</Card.Title>
                <Card.Text>
                    This is a Stripe Payment
                </Card.Text>
                <Button onClick={makePayment}>Go somewhere</Button>
            </Card.Body>
        </Card>

    </div>
  )
}
