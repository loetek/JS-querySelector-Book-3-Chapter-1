

const articleHeader = document.querySelector(".article__header");
articleHeader.textContent = "Welcome to JD's Blog!";

const articleHeaderImportantList = document.querySelectorAll(".article__header");

for(let i =0; i < articleHeaderImportantList[i]; i+=1){

    articleHeaderImportantList.classList.remove(".article__header");
    articleHeaderImportantList.classList.add(".articleHeaderImportant");
}

const removeDash = document.querySelector(".dashed");
removeDash.classList.remove(".dashed");

const goldenFoot = document.querySelector(".article_footer");
goldenFoot.classList.add("goldenRod");





