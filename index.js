
import express from 'express' // TYPE MODULE
// const express = require('express') // TYPE COMMON JS
const app = express()


//exercicio1
//http://localhost:3000/api/somar?num1=5&num2=10
app.get("/api/somar", (req, res) => {
  //const - recebe um valor definido e inalteravel
  //let - recebe um valor definido e alteravel
  //var
  const Num1 = Number(req.query.num1)
  const Num2 = Number(req.query.num2)
  res.send({ 
    result: Num1 + Num2,
    letra: "a",
    numero: Num1,
    numero2: Num2
  })
})

//exercicio2
//http://localhost:3000/api/salario/10/10
app.get("/api/salario/:valor/:horas", (req, res) => {
  const valorganho= Number(req.params.valor)
  const horastrabalhadas = Number(req.params.horas)
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
app.get("/api/Mediapeso/:Peso1/:Peso2/:Peso3/:Peso4/:Peso5", (req, res) => {
  const Peso1 = Number(req.params.Peso1)
  const Peso2 = Number(req.params.Peso2)
  const Peso3 = Number(req.params.Peso3)
  const Peso4 = Number(req.params.Peso4)
  const Peso5 = Number(req.params.Peso5)
  const resultado = (Peso1 + Peso2 + Peso3 + Peso4 + Peso5) / 5
  res.send({
    message: resultado
  })
})

//exercicio4
//http://localhost:3000/api/ConversorTemperatura/?Celsius=25
app.get("/api/ConversorTemperatura", (req, res) => {
  const Celsius = Number(req.query.Celsius)
  const Fahrenheit = (Celsius * 9/5) + 32
  res.send({
    message: Fahrenheit
  })
})

//exercicio5
//http://localhost:3000/api/ConversorMilha/?Milhas=10
app.get("/api/ConversorMilha", (req, res) => {
  const Milhas = Number(req.query.Milhas)
  const Quilometros = Milhas * 1.60934
  res.send({
    message: Quilometros
  })
})

//exercicio6
//http://localhost:3000/api/DuracaoEvents/3600
app.get("/api/DuracaoEvents/:segundos", (req, res) => {
  const segundos = Number(req.params.segundos)
  const minutos = Math.floor(segundos / 60)
  const horas = Math.floor(minutos / 60)
  //Math.floor() - arredonda para baixo
  res.send({
    message: horas + " horas " + minutos + " minutos " + segundos + " segundos"
  })

//exercicio7

app.get("/api/ConversorDistancia/Quilometros", (req, res) => {
  const Quilometros = Number(req.params.Quilometros)
  const Metros = Quilometros * 1000
  const Centimetros = Metros * 100
  res.send({
    message: Quilometros + " Quilometros = " + Metros + " Metros = " + Centimetros + " Centimetros"
  })

})

app.listen(3000, () => {
  console.log('Server esta rodando no 3000')
})
})