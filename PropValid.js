propBool: true,  
        propFunc: function(x){return x+5},  
        propNumber: 7416,  
        propString: "sathya"
    return(

         <div>
         <h1>Validating Props in React js</h1>

         <center>
         <table>
            <tr>
                <th>Type  </th>
                <th>Value</th>
                <th>Valid</th>
            </tr>

         <tr>
         <td>Array</td>
         <td>{this.props.propArray}</td>
         <td>{this.props.propArray ?
"true":"false"}</td>
         </tr>

         <tr>
             <td>Boolean</td>
             <td>{this.props.propBool ? "true":"false"}</td>
             <td>{this.props.propBool ? "true":"false"}</td>
         </tr>

         <tr>  
         <td>Function</td>  
         <td>{this.props.propFunc(20)}</td>  
         <td>{this.props.propFunc(20) ? "true" : "False"}</td>  
     </tr>  

     <tr>  
     <td>String</td>  
     <td>{this.props.propString}</td>  
     <td>{this.props.propString ? "true" : "False"}</td>  
 </tr>

 <tr>  
 <td>Number</td>  
 <td>{this.props.propNumber}</td>  
 <td>{this.props.propNumber ? "true" : "False"}</td>  
</tr>  
         </table>
         </center>
         </div>

    )
}

}
export default PropValid;