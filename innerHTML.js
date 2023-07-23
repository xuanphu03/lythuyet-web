var courses = ['HTML & CSS', 'Javascript', 'PHP', 'Java']

function render(courses) {
    var list = document.querySelector('.courses-list');
    
    // Cách 1
    var listItems = []; 
    var index = 0;
    courses.forEach(function (e) {
        listItems[index] = `<li>${e}</li>`;
        index++;
    });
    list.innerHTML = listItems.join('');
    
    // Cách 2
    // var listItems = courses.map((e) => ('<li>' + e + '</li>'));
    // list.innerHTML = (listItems.join(''));

}

render(courses);