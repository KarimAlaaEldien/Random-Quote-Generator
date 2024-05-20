var articles=[
    {
        name:'Elbert Hubbard',
        tractate: "Do not take life too seriously. You will not get out alive",
    },
    {
        name:'Frank Zappa',
        tractate: "So many books, so little time.",  
    },
    {
        name:'Nelson Mandela',
        tractate: "Resentment is like drinking poison and waiting for your enemies to die.",
    },
    {
        name:'Epictetus',
        tractate: "It's not what happens to you, but how you react to it that matters.",
    },
    {
        name:'Mae West',
        tractate: "You only live once, but if you do it right, once is enough.",
    },
    {
        name:'Robert Frost',
        tractate: "In three words I can sum up everything I've learned about life: it goes on.",
    },
    {
        name:'Mark Twain',
        tractate: "If you tell the truth, you don't have to remember anything.",
    },
    {
        name:'Charles M. Schulz',
        tractate: "All you need is love. But a little chocolate now and then doesn't hurt.",
    },
];

var randStore=[];

function getQuotes(){
    if(randStore.length ==articles.length){
        randStore=[];
      }
      
   do{
       var num= Math.floor(Math.random() * articles.length);
   }while(randStore.indexOf(num)!==-1);
   randStore.push(num);
   getContent(num);
}


function getContent(num){
document.getElementById("author").innerHTML= `--${articles[num].name}`;
document.getElementById("treatise").innerHTML=`"${articles[num].tractate}"`;
}









