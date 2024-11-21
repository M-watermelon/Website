
// let draggableElement = document.getElementById('draggableElement');
// let offsetX, offsetY;

// draggableElement.addEventListener('mousedown', startDragging);
// draggableElement.addEventListener('mouseup', stopDragging);

// function startDragging(e) {
//     e.preventDefault();
//     offsetX = e.clientX - draggableElement.getBoundingClientRect().left;
//     offsetY = e.clientY - draggableElement.getBoundingClientRect().top;
//     draggableElement.classList.add('dragging');
//     document.addEventListener('mousemove', dragElement);
// }

// function dragElement(e) {
//     e.preventDefault();
//     let x = e.clientX - offsetX;
//     let y = e.clientY - offsetY;
//     draggableElement.style.left = x + 'px';
//     draggableElement.style.top = y + 'px';
// }

// function stopDragging() {
//     draggableElement.classList.remove('dragging');
//     document.removeEventListener('mousemove', dragElement);
// }

  window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 300) {
    /*
    document.getElementById("navbar").style.width = "150px";
   
    */
    document.getElementById("navbar").style.position = "fixed";
    document.getElementById("navbar").style.background="linear-gradient(60deg,rgb(233, 99, 157) 0%, rgba(148,187,233,1) 100%)";

  } else {
    document.getElementById("navbar").style.position = "absolute";
    document.getElementById("navbar").style.background="var(--bg-color)";

  }
}
