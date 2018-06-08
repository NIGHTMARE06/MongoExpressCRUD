const express = require('express')
const router = express.Router()
const taskModel = require('../model/task')

const model = taskModel()

router.get('/', (req, res) => {
  model.find({}, (err, tasks) => {
    if(err) return err

    res.render('index.ejs', {
      title: 'My task list',
      tasks: tasks
    })
  })
})

router.post('/add', (req, res) => {
  req.body.done = false

  model.create(req.body, (err, task) => {
    if(err) return err

    res.redirect('/')
  })
})

router.get('/turn_done/:id', (req, res) => {
  model.findById(req.params.id, (err, task) => {
    if(err) return err

    task.done = !task.done

    task.save()
      .then(() => res.redirect('/'))
  })
})

router.get('/delete/:id', (req, res) => {
  model.findById(req.params.id, (err, task) => {
    if(err) return err

    model.remove(task)
      .then(() => res.redirect('/'))
  })
})

module.exports = router
