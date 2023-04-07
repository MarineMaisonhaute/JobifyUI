import { useEffect } from "react";

function TeacherCard(props){
    useEffect(() => {
        console.log(props)
    })
 return (
    <div>
    <div>
        {props.teacher.firstName}
    </div>
    <div>
    {props.teacher.lastName}
    </div>
    <hr />
    </div>
  );
}

export default TeacherCard;