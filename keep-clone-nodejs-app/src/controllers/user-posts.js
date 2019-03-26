import NotesTable from '../db/models/notes_table';
module.exports = {
  get: (req, res, next) => {
    const uid = req.query.uid;
    NotesTable.where({"user_id": uid})
    .fetchAll()
    .then((result) => {
      console.log('notes fetch successful');
      let data = []
      for(let item of result) {
        
      }
      res.status(200).json({
        id: result.get('id'),
        note: result.get('note'),
        created: result.get('created'),
        modified: result.get('modified')
      })
    })
  },

  newNote: (req, res, next) => {
    const uid = req.body.uid;
    const note = req.body.note;
    const created = new Date(req.body.created);
    new NotesTable({
      user_id: uid,
      note: note,
      created: created,
      modified: created
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
  }

  // editNote: (req, res, next) => {
  //   const id = req.body.id;
  //   const note = req.body.note;
  //   const modified = new Date(req.body.modified);
  //   NotesTable.where({"id": id})
  //   .fetch()
  //   .then((result) => {
  //     result.save({
  //       uid: result.get('uid'),
  //       note: note,
  //       created: result.get('created'),
  //       modified: modified
  //     })
  //     .then(() => {
  //       console.log('note updated');
  //       res.status(200).json({
  //         success: true
  //       })
  //     })
  //     .catch((err) => {
  //       console.log('editnote: ' + err)
  //       res.status(200).json({
  //         success: false
  //       })
  //     })
  //   })
  //   .catch((err) => {
  //     console.log('editnote: ' + err)
  //     res.status(200).json({
  //       success: false
  //     })
  //   })
  // }
}