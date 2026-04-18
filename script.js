var isHomeStyle = true; // przepisanie, ze styl jest domyśny
function zstylu(){
    
    const link = document.getElementById('theme-style');
    if (isHomeStyle == true) // sprawdziaie, czy styl jest domyśny
    {// jeśli tak, to skrypt zmiena jego na inny
        link.setAttribute('href', 'green.css');
        
        isHomeStyle = false;
    }
    else // jeśli nie, to skrypt zmiena jego na domyśny
    {
        link.setAttribute('href', 'red.css');
        isHomeStyle = true;
    }
    console.log('['+new Date().toLocaleString() +']' +' motyw został zmieniony');
}
var isOMnieShown = false;
function oMnie(){
    
    const om = document.getElementById('O');
    const o = document.getElementById('om');
    if (isOMnieShown == false)
    {
        om.style.opacity = '1';
        om.style.display = 'block';
        om.style.height = '500px';
        om.style.transition = 'all 0.4s ease'; 
        isOMnieShown = true;
        o.textContent = 'Ukryj sekcję';
        console.log('['+new Date().toLocaleString() +']' +' sekcja została pokazana');
    }
    else
    {
        om.style.display = 'none';
        om.style.opacity = '0';
        om.style.height = '0';
        om.style.transition = 'all 0.4s ease'; 
        isOMnieShown = false;
        o.textContent = 'Pokaz sekcję';
        console.log('['+new Date().toLocaleString() +']' +' sekcja została ukryta');
    }

}


var isUmShown = false;
function Um(){
    
    const um = document.getElementById('Umiejętności');
    const u = document.getElementById('u');
    if (isUmShown == false)
    {
        um.style.display = 'block';
        u.textContent = 'Ukryj sekcję';
        um.style.opacity = '1';
        um.style.height = '200px';
        um.style.transition = 'all 0.4s ease'; 
        isUmShown = true;
        console.log('['+new Date().toLocaleString() +']' +' sekcja została pokazana');
    }
    else
    {
        um.style.display = 'none';
        u.textContent = 'Pokaz sekcję';
        um.style.opacity = '0';
        um.style.height = '0';
        um.style.transition = 'all 0.4s ease'; 
        isUmShown = false;
        console.log('['+new Date().toLocaleString() +']' +' sekcja została ukryta');
    }

}
var isEdShown = false;
function Ed(){
    
    const ed = document.getElementById('Edukacja');
    const e = document.getElementById('e')
    if (isEdShown == false)
    {
        ed.style.display = 'block';
        e.textContent = 'Ukryj sekcję';
        ed.style.opacity = '1';
        ed.style.height = '200px';
        ed.style.transition = 'all 0.4s ease'; 
        isEdShown = true;
        console.log('['+new Date().toLocaleString() +']' +' sekcja została pokazana');
    }
    else
    {
        ed.style.display = 'none';
        ed.style.opacity = '0';
        e.textContent = 'Pokaz sekcję';
        ed.style.height = '0';
        ed.style.transition = 'all 0.4s ease'; 
        isEdShown = false;
        console.log('['+new Date().toLocaleString() +']' +' sekcja została ukryta');
    }

}
var isDośShown = false;
function Doś(){
    const d = document.getElementById('d');
    const doś = document.getElementById('Doświadczenie');
    if (isDośShown == false)
    {
        doś.style.display = 'block';
        doś.style.opacity = '1';
        d.textContent = 'Ukryj sekcję';
        doś.style.height = '200px';
        doś.style.transition = 'all 0.4s ease'; 
        isDośShown = true;
        console.log('['+new Date().toLocaleString() +']' +' sekcja została pokazana');
    }
    else
    {
        doś.style.display = 'none';
        doś.style.opacity = '0';
        doś.style.height = '0';
        d.textContent = 'Pokaz sekcję';
        doś.style.transition = 'all 0.4s ease'; 
        isDośShown = false;
        console.log('['+new Date().toLocaleString() +']' +' sekcja została ukryta');
    }

}
var isProjShown = false;
function Proj(){
    
    const proj = document.getElementById('Projekty');
    const p = document.getElementById('p');
    if (isProjShown == false)
    {
        proj.style.display = 'block';
        proj.style.opacity = '1';
        p.textContent = 'Ukryj sekcję';
        proj.style.height = '500px';
        proj.style.transition = 'all 0.4s ease'; 
        isProjShown = true;
        console.log('['+new Date().toLocaleString() +']' +' sekcja została pokazana');
    }
    else
    {
        proj.style.display = 'none';
        p.textContent = 'Pokaz sekcję';
        proj.style.opacity = '0';
        proj.style.height = '0';
        proj.style.transition = 'all 0.4s ease'; 
        isProjShown = false;
        console.log('['+new Date().toLocaleString() +']' + ' sekcja została ukryta');
    }

}
var isListOfProjectsShown = false; // przepisanie, ze lista projektów jest niewidoczna
function projekty(){
    
    const opacity = document.getElementById('PokazProjekty');
    const text = document.getElementById('O_projektach');
   if (isListOfProjectsShown == false){
    opacity.setAttribute('style' , 'opacity: 1');
    text.textContent='Ukryj lista projektów';
    isListOfProjectsShown = true;
    console.log('['+new Date().toLocaleString() +']' +' lista została pokazana');
   }
   else
   {
    opacity.setAttribute('style' , 'opacity: 0');
    text.textContent='Pokaz lista projektów';
    isListOfProjectsShown = false;
    console.log('['+new Date().toLocaleString() +']' +' lista została ukryta');
   }
    
}





