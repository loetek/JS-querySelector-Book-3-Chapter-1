

const articleHeader = document.querySelector(".article__header");
articleHeader.textContent = "Welcome to JD's Blog!";

const articleHeaderImportantList = document.querySelectorAll(".article__header");

for(let i =0; i < articleHeaderImportantList.length; i+=1){

    // articleHeaderImportantList[i].classList.remove("article__header");
    articleHeaderImportantList[i].classList.add("articleHeaderImportant");
    // articleHeaderImportantList[i].classList.replace(".article__header", ".articleHeaderImportant");
}

const removeDash = document.querySelector(".dashed");
removeDash.classList.remove("dashed");

const goldenFoot = document.querySelector(".article__footer");
goldenFoot.classList.add("goldenrod");


console.log(articleHeaderImportantList);


