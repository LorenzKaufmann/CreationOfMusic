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
    - spatial audio
    - radio like system
    - has visualization build in but rather weak
    - fast radio test demo is not working, request to radio stations are blocked
- audiojs
    - ultra simple and straight forward
    - uses only html5
    - available in all browsers therefor
    - pretty simple an available to view code online
    - used for audio tags and html players
- websockets
    - https://stackoverflow.com/questions/56293960/how-to-make-client-client-connection-in-js-without-node-js

-> client places block and needs to select from various audio files -> tells server to serve this audio to all users in the lobby