// DOM elements
        const form = document.getElementById('contactForm');
        const firstNameInput = document.getElementById('firstname');
        const lastNameInput = document.getElementById('lastname');
        const emailInput = document.getElementById('email');
        const messageInput = document.getElementById('message');

        // kontenery błędów
        const errorFirstName = document.getElementById('error-firstname');
        const errorLastName = document.getElementById('error-lastname');
        const errorEmail = document.getElementById('error-email');
        const errorMessage = document.getElementById('error-message');

        const feedbackDiv = document.getElementById('formFeedback');

        // pomocnicza funkcja do ukrycia/pokazania błędu
        function setFieldError(inputElement, errorContainer, errorText) {
            if (errorText) {
                errorContainer.textContent = errorText;
                errorContainer.style.display = 'flex';
                inputElement.classList.add('error-input');
            } else {
                errorContainer.style.display = 'none';
                errorContainer.textContent = '';
                inputElement.classList.remove('error-input');
            }
        }

        // sprawdzenie czy ciąg zawiera cyfry (dla imienia i nazwiska)
        function containsDigits(str) {
            return /\d/.test(str);
        }

        // walidacja emaila (reguły rozszerzone – poprawny format)
        function isValidEmail(email) {
            // standardowy regex do walidacji email zgodny z HTML5 plus dodatkowe zabezpieczenie
            const emailRegex = /^[^\s@]+@([^\s@.,]+\.)+[^\s@.,]{2,}$/;
            if (!email || typeof email !== 'string') return false;
            return emailRegex.test(email.trim());
        }

        // sprawdzenie czy pole nie jest puste (po usunięciu białych znaków)
        function isNotEmpty(value) {
            return value && typeof value === 'string' && value.trim().length > 0;
        }

        // główna funkcja walidująca cały formularz – zwraca obiekt z błędami
        function validateForm() {
            const firstNameVal = firstNameInput.value;
            const lastNameVal = lastNameInput.value;
            const emailVal = emailInput.value;
            const messageVal = messageInput.value;

            let errors = {
                firstName: null,
                lastName: null,
                email: null,
                message: null
            };

            // 1. Imię: wymagane + brak cyfr
            if (!isNotEmpty(firstNameVal)) {
                errors.firstName = "Imię jest wymagane.";
            } else if (containsDigits(firstNameVal)) {
                errors.firstName = "Imię nie może zawierać cyfr.";
            }

            // 2. Nazwisko: wymagane + brak cyfr
            if (!isNotEmpty(lastNameVal)) {
                errors.lastName = "Nazwisko jest wymagane.";
            } else if (containsDigits(lastNameVal)) {
                errors.lastName = "Nazwisko nie może zawierać cyfr.";
            }

            // 3. Email: wymagany + poprawna składnia
            if (!isNotEmpty(emailVal)) {
                errors.email = "Adres e-mail jest wymagany.";
            } else if (!isValidEmail(emailVal)) {
                errors.email = "Podaj poprawny adres e-mail (np. imie@domena.pl).";
            }

            // 4. Wiadomość: wymagana (treść)
            if (!isNotEmpty(messageVal)) {
                errors.message = "Treść wiadomości jest wymagana.";
            }

            return errors;
        }

        // wyświetlenie błędów w UI
        function displayErrors(errors) {
            setFieldError(firstNameInput, errorFirstName, errors.firstName);
            setFieldError(lastNameInput, errorLastName, errors.lastName);
            setFieldError(emailInput, errorEmail, errors.email);
            setFieldError(messageInput, errorMessage, errors.message);
        }

        // czyszczenie wszystkich błędów i komunikatów sukcesu
        function clearAllErrorsAndFeedback() {
            setFieldError(firstNameInput, errorFirstName, null);
            setFieldError(lastNameInput, errorLastName, null);
            setFieldError(emailInput, errorEmail, null);
            setFieldError(messageInput, errorMessage, null);
            // nie usuwamy zawartości inputów, tylko wizualne błędy
        }

        // wyświetlenie komunikatu sukcesu
        function showSuccessMessage(data) {
            feedbackDiv.innerHTML = `
                <div class="success-message">
                    Wiadomość została wysłana (symulacja)!<br>
                    <strong>Odebrane dane:</strong> ${escapeHtml(data.firstName)} ${escapeHtml(data.lastName)}<br>
                    ${escapeHtml(data.email)}<br>
                    ${escapeHtml(data.message)}
                </div>
            `;
            // opcjonalnie: przewiń do komunikatu
            feedbackDiv.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }

        // prosty escape HTML, żeby nie było XSS
        function escapeHtml(str) {
            if (!str) return '';
            return str.replace(/[&<>]/g, function(m) {
                if (m === '&') return '&amp;';
                if (m === '<') return '&lt;';
                if (m === '>') return '&gt;';
                return m;
            }).replace(/[\uD800-\uDBFF][\uDC00-\uDFFF]/g, function(c) {
                return c;
            });
        }

        // czyszczenie komunikatu po każdej próbie walidacji lub interakcji
        function resetFeedback() {
            feedbackDiv.innerHTML = '';
        }

        // walidacja "na żywo" (opcjonalnie: podczas opuszczania pola) – poprawia UX
        function validateFieldOnBlur(fieldName) {
            let errors = validateForm();
            switch(fieldName) {
                case 'firstname':
                    setFieldError(firstNameInput, errorFirstName, errors.firstName);
                    break;
                case 'lastname':
                    setFieldError(lastNameInput, errorLastName, errors.lastName);
                    break;
                case 'email':
                    setFieldError(emailInput, errorEmail, errors.email);
                    break;
                case 'message':
                    setFieldError(messageInput, errorMessage, errors.message);
                    break;
                default: break;
            }
            // przy okazji jeśli wszystkie błędy zniknęły, można usunąć feedback ogólny? 
            // Ale nie usuwamy feedbacku sukcesu automatycznie – zostawiamy do następnego submita.
        }

        // Obsługa submit
        function onSubmitHandler(event) {
            event.preventDefault();   // brak backendu – całkowicie przeglądarka

            // 1. reset poprzednich komunikatów ogólnych i błędów
            resetFeedback();
            clearAllErrorsAndFeedback();

            // 2. pełna walidacja
            const errors = validateForm();

            // 3. sprawdzenie czy jakiekolwiek błędy istnieją
            const hasErrors = Object.values(errors).some(err => err !== null);

            if (hasErrors) {
                displayErrors(errors);
                // opcjonalnie dodatkowy komunikat globalny dla czytelności
                feedbackDiv.innerHTML = `<div style="background:#fee2e2; border-left:4px solid #e53e3e; padding:0.8rem; border-radius: 1rem; margin-top: 1rem; color:#9b2c2c;">
                                            ⚠️ Formularz zawiera błędy. Popraw zaznaczone pola.
                                          </div>`;
                // przewiń do pierwszego błędu
                const firstErrorField = document.querySelector('.error-input');
                if (firstErrorField) {
                    firstErrorField.focus();
                }
                return;
            }

            // 4. Brak błędów – pobranie danych i wyświetlenie komunikatu sukcesu (symulacja, brak backendu)
            const formData = {
                firstName: firstNameInput.value.trim(),
                lastName: lastNameInput.value.trim(),
                email: emailInput.value.trim(),
                message: messageInput.value.trim()
            };

            // wyświetlamy komunikat pozytywny
            showSuccessMessage(formData);

            // Opcjonalnie: można by wyczyścić formularz, ale nie ma takiego wymagania.
            // Dla lepszego UX – NIE resetujemy formularza, żeby użytkownik widział wysłane dane.
            // Jednak według wymagań minimalnych: nie ma konieczności czyszczenia.
            // Dla przejrzystości pozostawiamy dane, ale można dodać przycisk "Wyślij kolejną" – nie trzeba.
            // Dodatkowo: jeśli ktoś chce edytować, może to zrobić. 
            // Po ponownym wysłaniu znów walidacja.
        }

        // podpięcie zdarzeń dla walidacji w czasie rzeczywistym (blur) – zwiększa czytelność błędów
        function attachLiveValidation() {
            firstNameInput.addEventListener('blur', () => validateFieldOnBlur('firstname'));
            lastNameInput.addEventListener('blur', () => validateFieldOnBlur('lastname'));
            emailInput.addEventListener('blur', () => validateFieldOnBlur('email'));
            messageInput.addEventListener('blur', () => validateFieldOnBlur('message'));

            // Dodatkowo przy zmianie (input) – można zdjąć błąd danego pola w locie, aby UX był przyjemniejszy
            firstNameInput.addEventListener('input', () => {
                const err = validateForm().firstName;
                if (!err) setFieldError(firstNameInput, errorFirstName, null);
                resetFeedback(); // przy zmianie treści ukryj ogólny feedback o błędzie formularza
            });
            lastNameInput.addEventListener('input', () => {
                const err = validateForm().lastName;
                if (!err) setFieldError(lastNameInput, errorLastName, null);
                resetFeedback();
            });
            emailInput.addEventListener('input', () => {
                const err = validateForm().email;
                if (!err) setFieldError(emailInput, errorEmail, null);
                resetFeedback();
            });
            messageInput.addEventListener('input', () => {
                const err = validateForm().message;
                if (!err) setFieldError(messageInput, errorMessage, null);
                resetFeedback();
            });
        }

        // inicjalizacja
        form.addEventListener('submit', onSubmitHandler);
        attachLiveValidation();

        // początkowe czyszczenie stylów błędów (formularz bez błędów na start)
        clearAllErrorsAndFeedback();
