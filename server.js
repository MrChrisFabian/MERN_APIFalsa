
const { faker } = require('@faker-js/faker')
const express = require('express')
const app = express();
const port = 8000;
class Usuario {
    constructor() {
        this._id = faker.string.uuid();
        this.firstName = faker.person.firstName();
        this.lastName = faker.person.lastName();
        this.phone = faker.phone.number();
        this.email = faker.internet.email();
        this.password = faker.internet.password();
    }
}
class Empresa {
    constructor() {
        this._id = faker.string.uuid();
        this.Name = faker.company.name();
        this.addres = faker.address.streetAddress();
        this.city = faker.address.city();
        this.state = faker.address.state();
        this.codePostal = faker.address.zipCode();
        this.country = faker.address.country();
    }
}
// Codigo necesario para levantar el server que devuelve la información necesaria

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post("/api/users/new", (req, res) => {
    const newUser = new Usuario();
    console.log(newUser)
    res.json({ newUser: newUser });
    res.json({ status: "ok" });
})


app.post("/api/company/new", (req, res) => {
    const newcompany = new Empresa();
    res.json({ newCompany: newcompany })
    res.json({ status: "ok" })
})


app.post("/api/users/company", (req, res) => {
    const newcompany = new Empresa();
    const newUser = new Usuario();

    res.json({
        newCompany: newcompany,
        newUSer: newUser
    })
    res.json({ status: "ok" })
})


// esto tiene que estar debajo de los otros bloques de código
app.listen(8000, () => console.log(`Listening on port: ${port}`));

