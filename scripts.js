function Login() {
    // Hitta inloggningsknappen i dokumentet
            const loginButton = document.getElementById('login-button');

            // Lägg till en "lyssnare" som väntar på att någon klickar på knappen
            loginButton.addEventListener('click', function() {
                // Hitta behållaren som knappen ligger i
                const loginSection = document.getElementById('login-section');

                // Byt ut innehållet i behållaren mot ett meddelande
                loginSection.innerHTML = '<p>Du är nu inloggad!</p>';
            });
}

