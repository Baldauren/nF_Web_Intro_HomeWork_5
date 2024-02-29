//1
let table = document.getElementById("age-table");
console.log(table);
//2
let getLabel = table.getElementsByTagName("label");
console.log(getLabel);
// 3
let getTd = table.getElementsByTagName("td")[0];
console.log(getTd);
//4
let nameSearch = document.querySelector('form[name="search"]');
console.log(nameSearch);
//5
let form = document.getElementsByName("search")[0];
let getInput = form.getElementsByTagName("input")[0];
console.log(getInput);

// Что выведет этот код?

/* <script>
  let body = document.body;

  body.innerHTML = "<!--" + body.tagName + "-->";

  alert( body.firstChild.data ); // что выведет?
</script> */

// Ответ: BODY
