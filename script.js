const theme=document.getElementById('theme')
const newItemInput=document.getElementById('addItem');
const todoList=document.querySelector('.content ul')
const itemsleft=document.querySelector('.items-left span')

theme.addEventListener('click',()=>{
    document.querySelector('body').classList=[theme.checked ? 'theme-light':'theme-dark'];
});
newItemInput.addEventListener('keypress',(e)=>{
        if(e.charCode === 13 && newItemInput.value.length>0){
            createNewToDoItem(newItemInput.value);
            newItemInput.value=''
        }
    });
 function createNewToDoItem(text){
     let elem=document.createElement('li');
     elem.classList.add('flex-row');
     elem.innerHTML=`
        <label>
                                <input type="checkbox" name="to-do-item3" >
                                <span class="checkmark"></span>
                                <span class="text">${text}</span>
                                </label>
                                <span class="remove"></span>`;

    todoList.append(elem)
     updateItemsCount(1)
}

//Updating Items
function  updateItemsCount(number){
     itemsleft.innerHTML=+itemsleft.innerText+number
}
//removing Items
function removeToDoItem(elem){
     elem.remove()
    updateItemsCount(-1)
}
document.querySelectorAll('.remove').forEach(item=>{
    item.addEventListener('click',(event)=>{
        removeToDoItem(event.target.parentElement)
    })
})