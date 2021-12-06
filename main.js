const imageContainers = document.querySelectorAll('.image_container');
const submit  = document.querySelector('.btn');
const panel = document.querySelector('.box');

const images  = document.querySelector('.image');



let selectedRating = "neutral";

images.addEventListener('click', (e)=>{

    if(e.target.parentNode.classList.contains("image_container"))
    
    
    {
        removeActive()
       e.target.parentNode.classList.add('active');
       selectedRating = e.target.nextElementSibling.innerHTML;


    }
    
}
)

submit.addEventListener('click', (e) =>{

    panel.innerHTML  = `
    
    <i class="fas fa-heart"></i>
    <strong>Thank You! <br> Feedback: ${selectedRating}</strong>

    `
})


function removeActive()
{
    for (i= 0; i<imageContainers.length; i++)
    {
        imageContainers[i].classList.remove('active')
    }

}

