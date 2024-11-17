const express = require('express');
const router = express.Router();
const NurseModel = require('../model/Nurse'); // Import the Nurse model

// Middleware to parse JSON data
router.use(express.json());

// GET all nurses
router.get('/', async (req, res) => {
    try {
        const nurses = await NurseModel.find();
        res.status(200).json(nurses);
    } catch (error) {
        console.error('Error fetching nurses:', error);
        res.status(500).json({ error: 'Failed to retrieve nurses' });
    }
});

// GET a specific nurse by ID
router.get('/:id', async (req, res) => {
    try {
        const nurse = await NurseModel.findById(req.params.id);
        if (!nurse) {
            return res.status(404).json({ error: 'Nurse not found' });
        }
        res.status(200).json(nurse);
    } catch (error) {
        console.error('Error fetching nurse:', error);
        res.status(500).json({ error: 'Failed to retrieve nurse' });
    }
});

// POST a new nurse
router.post('/add', async (req, res) => {
    try {
        const nurseData = req.body;
        const newNurse = new NurseModel(nurseData);
        await newNurse.save();
        res.status(201).json({ message: 'Nurse added successfully', newNurse });
    } catch (error) {
        console.error('Error adding nurse:', error);
        res.status(400).json({ error: 'Error occurred while adding nurse' });
    }
});

// PUT to update an existing nurse by ID
router.put('/edit/:id', async (req, res) => {
    try {
        const updatedNurse = await NurseModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedNurse) {
            return res.status(404).json({ error: 'Nurse not found' });
        }
        res.status(200).json({ message: 'Nurse updated successfully', updatedNurse });
    } catch (error) {
        console.error('Error updating nurse:', error);
        res.status(400).json({ error: 'Error occurred while updating nurse' });
    }
});

// DELETE a nurse by ID
router.delete('/delete/:id', async (req, res) => {
    try {
        const deletedNurse = await NurseModel.findByIdAndDelete(req.params.id);
        if (!deletedNurse) {
            return res.status(404).json({ error: 'Nurse not found' });
        }
        res.status(200).json({ message: 'Nurse deleted successfully' });
    } catch (error) {
        console.error('Error deleting nurse:', error);
        res.status(400).json({ error: 'Error occurred while deleting nurse' });
    }
});

module.exports = router;
