// Definimos o objeto
const App = function () {
  this.el = document.getElementById('countries') // Pegamos o tbody
  this.countries = ['França', 'Alemanha', 'Inglaterra', 'Espanha', 'Belgica', 'Italia', 'Portugal',
    'Irlanda', 'Luxemburgo', 'Brasil']

  this.Count = function (data) {
    let el = document.getElementById('count')
    var name = 'Pais'

    if (data) {
      if (data > 1) {
        name = 'Paises'
      }
      el.innerHTML = data + ' ' + name
    } else {
      el.innerHTML = 'Nao ha ' + name
    }
  }

  this.FetchAll = () => {
    var data = ''

    if (this.countries.length > 0) {
      for (let i = 0; i < this.countries.length; i++) {
        data += '<tr>'
        data += '<td>' + this.countries[i] + '</td>'
        data += '</tr>'
      }
    }
    this.Count(this.countries.length)
    this.el.innerHTML = data
  }

  this.Add = () => {
    let el = document.getElementById('add-item')
    let country = el.value

    if (country) {
      this.countries.push(country.trim())
      el.value = ''
      this.FetchAll()
    }
  }
}

const app = new App()
app.FetchAll()
