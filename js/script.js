document.querySelector('ul.list-group.list-group-flush').style.display = 'none'
let keywords = ["kakinada","rajahmundry","hyderabad","vizag"]
document.querySelector('input.search').addEventListener('keyup',(e)=>{
    document.querySelector('ul.list-group.list-group-flush').style.display = 'block'
    document.querySelector('ul.list-group.list-group-flush').innerHTML = ""
    for(let i = 0 ; i<keywords.length ; i++){
        if(keywords[i].indexOf(e.target.value) != -1)
        {
           document.querySelector('ul.list-group.list-group-flush').innerHTML += `<li class="list-group-item"><a href="./${keywords[i]}.html">${keywords[i]}</a></li>` 
        }
    }
})
document.querySelector('ul.list-group.list-group-flush').addEventListener('click',()=>{
    document.querySelector('ul.list-group.list-group-flush').style.display = 'block'
})
document.querySelector('input.search').addEventListener('focus',()=>{
    document.querySelector('ul.list-group.list-group-flush').style.display = 'block'
})
document.onscroll = ()=>{
    document.querySelector('ul.list-group.list-group-flush').style.display = 'none'
}
