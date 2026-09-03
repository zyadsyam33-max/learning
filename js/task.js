
const questions = [
  { id: 1, text: "He ............. a boy.", options: ["am", "is", "are"], answer: "is" },
  { id: 2, text: "We ............. pupils.", options: ["am", "is", "are"], answer: "are" },
  { id: 3, text: "It ............. a cute cat.", options: ["am", "is", "are"], answer: "is" },
  { id: 4, text: "She ............. a beautiful girl.", options: ["am", "is", "are"], answer: "is" },
  { id: 5, text: "Ali ............. a smart boy.", options: ["am", "is", "are"], answer: "is" },
  { id: 6, text: "Aya ............. a boy.", options: ["is", "isn't", "aren't"], answer: "isn't" },
  { id: 7, text: "We ............. vets.", options: ["are", "is", "isn't"], answer: "are" },
  { id: 8, text: "He ............. a doctor.", options: ["am", "is", "are"], answer: "is" },
  { id: 9, text: "It ............. big.", options: ["aren't", "is", "are"], answer: "is" },
  { id: 10, text: "She ............. a boy.", options: ["isn't", "is", "are"], answer: "isn't" },
  { id: 11, text: "They ............. at cinema.", options: ["am", "is", "are"], answer: "are" },
  { id: 12, text: "The children ............. men.", options: ["isn't", "aren't", "are"], answer: "aren't" },
  { id: 13, text: "Huda ............. a nurse.", options: ["am", "is", "are"], answer: "is" },
  { id: 14, text: "My dad ............. a clerk.", options: ["am", "is", "are"], answer: "is" },
  { id: 15, text: "My parents ............. tall.", options: ["am", "is", "aren't"], answer: "aren't" },
  { id: 16, text: "Farid ............. my brother.", options: ["am", "is", "are"], answer: "is" },
  { id: 17, text: "I ............. good at drawing.", options: ["'m not", "is", "are"], answer: "'m not" }
];

let q=document.getElementById('q');

displayask()
//    let valid=document.getElementById('valid');
function displayask(){
    let data="";
    for(let i=0; i<questions.length;i++){
        data+=`
        <div class="text-center card" >
    <h4 class="text"><span>${questions[i].id}.</span>${questions[i].text}</h4>
<div class="text-center py-3" >
    <button class="btn btn-outline-secondary px-4 mx-2" data-qindex="${i}" data-oindex="0" onclick="this">${questions[i].options[0]}</button>
    <button class="btn btn-outline-secondary px-4 mx-2" data-qindex="${i}" data-oindex="1" onclick="this">${questions[i].options[1]}</button>
    <button class="btn btn-outline-secondary px-4 mx-2" data-qindex="${i}" data-oindex="2" onclick="this">${questions[i].options[2]}</button>
<div class="d-none" id="valid-${i}"></div>
    </div>
</div>
        `
    }
    q.innerHTML=data;

} 

    q.querySelectorAll('button').forEach(btn => {
        btn.addEventListener('click', () => {
            const qi = parseInt(btn.dataset.qindex);
            const oi = parseInt(btn.dataset.oindex);
            addask(qi, questions[qi].options[oi],btn);
        });
    });

let count=0;
function addask(index,sellectans,btn){
       let valid=document.getElementById(`valid-${index}`);
if(questions[index].answer=== sellectans){
   btn.classList.remove("btn-outline-secondary") 
   btn.classList.add("btn-success") 
   valid.classList.remove("d-none")
   valid.classList.add("d-block")
   valid.classList.add("valid-feedback")
   valid.innerHTML="Correct answer"
      count++;
   document.getElementById("count").innerHTML=count;
}else{
     btn.classList.remove("btn-outline-secondary") 
   btn.classList.add("btn-danger")   
      valid.classList.remove("d-none")
         valid.classList.add("d-block")
   valid.classList.add("invalid-feedback")
   valid.innerHTML="incorrect answer"
}
// q.querySelectorAll(`[data-qindex="${index}"]`).forEach((b)=>b.disabled=true)
}
let total=document.getElementById("total");

let Correct=document.getElementById("correct");
let submitBtn=document.getElementById("submitBtn");
let h3=document.getElementById("h3");
submitBtn.addEventListener("click",()=>{
h3.classList.remove("d-none");
submitBtn.classList.add("d-none")
total.innerHTML="/" + questions.length;
})
function switchTab(tab, button) {

  // نخفي كل المحتويات
  document.querySelectorAll(".tab-content").forEach(function(item) {
    item.classList.remove("active");
  });

  // نشيل active من كل الأزرار
  document.querySelectorAll(".tab-btn").forEach(function(item) {
    item.classList.remove("active");
  });

  // نظهر الـ tab اللي اختاره المستخدم
  document.getElementById(tab).classList.add("active");

  // نخلي الزر اللي ضغطنا عليه active
  button.classList.add("active");
}