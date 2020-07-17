const close_btn=document.querySelector('#close-btn');
const form_container=document.querySelector('.form');
const add_button=document.querySelector('#add-comment');
const coment_view_button=document.querySelector('#view-comments');
const comment_form=document.querySelector('form');
const name_input=document.querySelector('#name');
const comment_input=document.querySelector('#comment');
const comment_section=document.querySelector('.comment-section');
const comments_section=document.querySelector('.comments');

close_btn.addEventListener('click',shrinkForm);

function shrinkForm(){
 form_container.style.display="none";

}

add_button.addEventListener('click',displayForm);

function displayForm(){
        form_container.style.display="flex";
        comment_section.style.display="none";
   
}




comment_form.addEventListener('submit',addComment);




function addComment(e){
    comments_section.innerHTML +=`
    <div class="comment">
        <h2 class="black-text">${name_input.value}</h2>
        <p class="black-text">${comment_input.value}</p>
        <div class="options">
            <span class="plus red-text del-btn">Delete &times;</span>
        </div>
        <br/>
        <br/>
    </div>
   
    `
    form_container.style.display="none";
    comment_section.style.display="flex";

    const comment_cards=document.querySelectorAll('.comment');
    const delete_buttons=document.querySelectorAll('.del-btn');


    for (let i = 0; i < comment_cards.length; i++) {
        const element = comment_cards[i];

        let delete_button=delete_buttons[i];

        delete_button.addEventListener('click',()=>{
            comments_section.removeChild(element);
            alert("Comment Deleted Successfully");
        });
        
    }
    e.preventDefault();
}


coment_view_button.addEventListener('click',displayComments);


function displayComments(){
    comment_section.style.display="flex";
    form_container.style.display="none";
}

