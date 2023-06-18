const offerData = "oferta"
const contactData = "kontakt"


function description() {
    location.reload();
}

function offer() {
    const description = document.getElementById('description');
    description.innerHTML=offerData;
}

function contact() {
    const description = document.getElementById('description');
    description.innerHTML=contactData;
}