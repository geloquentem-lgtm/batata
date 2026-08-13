
import express from 'express' // TYPE MODULE
// const express = require('express') // TYPE COMMON JS

const app = express()
app.use(express.json())

//exercicio1
//http://localhost:3000/api/somar?num1=5&num2=10
app.post("/api/somar", (req, res) => {
  //const - recebe um valor definido e inalteravel
  //let - recebe um valor definido e alteravel
  //var
  const Num1 = req.body.num1
  const Num2 = req.body.num2
  res.send({ 
    resultado: Num1 + Num2,
    letra: "a",
    numero: Num1,
    numero2: Num2
  })
})

//exercicio2
//http://localhost:3000/api/salario/10/10
app.post("/api/salario", (req, res) => {
  const valorganho= req.body.valor
  const horastrabalhadas = req.body.horas
  const resultado = valorganho * horastrabalhadas
// () 99 % dos casos é função
// {} objeto
// [] array
  res.send({
    message: resultado
  })
})

//exercicio3
//http://localhost:3000/api/Mediapeso/50/70/10/20/30
app.post("/api/Mediapeso", (req, res) => {
  const Peso1 = req.body.Peso1
  const Peso2 = req.body.Peso2
  const Peso3 = req.body.Peso3
  const Peso4 = req.body.Peso4
  const Peso5 = req.body.Peso5
  const resultado = (Peso1 + Peso2 + Peso3 + Peso4 + Peso5) / 5
  res.send({
    message: resultado
  })
})

//exercicio4
//http://localhost:3000/api/ConversorTemperatura/?Celsius=25
app.post("/api/ConversorTemperatura", (req, res) => {
  const Celsius = req.body.Celsius
  const Fahrenheit = (Celsius * 9/5) + 32
  res.send({
    message: Fahrenheit + " Fahrenheit"
  })
})

//exercicio5
//http://localhost:3000/api/ConversorMilha/?Milhas=10
app.post("/api/ConversorMilha", (req, res) => {
  const Milhas = req.body.Milhas
  const Quilometros = Milhas * 1.60934
  res.send({
    message: Quilometros + " Quilometros"
  })
})

//exercicio6
//http://localhost:3000/api/DuracaoEvents/3600
app.post("/api/DuracaoEvents", (req, res) => {
  const segundos = req.body.segundos
  const minutos = Math.floor(segundos / 60)
  const horas = Math.floor(minutos / 60)
  //Math.floor() - arredonda para baixo
  res.send({
    message: horas + " horas " + minutos + " minutos " + segundos + " segundos"
  })
})

//exercicio7
app.post("/api/ConversorDistancia", (req, res) => {
  const Quilometros = req.body.Quilometros
  const Metros = Quilometros * 1000
  const Centimetros = Metros * 100
  res.send({
    message: Quilometros + " Quilometros = " + Metros + " Metros = " + Centimetros + " Centimetros"
  })

})

//exercicio8
app.post("/api/Tabuadanumero", (req, res) => {
  const num = req.body.num
  const resultado = []
  for (let i = 0; i <= 10; i++) {
    resultado.push(num * i)
  }
  res.send({
    message: resultado
  })
})

//Desafio0
app.post("/api/ConversorIdade", (req, res) => {
  const idade = req.body.idade
  const meses = idade * 12
  const dias = idade * 365
  res.send({
    message: idade + " anos = " + meses + " meses = " + dias + " dias"
  })
})

//Desafio1
app.post("/api/variaveistroca", (req, res) => {
  const A = req.body.A
  const B = req.body.B 
  const temp = B
  const temp2 = A
  res.send({
    message: "Antes da troca: A = " + A + ", B = " + B + ". Depois da troca: A = " + temp + ", B = " + temp2
  })
})

app.post("/api/Comparacaonumeros", (req, res) => {
  const num1 = req.body.num1
  const num2 = req.body.num2
  if (num1 > num2) {
    res.send({
      message: num1 + " é maior que " + num2
    })
  } else if (num1 < num2) {
    res.send({
      message: num1 + " é menor que " + num2
    })
  } else {
    res.send({
      message: num1 + " é igual a " + num2
    })
  }
})

app.listen(3000, () => {
  console.log('Server roda no 3000')
})
