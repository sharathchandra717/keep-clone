import NotesTable from '../db/models/notes_table';
module.exports = {
  getNotes: (req, res, next) => {
    const uid = req.query.uid;
    NotesTable.where({ "user_id": uid })
      .fetchAll()
      .then((result) => {
        console.log('notes fetch successful');
        let data = []
        for (let item of result) {
          data.push({
            id: item.attributes.id,
            note: item.attributes.note,
            created: item.attributes.created,
            modified: item.attributes.modified,
            title: item.attributes.title
          })
        }
        res.status(200).json({
          success: true,
          result: data
        })
      })
      .catch((err) => {
        console.log('getnotes', err)
        res.status(200).json({
          success: false
        })
      })
  },

  newNote: (req, res, next) => {
    new NotesTable({
      user_id: req.body.uid,
      note: req.body.note,
      created: new Date(req.body.created),
      modified: new Date(req.body.created),
      title: req.body.title
    })
      .save()
      .then(() => {
        console.log('Note added');
        res.status(200).json({
          success: true
        })
      })
      .catch((err) => {
        console.log('newNote' + err);
        res.status(200).json({
          success: false
        })
      })
  },

  editNote: (req, res, next) => {
    NotesTable.where({ "id": id })
      .fetch()
      .then((result) => {
        result.save({
          uid: result.get('uid'),
          note: req.body.note,
          created: result.get('created'),
          modified: new Date(req.body.modified),
          title: req.body.title
        })
          .then(() => {
            console.log('note updated');
            res.status(200).json({
              success: true
            })
          })
          .catch((err) => {
            console.log('editnote: ' + err)
            res.status(200).json({
              success: false
            })
          })
      })
      .catch((err) => {
        console.log('editnote: ' + err)
        res.status(200).json({
          success: false
        })
      })
  },

  deleteNote: (req, res, next) => {
    const id = req.query.id;
    NotesTable.where({ "id": id })
      .destroy()
      .then(() => {
        console.log("note deletion success")
        res.status(200).json({
          success: true
        })
      })
      .catch((err) => {
        console.log('deletenote: ' + err)
        res.status(200).json({
          success: false
        })
      })
  }
}