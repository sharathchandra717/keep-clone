// const knex = require('knex')
import knexfile from './knexfile'
import knex from 'knex'

// module.exports = knex(require('./knexfile'))
export default knex(knexfile)