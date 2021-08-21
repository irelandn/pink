// import './App.css';
// import Router from "./Router";
// import {  Container } from '@material-ui/core';


// function App() {
  
//   return (
//     <div className="Pink-App" >
//       <Container>
//         <Router />
//         {/* <Header /> */}
        
//       </Container>
//     </div>
//   );
// }
// export default App;

const express = require('express');
const app = express();

require("./backend/models/db")

 const taxReceiptRouter = require('./router/taxReceiptRouter')


app.get('/', (req, res) => {
  res.send('<h1>pink app</h1>')
})

//Handle user requests
app.use('/tax-receipt', taxReceiptRouter)

app.listen(3000, () => {
  console.log('The pink app is listening on port 3000!')
})