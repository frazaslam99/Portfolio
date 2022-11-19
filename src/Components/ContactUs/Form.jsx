import React, { useState, useEffect } from 'react'



function Contactform() {



    let [Name, setName] = useState("");
    let [Email, setEmail] = useState("");
    let [subject, setsubject] = useState("");
    let [contactno, setcontactno] = useState("");
    const [message, setmessage] = useState("");



    // const dispatch = useDispatch();





    function onChangeData(evt) {

        switch (evt.target.name) {

            case "name":
                setName(evt.target.value);
                break;

            case "email":
                setEmail(evt.target.value);
                break;


            case "contactno":
                setcontactno(evt.target.value);
                break;


            case "subject":
                setsubject(evt.target.value);
                break;

            case "message":
                setmessage(evt.target.value);
                break;

        }


    }


    function handesubmit(e) {
        e.preventDefault();
        if(Name==" " && Email==" " && subject==" " && contactno==" "  ){

            alert("Please inser the Feild")
        }
        {
            alert("Suceesfullty Submit")

        }
    
           
            // Name,
            // Email,
            // password,
            // Opname,
            // Radioname
  

        setName("");
        setEmail("");
        setsubject("");
        setcontactno("");
        setmessage("");

    }





    return (
       
            <form onSubmit={handesubmit} >




                <input type="text" name="name" required onChange={onChangeData} placeholder="Name" value={Name} /><br />


                <input type="text" name="email" required onChange={onChangeData} placeholder="Email" value={Email} /><br />

                <input type="text" name="subject" required onChange={onChangeData} placeholder="Subject" value={subject} /><br />

                <input type="text" name="contactno"  required onChange={onChangeData} placeholder="Phone No" value={contactno} /><br />

                <textarea rows="6" type="text" required name="message" onChange={onChangeData} placeholder="Message" value={message} /><br />


                <input type="submit" value="Submit"  />

            </form>
      
    )
}
export default (Contactform);