class Chatbox {
    constructor() {
        this.args = {
            openButton: document.querySelector('.chatbox__button'),
            chatBox: document.querySelector('.chatbox'),
            sendButton: document.querySelector('.send__button')
        }

        this.state = true;
        this.messages = [];
    }

    display() {
        const {openButton, chatBox, sendButton} = this.args;

        openButton.addEventListener('click', () => this.toggleState(chatBox))

        sendButton.addEventListener('click', () => this.onSendButton(chatBox))

        const node = chatBox.querySelector('input');
        node.addEventListener("keyup", ({key}) => {
            if (key === "Enter") {
                this.onSendButton(chatBox)
            }
        })
    }

    toggleState(chatbox) {
        this.state = !this.state;

        // show or hides the box
        if(this.state) {
            chatbox.classList.add('chatbox--active')
        } else {
            chatbox.classList.remove('chatbox--active')
        }
    }

    onSendButton(chatbox) {
        var textField = chatbox.querySelector('input');
        let text1 = textField.value
        if (text1 === "") {
            return;
        }

        let msg1 = { name: "User", message: text1 }
        this.messages.push(msg1);

        //'http://127.0.0.1:5000/predict', 
        fetch($SCRIPT_ROOT + '/predict', 
        // fetch('https://127.0.0.1:5000/predict',
        {
            method: 'POST',
            body: JSON.stringify({ message: text1 }),
            mode: 'cors',
            headers: {
              'Content-Type': 'application/json'
            },
          })
          .then(r => r.json())
          .then(r => {
            let msg2 = { name: "Hemmyrald", message: r.answer };
            this.messages.push(msg2);
            this.updateChatText(chatbox)
            textField.value = ''

        }).catch((error) => {
            console.error('Error:', error);
            this.updateChatText(chatbox)
            textField.value = ''
          });
    }

    updateChatText(chatbox) {
        var html = '';
        this.messages.slice().reverse().forEach(function(item, index) {
            if (item.name === "Hemmyrald")
            {
                html += '<div class="messages__item messages__item--visitor">' + item.message + '</div>'
            }
            else
            {
                html += '<div class="messages__item messages__item--operator">' + item.message + '</div>'
            }
          });

        const chatmessage = chatbox.querySelector('.chatbox__messages');
        chatmessage.innerHTML = html;
    }
}


const chatbox = new Chatbox();
chatbox.display();

// MAP FUNCTION
const apiKey = 'AIzaSyBskubXKCEIwyHvxo4ujI2lUrpNuw6BWk0';
  
