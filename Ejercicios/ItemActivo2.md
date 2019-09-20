
<!--            ITEM ACTIVO                     -->

<script>
// Item activo menu 

const monthSelected = document.getElementById('months');
const months = document.querySelectorAll('.month-item')	

monthSelected.addEventListener('click', e => {
    months.forEach(element => {
        if(element.classList.contains('active')){
            element.classList.remove('active')
        }
    });
    if(e.target.firstElementChild != null){
        e.target.classList.add('active');
    } 
    else {
        e.target.parentElement.classList.add('active');
    }
})</script>