function Students(props){
    return(
        <div style={{backgroundColor:"skyblue" , margin:20} }>
            <h1>Props in React:::</h1>
            <h1>Name:{props.Name}  </h1>
            <h3>Email:{props.Email}</h3>
        </div>
    )
}
export default Students;