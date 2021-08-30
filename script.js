const theme=document.getElementById('theme')
const newItemInput=document.getElementById('addItem');
const todoList=document.querySelector('.content ul')
const itemsleft=document.querySelector('.items-left span')

// itemsleft.innerHTML=document.querySelectorAll('list-item input[type="checkbox"]').length;

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
     console.log( document.querySelector('.filter input[type="radio"]:checked').id)
     elem.innerHTML=`
        <label>
                                <input type="checkbox" name="to-do-item3" >
                                <span class="checkmark"></span>
                                <span class="text">${text}</span>
                                </label>
                                <span class="remove"></span>`;
     if( document.querySelector('.filter input[type="radio"]:checked').id===completed){
         elem.classList.add('hidden')
     }

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

    todoList.addEventListener('click',(event)=>{
        if (event.target.classList.contains('remove'))
        removeToDoItem(event.target.parentElement)
})
//Clearing the list
document.querySelector('.clear').addEventListener('click',()=>{
    document.querySelectorAll('list-item input[type="checkbox"]:checked').forEach(item=>{
        console.log(Hello)
        removeToDoItem(item.closest('li'))
    })
})

// Filter for to do list
document.querySelectorAll('.filter input').forEach(radio=>{
    radio.addEventListener('change',(event)=>{
        filterTodoList(event.target.id)
    })
})

function filterTodoList(id){
     const allItems=todoList.querySelectorAll('li');

     switch (id){
         case 'all':
             allItems.forEach(item=>{
                 item.classList.remove('hidden')
             })
             break
         case 'active':
             allItems.forEach(item=>{
                 item.querySelector('input').checked? item.classList.add('hidden'):item.classList.remove('hidden');
             })
             break
         default:
             allItems.forEach(item=>{
                 !item.querySelector('input').checked ? item.classList.add('hidden') : item.classList.remove('hidden')
             })
            break
     }
}