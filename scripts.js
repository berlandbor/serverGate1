function openNav() {
    document.getElementById("sidebar").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
}

function closeNav() {
    document.getElementById("sidebar").style.width = "0";
    document.getElementById("main").style.marginLeft= "0";
}

document.addEventListener("DOMContentLoaded", function() {
            var dateElement = document.getElementById("current-date");
            var currentDate = new Date();
            var options = { year: 'numeric', month: 'long', day: 'numeric' };
            dateElement.textContent = currentDate.toLocaleDateString('ru-RU', options);
        });
