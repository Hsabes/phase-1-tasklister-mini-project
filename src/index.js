document.addEventListener("DOMContentLoaded", () => {
  document.addEventListener('submit', function(e) {
    e.preventDefault();
    console.log(e.target['new-task-description'].value);
  })
});