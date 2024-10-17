
axios.get("https://flynn.boolean.careers/exercises/api/random/mail ")
.then(response => {
    const emaildata = response.data
   
    const listItems = document.querySelectorAll("li")

    
    listItems.forEach(element => {
        element.innerHTML = emaildata
    })
})