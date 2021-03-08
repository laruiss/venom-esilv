const express = require('express')
const app = express()
const port = 3000

const stan = {
  id: 1,
  login: 'stan',
  password: 'stan'
}

app.use(express.json())

app.get('/api/v1/version', (req, res) => {
  res.json('1.0.0')
})

app.post('/api/v1/auth/token', (req, res) => {
  console.log(req.body)

  // Vérifier ici que les identifiants sont valides
  const isValidCredentials = req.body.login === stan.login && req.body.password === stan.password // 

  if (!isValidCredentials) {
    res.status(401).json({
      success: false,
      message: 'Identifiants invalides'
    })
    return
  }

  res.status(201).json({
    success: true,
    user: stan
  })
})
  
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
