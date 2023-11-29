var myModal = document.getElementById('staticBackdrop');
myModal.addEventListener('hidden.bs.modal', function () {
 var ytplayer = document.getElementById('ytplayer');
 ytplayer.src = ''; // Stop the video
});