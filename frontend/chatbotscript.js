const userMessage = [
    ["hi", "hey", "hello"],
    ["sure", "yes", "no"],
    ["are you genious", "are you nerd", "are you intelligent"],
    ["i hate you", "i dont like you"],
    ["how are you", "how is life", "how are things", "how are you doing"],
    ["how is corona", "how is covid 19", "how is covid19 situation"],
    ["what are you doing", "what is going on", "what is up"],
    ["how old are you"],
    ["who are you", "are you human", "are you bot", "are you human or bot"],
    ["who created you", "who made you", "who is your creator"],
  
    [
      "your name please",
      "your name",
      "may i know your name",
      "what is your name",
      "what call yourself"
    ],
    ["i love you"],
    ["happy", "good", "fun", "wonderful", "fantastic", "cool", "very good"],
    ["bad", "bored", "tired"],
    ["help me", "tell me story", "tell me joke"],
    ["ah", "ok", "okay", "nice", "welcome"],
    ["thanks", "thank you"],
    ["what should i eat today"],
    ["bro"],
    ["what", "why", "how", "where", "when"],
    ["corona", "covid19", "coronavirus"],
    ["you are funny"],
    ["i dont know"],
    ["boring"],
    ["im tired"],
    "I feel sad today",
    "How do I know if I am depressed?",
    "What are the symptoms of anxiety?",
    "How can I improve my sleep?",
    "What can I do to reduce stress?",
    "What is a panic attack?",
    "How do I handle a panic attack?",
    "What are the signs of an eating disorder?",
    "How can I improve my self-esteem?",
    "What is PTSD?",
    "How do I cope with PTSD?",
    "What is bipolar disorder?",
    "How does bipolar disorder differ from depression?",
    "What causes mental illness?",
    "Can mental illness be cured?",
    "How can I support a friend with mental health issues?",
    "What are the benefits of therapy?",
    "How do I find the right therapist?",
    "What is CBT?",
    "How does medication for mental health work?",
    "What are the side effects of antidepressants?"
];

