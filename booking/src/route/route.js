const express = require('express')
const router = express.Router()

const Room = require('../model/model')

//MongoDB Atlas connection setting
const mongoose = require('mongoose')
const connStr = process.env.DATABASE_URL.replace('<password>', process.env.DATABASE_PWD)
mongoose.connect(connStr, { useNewUrlParser: true,
                            useUnifiedTopology: true,
                            useFindAndModify: false })
const db = mongoose.connection
db.on('error', () => console.log('Connection ERROR!!!'))
db.once('open', () => console.log('Database CONNECTED!!!'))

router.get('/api/v2/rooms', async (req,res,next) => {
    try{
        const rooms = await Room.find()
        res.status(200).json(rooms)
    } catch(error){
        res.status(500).json({error: error.message})
    }
})

router.put('/api/v2/rooms/:id', async(req,res) => {
    const update_t= {
        type : req.body.type,
        room: req.body.room,
        amount: Number(req.body.amount),
        prize : Number(req.body.prize)
    }
    try {
        const t = await Room.findByIdAndUpdate(req.params.id, update_t, {new: true})
        if (!t){
            res.status(404).json({error: ' UPDATE::room not found!!!'})
        }else{
        res.status(200).json(t)
    }
    } catch (error) {
        res.status(500).json({error:'UPDATE::'+error.message})
    }
})

router.delete('/api/v2/rooms/:id', async (req,res) => {
    try {
        const t = await Room.findByIdAndDelete(req.params.id)
            res.status(200).json({message: 'room Deleted!!'})
    } catch (error) {
        res.status(500).json({error: 'DELETE::transaction not found'})
    }
})

router.get('/api/v2/rooms/:id', async(req,res,next) => {
    try {
        const t = await Room.findById(req.params.id)
        if (!t) {
             res.status(404).json({error:'transactioni not found'})
        }
        res.status(202).json(t)
    } catch (error) {
        res.status(500).json({error: 'GET::error'})
    }
})

router.post('/api/v2/rooms/', async (req,res) => {
    const type = req.body.type
    const room = req.body.room
    const amount = req.body.amount
    const prize = req.body.prize
    const t = new Room(req.body)

    try {
        await t.save()
        res.status(200).json(t)
    } catch(error){
        res.status(500).json({error: error.message})
    }
})

module.exports = router