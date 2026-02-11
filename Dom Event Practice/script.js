const themeBtn = document.getElementById('themeBtn');
const body = document.body;
const skillItems = document.querySelectorAll('#skillList li');
const hobbyList = document.getElementById('hobbyList')
const hobbyInput = document.getElementById('hobbyInput')
const addHobbyBtn = document.getElementById('addHobbyBtn');


themeBtn.addEventListener('click', () => {
    body.classList.toggle('dark-theme');
    if(body.classList.contains('dark-theme')) {
      themeBtn.innerText = "☀️ Switch to Light Mode";
    } else {
      themeBtn.innerText = "🌙 Switch to Dark Mode";
    }
});

skillItems.forEach(item => {
    item.addEventListener('mouseenter', () => {
    item.classList.add('highlight');
     });
        item.addEventListener('mouseleave', () => {
        item.classList.remove('highlight');
    });
});

addHobbyBtn.addEventListener('click' ,() =>
{
    const hobbyText = hobbyInput.value;

    if(hobbyText.trim() != "")
    {
        const newLi = document.createElement('li');
        newLi.innerText = hobbyText;

        hobbyList.appendChild(newLi);

        hobbyInput.value = "";
    }
    else{
        alert("Please enter a hobby !.");
    }
});


hobbyInput.addEventListener('keypress' ,(e) =>
{
    if(e.key === 'Enter')
    {
        addHobbyBtn.click();
    }
});