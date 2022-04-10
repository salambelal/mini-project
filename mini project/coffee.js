let pay2 = document.getElementById('pay')
let notee = document.getElementById('note')

document.getElementById('ok').addEventListener("click", function(){
    console.log('pay2.value')
      
    if(pay2.value==''){
        document.getElementById('note').style.color='red'
        document.getElementById('note').innerHTML='Put the money please'
    }

   else if (pay2.value == '5'){
        document.getElementById('note').innerHTML = ' The remaining money is 4JD <br> Have a nice day!'
    }
   else if (pay2.value == '10'){
        document.getElementById('note').innerHTML = ' The remaining money is 9JD <br> Have a nice day!'
    }
   else if (pay2.value == '20'){
        document.getElementById('note').innerHTML = ' The remaining money is 19JD <br> Have a nice day!'
    }
   else if (pay2.value == '50'){
        document.getElementById('note').innerHTML = ' The remaining money is 49JD <br> Have a nice day!'
    }
   else {
    document.getElementById('note').style.color='red'
       document.getElementById('note').innerHTML= 'Put the money please <br> 5JD - 10JD - 20JD - 50JD'
   }
})