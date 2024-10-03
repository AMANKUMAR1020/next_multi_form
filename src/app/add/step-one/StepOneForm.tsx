"use client"

export default function StepOneForm(){
    return(
    <form >
        <div>

            <input type="text" id="name" placeholder="inter.." required/>
            <input type="text" id="link" placeholder="inter.." required 
            pattern="[Hh][Tt][Tt][Pp][Ss]?:\/\/(?:(?:[a-zA-Z\u00a1-\uffff0-9]+-?)*[a-zA-Z\u00a1-\uffff0-9]+)(?:\.(?:[a-zA-Z\u00a1-\uffff0-9]+-?)*[a-zA-Z\u00a1-\uffff0-9]+)*(?:\.(?:[a-zA-Z\u00a1-\uffff]{2,}))(?::\d{2,5})?(?:\/[^\s]*)?"/>
            <button>Submmit</button>
        </div>
    </form>)
}