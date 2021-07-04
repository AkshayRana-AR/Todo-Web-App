
let title=document.getElementById("title");
let description=document.getElementById("description");
let enddate=document.getElementById("enddate");
let status=document.getElementById("status");
let submitbtn=document.getElementById("submitbtn");

submitbtn.addEventListener("click",submit_data);



        function submit_data()
        {
        let titletxt=title.value;
        let descriptiontxt=description.value;
        let enddatetxt=enddate.value;
        let statustxt=status.value;
            
        if(titletxt=="" || descriptiontxt=="" || enddatetxt=="")
        {
            if(titletxt=="")
            {
                document.getElementById("title_msg").innerHTML="*required";
            }
            if(descriptiontxt=="")
            {
                document.getElementById("description_msg").innerHTML="*required";
            }
            if(enddatetxt=="")
            {
                document.getElementById("enddate_msg").innerHTML="*required";
            }

            }
        else
        {

            console.log(sessionStorage.length);
            if(sessionStorage.length!=0)
            {
            let key=sessionStorage.getItem("todo_number");
            console.log(key);
            /*   let json_obj=localStorage.getItem(key);
            console.log(json_obj);
            let obj=JSON.parse(json_obj);
            
                let key =obj.json_todo_number;*/
                let json_todo_data={json_title:titletxt, json_description:descriptiontxt, json_enddate:enddatetxt, json_status:statustxt, json_todo_number:key} ;
                 let json_data=JSON.stringify(json_todo_data);  //js object to json
                // todo_number=json_todo_data.json_todo_number;
                //todo_number=todo_number+3;
                localStorage.setItem(key,json_data);
                // alert(json_data);
                // location.replace("ListPage.html");
                location.href = "ListPage.html";

                    sessionStorage.clear();
              }
            else
            {
            
                        // console.log(localStorage.length);
                        //key=localStorage.key(localStorage.length);
                    // console.log(key);
                    let key;
                    if(localStorage.length==null)
                    {
                        key=0;
                    }
                    else{
                        key=localStorage.length;
                    }
                    let json_todo_data={json_title:titletxt, json_description:descriptiontxt, json_enddate:enddatetxt, json_status:statustxt, json_todo_number:key} ;
                    let json_data=JSON.stringify(json_todo_data);  //js object to json
                    // todo_number=json_todo_data.json_todo_number;
                    //todo_number=todo_number+3;
                    localStorage.setItem(key,json_data);
                    // alert(json_data);
                    // location.replace("ListPage.html");
                    location.href = "ListPage.html";

                }             
        }

        }

    function edit_check()
    {
        console.log(sessionStorage.length);
        if(sessionStorage.length!=0)
        {
        let key=sessionStorage.getItem("todo_number");
        console.log(key);
        let json_obj=localStorage.getItem(key);
        console.log(json_obj);
        let obj=JSON.parse(json_obj);
        // console.log(obj);
            let title_edit=obj.json_title;
            //console.log(title);
            let description_edit=obj.json_description;
            let enddate_edit=obj.json_enddate;
            let status_edit=obj.json_status;
            fill_data(title_edit,description_edit,enddate_edit,status_edit);
        }
    }
edit_check();

    function fill_data(title_edit,description_edit,enddate_edit,status_edit)
    {
        document.getElementById("title").value=title_edit;
        let description=document.getElementById("description").innerHTML=description_edit;
        let enddate=document.getElementById("enddate").value=enddate_edit;
        let status=document.getElementById("status").value=status_edit;
    }