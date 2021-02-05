document.addEventListener('DOMContentLoaded', function () {
    var elem = document.querySelector('.howwork__steps_btn');
    elem.focus();
    // console.log('java') 
    document.querySelectorAll('.howwork__steps_btn').forEach(function(StepsBtn){
        StepsBtn.addEventListener('click', function(event) {
            const path = event.currentTarget.dataset.path;
            // console.log(path)

            document.querySelectorAll('.howwork__text').forEach(function(btnContent) {
                btnContent.classList.remove('howwork__text_active');
            });
            document.querySelector(`[data-target="${path}"]`).classList.add('howwork__text_active');
        });
    });
});