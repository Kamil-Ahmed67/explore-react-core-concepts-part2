import { useState } from "react"

export default function Team() {
    const [team,setTeam]= useState(11);
    const handleAdd=()=>{
        const newTeam=team+1;
        setTeam(newTeam);
    }
    const handleReduce=()=>{
        const reducedTeam=team-1;
        setTeam(reducedTeam);
    }
    const teamStyle={
        border: '2px solid tomato',
        marginBottom: '10px',
        padding:'5px',
        borderRadius:'5px',
        backgroundColor: 'green',
         color: 'red'
    }
    return (
        <div style={teamStyle}>
            <h3>Players:{team}</h3>
            <button onClick={handleAdd} style={{backgroundColor: 'red',marginRight:'10px'}}>Add Player</button>
            <button onClick={handleReduce} style={{backgroundColor: 'red'}}>Remove Player</button>
        </div>
    )
}