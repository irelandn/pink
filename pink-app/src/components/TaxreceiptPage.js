//This page will show the pay perio Taxreceipt and tax values by web scraping the ATO site

import {Typography} from "@material-ui/core"
// import Router from '../Router'
// import {Link} from 'react-router-dom'

const TaxreceiptPage = () =>{
    return <Typography variant="h3">
        This pay period Taxreceipt
        <form>
  <label>
    Name:
    <input type="text" name="name" />
  </label>
  <input type="submit" value="Submit" />
</form>

    
    </Typography>
}

export default TaxreceiptPage