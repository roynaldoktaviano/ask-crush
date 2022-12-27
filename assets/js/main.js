window.addEventListener('load', () => {

    const siButton = document.getElementById('siButton');
    const noButton = document.getElementById('noButton');

    function numberBetween(min, max) {  
        return Math.floor(
          Math.random() * (max - min) + min
        )
    }

    noButton.addEventListener('mouseover', () => {
        const buttonClientRect = noButton.getBoundingClientRect();

        const top = buttonClientRect.top;
        const left = buttonClientRect.left;
        const height = buttonClientRect.height;
        const width = buttonClientRect.width;

        const maxHeight = window.innerHeight - height;
        const maxWidth = window.innerWidth - width;

        const randomTop = numberBetween(0, maxHeight);
        const randomLeft = numberBetween(0, maxWidth);

        // Prevent the next position from falling close to the current position.
        const newTop = avoidSamePosition(randomTop, top, height * 2,  maxHeight);
        const newLeft = avoidSamePosition(randomLeft, left, width * 2, maxWidth);

        noButton.style.position = 'absolute';
        noButton.style.top = newTop + 'px';
        noButton.style.left = newLeft + 'px';
    });


    siButton.addEventListener('click', () => {
        Swal.fire({
            icon: 'success',
            title: 'Hore!',
            text: 'Tempat dan Waktu ditentukan di chat yak :D',
            timer: 3000
        })
    });

    const avoidSamePosition = (newPos, oldPos, range,limit) => {

        if(Math.abs(newPos - oldPos) > range) {
            return newPos;
        }

        if (newPos + range < limit) {
            return newPos + range;
        } else {
            return newPos - range;
        }

    }
});
