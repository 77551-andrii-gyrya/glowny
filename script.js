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