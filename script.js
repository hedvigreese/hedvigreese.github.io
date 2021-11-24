function modalBox(){
    document.addEventListener("click", function (event) {
    ;
        const target = event.target;
        if (target.hasAttribute('data-box')){
            if (target.hasAttribute('data-window')){
                const dynamicID = target.getAttribute('data-window');
                document.getElementById(dynamicID).classList.add('open-modal');
            }
        }

        if (target.hasAttribute('data-dismiss') || target.classList.contains('modal')){
            const modal = document.querySelector('[class="modal open-modal"]');
            modal.classList.remove('open-modal');
        }

    });
}
modalBox();

function myFunction() {
    window.open("psychedelic.html");
  }

  function myFunction2() {
    window.open("https://mashable.com/article/best-apps-for-taking-care-of-plants");
  }