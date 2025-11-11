// language toggle (default TR)
const translations = {
  en: {
    "nav.home":"HOME","nav.services":"SERVICES","nav.gallery":"GALLERY","nav.contact":"CONTACT",
    "actions.book":"Book","actions.gallery":"View Gallery","services.title":"Our Services",
    "services.manicure.title":"Manicure","services.manicure.desc":"Classic & long-lasting polish.",
    "services.pedicure.title":"Pedicure","services.pedicure.desc":"Relaxing pedicure services.",
    "services.gel.title":"Gel & Acrylic","services.gel.desc":"Durable, natural-looking extensions.",
    "services.art.title":"Nail Art","services.art.desc":"Custom designs & seasonal trends.",
    "gallery.title":"Gallery","gallery.desc":"Samples of our work.","booking.title":"Booking & WhatsApp",
    "contact.title":"Contact & Location"
  }
};
let current='tr';
const btn=document.getElementById('langBtn');
btn.addEventListener('click', ()=>{
  current = current==='tr' ? 'en' : 'tr';
  btn.textContent = current==='tr' ? 'ENGLISH' : 'TÜRKÇE';
  if(current==='tr') restoreTurkish(); else applyEnglish();
});
function applyEnglish(){
  document.querySelectorAll('[data-i18n]').forEach(el=>{
    const key=el.getAttribute('data-i18n');
    if(translations.en[key]) el.textContent = translations.en[key];
  });
}
function restoreTurkish(){
  location.reload();
}
// set year
document.getElementById('year').textContent = new Date().getFullYear();
