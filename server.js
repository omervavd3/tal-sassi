const express = require('express')
const nodemailer = require('nodemailer')
const bodyParser = require('body-parser')

const app = express()

var port = process.env.PORT || 3000

app.set('view engine', 'ejs')

app.use(express.static('public'))
app.use('/css', express.static(__dirname + '/css/style.css'))
app.use('/app', express.static(__dirname + '/js/app'))
app.use('/photos', express.static(__dirname + '/photos'))

const urlencodedParser = bodyParser.urlencoded({ extended: false })








app.get('/', (req,res) => {
    res.render('index')
})


app.post('/', urlencodedParser, (req,res) => {
    res.render('emailSent', {name: req.body.name})
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'omervavd3@gmail.com',
            pass: 'fmkkbsvfkoavaqxq'
        }
    })

    const options = {
        from: 'omervavd3@gmail.com',
        to: 'omervavd3@gmail.com',
        subject: 'New Client',
        html: `You have a new client<br></br>Name: ${req.body.name}<br></br>Email: ${req.body.email}<br></br>Message: ${req.body.message}`  
    }

    transporter.sendMail(options, (err,info) => {
        if(err) {
            console.log(err);
            return
        }
        console.log('Sent: ' + info.response);
    })


})

app.get('/emailSent', (req,res) => {
    res.render('emailSent')
})

app.listen(port, () => console.log(`Server is running on port ${port}`))



