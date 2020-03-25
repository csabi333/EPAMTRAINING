class Horse {

    id;
    velocity;
    element;
    ts;

    _goodness;
    _interval;

    constructor(id, velocity) {
        this.id = id;
        this.velocity = parseInt(velocity);
        this._goodness = parseInt(Math.random() * 3);

        this._interval = window.setInterval(() => {
            if (Math.random() < 0.5) {
                this.velocity += 0.05 * this._goodness;
            }
        }, 100);
    }

    render(selector) {
        return new Promise(resolve => {
            const element = document.createElement('div');
            element.id = this.id;
            element.innerHTML = '🐎';
            element.className = 'horse';
    
            this.element = element;
    
            if (selector) {
                document.getElementById(selector).appendChild(this.element);
            } else {
                document.body.appendChild(this.element);
            }

            resolve(this.element);
        });
    }

    run(finish) {
        if (!this.element) {
            return Promise.reject('The horse element is not in the DOM yet');
        }

        return new Promise((resolve, reject) => {
            // https://developer.mozilla.org/en-US/docs/Web/API/window/requestAnimationFrame
            let start;
            const failStep = this._goodness === 0
                ? parseInt(Math.random() * finish + 100)
                : finish + 100; // cannot happen

            const step = (timestamp) => {
                if (!start) {
                    start = timestamp;
                }

                let progress = this._calculateProgress(timestamp, start) ;
    
                this.element.style.left = Math.min(progress, finish) + 'px';

                if (window['canFall'] && progress >= failStep) {
                    this.element.classList.add('fallen');
                    reject(this);
                } else if (progress < finish) {
                    window.requestAnimationFrame(step);
                } else {
                    this.ts = timestamp;
                    window.clearInterval(this._interval);
                    resolve(this);
                }
            }
    
            window.requestAnimationFrame(step);
        });
    }

    _calculateProgress(timestamp, start) {
        return ((timestamp * this.velocity) - start) / 10;
    }
};
