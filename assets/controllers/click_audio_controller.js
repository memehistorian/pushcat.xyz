import { Controller } from '@hotwired/stimulus';

/*
* The following line makes this controller "lazy": it won't be downloaded until needed
* See https://github.com/symfony/stimulus-bridge#lazy-controllers
*/
/* stimulusFetch: 'lazy' */
export default class extends Controller {
    static targets = ['clickNoise']
    
    connect() {
        document.body.addEventListener('click', this.playAudio.bind(this), true);
    }

    playAudio() {
        this.clickNoiseTarget.play();
    }
}
