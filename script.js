// ساعة حية
function updateTime() {
    const timeElement = document.getElementById("time");
    const now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    timeElement.textContent = hours + ":" + minutes + ":" + seconds;
}

// تحديث الساعة كل ثانية
setInterval(updateTime, 1000);

// إضافة الأنميشن لكلمة "RSK"
document.addEventListener("DOMContentLoaded", () => {
    const rskText = document.getElementById("rsk-text");
    const letters = rskText.textContent.split("");
    rskText.innerHTML = "";

    letters.forEach((letter, index) => {
        const span = document.createElement("span");
        span.textContent = letter;
        span.style.animationDelay = `${index * 0.1}s`;
        rskText.appendChild(span);
    });
});

// التبديل بين الوضع النهاري والوضع الليلي
const themeToggleButton = document.getElementById("theme-toggle");
const moonIcon = document.getElementById("moon-icon");
const sunIcon = document.getElementById("sun-icon");

themeToggleButton.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    moonIcon.style.display = moonIcon.style.display === "none" ? "inline" : "none";
    sunIcon.style.display = sunIcon.style.display === "none" ? "inline" : "none";
});

// التفاعل مع النموذج
document.getElementById("login-form").addEventListener("submit", function(event) {
    event.preventDefault();
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if (username === "user" && password === "password") {
        alert("تم تسجيل الدخول بنجاح!");
    } else {
        alert("اسم المستخدم أو كلمة المرور غير صحيحة.");
    }
});
