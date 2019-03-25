import bookshelf from '../bookshelf';

const NotesTable = bookshelf.Model.extend({
    tableName: 'notes_table'
})

export default NotesTable