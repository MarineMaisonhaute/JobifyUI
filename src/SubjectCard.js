import { useEffect } from "react";

function SubjectCard(props){
    useEffect(() => {
        console.log(props)
    })
 return (
    <div style={{width: '100%'}}>
    <div style={{width: '100%'}}>
        {props.subject.name}
    </div>
    <hr />
    </div>
  );
}

export default SubjectCard;