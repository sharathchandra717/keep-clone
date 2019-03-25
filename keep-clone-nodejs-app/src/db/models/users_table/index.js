import bookshelf from '../../bookshelf';

const UsersTable = bookshelf.Model.extend({
    tableName: 'users_table'
})

export default UsersTable