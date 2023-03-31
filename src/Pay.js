import React from 'react'

const Pay = () => {
  return (
    <>
    <div class="pay">
        <a href="https://buy.stripe.com/test_00g5lF2gTfV74EgbIJ">Pay Now</a>
    </div>
    <script async
  src="https://js.stripe.com/v3/buy-button.js">
</script>

<stripe-buy-button
  buy-button-id="buy_btn_1MoWZ0SBeEwp7t6iysp4A9xd"
  publishable-key="pk_test_51MoWMHSBeEwp7t6ifO9I5m0HP4Lwma1wZr9wfJPl14O09NSyDaANab9pACdQIOlxB9Xu56B3UlrRZxgQwRejx0SU00gLANjoJX"
>
</stripe-buy-button>
    </>
  )
}

export default Pay
