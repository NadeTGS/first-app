const Content = () => {
  //? Lcal style objesi 
  const parStyle = {
    fontFamily:"tahoma",
    fontSize:"1.5rem",
    textAlign:"center",
  }
  return (
    <main>
        <h2 style={{color:"pink", background:"blue"}}>REACT JS</h2> {/*burası inline CSS dir. çift süslü yapılarak stil verilebilir */}
        <p style={parStyle}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod ex perspiciatis fugit repellendus dolores soluta!</p>
        <p style={parStyle}>Lorem ipsum dolor sit amet.</p>
    </main>
  )
}

export default Content