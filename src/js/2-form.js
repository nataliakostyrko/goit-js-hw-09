const FORM_DATA_KEY = "feedback-form-state";
const formData = {
    email: ``,
    message: ''
};  
const feedbackForm = document.querySelector(".feedback-form");

feedbackForm.addEventListener('input', () => {
  const userEmail = feedbackForm.elements.email.value.trim();
  const userMessage = feedbackForm.elements.message.value.trim();

    formData.email = userEmail;
    formData.message = userMessage;
    localStorage.setItem(FORM_DATA_KEY, JSON.stringify(formData));
});

feedbackForm.addEventListener('submit', (event) => {
    const email = feedbackForm.elements.email.value;
    const message = feedbackForm.elements.message.value;
    
    if (email === '' || message === '') {
    alert('Fill please all fields');
    event.preventDefault();
  } else {
    event.preventDefault();
    console.log(JSON.parse(localStorage.getItem(FORM_DATA_KEY)));
    localStorage.removeItem(FORM_DATA_KEY);
    feedbackForm.reset();
  } 
});
function parseData(key = 'empty') {
  const data = localStorage.getItem(key);
  try {
    return JSON.parse(data);
  } catch (error) {
    console.log(error.name);
    return null;
  }
}

function loadData() {
  const parsedData = parseData(FORM_DATA_KEY) || {};

  feedbackForm.elements.email.value = parsedData.email || '';
  feedbackForm.elements.message.value = parsedData.message || '';
}

loadData();
