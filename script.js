const toggle_Btn = document.querySelector('.toggle_btn');
const toggle_Btn_Icon = document.querySelector('.toggle_btn i');
const dropdown_menu = document.querySelector('.dropdown_menu');
toggle_Btn.addEventListener('click', () => {
    dropdown_menu.classList.toggle('active');
    const isActive = dropdown_menu.classList.contains('active');

    toggle_Btn_Icon.classList = isActive? 'fas fa-times' : 'fas fa-bars';
    });


