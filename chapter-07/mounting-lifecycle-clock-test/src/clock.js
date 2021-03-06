import { Component } from 'react'
import { getClockTime } from './lib'

export default class Clock extends Component {

    constructor() {
        super()
        this.state = getClockTime()
    }

    componentDidMount() {
        console.log("시계 시작중")
        this.ticking = setInterval(() =>
                this.setState(getClockTime())
            , 1000)
    }

    componentWillUnmount() {
        clearInterval(this.ticking)
        console.log("시계 중단중")
    }

    componentWillUpdate() {
        console.log("componentWillUpdate...")
    }
    render() {
        const { hours, minutes, seconds, ampm } = this.state
        return (
            <div className="clock">
                <span>{hours}</span>
                <span>:</span>
                <span>{minutes}</span>
                <span>:</span>
                <span>{seconds}</span>
                <span>:</span>
                <span>{ampm}</span>
                <button onClick={this.props.onClose}>x</button>
            </div>
        )
    }

}