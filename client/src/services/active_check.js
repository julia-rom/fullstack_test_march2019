// Checks which buttons are active in the slider component
const activeCheck = () => {
    if (this.state.sharkButtonActive === true && this.state.catButtonActive === false) {
        return 'shark'
    } else if (this.state.sharkButtonActive === false && this.state.catButtonActive === true) {
        return 'cat'
    } else if (this.state.sharkButtonActive === true && this.state.catButtonActive === true) {
        return 'both'
    } else {
        return
    }
}

export default activeCheck