import fetch from 'isomorphic-fetch'
import { expect } from 'chai'
import { startServer } from '../src/lib/application.js'

describe('create-connection usecase', (done) => {
  it('listens to port 8080', (done) => {
    startServer()
    
    fetch('http://localhost:8080')
      .then((response) => {
        expect(response.status).eq(200)
        return response.json()
//         expect(response.body).eq('hi world')
      })
      .then((jsonResponse) => {
        expect(JSON.stringify(jsonResponse)).eq("{\"greetings\":\"hello world\"}")
      })
      .then(done)
  })
})