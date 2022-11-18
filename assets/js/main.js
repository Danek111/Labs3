function js_style() {
    let elem = document.getElementById("text");
    elem.style.fontSize = "36px";
    elem.style.color = "black";
    elem.style.background = "red";
    elem.style.border = "12px solid black";
    elem.style.width =  "112px";
}


// 2
// function getFormvalue()
// {
//   var x=document.getElementById("form1");
//   for (var i=0;i < x.length;i++)
//   {
//    if (x.elements[i].value!='Submit')
//     {  
//       console.log(x.elements[i].value);
//      }  
//    }
// }


// 3
// function getAttributes()
// {
//     var West = document.getElementById("w3r").href;
//     alert('Значение атрибута href ссылки is : '+West);
//     var Point = document.getElementById("w3r").hreflang;   
//     alert('Значение атрибута hreflang ссылки is : '+Point);
//     var Warning = document.getElementById("w3r").rel; 
//     alert('Значение атрибута  rel ссылки is : '+Warning);
//     var Xray = document.getElementById("w3r").target; 
//     alert('Значение атрибута taget ссылки is : '+Xray);
//     var Yes = document.getElementById("w3r").type; 
//     alert('Значение атрибута attribute ссылки is : '+Yes);  
// }


// 4
// function insert_Row()
// {
// var x=document.getElementById('sampleTable').insertRow(0);
// var y = x.insertCell(0);
// var z = x.insertCell(1);
// y.innerHTML="New Cell1";
// z.innerHTML="New Cell2";
// }


// 5
// function changeContent()
// {
// ssr= window.prompt("Выберите строку(0,1,2)", "0");
// dab= window.prompt("Выбирите столбец(0,1)","0");
// content = window.prompt("На что заменить?");  
// var uchti=document.getElementById('myTable').rows[parseInt(rn,10)].cells;
// uchti[parseInt(cn,10)].innerHTML =content;
// }



// function createTable()
// {
// ssr = window.prompt("Количество строк?", 1);
// dab = window.prompt("Количество столбцов?",1);
  
//  for(var sss=0;sss<parseInt(ssr,10);sss++)
//   {
//    var uchti=document.getElementById('myTable').insertRow(sss);
//    for(var ccc=0;ccc<parseInt(dab,10);ccc++)  
//     {
//      var yv =  uchti.insertCell(ccc);
//      y.innerHTML="Row-"+ssr+" Column-"+ccc; 
//     }
//    }
// }


// // 7

// function removecolor(){
// var xray=document.getElementById("colorSelect");
// let p = document.createElement('p')
// p.innerHTML = элемент ${xray.options[x.selectedIndex].text} был удалён
// document.body.append(p)
// xray.remove(xray.selectedIndex);
// }

// 8
// function getOptions()
// {
// var Xtemple=document.getElementById("mySelect");
// var txt1 = "items : ";
// var i;

// for (i=0;i<Xtemple.length;i++)
//   {
//     txt1 = txt1 + "\n" + Xtemple.options[i].text;
//   }
// alert(txt1);
// }

// 9