function hello() {
    let name = prompt('Введите Ваше имя?')
    if (name == null || name == "")
    {
        alert(`Ваше право быть анонимным.`);
    }
    else
    {
        alert(`Здравствуйте, ${name}!`);
    }
}
    
window.addEventListener('load', function(event) {
    hello();
});
    

