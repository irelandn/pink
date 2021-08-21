//This page will show the pay perio Taxreceipt and tax values by web scraping the ATO site

import {Typography} from "@material-ui/core"
// import Router from '../Router'
// import {Link} from 'react-router-dom'

const TaxreceiptPage = () =>{
  const name = 'tash'
    return <Typography variant="h3">
        This pay period Taxreceipt for {name}
        <Welcome name="I am calling a function" />
        <form>
          <label>
              Name:
              <input type="text" name="name" />
          </label>
              <input type="submit" value="Submit" />
          </form>

    
    </Typography>
}

function Welcome(props){
  return <h1>hello {props.name}</h1>;
}

export default TaxreceiptPage