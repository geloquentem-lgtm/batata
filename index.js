
import express from 'express' // TYPE MODULE
// const express = require('express') // TYPE COMMON JS
const app = express()

app.get("/api/somar", (req, res) => {
  //const - recebe um valor definido e inalteravel
  //let - recebe um valor definido e alteravel
  //var
  const num1 = Number(req.query.num1)
  const num2 = Number(req.query.num2)
  res.send({message: num1 + num2 })
})

app.listen(3000, () => {
  console.log('Server esta rodando no 3000')
})