const adviceNumber = document.getElementById('advice-number');
const adviceText = document.getElementById('advice-text');
const originalText = document.getElementById('original-text');
const btnGet = document.getElementById('btn-get');
const btnCopy = document.getElementById('btn-copy');

// Botões Sociais
const btnWhatsapp = document.getElementById('btn-whatsapp');
const btnFacebook = document.getElementById('btn-facebook');
const btnInstagram = document.getElementById('btn-instagram');
const btnTweet = document.getElementById('btn-tweet');

async function translateText(text) {
  try {
    const response = await fetch(
      `https://api.mymemory.translated.net/get?q=${encodeURIComponent(text)}&langpair=en|pt-BR`
    );
    const data = await response.json();
    return data.responseData.translatedText;
  } catch (error) {
    return text;
  }
}

async function getAdvice() {
  try {
    btnGet.disabled = true;
    adviceText.innerText = 'Buscando conselho...';
    originalText.innerText = '';

    const response = await fetch(`https://api.adviceslip.com/advice?timestamp=${new Date().getTime()}`);
    const data = await response.json();
    
    const adviceEn = data.slip.advice;
    const advicePt = await translateText(adviceEn);

    adviceNumber.innerText = data.slip.id;
    adviceText.innerText = `"${advicePt}"`;
    originalText.innerText = `Original (EN): "${adviceEn}"`;

    updateSocialLinks(advicePt);
  } catch (error) {
    adviceText.innerText = 'Erro ao carregar conselho. Tente novamente.';
  } finally {
    btnGet.disabled = false;
  }
}

function updateSocialLinks(text) {
  const encodedText = encodeURIComponent(`${text} #ConselhoDoDia`);
  
  // WhatsApp
  btnWhatsapp.href = `https://api.whatsapp.com/send?text=${encodedText}`;
  
  // Facebook
  btnFacebook.href = `https://www.facebook.com/sharer/sharer.php?quote=${encodedText}`;
  
  // Twitter / X
  btnTweet.href = `https://twitter.com/intent/tweet?text=${encodedText}`;
}

function shareInstagram() {
  navigator.clipboard.writeText(adviceText.innerText);
  alert('Conselho copiado! Abrindo o Instagram para você colar no seu Status/Stories.');
  window.open('https://instagram.com', '_blank');
}

function copyToClipboard() {
  navigator.clipboard.writeText(adviceText.innerText);
  alert('Conselho copiado para a área de transferência!');
}

btnGet.addEventListener('click', getAdvice);
btnCopy.addEventListener('click', copyToClipboard);
btnInstagram.addEventListener('click', shareInstagram);

// Carrega o primeiro conselho ao abrir
getAdvice();