const places = {
    'esku': {lat: 7.714223071725182, lng: 5.2601633988231296},
    'school gate': {lat: 7.714223071725182, lng: 5.2601633988231296},
    'eksu press': {lat:7.713489481104602, lng: 5.258940311566278},
    'university library': { lat: 7.708976680188959, lng: 5.252539579743806},
    'library': { lat: 7.708976680188959, lng: 5.252539579743806},
    'eksu power house': {lat: 7.713829697202767, lng: 5.259358736154148},
    'school field': {lat: 7.717287947405029, lng: 5.258621676593903},
    'eksu central mosque': {lat: 7.7132372599847905, lng: 5.2638251307847},
    'main auditorium': {lat: 7.713832638332022, lng: 5.251250935477413},
    'eksu main auditorium': {lat: 7.713832638332022, lng: 5.251250935477413},
    'faculty of management science': {lat: 7.710470051186579, lng: 5.2566765270569356},
    'faculty of law': {lat: 7.710444614698912, lng: 5.252530518891078},
    'new 4-1': {lat:  7.712081902693148, lng: 5.2523212446331655},
    'faculty of science': { lat: 7.709812348392526, lng: 5.250750048048228},
    'faculty of social sciences': {lat: 7.711398081853061, lng: 5.253497128382822},
    'faculty of social sciences pavillion': {lat: 7.711148234246658, lng: 5.253939692850643},
    'faculty of social sciences twin hall': {lat: 7.711480074136749, lng: 5.255957695072645},
    'department of tourism and hospitality management': {lat: 7.710818647817255, lng: 5.254095260963926},
    'college of medicine': {lat: 7.6757078792081375, lng: 5.242734636686101},
    'department of phisiology': {lat: 7.707789630615347, lng: 5.255785280652182},
    'department of anatomy': {lat: 7.706993906871769, lng: 5.256308320886559},
    'medical library': {lat: 7.705950307825514, lng: 5.255484873255762},
    'post graduate school': {lat:7.706957524881043, lng: 5.253560989980643},
    'faculty of arts twin hall': {lat: 7.705671060432141, lng: 5.252461284333032},
    'arts twin hall': {lat: 7.705671060432141, lng: 5.252461284333032},
    'twin hall arts': {lat: 7.705671060432141, lng: 5.252461284333032},
    'faculty of arts': {lat: 7.708875677400003, lng: 5.251818065518683},
    'new faculty of arts': {lat: 7.706234553605718, lng: 5.252531021764344},
    'twin hall': {lat: 7.70706118611583, lng: 5.251586884200801},
    'twin hall education': {lat: 7.70706118611583, lng: 5.251586884200801},
    'twin hall lecture theater': {lat: 7.70706118611583, lng: 5.251586884200801},
    'goodluck ebele lecture theater': {lat: 7.70711700368605, lng: 5.252584665910338},
    'faculty of education': {lat: 7.709011233763567, lng: 5.251064364803122},
    'glass house': {lat: 7.707950607041343, lng: 5.252648214703554},
    'senate building': {lat: 7.707950607041343, lng: 5.252648214703554},
    '1050 seaters lecture theatre': {lat: 7.7075970963268325, lng: 5.253860573213067},
    '1050 lecture theatre': {lat: 7.7075970963268325, lng: 5.253860573213067},
    '1050': {lat: 7.7075970963268325, lng: 5.253860573213067},
    '3000 seaters lecture theatre': {lat: 7.707950607041343, lng: 5.252648214703554},
    '3000 seaters': {lat: 7.707950607041343, lng: 5.252648214703554},
    '3000 seaters lt': {lat: 7.707950607041343, lng: 5.252648214703554},
    'academic affairs': {lat: 7.70975014808573, lng: 5.253599052288951},
    'academic affairs building': {lat: 7.70975014808573, lng: 5.253599052288951},
    'eksu library': {lat: 7.708976680188959, lng: 5.252539579743806},
    'faculty of science parking lot': {lat: 7.710609736372663, lng: 5.250801010015607},
    'plant science laboratory': {lat: 7.71115644350458, lng: 5.250229713122537},
    'faculty of science garden': {lat: 7.711706853545644, lng: 5.250560315100201},
    'ptp lt7': {lat: 7.713683166142189, lng: 5.2481927585433},
    'directorate of part-time program building': {lat: 7.712312614070339, lng: 5.24849019995032},
    'ptp': {lat: 7.712312614070339, lng: 5.24849019995032},
    'sug office': {lat: 7.714544297534053, lng:  5.244548162002569},
    'sug building': {lat: 7.714544297534053, lng:  5.244548162002569},
    'ile eye': {lat: 7.71248658800343, lng: 5.248832942184322},
    'ile eye 750lt': {lat: 7.71248658800343, lng: 5.248832942184322},  
     'first bank': {lat: 7.716080578952271, lng: 5.246602731223368},
     'uba': {lat: 7.716415477124284, lng: 5.248984532649816},
     'wema bank': {lat: 7.714012969076198, lng: 5.249758450344592 },
     'access bank': {lat: 7.713287397169068, lng: 5.250049092858145},
     'eco bank': {lat: 7.713034892736182, lng: 5.249796965208287},
     'zenith bank': {lat: 7.713327221020349, lng: 5.249774543597472},
     'gtb': {lat: 7.715298429195319, lng: 5.251071826565908},
     'gt bank': {lat: 7.715298429195319, lng: 5.251071826565908},
     '750lt': {lat: 7.715660626901454, lng: 7.715660626901454},
     'health center': {lat: 7.714798738442059, lng: 5.252209083102861}, 
     'school health center': {lat: 7.714798738442059, lng: 5.252209083102861},
     'security unit': {lat: 7.715457904843358, lng: 5.2517852941103165},
     'ict center': {lat: 7.713380379824114, lng: 5.250777689693747},
     'ict': {lat: 7.713380379824114, lng: 5.250777689693747},
     'department of theater and media arts': {lat: 7.714012969076198, lng: 5.251539436996801},
     'tma': {lat: 7.714012969076198, lng: 5.251539436996801},
     'parking hall': {lat: 7.712657419520557, lng: 5.251174656598154},
     'odua hall': {lat: 7.713940828630037, lng: 5.252138832011947},
     'administrative building': {lat: 7.713207237519969, lng: 5.2523373154641515},
     'lawrence omolayo administrative building': {lat: 7.713207237519969, lng: 5.2523373154641515},
     'academic building': {lat: 7.709738509060854, lng: 5.253566329517145},
     'esc': {lat: 7.709350446304228, lng: 5.248566692129599},
     'office of student affairs': {lat: 7.71450308329043, lng: 5.248413589819733},
     'student affairs': {lat: 7.71450308329043, lng: 5.248413589819733},
     'eksu tech hub': {lat: 7.71296047034796, lng: 5.250083961579992},
     'tech hub': {lat: 7.71296047034796, lng: 5.250083961579992},
     'maths clinic': {lat: 7.71226409516661, lng: 5.250866930847191},
     'mathematics clinic': {lat: 7.71226409516661, lng: 5.250866930847191},
     'twin hall social sciences': {lat: 7.711356724943239, lng: 5.256020269914878}
    };  
  function createBotMessage(message) {
    const botMessage = document.createElement('p');
    botMessage.innerHTML = `<strong>Bot:</strong> ${message}`;
    botMessage.classList.add('bot-message');
    return botMessage;
  }
  
  function createUserMessage(message) {
    const userMessage = document.createElement('p');
    userMessage.innerHTML = `<strong>You:</strong> ${message}`;
    userMessage.classList.add('user-message');
    return userMessage;
  }
  
  function sendMessage(message) {
    const messagesDiv = document.getElementById('map_messages');
    const userMessage = createUserMessage(message);
    messagesDiv.appendChild(userMessage);
  
    if (message.toLowerCase().includes('direction to') || 
      message.toLowerCase().includes('I am looking for path to the') ||
      message.toLowerCase().includes('how do I get to')) {
      const place = message
        .toLowerCase()
        .replace('direction to', '')
        .replace('I am looking for path to the ', '')
        .replace('how do i get to', '')
        .trim();
      const destination = places[place];
      if (destination) {
        const mapUrl = `https://www.google.com/maps/dir/?api=1&destination=${destination.lat},${destination.lng}&key=${apiKey}`;
        const botMessage = createBotMessage(`Here are the directions to ${place}: <a href="${mapUrl}" target="_blank">${mapUrl}</a>`);
        messagesDiv.appendChild(botMessage);
      } else {
        const botMessage = createBotMessage(`Sorry, I couldn't find directions to ${place}.`);
        messagesDiv.appendChild(botMessage);
      }
    } else {
      const botMessage = createBotMessage("Please use the keyword 'direction to' to find where you are going to.");
      messagesDiv.appendChild(botMessage);
    }
  
    messagesDiv.scrollTop = messagesDiv.scrollHeight;
  }
  
  function handleUserInput(event) {
    if (event.keyCode === 13) {
      const userInput = event.target.value;
      sendMessage(userInput);
      event.target.value = '';
    }
  }
  
  document.getElementById('map_input').addEventListener('keyup', handleUserInput);
  // document.getElementsByClassName('map__button').addEventListener('keyup', handleUserInput)
  
  sendMessage("");
  

  // LIST
  let sliders = document.getElementsByClassName('slider');
  let currentSlider = 0;
  
  function showSlider(index) {
    // To Hide all sliders
    for (let i = 0; i < sliders.length; i++) {
      sliders[i].classList.remove('active');
    }
    // To show the current slider
    sliders[index].classList.add('active')
  }
  
  function nextSlider() {
    currentSlider++;
  
    if (currentSlider >= sliders.length) {
      currentSlider = 0;
    }
    showSlider(currentSlider);
  }
  // Show the first slider
  showSlider(currentSlider);
  
  // Time switch of every sliders is 10seconds
  setInterval(nextSlider, 8500);









