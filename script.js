let stack = [];
const stackContainer = document.getElementById("stack");
const message = document.getElementById("message");
const stack_size = document.getElementById("stack_size");
const stack_top = document.getElementById("stack_top");
const reset_button = document.getElementById("reset_button");
const push_sound = new Audio("./Assets/push.mp3");
const pop_sound = new Audio("./Assets/pop.wav");
const alert_sound = new Audio("./Assets/alert.mp3");
const peek_sound = new Audio("./Assets/peek.mp3");
const reset_sound = new Audio("./Assets/reset.wav");

function renderStack(x) {
  stackContainer.innerHTML = "";
  stack.forEach((element, index) => {
    const el = document.createElement("div");
    el.classList.add("stack-element");
    if (index === stack.length - 1 && x === true) {
      el.style.bottom = `300px`;
      setTimeout(() => {
        el.style.bottom = `${index * 50 + 5}px`;
      }, 100);
    } else {
      el.style.bottom = `${index * 50 + 5}px`;
    }
    el.innerText = element;
    stackContainer.appendChild(el);
  });
}

function push() {
  const element = document.getElementById("element").value;
  if (element) {
    stack.push(element);
    document.getElementById("element").value = "";
    renderStack(true);
    message.innerText = "";
    stack_size.innerHTML = stack.length;
    stack_top.innerHTML = stack[stack.length - 1];
    console.log(stack);
    push_sound.play();
  } else {
    alert_sound.currentTime = 0;
    alert_sound.play();
    message.innerText = "Please enter an element";
    message.style.opacity = 1;
    setTimeout(() => {
      message.style.opacity = 0;
    }, 2000);
  }
}

function pop() {
  if (stack.length > 0) {
    stack.pop();
    renderStack(false);
    message.innerText = "";
    stack_size.innerHTML = stack.length;
    if (stack.length === 0) {
      stack_top.innerHTML = "-";
    } else {
      stack_top.innerHTML = stack[stack.length - 1];
    }
    console.log(stack);
    pop_sound.play();
  } else {
    alert_sound.currentTime = 0;
    alert_sound.play();
    message.innerText = "Stack is empty";
    message.style.opacity = 1;
    setTimeout(() => {
      message.style.opacity = 0;
    }, 2000);
  }
}

function peek() {
  if (stack.length > 0) {
    peek_sound.currentTime = 0;
    peek_sound.play();
    message.innerText = `Top element is ${stack[stack.length - 1]}`;
  } else {
    alert_sound.currentTime = 0;
    alert_sound.play();
    message.innerText = "Stack is empty";
  }
  message.style.opacity = 1;
  setTimeout(() => {
    message.style.opacity = 0;
  }, 2000);
}

renderStack();
message.style.opacity = 0;

reset_button.addEventListener("click", () => {
  reset_sound.currentTime = 0;
  reset_sound.play();
  while (stack.length > 0) {
    stack.pop();
  }
  stackContainer.innerHTML = "";
  console.log(stack);
  stack_size.innerHTML = "0";
  stack_top.innerHTML = "-";
});

// iButtonToggle function
let information_div = document.getElementById("information_div");
function iButtonToggle() {
  if (information_div.classList.contains("opacity-0")) {
    information_div.classList.remove("opacity-0");
    setTimeout(() => {
      information_div.classList.add("opacity-0");
    }, 10000);
  } else {
    information_div.classList.add("opacity-0");
  }
}