const botReply = [
    ["Hello!", "Hi!", "Hey!", "Hi there!"],
  ["Okay"],
  ["Yes I am! "],
  ["I'm sorry about that. But I like you dude."],
  [
    "Fine... how are you?",
    "Pretty well, how are you?",
    "Fantastic, how are you?"
  ],
  ["Getting better. There?", "Somewhat okay!", "Yeah fine. Better stay home!"],

  [
    "Nothing much",
    "About to go to sleep",
    "Can you guess?",
    "I don't know actually"
  ],
  ["I am always young."],
  ["I am just a bot", "I am a bot. What are you?"],
  ["Sabitha Kuppusamy"],
  ["I am nameless", "I don't have a name"],
  ["I love you too", "Me too"],
  ["Have you ever felt bad?", "Glad to hear it"],
  ["Why?", "Why? You shouldn't!", "Try watching TV", "Chat with me."],
  ["What about?", "Once upon a time..."],
  ["Tell me a story", "Tell me a joke", "Tell me about yourself"],
  ["You're welcome"],
  ["Briyani", "Burger", "Sushi", "Pizza"],
  ["Dude!"],
  ["Yes?"],
  ["Please stay home"],
  ["Glad to hear it"],
  ["Say something interesting"],
  ["Sorry for that. Let's chat!"],
  ["Take some rest, Dude!"],"Its okay if you feel so, infact feeling that way is optimistic in its way. It is because it lets you believe that such a mood can be beaten if you think of one single reason to be happy. Can you find one?",
    "Signs of depression include persistent sadness, loss of interest in activities, changes in appetite or sleep, and withdrawal from social interactions.",
    "Symptoms of anxiety include excessive worry, restlessness, fatigue, difficulty concentrating, and physical symptoms like increased heart rate.",
    "Improving your sleep can involve establishing a regular sleep schedule, creating a restful environment, and avoiding screens before bedtime.",
    "To reduce stress, try regular physical activity, mindfulness meditation, and setting realistic goals.",
    "A panic attack is a sudden episode of intense fear that triggers severe physical reactions when there is no real danger or apparent cause.",
    "Handling a panic attack can involve deep breathing exercises, grounding techniques, and seeking professional help if they are frequent.",
    "Signs of an eating disorder can include drastic weight changes, preoccupation with food or body weight, and extreme eating behaviors.",
    "Improving self-esteem can involve recognizing your strengths, setting achievable goals, and practicing self-compassion.",
    "PTSD (Post-Traumatic Stress Disorder) is a condition that can develop after experiencing or witnessing a traumatic event, characterized by flashbacks, nightmares, and severe anxiety.",
    "Coping with PTSD can involve seeking professional therapy, practicing self-care, and joining support groups.",
    "Bipolar disorder is a mental health condition characterized by extreme mood swings, including emotional highs (mania or hypomania) and lows (depression).",
    "Bipolar disorder differs from depression in that it includes episodes of mania or hypomania, which are not present in depression.",
    "Mental illness can be caused by a combination of genetic, biological, environmental, and psychological factors.",
    "While some mental illnesses can be managed effectively with treatment, others may require long-term care to manage symptoms.",
    "To support a friend with mental health issues, listen without judgment, encourage them to seek professional help, and be there for them consistently.",
    "Therapy can provide a safe space to explore your feelings, develop coping strategies, and address mental health issues with a trained professional.",
    "To find the right therapist, consider what type of therapy might suit you, check credentials, and schedule a consultation to ensure a good fit.",
    "CBT (Cognitive Behavioral Therapy) helps you identify and change negative thought patterns and behaviors.",
    "Medication for mental health works by balancing brain chemistry to alleviate symptoms, but should be used under a doctor's supervision.",
    "Common side effects of antidepressants can include nausea, weight gain, loss of sexual desire, fatigue, and insomnia."
];

  
  const alternative = [
    ["Hello!", "Hi!", "Hey!", "Hi there!"],
  ["Okay"],
  ["Yes I am! "],
  ["I'm sorry about that. But I like you dude."],
  [
    "Fine... how are you?",
    "Pretty well, how are you?",
    "Fantastic, how are you?"
  ],
  ["Getting better. There?", "Somewhat okay!", "Yeah fine. Better stay home!"],

  [
    "Nothing much",
    "About to go to sleep",
    "Can you guess?",
    "I don't know actually"
  ],
  ["I am always young."],
  ["I am just a bot", "I am a bot. What are you?"],
  ["Sabitha Kuppusamy"],
  ["I am nameless", "I don't have a name"],
  ["I love you too", "Me too"],
  ["Have you ever felt bad?", "Glad to hear it"],
  ["Why?", "Why? You shouldn't!", "Try watching TV", "Chat with me."],
  ["What about?", "Once upon a time..."],
  ["Tell me a story", "Tell me a joke", "Tell me about yourself"],
  ["You're welcome"],
  ["Briyani", "Burger", "Sushi", "Pizza"],
  ["Dude!"],
  ["Yes?"],
  ["Please stay home"],
  ["Glad to hear it"],
  ["Say something interesting"],
  ["Sorry for that. Let's chat!"],
  ["Take some rest, Dude!"],
    "Signs of depression include persistent sadness, loss of interest in activities, changes in appetite or sleep, and withdrawal from social interactions.",
    "Symptoms of anxiety include excessive worry, restlessness, fatigue, difficulty concentrating, and physical symptoms like increased heart rate.",
    "Improving your sleep can involve establishing a regular sleep schedule, creating a restful environment, and avoiding screens before bedtime.",
    "To reduce stress, try regular physical activity, mindfulness meditation, and setting realistic goals.",
    "A panic attack is a sudden episode of intense fear that triggers severe physical reactions when there is no real danger or apparent cause.",
    "Handling a panic attack can involve deep breathing exercises, grounding techniques, and seeking professional help if they are frequent.",
    "Signs of an eating disorder can include drastic weight changes, preoccupation with food or body weight, and extreme eating behaviors.",
    "Improving self-esteem can involve recognizing your strengths, setting achievable goals, and practicing self-compassion.",
    "PTSD (Post-Traumatic Stress Disorder) is a condition that can develop after experiencing or witnessing a traumatic event, characterized by flashbacks, nightmares, and severe anxiety.",
    "Coping with PTSD can involve seeking professional therapy, practicing self-care, and joining support groups.",
    "Bipolar disorder is a mental health condition characterized by extreme mood swings, including emotional highs (mania or hypomania) and lows (depression).",
    "Bipolar disorder differs from depression in that it includes episodes of mania or hypomania, which are not present in depression.",
    "Mental illness can be caused by a combination of genetic, biological, environmental, and psychological factors.",
    "While some mental illnesses can be managed effectively with treatment, others may require long-term care to manage symptoms.",
    "To support a friend with mental health issues, listen without judgment, encourage them to seek professional help, and be there for them consistently.",
    "Therapy can provide a safe space to explore your feelings, develop coping strategies, and address mental health issues with a trained professional.",
    "To find the right therapist, consider what type of therapy might suit you, check credentials, and schedule a consultation to ensure a good fit.",
    "CBT (Cognitive Behavioral Therapy) helps you identify and change negative thought patterns and behaviors.",
    "Medication for mental health works by balancing brain chemistry to alleviate symptoms, but should be used under a doctor's supervision.",
    "Common side effects of antidepressants can include nausea, weight gain, loss of sexual desire, fatigue, and insomnia."

   
  ];
  
  const synth = window.speechSynthesis;
  
  function voiceControl(string) {
    let u = new SpeechSynthesisUtterance(string);
    u.text = string;
    u.lang = "en-aus";
    u.volume = 1;
    u.rate = 1;
    u.pitch = 1;
    synth.speak(u);
  }
  
  function sendMessage() {
    const inputField = document.getElementById("input");
    let input = inputField.value.trim();
    input != "" && output(input);
    inputField.value = "";
  }
  document.addEventListener("DOMContentLoaded", () => {
    const inputField = document.getElementById("input");
    inputField.addEventListener("keydown", function (e) {
      if (e.code === "Enter") {
        let input = inputField.value.trim();
        input != "" && output(input);
        inputField.value = "";
      }
    });
  });
  
  function output(input) {
    let product;
  
    let text = input.toLowerCase().replace(/[^\w\s\d]/gi, "");
  
    text = text
      .replace(/[\W_]/g, " ")
      .replace(/ a /g, " ")
      .replace(/i feel /g, "")
      .replace(/whats/g, "what is")
      .replace(/please /g, "")
      .replace(/ please/g, "")
      .trim();
  
    let comparedText = compare(userMessage, botReply, text);
  
    product = comparedText
      ? comparedText
      : alternative[Math.floor(Math.random() * alternative.length)];
    addChat(input, product);
  }
  
  function compare(triggerArray, replyArray, string) {
    let item;
    for (let x = 0; x < triggerArray.length; x++) {
      for (let y = 0; y < replyArray.length; y++) {
        if (triggerArray[x][y] == string) {
          items = replyArray[x];
          item = items[Math.floor(Math.random() * items.length)];
        }
      }
    }
    //containMessageCheck(string);
    if (item) return item;
    else return containMessageCheck(string);
  }
  
  function containMessageCheck(string) {
    let expectedReply = [
      [
        "Good Bye, dude",
        "Bye, See you!",
        "Dude, Bye. Take care of your health in this situation."
      ],
      ["Good Night, dude", "Have a sound sleep", "Sweet dreams"],
      ["Have a pleasant evening!", "Good evening too", "Evening!"],
      ["Good morning, Have a great day!", "Morning, dude!"],
      ["Good Afternoon", "Noon, dude!", "Afternoon, dude!"]
    ];
    let expectedMessage = [
      ["bye", "tc", "take care"],
      ["night", "good night"],
      ["evening", "good evening"],
      ["morning", "good morning"],
      ["noon"]
    ];
    let item;
    for (let x = 0; x < expectedMessage.length; x++) {
      if (expectedMessage[x].includes(string)) {
        items = expectedReply[x];
        item = items[Math.floor(Math.random() * items.length)];
      }
    }
    return item;
  }
  function addChat(input, product) {
    const mainDiv = document.getElementById("message-section");
    let userDiv = document.createElement("div");
    userDiv.id = "user";
    userDiv.classList.add("message");
    userDiv.innerHTML = `<span id="user-response">${input}</span>`;
    mainDiv.appendChild(userDiv);
  
    let botDiv = document.createElement("div");
    botDiv.id = "bot";
    botDiv.classList.add("message");
    botDiv.innerHTML = `<span id="bot-response">${product}</span>`;
    mainDiv.appendChild(botDiv);
    var scroll = document.getElementById("message-section");
    scroll.scrollTop = scroll.scrollHeight;
    voiceControl(product);
  }