// DOM ELEMENTS
const btn_one = document.querySelector('.btn-one');
const btn_two = document.querySelector('.btn-two');
const btn_three = document.querySelector('.btn-three');
const btn1_p = document.querySelector('.btn1-p')
const btn2_p = document.querySelector('.btn2-p');
const btn3_p = document.querySelector('.btn3-p')

btn_one.addEventListener('click', function(){
  btn1_p.style.display = 'block';
  btn2_p.style.display = 'none';
  btn3_p.style.display = 'none'
  btn_one.style.color = '#0404bf';
  btn_two.style.color = 'black';
  btn_three.style.color = 'black'
  btn_one.style.border = '#0404bf';
  btn_one.style.backgroundColor = 'rgb(216, 223, 223)';
  btn_two.style.backgroundColor = 'transparent';
  btn_three.style.backgroundColor = 'transparent';
})

btn_two.addEventListener('click', function(){
  btn1_p.style.display = 'none';
  btn2_p.style.display = 'block';
  btn3_p.style.display = 'none'
  btn_one.style.color = 'black';
  btn_two.style.color = '#0404bf';
  btn_three.style.color = 'black'
  btn_one.style.backgroundColor = 'transparent';
  btn_two.style.backgroundColor = 'rgb(216, 223, 223)';
  btn_three.style.backgroundColor = 'transparent';
})
btn_three.addEventListener('click', () =>{
  btn1_p.style.display = 'none';
  btn2_p.style.display = 'none';
  btn3_p.style.display = 'block';
  btn_one.style.color = 'black';
  btn_two.style.color = 'black';
  btn_three.style.color = '#0404bf';
  btn_three.style.border = '#0404bf';
  btn_one.style.backgroundColor = 'transparent';
  btn_two.style.backgroundColor = 'transparent';
  btn_three.style.backgroundColor = 'rgb(216, 223, 223)';
})