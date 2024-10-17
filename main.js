
axios.get("https://flynn.boolean.careers/exercises/api/random/mail ")
.then(response => {
    const emaildata = response.data
    
    document.querySelector("li").innerHTML = emaildata.response
    
})