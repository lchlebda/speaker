input.onButtonPressed(Button.A, function () {
    music._playDefaultBackground(music.builtInPlayableMelody(Melodies.Entertainer), music.PlaybackMode.InBackground)
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    music.play(music.builtinPlayableSoundEffect(soundExpression.giggle), music.PlaybackMode.UntilDone)
})
input.onPinPressed(TouchPin.P2, function () {
    if (sound <= 65) {
        sound = 260
    }
    sound = sound - 35
    music.play(music.tonePlayable(sound, music.beat(BeatFraction.Eighth)), music.PlaybackMode.UntilDone)
})
input.onButtonPressed(Button.B, function () {
    music._playDefaultBackground(music.builtInPlayableMelody(Melodies.Ode), music.PlaybackMode.InBackground)
})
input.onPinPressed(TouchPin.P1, function () {
    if (sound >= 2093) {
        sound = 260
    }
    sound = sound + 110
    music.play(music.tonePlayable(sound, music.beat(BeatFraction.Eighth)), music.PlaybackMode.UntilDone)
})
let sound = 0
sound = 260
