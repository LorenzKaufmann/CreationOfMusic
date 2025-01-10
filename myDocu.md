# Synchronized way of sending audio files to users

- not via HTMLMediaElements
    - https://stackoverflow.com/questions/54509959/how-do-i-play-audio-files-synchronously-in-javascript
    - here it says that this is just async therefor players wont hear the stuff at the same time
- do it via web audio api
    - not compatible with edge
- howler.js
    - uses Web Audio Api or HTML5 audio fallback to send audio
    - compatible with all browsers because of html5 audio fallback
    - lightweight
    - supports lots of audio files
    - auto caching of audio files
    - can easily be expanded
    - you have control
- audiojs
    - ultra simple and straight forward
    - uses only html5
    - available in all browsers therefor
    - pretty simple an available to view code online
    - 

# Maybe later add possibility to realtime audio