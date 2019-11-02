# Toast the Bread
By Céline SUNG  H2 P2023

## Concept
The user can toast a cute bread in a toaster

## Technologies used
* HTML
* CSS
* Javascript

----------
## Project flow
Started the project on 25/10 and finished it on 02/11
### Inspiration & help
* Codevember
* Codepen
* [Behance](https://www.behance.net/collection/172987693/Abstract-Pastel?tracking_source=search-all%7Cpastel)
* [Youtube](https://www.youtube.com/watch?v=QDhyQpEuCfg)
* Developper Mozilla

### Features
* When the user hovers the "click to toast" button, it changes color from black to a pink color

* When the user clicks on the button, it's going down a little bit with ```transform: translateY()```
```
.button:active{
  transform: translateY(4px);
}
```

* The button disappears when the user clicks on it (using JS ```addEventListener``` and changing to ```display: none```)

* The cute toast is blinking from time to time with a keyframe named eye-blink

* Keyframes are used for : the black button going down on the toaster, the bread going down, the bread changing color when it's being toasted, the eyes blink and the smoke

* The smoke has 3 different direction, that's why there's 3 keyframes: smokeLeft, smokeRight, smokeMiddle

* Using ```animationend``` to detect the end of the animation (when the bread is finally toasted). It permits to play a twinkle sound effect, display "Your toast is ready !" and make disappear the waiting text
```
bread.addEventListener('animationend', () =>
{
    toastReadyText.style.display = 'inline'
    toastWaitText.style.display = 'none'
    soundTwinkle.play()
}
)
```

### Problems
* Using the ```on-click``` on JS to run the bread-going-down animation with ```classList.add('animation_run')```. It didn't work for the toaster-button and toasted-bread so I had to put ```classList.remove('animation_paused')```

* I used an image for the pink glow on the toaster because I didn't know how to code it
