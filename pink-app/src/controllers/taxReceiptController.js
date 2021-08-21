const mongoose = require("mongoose")

// Set parameters to allows extra/disallow mongoose functionality
mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
mongoose.set('useUnifiedTopology', true);

const taxReceipt = mongoose.model("taxReceipt")

