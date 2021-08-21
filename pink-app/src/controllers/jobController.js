const mongoose = require("mongoose")

// Set paramaters?

// Link to Job Model
const Job = mongoose.model("Job")

//          functions         //

//          requests         //

const getAllJobs = async (req, res) => {
    try {
        // find all jobs associated with the user 
        const jobs = await Job.find({user_id: req.params.user_id})

    } catch (err) {
        console.log(err)
    }
}

const getOneJob = async (req, res) => {
    try {
        const job = await Job.findById(req.params.jobId)
        // check that the job exists
        if (job == null) {
            res.render("No job found")
        }
        // return the job information
        res.render("job", job);

    } catch (err) {
        console.log(err)
    }
}



// Export the functions provided by the controller
module.exports = {}