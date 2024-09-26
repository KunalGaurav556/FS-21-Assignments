
const Quotes = (props) =>{
    console.log(props.lists)
    return(
        <>
          <div style={{
            // border:"2px solid blue",
            display:"flex",
            justifyContent:"center",
            alignContent:"center",
            fontFamily: "cursive",
            backgroundColor:"whitesmoke"
          }}>
          <div style={{
            // border:"2px solid red",
            display:"flex",
            flexDirection:"column",
            gap:"1.5rem",
            justifyContent:"center",
            alignItems: 'center',
            marginBottom:"2.5rem",
            marginTop:"2.5rem",
            width:"90%",
            padding:"2rem",
            backgroundColor:"lightslategray",
            borderRadius:"25px",
            boxShadow:"8px 10px black"
           }}>
           <p style={{
            fontSize:"17px"
           }}>{props.lists.quote}</p>
           <h3 style={{
            color:"blue"
           }}>{props.lists.author}</h3>
           </div>
          </div>
        </>
    )
}
export default Quotes;