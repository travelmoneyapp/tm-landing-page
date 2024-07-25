window.onload = () => {
    updateYear();
};

let updateYear = () => {
    let date = new Date();
    document.querySelector(".copyright-year").innerHTML = `${date.getFullYear()}`;
}