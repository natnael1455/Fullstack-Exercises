
const mongoose = require('mongoose')

if (process.argv.length < 3 ||process.argv.length > 5 ) {
  console.log('Please provide the password as an argument to see the data: node index.js <password> or \n node.js <password> <name> <number> to enter data')
  process.exit(1)
}

const password = process.argv[2]

const url =
  `mongodb+srv://full_stuck:${password}@cluster0.ibrsx.mongodb.net/phonebook?retryWrites=true&w=majority`


mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false, useCreateIndex: true })

const personSchema = new mongoose.Schema({
        name:String,
        number:Number
      })
const Person = mongoose.model('Person', personSchema)

if (process.argv.length === 5)
{
    
    const person = new Person({
        name:process.argv[3],
        number:process.argv[4]
      })

    person.save().then(result => {
    console.log(`added ${process.argv[3]} number ${process.argv[4]} to phonebook`)
    mongoose.connection.close()
})
}

if (process.argv.length === 3){
    Person.find({}).then(result => {
    console.log(`phonebook:`)
    result.forEach(person => {
    console.log(`${person.name} ${person.number}`)
    })
    mongoose.connection.close()
})
}










