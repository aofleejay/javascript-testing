# Medium API.

## Quick start.

### Install dependencies.

```
$ yarn
```

### Run test.

```
$ yarn test
```

### Run development.

```
$ yarn start
```

## Guideline

```javascript
// server.test.js
import request from 'supertest'
import { expect } from 'chai'
import sinon from 'sinon'
import * as database from '../src/database'
import { app } from '../src/server'

describe('Medium server.', () => {
  describe('Test route /posts', () => {
    it('Should return all posts from database.', done => {
      request(app)
        .get('/posts')
        .expect(200)
        .end((err, res) => {
          if (err) return done(err)
          expect(res.body).to.deep.equal({
            posts: [
              { id: '001', title: 'How to write good test.' },
              { id: '002', title: 'React best practice.' },
              { id: '003', title: 'Create node server using Express.' },
            ],
          })
          done()
        })
    })

    it('Should return all posts from mock.', done => {
      const mockDatabase = sinon.mock(database)
      mockDatabase
        .expects('getAll')
        .once()
        .resolves([{ id: '001', title: 'How to use sinon mock.' }])

      request(app)
        .get('/posts')
        .expect(200)
        .end((err, res) => {
          if (err) return done(err)
          expect(res.body).to.deep.equal({
            posts: [{ id: '001', title: 'How to use sinon mock.' }],
          })
          mockDatabase.verify()
          mockDatabase.restore()
          done()
        })
    })

    it('Should return 500 when query from database failed.', done => {
      const mockDatabase = sinon.mock(database)
      mockDatabase
        .expects('getAll')
        .once()
        .rejects(new Error('Query failed.'))

      request(app)
        .get('/posts')
        .expect(500)
        .end((err, res) => {
          if (err) return done(err)
          expect(res.body).to.deep.equal({ message: 'Cant fetch posts.' })
          mockDatabase.verify()
          mockDatabase.restore()
          done()
        })
    })
  })

  describe('Test route /posts/:id', () => {
    it('Should return post by id.', done => {
      const mockDatabase = sinon.mock(database)
      mockDatabase
        .expects('getById')
        .withExactArgs('001')
        .once()
        .resolves({ id: '001', title: 'How to use sinon mock.' })

      request(app)
        .get('/posts/001')
        .expect(200)
        .end((err, res) => {
          if (err) return done(err)
          expect(res.body).to.deep.equal({
            post: {
              id: '001',
              title: 'How to use sinon mock.',
            },
          })
          mockDatabase.verify()
          mockDatabase.restore()
          done()
        })
    })
  })
})
```
