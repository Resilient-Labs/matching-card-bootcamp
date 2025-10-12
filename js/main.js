let currentFruit
let previousTarget
let justWon

document.querySelector('.cont').addEventListener('click', run)


function run(e) {

    const tar = e.originalTarget

    if (tar.id == 'card1') {
        if (document.querySelector(`#${tar.id}`).innerText) {

        } else {
            if (!currentFruit) {
                document.querySelector(`#${tar.id}`).innerHTML = `<section>🍎</section>`
                currentFruit = '🍎'
                previousTarget = e.originalTarget.id
            } else if (currentFruit) {
                if (currentFruit == '🍎') {
                    if (previousTarget == tar.id) {
                        console.log('ye')
                    } else {
                        document.querySelector(`#${tar.id}`).innerHTML = `<section>🍎</section>`
                        previousTarget = e.originalTarget.id
                        currentFruit = null
                    }


                } else {
                    document.querySelector(`#${previousTarget}`).innerHTML = ''
                    currentFruit = null
                }
            }
        }

    } else if (tar.id == 'card2') {
        if (document.querySelector(`#${tar.id}`).innerText) {

        } else {
            if (!currentFruit) {
                document.querySelector(`#${tar.id}`).innerHTML = `<section>🍌</section>`
                currentFruit = '🍌'
                previousTarget = e.originalTarget.id
            } else if (currentFruit) {
                if (currentFruit == '🍌') {
                    if (previousTarget == tar.id) {
                        console.log('ye')
                    } else {
                        document.querySelector(`#${tar.id}`).innerHTML = `<section>🍌</section>`
                        previousTarget = e.originalTarget.id
                        currentFruit = null
                    }



                } else {
                    document.querySelector(`#${previousTarget}`).innerHTML = ''
                    currentFruit = null
                }
            }
        }

    } else if (tar.id == 'card3') {
        if (document.querySelector(`#${tar.id}`).innerText) {

        } else {
            if (!currentFruit) {
                document.querySelector(`#${tar.id}`).innerHTML = `<section>🍇</section>`
                currentFruit = '🍇'
                previousTarget = e.originalTarget.id
            } else if (currentFruit) {
                if (currentFruit == '🍇') {
                    if (previousTarget == tar.id) {
                        console.log('ye')
                    } else {
                        document.querySelector(`#${tar.id}`).innerHTML = `<section>🍇</section>`
                        previousTarget = e.originalTarget.id
                        currentFruit = null
                    }


                } else {
                    document.querySelector(`#${previousTarget}`).innerHTML = ''
                    currentFruit = null
                }
            }
        }

    } else if (tar.id == 'card4') {
        if (document.querySelector(`#${tar.id}`).innerText) {

        } else {
            if (!currentFruit) {
                document.querySelector(`#${tar.id}`).innerHTML = `<section>🍓</section>`
                currentFruit = '🍓'
                previousTarget = e.originalTarget.id
            } else if (currentFruit) {
                if (currentFruit == '🍓') {
                    if (previousTarget == tar.id) {
                        console.log('ye')
                    } else {
                        document.querySelector(`#${tar.id}`).innerHTML = `<section>🍓</section>`
                        previousTarget = e.originalTarget.id
                        currentFruit = null
                    }


                } else {
                    document.querySelector(`#${previousTarget}`).innerHTML = ''
                    currentFruit = null
                }
            }
        }

    } else if (tar.id == 'card5') {
        if (document.querySelector(`#${tar.id}`).innerText) {

        } else {
            if (!currentFruit) {
                document.querySelector(`#${tar.id}`).innerHTML = `<section>🍊</section>`
                currentFruit = '🍊'
                previousTarget = e.originalTarget.id
            } else if (currentFruit) {
                if (currentFruit == '🍊') {
                    if (previousTarget == tar.id) {
                        console.log('ye')
                    } else {
                        document.querySelector(`#${tar.id}`).innerHTML = `<section>🍊</section>`
                        previousTarget = e.originalTarget.id
                        currentFruit = null
                    }


                } else {
                    document.querySelector(`#${previousTarget}`).innerHTML = ''
                    currentFruit = null
                }
            }
        }

    } else if (tar.id == 'card6') {
        if (document.querySelector(`#${tar.id}`).innerText) {
            console.log('hi')
        } else {
            if (!currentFruit) {
                document.querySelector(`#${tar.id}`).innerHTML = `<section>🍌</section>`
                currentFruit = '🍌'
                previousTarget = e.originalTarget.id
            } else if (currentFruit) {
                if (currentFruit == '🍌') {
                    if (previousTarget == tar.id) {
                        console.log('ye')
                    } else {
                        document.querySelector(`#${tar.id}`).innerHTML = `<section>🍌</section>`
                        previousTarget = e.originalTarget.id
                        currentFruit = null
                    }



                } else {
                    document.querySelector(`#${previousTarget}`).innerHTML = ''
                    currentFruit = null
                }
            }
        }

    } else if (tar.id == 'card7') {
        if (document.querySelector(`#${tar.id}`).innerText) {

        } else {
            if (!currentFruit) {
                document.querySelector(`#${tar.id}`).innerHTML = `<section>🍓</section>`
                currentFruit = '🍓'
                previousTarget = e.originalTarget.id
            } else if (currentFruit) {
                if (currentFruit == '🍓') {
                    if (previousTarget == tar.id) {
                        console.log('ye')
                    } else {
                        document.querySelector(`#${tar.id}`).innerHTML = `<section>🍓</section>`
                        previousTarget = e.originalTarget.id
                        currentFruit = null
                    }


                } else {
                    document.querySelector(`#${previousTarget}`).innerHTML = ''
                    currentFruit = null
                }
            }
        }

    } else if (tar.id == 'card8') {
        if (document.querySelector(`#${tar.id}`).innerText) {

        } else {
            if (!currentFruit) {
                document.querySelector(`#${tar.id}`).innerHTML = `<section>🍎</section>`
                currentFruit = '🍎'
                previousTarget = e.originalTarget.id
            } else if (currentFruit) {
                if (currentFruit == '🍎') {
                    if (previousTarget == tar.id) {
                        console.log('ye')
                    } else {
                        document.querySelector(`#${tar.id}`).innerHTML = `<section>🍎</section>`
                        previousTarget = e.originalTarget.id
                        currentFruit = null
                    }


                } else {
                    document.querySelector(`#${previousTarget}`).innerHTML = ''
                    currentFruit = null
                }
            }
        }

    } else if (tar.id == 'card9') {
        if (document.querySelector(`#${tar.id}`).innerText) {

        } else {
            if (!currentFruit) {
                document.querySelector(`#${tar.id}`).innerHTML = `<section>🍊</section>`
                currentFruit = '🍊'
                previousTarget = e.originalTarget.id
            } else if (currentFruit) {
                if (currentFruit == '🍊') {
                    if (previousTarget == tar.id) {
                        console.log('ye')
                    } else {
                        document.querySelector(`#${tar.id}`).innerHTML = `<section>🍊</section>`
                        previousTarget = e.originalTarget.id
                        currentFruit = null
                    }


                } else {
                    document.querySelector(`#${previousTarget}`).innerHTML = ''
                    currentFruit = null
                }
            }
        }

    } else if (tar.id == 'card10') {
        if (document.querySelector(`#${tar.id}`).innerText) {

        } else {
            if (!currentFruit) {
                document.querySelector(`#${tar.id}`).innerHTML = `<section>🍇</section>`
                currentFruit = '🍇'
                previousTarget = e.originalTarget.id
            } else if (currentFruit) {
                if (currentFruit == '🍇') {
                    if (previousTarget == tar.id) {
                        console.log('ye')
                    } else {
                        document.querySelector(`#${tar.id}`).innerHTML = `<section>🍇</section>`
                        previousTarget = e.originalTarget.id
                        currentFruit = null
                    }
                } else {
                    document.querySelector(`#${previousTarget}`).innerHTML = ''
                    currentFruit = null
                }
            }
        }

    }

}

// 🍎🍌🍇🍓🍊🍉🍍🍑🥭🥝🍒🍈🍐🍏 What's your favorite fruit?